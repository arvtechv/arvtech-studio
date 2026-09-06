export default function sitemap() {
  const base = "https://arvtech.studio";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/care`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}