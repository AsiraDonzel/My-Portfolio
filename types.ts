export enum Language {
  EN = 'EN',
  DE = 'DE'
}

export enum Mode {
  PROFESSIONAL = 'PROFESSIONAL',
  PERSONAL = 'PERSONAL'
}

export enum Persona {
  RECRUITER = 'RECRUITER',
  DEVELOPER = 'DEVELOPER',
  ADVENTURER = 'ADVENTURER'
}

export enum ProjectType {
  LIVE = 'LIVE',
  DEMO = 'DEMO',
  VIBE = 'VIBE'
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'WORK' | 'EDUCATION';
}

export interface Translation {
  nav: {
    pro: string;
    personal: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    location: string;
    cta: string;
  };
  professional: {
    journeyTitle: string;
    selectedWorksTitle: string;
    viewCaseStudy: string;
  };
  contact: {
    title: string;
    personas: {
      [key in Persona]: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
      extra?: string;
    };
    submit: string;
  };
  personal: {
    aboutValues: string[];
    hobbiesTitle: string;
    codingTitle: string;
    tabs: {
      live: string;
      demo: string;
      vibe: string;
    };
    bento: {
      fitness: { title: string; statLabel: string; statValue: string };
      reading: { title: string; currentBook: string; author: string; quote: string };
      soccer: { title: string; club: string; position: string };
    };
    footer: {
      thanks: string;
      connect: string;
    }
  }
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  type: ProjectType;
}
