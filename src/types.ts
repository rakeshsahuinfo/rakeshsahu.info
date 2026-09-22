export type ScreenType = 
  | 'home'
  | 'about'
  | 'journey'
  | 'leadership'
  | 'technology-ai'
  | 'insights'
  | 'services';

export interface Competency {
  id: string;
  title: string;
  icon: string;
  description: string;
  accentColor: string;
  highlights: string[];
  caseStudy: {
    title: string;
    impact: string;
    description: string;
  };
}

export interface JourneyMilestone {
  id: string;
  order: number;
  stage: string;
  title: string;
  period: string;
  summary: string;
  lesson: string;
  details: string[];
  skillsGained: string[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface BeyondTechItem {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  description: string;
  fullStory: string;
}
