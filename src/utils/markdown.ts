function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatInline(input: string) {
  let output = escapeHtml(input);
  output = output.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  output = output.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noreferrer">$1</a>',
  );
  return output;
}

export function renderProfileMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let nextOrderedIndex = 1;

  const closeList = () => {
    if (!listType) {
      return;
    }
    html.push(`</${listType}>`);
    listType = null;
    nextOrderedIndex = 1;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || /^---+$/.test(trimmed)) {
      closeList();
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeList();
      const marks = heading[1] ?? '#';
      const title = heading[2] ?? '';
      const level = Math.min(marks.length + 1, 6);
      html.push(`<h${level}>${formatInline(title)}</h${level}>`);
      continue;
    }

    const unordered = trimmed.match(/^-\s+(.+)$/);
    if (unordered) {
      if (listType !== 'ul') {
        closeList();
        html.push('<ul>');
        listType = 'ul';
      }
      html.push(`<li>${formatInline(unordered[1] ?? '')}</li>`);
      continue;
    }

    const ordered = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (ordered) {
      const index = Number(ordered[1] ?? '1');
      const content = ordered[2] ?? '';
      if (listType !== 'ol' || index !== nextOrderedIndex) {
        closeList();
        html.push(index > 1 ? `<ol start="${index}">` : '<ol>');
        listType = 'ol';
      }
      html.push(`<li>${formatInline(content)}</li>`);
      nextOrderedIndex = index + 1;
      continue;
    }

    closeList();
    html.push(`<p>${formatInline(trimmed)}</p>`);
  }

  closeList();
  return html.join('\n');
}
