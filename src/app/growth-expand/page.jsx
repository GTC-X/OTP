import React from 'react'
import GrowthSection from '../components/Growth/GrowthSection'
import GrowthOffer from '../components/Growth/GrowthOffer'
import FreeCallSection from '../components/Growth/FreeCallSection'

export const metadata = {
    title: 'Unlock Growth & Expand into New Markets - Market Mavens',
    description:
      'At Market Mavens, we specialize in driving growth for online trading brokers through tailored, data-driven marketing strategies designed to boost brand awareness, generate high-quality leads, and accelerate client acquisition.',
  };

const page = () => {
  return (
    <>
    <GrowthSection />
    <GrowthOffer />
    <FreeCallSection />
    </>
  )
}

export default page