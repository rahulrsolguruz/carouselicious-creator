
export interface CarouselSlide {
  id: string;
  type: 'title' | 'content' | 'bullets' | 'cta';
  title?: string;
  content?: string;
  bullets?: string[];
  cta?: string;
  backgroundColor?: string;
  imageUrl?: string;
}

export interface CarouselProject {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  slides: CarouselSlide[];
  template: CarouselTemplate;
}

export interface CarouselTemplate {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontPrimary: string;
  fontSecondary: string;
  borderWidth: number;
  shadowSize: 'sm' | 'md' | 'lg';
}

export const defaultTemplate: CarouselTemplate = {
  id: 'default-neo-brutalism',
  name: 'Neo Brutalism',
  primaryColor: '#FF5A5F',
  secondaryColor: '#FFD166',
  accentColor: '#06D6A0',
  fontPrimary: 'Poppins',
  fontSecondary: 'Inter',
  borderWidth: 2,
  shadowSize: 'md'
};

export const defaultProject: CarouselProject = {
  id: 'new-project',
  name: 'Untitled Project',
  createdAt: new Date(),
  updatedAt: new Date(),
  slides: [
    {
      id: 'slide-1',
      type: 'title',
      title: 'Your Amazing Title',
      content: 'Created by LinkedIn Carousel Generator',
      backgroundColor: '#FFFFFF'
    },
    {
      id: 'slide-2',
      type: 'content',
      title: 'Main Point',
      content: 'Your key message or insight here.',
      backgroundColor: '#FFFFFF'
    },
    {
      id: 'slide-3',
      type: 'bullets',
      title: 'Key Takeaways',
      bullets: ['First important point', 'Second important point', 'Third important point'],
      backgroundColor: '#FFFFFF'
    },
    {
      id: 'slide-4',
      type: 'cta',
      title: 'Get in Touch',
      content: 'Learn more about our services',
      cta: 'www.yourwebsite.com',
      backgroundColor: '#FFFFFF'
    }
  ],
  template: defaultTemplate
};
