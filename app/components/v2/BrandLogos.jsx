'use client';

/**
 * High-precision vector brand marks and watermark emblems.
 * Designed with crisp SVG paths for monochrome luxury and subtle background engravings.
 */

export const ThalesLogo = ({ className = 'w-6 h-6', watermark = false }) => {
  if (watermark) {
    return (
      <svg
        viewBox="0 0 200 60"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M18.8 45.4h-5.9V14.6h5.9v30.8zm22.4 0h-5.9V31.8h-11v-5.2h11v-12h5.9v30.8zm22.5 0h-6.2l-10-30.8h6.5l6.7 22.8 6.8-22.8h6.4l-10.2 30.8zm25.9 0h-5.9V14.6h5.9v30.8zm22.4 0h-16.7V14.6h16.7v5.3h-10.8v7.2h9.6v5h-9.6v8h10.8v5.3zm25.8-9.1c0 5.8-4.4 9.5-11.8 9.5-7.1 0-11.6-3.8-11.6-9.2 0-5.7 4.2-7.8 9.6-9.1l3.5-.8c3.2-.7 4.7-1.7 4.7-3.7 0-2.3-2.1-3.6-5.4-3.6-3.8 0-5.8 1.6-6 4.3h-5.5c.3-5.3 4.2-9 11.5-9 7 0 11.1 3.5 11.1 8.8 0 5.1-3.6 7.2-9.4 8.7l-3.3.8c-3.5.9-5.1 1.8-5.1 4.1 0 2.4 2.1 3.9 5.8 3.9 4 0 6.2-1.7 6.4-4.7h5.6z" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 font-mono font-bold tracking-wider text-xs uppercase text-zinc-100 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#c5a880]">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
      <span>THALES</span>
    </div>
  );
};

export const TricentisLogo = ({ className = 'w-6 h-6', watermark = false }) => {
  if (watermark) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="none" stroke="currentColor" strokeWidth="8" />
        <path d="M50 25 L80 40 L80 70 L50 85 L20 70 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="50" cy="55" r="10" fill="currentColor" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono font-bold tracking-wider text-xs uppercase text-zinc-100 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#c5a880]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>TRICENTIS</span>
    </div>
  );
};

export const CroixRougeLogo = ({ className = 'w-6 h-6', watermark = false }) => {
  if (watermark) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <rect x="38" y="10" width="24" height="80" rx="4" />
        <rect x="10" y="38" width="80" height="24" rx="4" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono font-semibold tracking-wider text-xs uppercase text-zinc-200 ${className}`}>
      <span className="relative flex items-center justify-center w-4 h-4 rounded-full bg-white/[0.08] border border-white/20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-red-500">
          <rect x="9" y="3" width="6" height="18" rx="1" />
          <rect x="3" y="9" width="18" height="6" rx="1" />
        </svg>
      </span>
      <span>CROIX-ROUGE</span>
    </div>
  );
};

export const GooglePlayLogo = ({ className = 'w-4 h-4' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.363-.61-.88-.61-1.464V3.278c0-.584.24-1.1.61-1.464zm11.25 11.25l2.063 2.063-12.04 6.837 9.977-8.9zm0-2.128L4.882 1.948l12.04 6.836-2.063 2.152zm1.096 1.064l3.197 1.815c.91.517.91 1.36 0 1.877l-3.197 1.815-1.92-1.92 1.92-1.587z" />
    </svg>
  );
};

export const ScrumOrgBadge = ({ className = 'w-4 h-4' }) => {
  return (
    <div className={`inline-flex items-center gap-1 font-mono text-[10px] text-zinc-300 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
      <span className="font-semibold text-white">SCRUM.ORG</span>
      <span className="text-zinc-500">PSM I</span>
    </div>
  );
};
