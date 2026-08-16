import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface Blog3Post {
  image: string;
  imageAlt: string;
  readingTime: string;
  title: string;
  description: string;
  cardCtaLabel: string;
  href?: string;
}

export interface Blog3Header {
  badge: string;
  badgeIcon?: React.ReactNode;
  heading: string;
  description: string;
}

export interface Blog3Footer {
  ctaText: string;
  ctaHref: string;
}

export interface Blog3Props {
  header: Blog3Header;
  posts: Blog3Post[];
  footer: Blog3Footer;
  className?: string;
  cardClassName?: string;
  /** Render override for the footer CTA link */
  renderCtaLink?: (props: {
    href: string;
    children: React.ReactNode;
  }) => React.ReactNode;
  /** Render override for individual card links */
  renderCardLink?: (props: {
    href: string;
    children: React.ReactNode;
  }) => React.ReactNode;
}

export default function Blog3({
  header,
  posts,
  footer,
  className,
  cardClassName,
  renderCtaLink,
  renderCardLink,
}: Blog3Props) {
  const ctaContent = (
    <span className="group/cta text-gray-500 hover:text-black inline-flex items-center gap-1.5 text-sm font-semibold transition-colors">
      {footer.ctaText}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
    </span>
  );

  return (
    <section
      className={cn(
        'w-full px-4 py-8',
        className,
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          {header.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/5 text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
              {header.badgeIcon}
              <span>{header.badge}</span>
            </div>
          )}
          <h2 className="text-[#1A1A1A] max-w-xl text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold tracking-tight font-serif">
            {header.heading}
          </h2>

          <p className="text-gray-600 max-w-lg text-sm sm:text-base leading-relaxed">
            {header.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {posts.map((post, index) => {
            const card = (
              <article
                key={index}
                className={cn(
                  'group flex flex-col gap-3 overflow-hidden transition-all duration-300 sm:flex-row bg-[#FAF9F6] border border-black/5 rounded-3xl p-3 sm:p-4 hover:border-black/15 hover:shadow-md',
                  cardClassName,
                )}
              >
                <div className="flex flex-1 flex-col gap-2.5 px-3 py-3 sm:px-4 sm:py-4">
                  <span className="text-[#007AFF] text-xs sm:text-sm font-semibold tracking-wide">
                    {post.readingTime}
                  </span>

                  <h3 className="text-[#1A1A1A] text-lg sm:text-xl leading-snug font-bold group-hover:text-[#007AFF] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-auto pt-2 flex w-fit items-center rounded-full gap-1.5 border border-black/10 bg-white px-3.5 py-1.5 shadow-xs">
                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">
                      {post.cardCtaLabel}
                    </span>
                    <ArrowRight className="text-gray-900 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="relative sm:aspect-auto sm:w-48 md:w-56 rounded-2xl overflow-hidden border border-black/5 shrink-0 min-h-[160px] sm:min-h-0 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </article>
            );

            if (renderCardLink && post.href) {
              return (
                <div key={index}>
                  {renderCardLink({
                    href: post.href,
                    children: card,
                  })}
                </div>
              );
            }

            if (post.href) {
              return (
                <a
                  key={index}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:outline-none block"
                >
                  {card}
                </a>
              );
            }

            return card;
          })}
        </div>
        <div className="flex items-center justify-center pt-2">
          {renderCtaLink ? (
            renderCtaLink({ href: footer.ctaHref, children: ctaContent })
          ) : (
            <a href={footer.ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaContent}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
