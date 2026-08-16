import React from "react";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={`relative group/pin z-20 cursor-pointer ${containerClassName || ""}`}
    >
      <div className="w-full flex justify-center items-center">
        <div className={`relative z-50 ${className || ""}`}>{children}</div>
      </div>
      {title && (
        <div className="w-full flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500 mt-3 pointer-events-auto">
          <a
            href={href || "#"}
            target={"_blank"}
            rel="noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-900 py-1.5 px-4 ring-1 ring-white/20 shadow-lg text-white hover:bg-zinc-800 transition-colors"
          >
            <span className="relative z-20 text-white text-xs font-bold font-mono">
              {title} ↗
            </span>
          </a>
        </div>
      )}
    </div>
  );
};
