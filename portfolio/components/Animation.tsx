
'use client';

import Lottie from 'react-lottie-player'
import lottieJson from '../public/main_img.json';

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  );
};