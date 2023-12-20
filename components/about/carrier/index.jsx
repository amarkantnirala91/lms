import { Button } from 'antd'
import Image from 'next/image'
const Carrier = () =>{
    return(
       <div className="flex justify-center">
        <div className="w-[85%]">
            <div className="grid   max-lg:grid-cols-1 lg:grid-cols-2 gap-x-5 max-md:mt-5 md:mt-20">
                <div className=' mb-20 max-lg:flex max-lg:justify-center '>
                    <Image src={'/images/about-group-01-2.jpg'} className='rounded-xl' width={490} height={590} alt='logo'/>
                </div>
                <div className='mb-20'>
                    <h1 className='text-lg mb-2 font-semibold text-blue-500'>WHO WE ARE</h1>
                    <h1 className='md:text-4xl max-md:text-xl font-bold'>We Offer The Best Carrier</h1>
                    <div className='flex gap-5 mt-[50px]'>
                    <div>
                      <div className='rounded-full w-[60px] bg-[#FFF6E8] flex justify-center items-center h-[60px]'>  <Image src={'/images/student-2.png'} className='' width={30} height={30} alt='student'/></div>
                    </div>
                    <div className='flex flex-col'>
                            <h1 className='text-xl font-semibold mb-2'>Industry Expert Instructor</h1>
                            <span className='text-gray-600 max-md:text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-[30px]'>
                    <div>
                      <div className='rounded-full w-[60px] bg-[#FFF6E8] flex justify-center items-center h-[60px]'>  <Image src={'/images/book-2.png'} className='' width={30} height={30} alt='student'/></div>
                    </div>
                    <div className='flex flex-col'>
                            <h1 className='md:text-xl max-md:text-lg font-semibold mb-2 '>Up-to-Date Course Content</h1>
                            <span className='text-gray-600 max-md:text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div className='flex gap-5 mb-20 mt-[30px]'>
                    <div>
                      <div className='rounded-full w-[60px] bg-[#FFF6E8] flex justify-center items-center h-[60px]'>  <Image src={'/images/reward-2.png'} className='' width={30} height={30} alt='student'/></div>
                    </div>
                    <div className='flex flex-col'>
                            <h1 className='text-xl font-semibold mb-2'>Biggest Student Community</h1>
                            <span className='text-gray-600 max-md:text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</span>
                        </div>
                    </div>

                   <div className='max-md:flex max-md:justify-center'>
                   <Button className='bg-blue-700 w-[200px] font-semibold text-lg text-white h-[60px] border-0'>Know About Us</Button>
                   </div>

                </div>
            </div>
        </div>
       </div>
    )
}

export default Carrier