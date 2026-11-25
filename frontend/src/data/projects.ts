
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
    title: 'Labyrinthe dynamique',

    description:
      'Un jeu de labyrinthe évolutif développé en Python, associant théorie des graphes, algorithmique et design graphique.',

    category: 'informatique',

    year: '2024 – 2025',

    technologies: [
      'Python',
      'Pygame',
      'NumPy',
      'Théorie des graphes',
      'POO',
      'Adobe Illustrator',
    ],
    image: '/images/labyrinthe/labyrinthe_1.webp',

    gallery: [
      '/images/labyrinthe/labyrinthe_ accueil.webp',
      '/images/labyrinthe/labyrinthe_2.webp',
      '/images/labyrinthe/labyrinthe_3.webp',
      '/images/labyrinthe/labyrinthe_gagne.webp',
    ],

    context:
      'Réalisé en équipe de quatre dans le cadre d’un cours de théorie des graphes, ce projet consistait à développer un éditeur de graphes en Python, puis à exploiter ses fonctionnalités dans un jeu de labyrinthe dynamique.',

    objectives: [
      'Mettre en pratique les algorithmes de théorie des graphes.',
      'Concevoir une architecture orientée objet et réutilisable.',
      'Développer un labyrinthe évoluant à chaque déplacement.',
      'Créer une interface graphique interactive et cohérente.',
    ],

    process:
      'Nous avons commencé par développer une classe Graph permettant de créer, modifier, sauvegarder et analyser des graphes. Plusieurs algorithmes ont été implémentés, notamment Dijkstra, BFS, DFS, Welsh-Powell et Tarjan. Cette structure a ensuite été réutilisée pour modéliser le labyrinthe : les nœuds représentent les salles et les arêtes les couloirs. La logique du jeu et son interface graphique ont été développées avec Python et Pygame, tandis que les éléments visuels ont été réalisés sur Adobe Illustrator.',

    results:
      'Le projet a abouti à un jeu interactif dans lequel le joueur doit atteindre la sortie d’un labyrinthe dont les connexions évoluent au fil des déplacements. Trois pouvoirs enrichissent l’expérience : visualiser les connexions pendant trois tours, bloquer une modification du graphe et se téléporter. Le jeu dispose également d’un écran d’accueil et d’un écran de victoire.',
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
