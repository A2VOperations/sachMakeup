import React from 'react'
import Section2 from '../home/section2'
import FAQ from '../../components/FAQ'
import Gallery from '../../components/Gallery'
import AboutMe from '../../components/aboutMe'
import Testimonial from '../../components/Testomonial'
import ChooseUs from '../../components/ChooseUs'

const page = () => {
  return (
    <>
    <Section2 />
    <Gallery />
    <ChooseUs />
    <FAQ />
    <Testimonial />
    </>
  )
}

export default page