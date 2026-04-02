import { directionByLanguage, defaultLanguage } from '../data/siteContent';
import type { Language, SiteContent } from '../lib/types';

type ContentMap = Record<Language, SiteContent>;

const isBrowser = typeof window !== 'undefined';

function setHeaderState(header: HTMLElement | null) {
  if (!header) {
    return;
  }

  header.classList.toggle('is-scrolled', window.scrollY > 16);
}

function animateCount(node: HTMLElement) {
  if (node.dataset.counted === 'true') {
    return;
  }

  const raw = node.dataset.countupValue;
  const target = Number(raw);

  if (!Number.isFinite(target)) {
    node.dataset.counted = 'true';
    return;
  }

  const suffix = node.textContent?.replace(/[\d,.]/g, '') ?? '';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    node.textContent = `${target.toLocaleString()}${suffix}`;
    node.dataset.counted = 'true';
    return;
  }

  const duration = 900;
  const start = performance.now();

  const step = (time: number) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = Math.round(target * progress);
    node.textContent = `${value.toLocaleString()}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }

    node.dataset.counted = 'true';
  };

  requestAnimationFrame(step);
}

function setupCountup() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-countup]'));

  if (!nodes.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      animateCount(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.4 });

  nodes.forEach((node) => observer.observe(node));
}

function getValueByPath(content: ContentMap, language: Language, path: string): string | null {
  const result = path.split('.').reduce<unknown>((current, segment) => {
    if (current == null) {
      return null;
    }

    if (Array.isArray(current)) {
      return current[Number(segment)];
    }

    if (typeof current === 'object') {
      return (current as Record<string, unknown>)[segment];
    }

    return null;
  }, content[language]);

  return typeof result === 'string' ? result : null;
}

function applyLanguage(language: Language, content: ContentMap, root: HTMLElement, triggers: HTMLElement[]) {
  const nextContent = content[language];

  document.documentElement.lang = language;
  document.documentElement.dir = directionByLanguage[language];
  root.dataset.language = language;
  document.title = nextContent.meta.title;

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');

  if (description) {
    description.content = nextContent.meta.description;
  }

  const i18nNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-i18n]'));

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (!key) {
      return;
    }

    const value = getValueByPath(content, language, key);

    if (value != null) {
      node.textContent = value;
    }
  });

  triggers.forEach((trigger) => {
    const isActive = trigger.dataset.languageTrigger === language;
    trigger.classList.toggle('is-active', isActive);
    trigger.setAttribute('aria-pressed', String(isActive));
  });
}

export function setupSiteInteractions() {
  const root = document.querySelector<HTMLElement>('[data-language-root]');
  const header = document.querySelector<HTMLElement>('[data-site-header]');

  if (!root) {
    return;
  }

  const rawContent = root.dataset.siteContent;

  if (!rawContent) {
    return;
  }

  const content = JSON.parse(rawContent) as ContentMap;
  const triggers = Array.from(document.querySelectorAll<HTMLElement>('[data-language-trigger]'));

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const nextLanguage = trigger.dataset.languageTrigger as Language | undefined;

      if (!nextLanguage) {
        return;
      }

      applyLanguage(nextLanguage, content, root, triggers);
    });
  });

  window.addEventListener('scroll', () => setHeaderState(header), { passive: true });

  setHeaderState(header);
  applyLanguage(defaultLanguage, content, root, triggers);
  setupCountup();
}

if (isBrowser) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSiteInteractions, { once: true });
  } else {
    setupSiteInteractions();
  }
}
