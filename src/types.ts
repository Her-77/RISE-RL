export type Locale = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface LinkItem {
  label: LocalizedText;
  url: string;
}

export interface PersonProfile {
  id: string;
  nameZh: string;
  nameEn: string;
  role: LocalizedText;
  cohortYear?: number;
  affiliation: LocalizedText;
  avatar: string;
  email?: string;
  homepage?: string;
  participation?: LocalizedText;
  keywords?: LocalizedText[];
  bio: LocalizedText;
  education?: LocalizedText[];
  experience?: LocalizedText[];
  research?: LocalizedText[];
  highlights?: LocalizedText[];
  links?: LinkItem[];
}

export interface MemberGroup {
  id: string;
  title: LocalizedText;
  members: PersonProfile[];
}

export type AchievementCategory = 'published' | 'submitted' | 'system' | 'competition';

export type AchievementStatus =
  | 'published'
  | 'accepted'
  | 'submitted'
  | 'released'
  | 'awarded'
  | 'ongoing';

export interface AchievementItem {
  id: string;
  category: AchievementCategory;
  status: AchievementStatus;
  date: string;
  title: LocalizedText;
  authors?: LocalizedText;
  venue?: LocalizedText;
  description?: LocalizedText;
  tags?: LocalizedText[];
  links?: LinkItem[];
}

export interface InstitutionItem {
  id: string;
  name: LocalizedText;
  website: string;
  logo?: string;
  logoDark?: boolean;
  priority: number;
}

export interface ProjectDirection {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface RecruitmentDirection {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  requirements: LocalizedText[];
}
