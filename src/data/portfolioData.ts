export const assetPath = (fileName: string) => `/assets/${encodeURIComponent(fileName)}`;

export const RESUME_PDF_URL = assetPath("Akash Resume.pdf");

export const FOOTER_DATA = {
  name: "Akash Kumaravel",
  role: "Graphic & UI/UX Designer",
  bio: "Crafting digital experiences, apps, design systems, and creative tools.",
  linkedin: "https://www.linkedin.com/in/akash-kumaravel/",
  twitter: "https://x.com/akashkumaravel",
  github: "https://github.com/akashkumaravel",
  behance: "https://www.behance.net/akashkumaravel",
  email: "akashuxui@gmail.com",
  resume: RESUME_PDF_URL,
};
