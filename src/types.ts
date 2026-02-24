export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  author: string;
  date: string;
  featured: boolean;
  coverImage: string;
}

export interface Seminar {
  id: string;
  title: string;
  slug: string;
  description: string;
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'ended';
  platform: 'YouTube' | 'Google Meet' | 'Zoom';
  videoUrl?: string;
  meetingUrl: string;
  coverImage: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
