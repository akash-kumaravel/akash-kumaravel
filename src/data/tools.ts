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
  },
  "site-wrap": {
    slug: "site-wrap",
    title: "SiteWrap · Website to Design",
    kind: "Figma plugin",
    tagline: "Turn any live website or HTML into editable Figma layers.",
    image: assetPath("t-sitewrap-plugin.webp"),
    features: [
      "Import any public URL, with a built-in proxy fallback for sites that block downloads",
      "Paste raw HTML to import private or logged-in pages, with an optional base URL for images and CSS",
      "Smart Auto Layout conversion: CSS Flexbox, rows and stacks become native Auto Layout frames with padding, spacing and Fill/Hug sizing",
      "Responsive viewport presets: Desktop 1920, Laptop 1440, Small laptop 1280, Tablet 768, Mobile 390, or a custom width from 200 to 4000px",
      "High-fidelity CSS styling: colors, gradients, borders, corner radii, shadows, opacity, z-index layering and form elements",
    ],
    tags: ["Figma plugin", "HTML to design", "Auto Layout"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694427817784494060",
    },
  },
  "motion-box": {
    slug: "motion-box",
    title: "Motion Box · Figma Motion & Animation",
    kind: "Figma plugin",
    tagline: "Animate any layer or frame with 95+ presets. Preview and apply.",
    image: assetPath("t-motionbox-plugin.webp"),
    features: [
      "Select a layer or frame, pick an animation, preview it live and click Apply, with no manual keyframes",
      "Scenes: 40+ presets that animate every layer inside a frame in sequence, in 8 layer-order directions",
      "Single-layer motion: 55+ entrance, exit, emphasis, micro-interaction and shape morph presets",
      "Motion poster and kinetic typography presets for posters, social graphics and hero banners",
      "Outline and stroke draw animations that are non-destructive, with original strokes restorable in one click",
    ],
    tags: ["Figma plugin", "Animation", "Motion"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694438723878055938",
    },
  },
  "icon-wrap": {
    slug: "icon-wrap",
    title: "Icon Wrap · SVG Icons",
    kind: "Figma plugin",
    tagline: "Search, customize and batch-insert icons straight onto your canvas.",
    image: assetPath("t-iconwrap-plugin.webp"),
    features: [
      "Instant search across thousands of keywords and tags, plus 30+ category filters",
      "Live color and size customization (16px to 128px) with a real-time preview in the plugin grid",
      "Batch select and auto-grid insert: icons land in an evenly spaced grid at the center of your viewport",
      "Three ways to insert: drag and drop, double-click, or multi-select batch",
    ],
    tags: ["Figma plugin", "Icons", "SVG"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694300270859778639",
    },
  },
  "print-wrap": {
    slug: "print-wrap",
    title: "Print Wrap · CMYK Converter & Print PDF Export",
    kind: "Figma plugin",
    tagline: "Export Figma frames as press-ready CMYK PDFs with ink plate preview.",
    image: assetPath("t-printwrap-plugin.webp"),
    features: [
      "Convert Figma frames into true Device CMYK PDFs for flyers, brochures, posters, packaging and zines",
      "Keep vectors, text and gradients editable, or export as a flat image",
      "Preview Cyan, Magenta, Yellow and Black ink plates and tweak the ink sliders",
      "Generate standard print frames such as A4 or Letter and verify the physical size in inches",
    ],
    tags: ["Figma plugin", "Print", "CMYK"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694268497609606620",
    },
  },
  "perspective-wrap": {
    slug: "perspective-wrap",
    title: "Perspective Wrap · 3D, Skew & Corner Pin",
    kind: "Figma plugin",
    tagline: "Add 3D tilt, skew and corner pin while keeping layers editable.",
    image: assetPath("t-perspectivewrap-plugin.webp"),
    features: [
      "True perspective, 3D tilt, isometric skew and free-form corner pinning in Figma",
      "A smart rendering engine picks the most editable result for every layer you transform",
      "100% live layers: skews, rotations, flips and orthographic or isometric 3D use Figma's native transform matrix, so text, Auto Layout frames and components stay live",
      "True vector paths: real vanishing-point perspective on vectors, rectangles, stars, polygons and boolean groups, by warping the actual Bézier curves",
    ],
    tags: ["Figma plugin", "3D", "Perspective"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694657963079116215",
    },
  },
  "vector-wrap": {
    slug: "vector-wrap",
    title: "Vector Wrap · Image to SVG",
    kind: "Figma plugin",
    tagline: "Convert raster images into clean, editable SVG vector shapes.",
    image: assetPath("t-vectorwrap-plugin.webp"),
    features: [
      "Convert raster images into scalable vector shapes, ideal for logos, icons, illustrations and mockups",
      "Adjust the Colors (1–8) and Smoothness (1–10) sliders to match your graphic",
      "Toggle Straighten edges or Remove background, and inspect anchor points in Outline view",
      "Add the editable vector group to the canvas right next to your original layer",
    ],
    tags: ["Figma plugin", "Vector", "SVG"],
    cta: {
      label: "Open in Figma Community",
      href: "https://www.figma.com/community/plugin/1694245404694186368",
    },
  },
};

export const TOOL_LIST = Object.values(TOOLS);
