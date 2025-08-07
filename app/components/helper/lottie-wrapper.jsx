'use client';

import dynamic from 'next/dynamic';

const AnimationLottie = dynamic(() => import('./animation-lottie'), {
  ssr: false,
});

const LottieWrapper = ({ animationPath, width }) => {
  return <AnimationLottie animationPath={animationPath} width={width} />;
};

export default LottieWrapper;
