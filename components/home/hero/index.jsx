import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section style={{backgroundImage : `url("/images/home-bg.jpg")`}} className='flex flex-col py-20 items-center relative pb-40'>
      <div className='grid md:grid-cols-2 md:w-[85%] gap-5'>
        <div className='p-3 px-20'>
         <p className="text-[#525FE1] text-lg font-bold tracking-wider mb-4">BETTER LEARNING FUTURE WITH US</p>
         <h1 className='text-7xl font-bold mb-9 leading-[95px] text-[#231F40]'>
          Education Is About Academic Excellence
         </h1>
         <p className='text-[#858285] text-[20px] font-semibold tracking-wider mb-8'>
         Empower yourself with the knowledge and skills gained through online education and best instructors.
         </p>
         <button className='text-white py-4 text-xl font-bold rounded-md w-fit px-4 flex items-center gap-2 bg-[#525fe1]'>
            Get started Today <i className='bx bx-right-arrow-alt'></i>
         </button>
        </div>
        <div className='relative flex flex-col justify-end items-center'>
            <div className='relative h-[500px] w-[500px] top-28'>
            <Image src="/images/image-01.png" layout='fill' objectFit='cover' alt='shape1' />
            </div>
            
            <Image src="/images/image-02.png" width={300} height={10} alt='shape1' className='absolute top-20 -right-10' />
            
        </div>
      </div>
      <Image src="/images/shape-2.png" width={70} height={20} alt='shape1' className='absolute top-16 left-24' />
      <Image src="/images/shape-1.png" width={50} height={20} alt='shape1' className='absolute bottom-16 -left-2' />
      <Image src="/images/shape-3.png" width={20} height={20} alt='shape1' className='absolute top-44 ' />
      <Image src="/images/shape-5.png" width={50} height={20} alt='shape1' className='absolute top-16 right-12' />
      <Image src="/images/shape-4.png" width={20} height={20} alt='shape1' className='absolute bottom-10 right-12' />

    </section>
  )
}

export default Hero
