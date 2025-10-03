export interface SEOData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

// Default OG image for social sharing (square KPI Digital logo)
const DEFAULT_OG_IMAGE = `${window.location.origin}/og-image.png`;
const OG_IMAGE_WIDTH = "512";
const OG_IMAGE_HEIGHT = "512";

export const updateSEO = (data: SEOData) => {
  // Update document title
  document.title = data.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', data.description);

  // Update or create Open Graph meta tags
  const ogTags = [
    { property: 'og:title', content: data.ogTitle || data.title },
    { property: 'og:description', content: data.ogDescription || data.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'KPI Digital' },
  ];

  // Always include og:url (use provided or current page URL)
  const ogUrl = data.ogUrl || window.location.href;
  ogTags.push({ property: 'og:url', content: ogUrl });

  // Always include OG image (use provided or default)
  const ogImage = data.ogImage || DEFAULT_OG_IMAGE;
  ogTags.push({ property: 'og:image', content: ogImage });
  ogTags.push({ property: 'og:image:width', content: OG_IMAGE_WIDTH });
  ogTags.push({ property: 'og:image:height', content: OG_IMAGE_HEIGHT });

  ogTags.forEach(({ property, content }) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });

  // Add Twitter Card meta tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.ogTitle || data.title },
    { name: 'twitter:description', content: data.ogDescription || data.description },
  ];

  // Always include Twitter image (use provided or default)
  const twitterImage = data.ogImage || DEFAULT_OG_IMAGE;
  twitterTags.push({ name: 'twitter:image', content: twitterImage });

  twitterTags.forEach(({ name, content }) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
};

export const resetSEO = () => {
  document.title = 'KPI Digital - Clarity. Systems. Growth.';
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Helping trades businesses move from reactive chaos to predictable, profitable growth. Get the clarity, systems, and growth you need.');
  }

  // Reset Open Graph tags to default
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'KPI Digital - Clarity. Systems. Growth.');
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'Helping trades businesses move from reactive chaos to predictable, profitable growth.');
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', window.location.origin);
  }

  // Reset Twitter Card tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', 'KPI Digital - Clarity. Systems. Growth.');
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', 'Helping trades businesses move from reactive chaos to predictable, profitable growth.');
  }
};