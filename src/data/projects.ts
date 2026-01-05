export type Project = {
  slug: string;
  title: string;
  summary: string;
  liveUrl?: string;
  githubUrl: string;
  stack: string[];
  highlights: string[];
  impact: string;
  timeline: string;
  role: string;
};

export const projects: Project[] = [
  {
    slug: 'car-rental',
    title: 'Car Rental Platform',
    summary:
      'Full-stack car rental experience with dynamic fleet browsing, booking flows, and admin-friendly data views.',
    liveUrl: 'https://carrental-pr.vercel.app/',
    githubUrl: 'https://github.com/harshdubey6/car-rental',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Built searchable listings with availability filters and responsive cards tuned for mobile-first browsing.',
      'Implemented booking pipeline with authentication, saved trips, and pricing breakdowns that mirror real rental flows.',
      'Added admin-friendly data views for fleet oversight and faster updates without touching code.',
    ],
    impact: 'Shipped a production-ready rental experience with clearer pricing UX and faster inventory edits.',
    timeline: '2025 · 6-week build',
    role: 'Product engineering · full-stack',
  },
  {
    slug: 'blogging-web',
    title: 'Blogging Platform',
    summary:
      'Medium-inspired publishing stack with editor, authentication, and reader-friendly layout.',
    liveUrl: 'https://harshdubey6-blogging-medium.vercel.app/signin',
    githubUrl: 'https://github.com/harshdubey6/medium-blogging-website',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    highlights: [
      'Crafted a clean, distraction-free editor with autosave and preview for consistent authoring.',
      'Delivered reader pages with performant pagination, image handling, and share-ready meta tags.',
      'Role-based access, secure sessions, and guarded routes keep drafts safe while staying ergonomic.',
    ],
    impact: 'Reliable publishing workflow that shortens draft-to-publish time while preserving quality.',
    timeline: '2025 · 4-week build',
    role: 'Product engineering · full-stack',
  },
  {
    slug: 'chatty-chat',
    title: 'Chatty Chat',
    summary:
      'Real-time messaging with presence, uploads, and a UI tuned for long sessions.',
    liveUrl: 'https://chatty-chat-app-2usa.onrender.com/',
    githubUrl: 'https://github.com/harshdubey6/chatty-chat-app-',
    stack: ['React', 'Node.js', 'Socket.io', 'Cloudinary', 'DaisyUI'],
    highlights: [
      'Socket.io channels with typing indicators, delivery states, and reconnection resilience.',
      'Image/file uploads with size guarding and CDN delivery keep conversations lightweight.',
      'Compact, keyboard-friendly UI that balances density with readability for extended use.',
    ],
    impact: 'Durable chat experience with reduced drop-offs during network hiccups and media-heavy threads.',
    timeline: '2024 · 5-week build',
    role: 'Full-stack & UX',
  },
];
