import Image from "next/image"
import Meta from "../meta"
import Link from "next/link"
import { useState } from "react"
import { Drawer } from "antd"
import { useRouter } from "next/router"
const Layout = ({children ,title="" ,description=""})=>{
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const MenuDrawer = ()=>(
        <Drawer
        title={<div className="flex justify-between">
            <Image src="/images/logo.png" width={120} height={50} alt="logo" className="hover:scale-110 duration-700"/>

            <button onClick={onClose}>
            <i className='bx bx-x p-1 text-2xl rounded-full border'></i>
            </button>
        </div>}
        closable={false}
        onClose={onClose}
        placement="left"
        open={open}
      >
        <ul className="flex flex-col gap-y-4">
             <li className="border-b py-2">
                <Link href="/" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500 ">Home</a>  
                </Link>
             </li>
             <li className="border-b py-2">
                <Link href="/courses" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">Courses</a>  
                </Link>
             </li>
             <li className="border-b py-2">
                <Link href="about" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">About</a>  
                </Link>
             </li>
             <li className="">
                <Link href="contact" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">Contact</a>  
                </Link>
             </li>
           </ul>
      </Drawer>

    )
  return (
    <>
      <Meta title={title} description={description} />
      <section >
        <div className="shadow-lg sticky top-0">
         <nav className="py-2 container mx-auto flex justify-between items-center px-4">
          <Image src="/images/logo.png" width={120} height={50} alt="logo" className="hover:scale-110 duration-700 cursor-pointer" onClick={()=>(router.push("/"))}/>
           <ul className="flex gap-8 max-md:hidden">
             <li>
                <Link href="/" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500 ">Home</a>  
                </Link>
             </li>
             <li>
                <Link href="/courses" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">Courses</a>  
                </Link>
             </li>
             <li>
                <Link href="about" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">About</a>  
                </Link>
             </li>
             <li>
                <Link href="contact" legacyBehavior>
                  <a className="font-semibold text-[15px] hover:text-blue-500 duration-500">Contact</a>  
                </Link>
             </li>
           </ul>
           <div>
            <button className="flex items-center gap-3 font-bold max-md:hidden text-white hover:scale-110 duration-500 hover:bg-black bg-[#525FE1] py-3 w-fit px-4 rounded-md" onClick={()=>(router.push("/auth"))}>
            <i className='bx bx-user'></i>  Login/Register
            </button>
             <div className="md:hidden">
               <div className="flex gap-3">
               <i className='bx bx-user text-blue-500 p-2 bg-white border'></i>
               <i className='bx bx-menu text-blue-500 p-2 bg-white border cursor-pointer' onClick={showDrawer}></i>
               <MenuDrawer  />

               </div>
             </div>
           </div>
         </nav>
        </div>
         <div>
            {children}
         </div>
{/*footer */}
<footer className='bg-[#231f40] p-12'>
            <div className="container w-[85%] py-10 mx-auto grid md:grid-cols-4 md:gap-x-6 gap-y-5 md:gap-y-0 ">
                <div className="col-span-1 flex flex-col gap-10 ">
                    <Image src={"/images/logo.png"} alt='logo' width={160} height={200}/>
                    <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <div className="flex gap-3">
                        <i className='p-3.5 bg-[#393653] text-2xl text-white cLinkrsor-pointer  duration-300 rounded hover:bg-[#525fe1] bx bxl-facebook'></i>
                        <i className='p-3.5 bg-[#393653] text-2xl text-white cLinkrsor-pointer  duration-300 rounded hover:bg-[#525fe1] bx bxl-twitter'></i>
                        <i className='p-3.5 bg-[#393653] text-2xl text-white cLinkrsor-pointer  duration-300 rounded hover:bg-[#525fe1] bx bxl-pinterest-alt'></i>
                        <i className='p-3.5 bg-[#393653] text-2xl text-white cLinkrsor-pointer  duration-300 rounded hover:bg-[#525fe1] bx bxl-linkedin'></i>
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className='font-bold text-2xl text-white mb-5'>Explore</h1>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">About Us</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Upcoming Events</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Blog & News</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">FAQ Question</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Testimonial</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Privacy Policy</Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className='font-bold text-2xl text-white mb-5'>Useful Links</h1>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Contact Us</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Pricing Plan</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Gallery</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Instructor</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-chevrons-right text-xl'></i>
                        <Link href="/">Purchase Guide</Link>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <h1 className='font-bold text-2xl text-white mb-5'>Contact Info</h1>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i class='bx bx-location-plus'></i>
                        <Link href="/">275 Quadra Street Victoria Road, New York</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bxs-phone-call'></i>
                        <Link href="/">+ 1 &#40;237&#41; 382-2839</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bxs-phone-call'></i>
                        <Link href="/">+ 1 &#40;237&#41; 382-2839</Link>
                    </div>
                    <div className='flex gap-2 items-center text-white mt-4 text-lg hover:text-indigo-700'>
                        <i className='bx bx-envelope'></i>
                        <Link href="/">yourmailaddress@example.com</Link>
                    </div>
                </div>
            </div>
        </footer>

      </section>
    </>
  )
}

export default Layout
