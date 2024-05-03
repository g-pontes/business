'use client'

import NavBar from '@/src/components/Navbar/NavBar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/src/components/HowItWorks/HowItWorks';
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';

export default function Home() {
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <NavBar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: 'var(--secondary-color)'
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: 'white'
          })
        }
        viewport={{amount: 0.3}}
      >
        <OurDiff />
      </motion.div>
      
      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: 'var(--primary-color)'
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: 'white'
          })
        }
        viewport={{amount: 0.3}}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
    </motion.div>
  );
}
