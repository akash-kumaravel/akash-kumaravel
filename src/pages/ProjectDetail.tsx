import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Layout,
  ExternalLink
} from "lucide-react";
import Footer from "../components/Footer";

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
  "flint": {
    title: "Flint – AI-Powered App",
    category: "Flint",
    mainImage: "/assets/flint.png",
    intro: "Flint is a revolutionary mobile application that uses artificial intelligence to streamline daily productivity. It acts as a personal assistant that learns from user behavior to automate scheduling and information organization.",
    problem: "Most productivity apps require significant manual input, adding to the user's workload rather than reducing it. Users often feel overwhelmed by complex task managers and notification fatigue.",
    objectives: [
      "Create a 'Zero-Input' productivity system using AI prediction.",
      "Design a minimal, stress-free mobile interface focused on current priorities.",
      "Implement smooth gesture-based interactions for rapid task triaging.",
      "Ensure cross-device synchronization for a seamless workflow."
    ],
    approach: "We focused on a 'Conversational UI' first, allowing users to interact with their schedule through natural language. The design utilizes soft shadows and glassmorphism to create a calm, modern digital environment.",
    challenges: [
      { label: "Challenge: Organizing high-density information on small mobile screens. Solution: Implementing a 'Focus-Only' view that hides non-essential data until specifically requested by the user." }
    ],
    result: "Achieved a 45% increase in user task completion rates and saw a high retention rate due to the app's predictive accuracy.",
    conclusion: "Flint demonstrates how AI can move from being a novelty to a critical utility in personal management when paired with thoughtful user-centered design.",
    tags: ["Mobile App", "AI", "Productivity"],
    type: "app"
  },
  "spark": {
    title: "Spark – Feel the Spark",
    category: "Spark",
    mainImage: "/assets/spark.png",
    intro: "Spark is a social platform that combines trending content, personalized music recommendations, and interactive social engagement. Users can explore viral topics, connect with friends through chats, and discover music seamlessly within the app. Spark bridges the gap between content creation, music discovery, and real-time connections in one intuitive platform.",
    problem: "Digital connectivity often leads to physical isolation. Traditional social media focuses on global networks, leaving users disconnected from their immediate community.",
    objectives: [
      "Bridge the gap between digital interaction and face-to-face meetings.",
      "Implement low-latency location-based services for real-time networking.",
      "Design a vibrant, high-energy UI that encourages active participation."
    ],
    approach: "The app uses 'Spark Zones'—virtual rooms tied to physical locations. The UI utilizes bold gradients and bouncy animations to reflect the excitement of meeting new people.",
    challenges: [
      { label: "Challenge: Maintaining user privacy while using geolocation. Solution: Developing a 'Safe-Radius' system that obfuscates exact locations while still allowing for proximity matching." }
    ],
    result: "Spark successfully launched in 10 major university campuses, resulting in over 50,000 successful real-world meetups in the first quarter.",
    conclusion: "By focusing on local proximity, Spark redefined social networking as a tool for community building rather than just digital scrolling.",
    tags: ["Social Media", "Location-Based", "Interaction"],
    type: "app"
  },
  "legal-link": {
    title: "Legal Link – A Smart Match",
    category: "Legal Tech",
    mainImage: "/assets/legal%20link.png",
    intro: "Legal Link is a sophisticated directory and matching service that connects users with expert legal counsel through an intelligent filtering system based on case complexity and budget.",
    problem: "Finding the right lawyer is traditionally a confusing, opaque process. Users often feel intimidated by legal jargon and uncertain about the costs involved.",
    objectives: [
      "Simplify the process of finding specialized legal help.",
      "Design a trust-focused interface that minimizes user anxiety.",
      "Create a transparent pricing and review system for legal services."
    ],
    approach: "The design philosophy was 'Authority through Clarity'. We used structured layouts, authoritative typography (Serif/Sans mix), and a calm color palette to build user confidence.",
    challenges: [
      { label: "Challenge: Building trust in a digital legal environment. Solution: Implementing a rigorous verification badge system and detailed attorney profiles with verified client testimonials." }
    ],
    result: "Became the leading legal matching platform in its region with over 5,000 verified attorneys and a 92% client satisfaction score.",
    conclusion: "Legal Link proves that even traditional, complex industries can be made accessible through professional, transparent digital design.",
    tags: ["Legal Tech", "Directory", "SaaS"],
    type: "app"
  },
  "bg-wrap": {
    title: "BGWrap - Background Remover",
    category: "BGWrap",
    mainImage: "/assets/background%20remover.png",
    intro: "BGWrap is an AI-powered tool designed to instantly remove backgrounds from any image. It streamlines the creative process for designers and photographers by automating one of the most tedious tasks in image editing.",
    problem: "Removing backgrounds manually is time-consuming and requires specialized software and skills. Designers often need quick results for mockups, social media, and product listings.",
    objectives: [
      "Develop a high-accuracy AI background removal engine.",
      "Design a simple, 'one-click' user interface.",
      "Provide seamless integration with tools like Figma and Photoshop."
    ],
    approach: "We used deep learning models to improve edge detection, especially for complex subjects like hair and fur. The UI was built for speed and ease of use.",
    challenges: [
      { label: "Challenge: Segmenting hair and fine details. Solution: Implementing advanced refine-edge algorithms and high-resolution mask outputs." }
    ],
    result: "Achieved 99.9% accuracy on standard subjects and significantly reduced processing time to under 1 second per image.",
    conclusion: "BGWrap has become a go-to tool for thousands of creatives, proving the value of purpose-built AI in the design workflow.",
    tags: ["AI", "Image Processing", "Productivity"],
    type: "plugin"
  },
  "dpicon": {
    title: "Dpicon - AI Image Generation",
    category: "Dpicon",
    mainImage: "/assets/dpicon.png",
    intro: "Dpicon is a generative AI platform specifically optimized for creating high-quality, scalable icons and avatars for digital products.",
    problem: "Standard generative AI tools are too broad and often produce noisy or inconsistent icons. Designers need clean, uniform assets that match their project's style.",
    objectives: [
      "Create a model fine-tuned for vector-like icon generation.",
      "Implement style-consistency controls for sets of icons.",
      "Support SVG exports for production use."
    ],
    approach: "We trained a custom LoRA on top of Stable Diffusion specifically with clean, modern icon datasets. The UI allows for prompt-based editing and style selection.",
    challenges: [
      { label: "Challenge: Generating clean SVG paths. Solution: Building a post-processing pipeline that vectorizes bitmap generations while maintaining precision." }
    ],
    result: "Successfully launched with over 1M assets generated in the first month by a community of 20K designers.",
    conclusion: "Dpicon simplifies asset creation, allowing designers to focus on high-level UX while the AI handles the repetitive iconography.",
    tags: ["Generative AI", "Icons", "SVG"],
    type: "plugin",
    liveUrl: "https://dpicon.framer.website/",
    liveButtonText: "Live Website"
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
  "grayscale-converter": {
    title: "Grayscale Wireframe Converter",
    category: "Figma Plugin",
    mainImage: "/assets/gray%20scale%20plugin.jpg",
    intro: "A utility plugin for Figma that simplifies the transition from high-fidelity designs to wireframes for structural feedback sessions.",
    problem: "Stakeholders often get distracted by color during layout reviews. Converting designs manually is a waste of time.",
    objectives: [
      "Automate image desaturation.",
      "Map all fills to a standard gray ramp.",
      "Ensure one-click operation."
    ],
    approach: "Building a recursive crawler that visits every node and maps its properties to a grayscale equivalent.",
    challenges: [
      { label: "Challenge: Handling components and instances. Solution: Implementing a safe-overwrite mode that respects library connections." }
    ],
    result: "Over 5,000 installs in the first week on the Figma Community.",
    conclusion: "Tools that save time are tools that designers love.",
    tags: ["Figma Plugin", "Automation", "Workflow"],
    type: "plugin",
    liveUrl: "https://www.figma.com/community/plugin/1498582630091227441",
    liveButtonText: "Open in Figma Community"
  },
  "dpicon-svg": {
    title: "Dpicon - SVG Export Utility",
    category: "Figma Plugin",
    mainImage: "/assets/Dpicon%20plugin.jpg",
    intro: "A specialized export tool that optimizes SVG paths for cleaner code and smaller file sizes, specifically for iconography sets.",
    problem: "Figma's default SVG export can sometimes include unnecessary data or messy paths.",
    objectives: [
      "Implement path simplification algorithms.",
      "Strip unneeded metadata.",
      "Provide batch export presets."
    ],
    approach: "Integrating SVGO-inspired logic directly into a Figma plugin environment.",
    challenges: [
      { label: "Challenge: Maintaining visual precision while simplifying paths. Solution: Implementing an adjustable threshold for path 'merging'." }
    ],
    result: "Reduced asset weight for partner companies by an average of 35%.",
    conclusion: "Clean code is just as important as clean design.",
    tags: ["Figma Plugin", "SVG", "Optimization"],
    type: "plugin",
    liveUrl: "https://www.figma.com/community/plugin/1488603996276952817",
    liveButtonText: "Open in Figma Community"
  },
  "bgwrap-plugin": {
    title: "BGWRAP - Figma Integration",
    category: "Figma Plugin",
    mainImage: "/assets/BGWRAP%20plugin.jpg",
    intro: "Bringing the power of the BGWRAP background removal engine directly into the Figma canvas for a faster design workflow.",
    problem: "Switching between browser and design tool breaks creative flow.",
    objectives: [
      "Seamless API integration with BGWRAP engine.",
      "Transparent mask output support.",
      "Non-destructive original preservation."
    ],
    approach: "Developing a secure bridge between Figma's sandbox and our AI processing server.",
    challenges: [
      { label: "Challenge: Handling large image uploads within Figma limits. Solution: Implementing local downscaling for preview and high-quality processing for final output." }
    ],
    result: "A top-rated utility in the Figma ecosystem for portrait and product designers.",
    conclusion: "Workflow integration is the key to AI adoption in design.",
    tags: ["Figma Plugin", "AI", "Image Processing"],
    type: "plugin",
    liveUrl: "https://www.figma.com/community/plugin/1500147712889678037",
    liveButtonText: "Open in Figma Community"
  }
};

// ─── Components ─────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      <Footer />
    </div>
  );
}
