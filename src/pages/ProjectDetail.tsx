import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { TOOLS } from "../data/tools";
import { 
  ArrowLeft, 
  Layout,
  ExternalLink
} from "lucide-react";

// ─── Custom Icons ────────────────────────────────────────────────────────────

function NavLogo() {
  return (
    <svg width="37" height="36" viewBox="0 0 37 36" fill="none">
      <g clipPath="url(#nav-logo)">
        <path d="M3.15479 29.6411L7.81479 19.7471L15.6538 23.5001L3.15479 29.6411Z" fill="#333" />
        <path
          d="M8.1792 18.859L14.9222 4.183L16.6772 0L19.7462 6.946L15.9462 15.519L27.3462 21.726L30.1252 29.264L8.1792 18.859Z"
          fill="#31EE33"
        />
      </g>
      <defs>
        <clipPath id="nav-logo">
          <rect width="37" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── Mock Data ──────────────────────────────────────────────────────────────

const projectsData: Record<string, any> = {
  "cloud-bestie": {
    title: "CloudBestie - Cloud Locker",
    category: "CloudBestie",
    mainImage: "/assets/cloud%20bestie.png",
    intro: "CloudBestie is a secure file storage website that allows users to upload files with a time-lock feature, ensuring files are only accessible after a specified unlock date. As UI/UX designer and developer, I took on the challenge of both designing and building this website to address the need for secure, time-sensitive file storage. I designed an intuitive and visually appealing user interface, created a seamless user experience, and developed the website.",
    problem: "Users often need to store sensitive files securely and control when they can be accessed. However, existing cloud storage solutions lack a time-lock feature and often have complex or cluttered interfaces that frustrate users. As a UI/UX designer, I aimed to create a simple, trustworthy, and intuitive design that prioritizes usability. As a developer, I needed to build a functional website that securely handles file uploads, stores metadata, and enforces the time-lock feature. CloudBestie addresses these needs by offering a user-friendly website with a modern design and robust backend functionality.",
    objectives: [
      "Design a clean, intuitive, and responsive UI/UX for the CloudBestie website.",
      "Develop a functional website with Google Sign-In, file uploads, and time-locked file access.",
      "Ensure the design reflects security and timesensitivity through visual elements.",
      "Integrate Firebase for authentication, data storage, file uploads, and hosting.",
      "Deploy the website on Firebase Hosting for reliable accessibility."
    ],
    approach: "I took a dual approach, first focusing on UI/UX design to create a user-centered experience, then developing the website to bring my designs to life. I used Figma for design and prototyping, and Visual Studio Code for development, leveraging Firebase for backend services.",
    challenges: [
      { label: "Challenge : Designing a sign-in modal that felt seamless and non-intrusive while ensuring accessibility. Solution: I centered the modal with a dark overlay, added a close button, and used a familiar Google Sign-In button with high contrast for accessibility." },
      { label: "Challenge : Displaying time-locked files in a way that was clear and uncluttered. Solution: I designed a card-based layout for the file list, with each card showing the file name in a larger font and the unlock date in a smaller font, ensuring clarity without overwhelming the user." },
      { label: "Challenge : Ensuring the time-lock feature worked consistently across time zones. Solution: I used Firebase's server timestamp for storing unlock dates and compared them with the client's local time, adjusting for time zone differences." }
    ],
    result: "Designed and developed a visually appealing and functional website for CloudBestie. Created a seamless user experience with an intuitive design, guiding users from sign-in to file management with clarity and confidence. Built a secure file storage solution with a unique time-lock feature, addressing a gap in the market. Ensured the website is responsive and accessible, enhancing usability across devices.",
    conclusion: "CloudBestie was a rewarding project that allowed me to showcase my skills as both a UI/UX designer and a developer. I designed an intuitive and visually appealing interface that prioritizes user needs, and I developed a functional website that delivers on its promise of secure, time-locked file storage. This project taught me the importance of balancing design and development, collaborating across roles, and focusing on user-centered solutions.",
    tags: ["UX/UI Design", "Product Strategy", "SaaS"],
    type: "product"
  },
  "creative-design": {
    title: "Creative Visual Exploration",
    category: "Graphic Design",
    mainImage: "https://api.builder.io/api/v1/image/assets/TEMP/45318e80554e24eb849206778401340b07a56111?width=1157",
    intro: "A series of experimental visual designs exploring the intersection of brutalist typography and minimalist layout. This project focuses on high-impact editorial communication.",
    problem: "Modern digital editorial content often feels repetitive and formulaic. There is a need for more expressive, high-contrast visual systems that capture attention while maintaining readability.",
    objectives: [
      "Explore non-traditional grid systems in editorial design.",
      "Master high-contrast color palettes for maximum visual impact.",
      "Integrate motion principles into static graphic layouts."
    ],
    approach: "The project follows a 'Reductionist' approach—removing secondary elements to let the core message shine through bold typography and stark negative space.",
    challenges: [
      { label: "Challenge: Balancing legibility with extreme typographic scale. Solution: Using a strict vertical rhythm and generous white space to guide the viewer's eye." }
    ],
    result: "The project was featured on several design inspiration galleries and served as the visual foundation for a major lifestyle magazine's digital reboot.",
    conclusion: "Creative design is about intentional tension between elements, creating a memorable experience that transcends standard UI/UX.",
    tags: ["Editorial Design", "Typography", "Brutalism"],
    type: "graphic"
  },
  "brand-identity": {
    title: "EcoThread - Sustainable Branding",
    category: "Graphic Design",
    mainImage: "https://api.builder.io/api/v1/image/assets/TEMP/b0227f0c339ae310afbc606e2c3d150f41eebd03?width=1157",
    intro: "EcoThread is a fictional sustainable fashion brand for which I developed a comprehensive brand identity system, including logo design, color palette, and packaging concepts.",
    problem: "Sustainable brands often fall into the trap of looking 'earthy' and 'dull', which can alienate fashion-forward consumers. The challenge was to create a brand that looks premium and modern while still communicating eco-friendly values.",
    objectives: [
      "Develop a distinctive and memorable logo for EcoThread.",
      "Create a color palette that feels fresh and premium.",
      "Design sustainable packaging concepts that reinforce the brand's mission."
    ],
    approach: "I used a minimalist and high-fashion aesthetic, utilizing a palette of deep forest green and warm sandy beige. The logo is a stylized thread that forms an abstract 'E', symbolizing both the product and the brand's circular economy.",
    challenges: [
      { label: "Challenge: Balancing 'Sustainable' with 'Premium'. Solution: Avoiding common eco-clichés like green leaves and instead using high-quality textures and refined typography." }
    ],
    result: "The branding system was highly praised for its sophisticated approach to sustainability, proving that eco-friendly brands can compete in the high-end fashion space.",
    conclusion: "EcoThread demonstrates how strategic branding can reshape consumer perceptions and make sustainable choices feel like a stylish upgrade.",
    tags: ["Branding", "Sustainable Design", "Packaging"],
    type: "graphic"
  },
  "digital-art": {
    title: "Surreal Landscapes - Digital Art",
    category: "Graphic Design",
    mainImage: "https://api.builder.io/api/v1/image/assets/TEMP/b0227f0c339ae310afbc606e2c3d150f41eebd03?width=1157",
    intro: "A collection of digital artworks exploring surreal landscapes and futuristic environments. This project focuses on lighting, composition, and atmospheric storytelling.",
    problem: "Digital art can often feel flat or overly technical. The goal of this series was to infuse digital creations with the warmth and texture of traditional painting while exploring impossible scenes.",
    objectives: [
      "Master advanced photo-manipulation and digital painting techniques.",
      "Explore the use of light and shadow to create mood and depth.",
      "Create a cohesive series of artworks with a common narrative theme."
    ],
    approach: "Each piece started with a loose sketch, followed by layering textures and digital painting. I focused on creating 'narrative moments'—scenes that feel like a single frame from a larger story.",
    challenges: [
      { label: "Challenge: Creating a sense of scale in digital environments. Solution: Using atmospheric perspective and placing familiar objects (like a lone figure) into the scenes to provide a point of reference." }
    ],
    result: "The series was showcased in several digital art communities and received widespread recognition for its unique atmospheric quality and storytelling.",
    conclusion: "Digital art is a powerful medium for exploring the imagination, allowing for the creation of worlds that are both alien and emotionally resonant.",
    tags: ["Digital Art", "Surrealism", "Concept Art"],
    type: "graphic"
  },
  "memo": {
    title: "MEMO",
    category: "Graphic Design",
    mainImage: "/assets/memo%20graphic.svg",
    intro: "",
    problem: "",
    objectives: [],
    approach: "",
    challenges: [],
    result: "",
    conclusion: "",
    tags: ["Graphic Design", "Brand Identity"],
    type: "graphic",
    isFullGraphicOnly: true
  },
  "coco-fest": {
    title: "COCO FEST - Event Branding",
    category: "Event Design",
    mainImage: "https://api.builder.io/api/v1/image/assets/TEMP/2ed97ec04a993c8b0279f016785b584975766150?width=582",
    intro: "COCO FEST is a vibrant brand identity for a tropical-themed music festival, focusing on energy, movement, and organic shapes.",
    problem: "Most festival branding uses standard geometric patterns. The goal was to create something that feels alive and uniquely tropical.",
    objectives: [
      "Develop a fluid, organic logo mark.",
      "Create a high-energy color palette.",
      "Design a cohesive environmental graphics system."
    ],
    approach: "Using hand-drawn elements combined with modern digital gradients to create a 'digital-organic' feel.",
    challenges: [
      { label: "Challenge: Creating a logo that works across both digital and physical merchandise. Solution: A simplified mark that retains its character even when scaled down for small assets." }
    ],
    result: "The branding helped the festival achieve its highest ticket sales yet, with attendees praising the 'vibey' aesthetic.",
    conclusion: "Branding for events should feel like an extension of the experience itself.",
    tags: ["Branding", "Event Design", "Visual Identity"],
    type: "graphic"
  },
  "trumphcard": {
    title: "TRUMPHCARD",
    category: "Graphic Design",
    mainImage: "/assets/trumph%20card.svg",
    intro: "",
    problem: "",
    objectives: [],
    approach: "",
    challenges: [],
    result: "",
    conclusion: "",
    tags: ["Graphic Design", "Game UI"],
    type: "graphic",
    isFullGraphicOnly: true
  },
};

// ─── Components ─────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug && TOOLS[slug]) return <Navigate to={`/tool/${slug}`} replace />;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#31EE33] font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-inter text-[#1A1A1A] selection:bg-[#007AFF] selection:text-white">
      
      {/* Main Showcase Content */}
      <main className="px-8 max-w-[1600px] mx-auto pt-12 sm:pt-16 pb-24">

        {/* Title & Action Section - Hidden if isFullGraphicOnly */}
        {!project.isFullGraphicOnly && (
          <div className="mb-12">
            {/* Category/Type Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-full border border-black/5 text-xs font-semibold uppercase tracking-widest text-[#666] mb-6">
              <Layout size={14} className="text-[#31EE33]" />
              <span>{project.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-8 tracking-tight">
              {project.title}
            </h1>

            {project.liveUrl && (
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0C0C0C] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#222] transition-colors group"
                >
                  {project.liveButtonText || "Live Website"} <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Hero Image Showcase */}
        <div className="w-full mb-12">
          <div className={
            project.isFullGraphicOnly 
              ? "rounded-[24px] overflow-hidden shadow-2xl border border-black/5 bg-[#FAF9F7] flex items-center justify-center p-2 sm:p-6"
              : "rounded-[24px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-black/5 aspect-[16/10] bg-black flex items-center justify-center p-8 sm:p-16"
          }>
            <img 
              src={project.mainImage} 
              alt={project.title} 
              className={project.isFullGraphicOnly ? "w-full h-auto object-contain rounded-xl" : "w-full h-full object-contain"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
