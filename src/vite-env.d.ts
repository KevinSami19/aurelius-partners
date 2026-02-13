/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_SCHEDULER_URL: string;
  readonly VITE_FORMSPREE_URL: string;
  readonly VITE_ANALYTICS_ID: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
    author?: string;
    readTime?: string;
    slug?: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
