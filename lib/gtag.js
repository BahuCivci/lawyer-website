export const GA_TRACKING_ID = 'G-YH6KMP5JSG';

// Sayfa görüntülenmesini takip et
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Özel etkinlikleri takip et
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
