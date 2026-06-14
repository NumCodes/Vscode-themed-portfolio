export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'An!on Editor',
    description:
      'Your all-in-one web development playground right in the browser. Its designed for developers who want a seamless environment to craft, preview, and manage their web projects without the hassle of context switching.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/NumCodes/Anion-editor',
    slug: 'An!on',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/numcodes/vscode-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Accessilearn',
    description:
      'An education platform designed for everyone, with built-in accessibility features for users with visual, auditory, and motor disabilities.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/numcodes/accessilearn',
    slug: 'accessilearn',
  },
];
