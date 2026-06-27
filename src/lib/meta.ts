export const updateMetaTags = (
  title: string,
  description: string,
  image: string,
  url: string
) => {
  document.title = title;

  const updateMetaTag = (selector: string, content: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", content);
    }
  };

  updateMetaTag('meta[name="description"]', description);
  updateMetaTag('meta[property="og:title"]', title);
  updateMetaTag('meta[property="og:description"]', description);
  updateMetaTag('meta[property="og:image"]', image);
  updateMetaTag('meta[property="og:url"]', url);
  updateMetaTag('meta[name="twitter:title"]', title);
  updateMetaTag('meta[name="twitter:description"]', description);
  updateMetaTag('meta[name="twitter:image"]', image);
  updateMetaTag('meta[name="twitter:url"]', url);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", url);
  }
};
