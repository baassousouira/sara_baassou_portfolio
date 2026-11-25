
export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'informatique' | 'design' | 'personnels';
  technologies: string[];
  image?: string;
  link?: string;

  // Info détaillées
  context?: string;
  objectives?: string[];
  process?: string;
  results?: string;
  gallery?: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    id: 'labyrinthe',
    title: 'Jeu du labyrinthe',
    description:
      'Un jeu développé en Python dans le cadre d’un projet de théorie des graphes.',
    category: 'informatique',
    technologies: ['Python', 'Graphes'],
  },
  {
    id: '2048',
    title: 'Jeu 2048',
    description:
      'Une adaptation du jeu 2048 réalisée en équipe, avec un mode multijoueur et une personnalisation des couleurs.',
    category: 'informatique',
    technologies: ['Python', 'Algorithmique'],
  },
  {
    id: 'healthy-pet',
    title: 'Healthy Pet',
    description:
      'Une application Android imaginée pour aider à organiser son temps avec son animal domestique.',
    category: 'informatique',
    technologies: ['Java', 'Android Studio'],
  },
  {
    id: 'viqthor',
    title: 'Viqthor',
    description: 'Un projet de design à découvrir.',
    category: 'design',
    technologies: [],
  },
  {
    id: 'paix-sport',
    title: 'La paix au sport à Colombes',
    description: 'Un projet de design à découvrir.',
    category: 'design',
    technologies: [],
  },
  {
    id: 'mobotix',
    title: 'Mobotix',
    description:
      'Une réflexion autour de l’utilisation des technologies dans les EHPAD.',
    category: 'design',
    technologies: [],
  },
  {
    id: 'dessins',
    title: 'Dessins',
    description: 'Une sélection de mes créations personnelles.',
    category: 'personnels',
    technologies: [],
  },
  {
    id: 'photos-nature',
    title: 'Série photos Nature',
    description: 'Une série de photographies consacrées à la nature.',
    category: 'personnels',
    technologies: [],
  },
];
