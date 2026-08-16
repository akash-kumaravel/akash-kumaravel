import React from "react";

export default function SparkInterfaceShowcase() {
  return (
    <>
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-12 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
            Spark App Overview
          </span>

          <div className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm mt-4">
            <img
              src={'/assets/' + encodeURIComponent('Spark Overview.png')}
              alt="Spark App Interface Collection View"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
