import React from "react";
import { motion } from "motion/react";
import { Pencil } from "lucide-react";
import Blog3, { Blog3Post } from "../components/ui/Blog3";
import Footer from "../components/Footer";
import { assetPath } from "../data/portfolioData";

const articles: Blog3Post[] = [
  {
    image: "https://framerusercontent.com/images/bCwfA6IBIlWiV7fvkaL4bwk1EWw.png",
    imageAlt: "Simplicity Is Harder Than It Looks article cover",
    readingTime: "4 min read",
    title: "Simplicity Is Harder Than It Looks",
    description: "Notes on how I get inspired and strip away unnecessary interface complexity to reveal clear product intent.",
    cardCtaLabel: "Read on Medium",
    href: "https://akash-kumaravel.medium.com/simplicity-is-harder-than-it-looks-0bbe82b01232?sharedUserId=akash-kumaravel",
  },
  {
    image: "https://framerusercontent.com/images/pTG5bNuzlOC0cyPGjuPy79OAQyQ.png",
    imageAlt: "Quick way to test visual hierarchy and contrast",
    readingTime: "3 min read",
    title: "Quick way to test visual hierarchy and contrast",
    description: "Testing hierarchy & contrast without color bias to ensure structural clarity across any display or viewport.",
    cardCtaLabel: "Read on Medium",
    href: "https://akash-kumaravel.medium.com/as-a-designer-i-often-needed-a-quick-way-to-test-visual-hierarchy-and-contrast-without-color-369f9c3d2786?sharedUserId=akash-kumaravel",
  },
  {
    image: "https://framerusercontent.com/images/Oyt6dOQd5nix7VDk69yYwdFq8bI.png",
    imageAlt: "Bulk remove backgrounds from images article cover",
    readingTime: "5 min read",
    title: "Bulk remove backgrounds from images",
    description: "Automating background removal workflows without manual slow editing to streamline product mockup creation.",
    cardCtaLabel: "Read on Medium",
    href: "https://akash-kumaravel.medium.com/as-a-designer-i-often-had-to-remove-backgrounds-from-multiple-images-manually-slow-frustrating-d5c7382249f9?sharedUserId=akash-kumaravel",
  },
];

export default function DesignPhilosophyPage() {
  return (
    <div className="bg-white min-h-screen font-inter text-[#202020] pt-24 pb-4 selection:bg-[#007AFF] selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Blog3
          header={{
            badge: "Perspectives & Writeups",
            badgeIcon: <Pencil className="w-3.5 h-3.5 text-[#007AFF]" />,
            heading: "Design Philosophies & Thoughts",
            description: "Practical thinking, design workflows, and deep dives into interface simplicity, hierarchy, and creative automation.",
          }}
          posts={articles}
          footer={{
            ctaText: "View all articles on Medium",
            ctaHref: "https://medium.com/@akash-kumaravel",
          }}
        />
      </motion.div>

      <Footer videoSrc={assetPath("anime4.webm")} />
    </div>
  );
}

