import { assetPath } from "./portfolioData";

export interface Tool {
  slug: string;
  title: string;
  kind: string;
  tagline: string;
  /** Square-ish cover used on cards and the tool page */
  image?: string;
  stat?: { value: string; label: string };
  features: string[];
  /** Optional "why I built it" paragraph. Leave out if you don't have a real story. */
  why?: string;
  tags: string[];
  cta: { label: string; href: string };
  secondary?: { label: string; href: string; internal?: boolean };
}

export const TOOLS: Record<string, Tool> = {
  sequelbox: {
    slug: "sequelbox",
    title: "Sequelbox",
    kind: "Product · Video editor",
    tagline: "A custom video editor for web, Windows and Android.",
    features: [
      "Multi-layer timeline",
      "Keyframe animation",
      "Chroma key",
      "MP4 export",
      "One editor across web, Windows and Android",
    ],
    tags: ["Product design", "Video", "Web · Windows · Android"],
    cta: { label: "Open sequelbox.com", href: "https://sequelbox.com" },
  },
  "bgwrap-plugin": {
    slug: "bgwrap-plugin",
    title: "BGWRAP for Figma",
    kind: "Figma plugin",
    tagline: "Single and bulk background removal, right on the Figma canvas.",
    image: assetPath("t-bgwrap-plugin.webp"),
    stat: { value: "25K+", label: "users" },
    features: [
      "Remove the background from a single image",
      "Bulk mode: clean up many images at once",
      "Works inside Figma, no round trip to another app",
    ],
    why: "I kept having to remove backgrounds from batches of images by hand, which was slow and frustrating. So I built a plugin that does it inside Figma, one image or many at a time.",
    tags: ["Figma plugin", "Automation", "Workflow"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1500147712889678037",
    },
    secondary: { label: "Try the web app", href: "/tool/bg-wrap", internal: true },
  },
  "grayscale-converter": {
    slug: "grayscale-converter",
    title: "Grayscale Wireframe Converter",
    kind: "Figma plugin",
    tagline: "Turns finished designs into clean grayscale wireframes.",
    image: assetPath("t-grayscale-plugin.webp"),
    features: [
      "Convert a finished design into a grayscale wireframe",
      "Check hierarchy and contrast without color getting in the way",
      "Runs inside Figma",
    ],
    why: "I often needed a quick way to test visual hierarchy and contrast without color biasing the result. This plugin does it in a click.",
    tags: ["Figma plugin", "Hierarchy", "Contrast"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1498582630091227441",
    },
    secondary: {
      label: "Read the write-up",
      href: "https://akash-kumaravel.medium.com/as-a-designer-i-often-needed-a-quick-way-to-test-visual-hierarchy-and-contrast-without-color-369f9c3d2786?sharedUserId=akash-kumaravel",
    },
  },
  "dpicon-svg": {
    slug: "dpicon-svg",
    title: "Dpicon · SVG Icons",
    kind: "Figma plugin",
    tagline: "SVG icons for Figma, from the Dpicon library.",
    image: assetPath("t-dpicon-plugin.webp"),
    features: ["Works inside Figma", "Clean, scalable SVG output"],
    tags: ["Figma plugin", "Icons", "SVG"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1488603996276952817",
    },
    secondary: { label: "Dpicon AI", href: "/tool/dpicon", internal: true },
  },
  "bg-wrap": {
    slug: "bg-wrap",
    title: "BGWrap · Web app",
    kind: "Web app",
    tagline: "Remove image backgrounds in the browser. No design tool needed.",
    image: assetPath("t-bgwrap-web.webp"),
    features: ["Background removal in the browser", "No install, no sign-up wall to get started"],
    tags: ["Web app", "Image tools"],
    cta: { label: "Try BGWrap", href: "https://bgwrap.vercel.app/" },
    secondary: { label: "Get the Figma plugin", href: "/tool/bgwrap-plugin", internal: true },
  },
  dpicon: {
    slug: "dpicon",
    title: "Dpicon · AI image generation",
    kind: "Website",
    tagline: "AI image generation, designed and published with Framer.",
    image: assetPath("t-dpicon-ai.webp"),
    features: ["AI image generation", "Landing site built in Framer"],
    tags: ["AI", "Framer", "Website"],
    cta: { label: "Visit Dpicon", href: "https://dpicon.framer.website/" },
    secondary: { label: "Dpicon for Figma", href: "/tool/dpicon-svg", internal: true },
  },
};

export const TOOL_LIST = Object.values(TOOLS);
