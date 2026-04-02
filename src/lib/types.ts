export type Language = 'en' | 'ar' | 'zh';

export type TextField = {
  text: string;
};

export type LinkField = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type PainPointItem = {
  title: string;
  problem: string;
  solution: string;
};

export type ProductItem = {
  name: string;
  summary: string;
  specs: string[];
};

export type ApplicationItem = {
  name: string;
  description: string;
};

export type ProofItem = {
  title: string;
  detail: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    challengeLabel: string;
    responseLabel: string;
    graphiteGradeLabel: string;
    dubaiMarker: string;
    chinaMarker: string;
  };
  header: {
    brand: string;
    nav: NavItem[];
    languages: Record<Language, string>;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: LinkField;
    secondaryCta: LinkField;
    locationNote: string;
  };
  statsIntro: SectionIntro;
  stats: StatItem[];
  painPointsIntro: SectionIntro;
  painPoints: PainPointItem[];
  productsIntro: SectionIntro;
  products: ProductItem[];
  applicationsIntro: SectionIntro;
  applications: ApplicationItem[];
  technologyIntro: SectionIntro;
  technologyPoints: string[];
  globalServiceIntro: SectionIntro;
  globalServicePoints: string[];
  proofIntro: SectionIntro;
  proofPoints: ProofItem[];
  contactIntro: SectionIntro;
  contacts: ContactItem[];
  footer: {
    dubaiLabel: string;
    dubaiValue: string;
    chinaLabel: string;
    chinaValue: string;
    supportLabel: string;
    supportValue: string;
    socialLabel: string;
    socialValue: string;
    copyright: string;
  };
};
