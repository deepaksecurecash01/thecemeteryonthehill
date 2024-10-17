export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin","privacy"]
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
