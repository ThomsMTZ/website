'use client';

import Image from 'next/image';

/**
 * Authentic Corporate Brand Marks and Emblems for Thales, Tricentis / NeoLoad,
 * Croix-Rouge française, and Scrum.org.
 */

/**
 * Official Thales Group vector logo with signature cyan dot inside the 'A'.
 */
export const ThalesLogo = ({ className = 'h-5 w-auto', variant = 'light' }) => {
  const fillColor = variant === 'color' ? '#1D2A78' : variant === 'gold' ? '#c5a880' : '#FFFFFF';

  return (
    <svg
      viewBox="0 0 484 57.4"
      className={className}
      aria-label="Thales Logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fillColor}
        d="m484 42.1c0 7.8-2.3 10.1-8.5 12-6.7 2-18.6 3.3-25.7 3.3-8.4 0-18.9-0.5-27.8-2.6v-9h49.3v-12.3h-34.9c-10.5 0-14.4-2.9-14.4-13.1v-5.4c0-8.1 2.4-10.5 8.9-12.2 6.6-1.7 17.4-2.8 24.5-2.8 8.6 0 18.9 0.7 27.8 2.7v9h-48.5v10.3h34.9c10.5 0 14.4 2.8 14.4 13.1z"
      />
      <path
        fill={fillColor}
        d="m400 54.7c-10.2 2-20.5 2.6-30.5 2.6s-20.4-0.6-30.7-2.6v-52c10.2-2 20.6-2.7 30.5-2.7 10 0 20.1 0.6 30.3 2.7v9.3h-46.2v10.4h30.1v10.8h-30.1v12.3h46.4v9.2z"
      />
      <path
        fill={fillColor}
        d="m321 54.7c-9.2 2-18.4 2.6-27.3 2.6s-18.3-0.5-27.5-2.6v-53.4h14.7v43.5h40.1z"
      />
      <path
        fill={fillColor}
        d="m249 55.1c-4.9 1.4-11.4 1.9-16.2 2l-22.7-45.8h-1.3l-22.6 45.8c-4.8-0.1-10.5-0.6-15.4-2l28.7-53.7h20.5z"
      />
      {/* Signature cyan dot inside Thales 'A' */}
      <circle cx="209.5" cy="41.4" r="9.5" fill="#00C0F0" />
      <path
        fill={fillColor}
        d="m153 55.1c-4.7 1.4-9.7 1.8-14.7 1.9v-23.3h-36.5v23.3c-5-0.1-10-0.6-14.7-1.9v-52.8c4.7-1.4 9.7-1.8 14.7-1.9v22.5h36.5v-22.5c5 0.1 10 0.6 14.7 1.9z"
      />
      <path
        fill={fillColor}
        d="m66.2 12.1h-25.8v44h-14.6v-44h-25.8v-9.4c11.1-2 22.3-2.7 33.1-2.7s22 0.6 33.1 2.7z"
      />
    </svg>
  );
};

/**
 * Thales watermark for card background.
 */
export const ThalesWatermark = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 484 57.4"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m484 42.1c0 7.8-2.3 10.1-8.5 12-6.7 2-18.6 3.3-25.7 3.3-8.4 0-18.9-0.5-27.8-2.6v-9h49.3v-12.3h-34.9c-10.5 0-14.4-2.9-14.4-13.1v-5.4c0-8.1 2.4-10.5 8.9-12.2 6.6-1.7 17.4-2.8 24.5-2.8 8.6 0 18.9 0.7 27.8 2.7v9h-48.5v10.3h34.9c10.5 0 14.4 2.8 14.4 13.1z"/>
      <path d="m400 54.7c-10.2 2-20.5 2.6-30.5 2.6s-20.4-0.6-30.7-2.6v-52c10.2-2 20.6-2.7 30.5-2.7 10 0 20.1 0.6 30.3 2.7v9.3h-46.2v10.4h30.1v10.8h-30.1v12.3h46.4v9.2z"/>
      <path d="m321 54.7c-9.2 2-18.4 2.6-27.3 2.6s-18.3-0.5-27.5-2.6v-53.4h14.7v43.5h40.1z"/>
      <path d="m249 55.1c-4.9 1.4-11.4 1.9-16.2 2l-22.7-45.8h-1.3l-22.6 45.8c-4.8-0.1-10.5-0.6-15.4-2l28.7-53.7h20.5z"/>
      <circle cx="209.5" cy="41.4" r="9.5" fill="currentColor" />
      <path d="m153 55.1c-4.7 1.4-9.7 1.8-14.7 1.9v-23.3h-36.5v23.3c-5-0.1-10-0.6-14.7-1.9v-52.8c4.7-1.4 9.7-1.8 14.7-1.9v22.5h36.5v-22.5c5 0.1 10 0.6 14.7 1.9z"/>
      <path d="m66.2 12.1h-25.8v44h-14.6v-44h-25.8v-9.4c11.1-2 22.3-2.7 33.1-2.7s22 0.6 33.1 2.7z"/>
    </svg>
  );
};

/**
 * Official Tricentis / NeoLoad badge.
 */
export const TricentisNeoLoadLogo = ({ className = 'h-5 w-auto' }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative w-5 h-5 rounded overflow-hidden shrink-0">
        <Image
          src="/neoload-logo.png"
          alt="NeoLoad"
          fill
          className="object-contain"
        />
      </div>
      <span className="font-mono text-xs font-bold tracking-wider text-white">TRICENTIS // NEOLOAD</span>
    </div>
  );
};

/**
 * Official Croix-Rouge française emblem.
 */
export const CroixRougeBadge = ({ className = 'h-5 w-auto', showLabel = true }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
        <svg viewBox="0 0 24 24" fill="#E30613" className="w-3 h-3">
          <rect x="9.5" y="3" width="5" height="18" rx="0.5" />
          <rect x="3" y="9.5" width="18" height="5" rx="0.5" />
        </svg>
      </div>
      {showLabel && (
        <span className="font-mono text-xs font-bold tracking-wider text-white">CROIX-ROUGE</span>
      )}
    </div>
  );
};

export const CroixRougeWatermark = ({ className = 'w-full h-full' }) => {
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
};

/**
 * Official Google Play Store Vector Icon.
 */
export const GooglePlayLogo = ({ className = 'w-3.5 h-3.5' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.363-.61-.88-.61-1.464V3.278c0-.584.24-1.1.61-1.464zm11.25 11.25l2.063 2.063-12.04 6.837 9.977-8.9zm0-2.128L4.882 1.948l12.04 6.836-2.063 2.152zm1.096 1.064l3.197 1.815c.91.517.91 1.36 0 1.877l-3.197 1.815-1.92-1.92 1.92-1.587z" />
    </svg>
  );
};

/**
 * Official Scrum.org PSM I Badge Icon.
 */
export const ScrumOrgBadge = ({ size = 20, className = '' }) => {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/psm1-badge.png"
        alt="Scrum.org PSM I Credential"
        fill
        className="object-contain"
      />
    </div>
  );
};
