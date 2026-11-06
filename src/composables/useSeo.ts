function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

const siteUrl = 'https://www.codewil.site';
const socialImage = `${siteUrl}/og-image.png`;

export default function useSeo(
  title: string,
  description: string,
  path: string,
  type: 'website' | 'article' = 'website',
) {
  const canonicalUrl = new URL(path, siteUrl).toString();
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:type', type);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:image', socialImage);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', socialImage);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = canonicalUrl;
}
