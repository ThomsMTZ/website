/**
 * Apple-grade spring physics and tactile motion presets.
 * Critically damped springs (damping: 28-30) provide instantaneous settle with zero cartoon bounce.
 */
export const appleSpring = {
  type: 'spring',
  stiffness: 420,
  damping: 30,
  mass: 0.8,
};

export const tactileTap = {
  scale: 0.98,
  transition: { type: 'spring', stiffness: 500, damping: 25 },
};

export const buttonTap = {
  scale: 0.965,
  transition: { type: 'spring', stiffness: 600, damping: 20 },
};
