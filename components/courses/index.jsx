import React from 'react'
import Layout from '../shared/layout'
import Meta from '../shared/meta'
import Image from 'next/image'
import Link from 'next/link'

const allCourses = [
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
    {
        label: 'react-js fullstack',
        duration: '20 days',
        price: '6000',
        lessons: "15 lessons",
        images: '/images/course-img-1.webp'
    },
]

const Courses = () => {
  return (
    <Layout>
        <Meta title='Courses' description='welcome to the courses section here you will find the latest courses'></Meta>
        <div className="w-[100%] md:h-[300px] h-[150px] relative">
            <Image src={"/images/course-banner.jpg"} alt='course-banner' layout='fill'/>
        </div>
        <div className="container mx-auto w-[85%] py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                allCourses && allCourses.map((course, courseIndex)=>(
                    <div className="col-span-1 shadow-lg duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 rounded-md ">
                        <button className="w-full h-[170px] relative mb-2">
                            <Image src={course.images} alt='course-img' layout='fill' className='rounded-t-md' />
                        </button>
                        <div className="px-5 flex flex-col gap-4 pb-5">
                            <div className="flex justify-between">
                                <p className='capitalize text-sm'>{course.lessons}</p>
                                <p className='capitalize text-sm'>{course.duration}</p>
                            </div>
                            <div className="">
                                <Link href={`/courses/${course.label.toLowerCase().split(" ").join("-")}`} legacyBehavior>
                                    <a className='font-bold capitalize'>{course.label}</a>
                                </Link>
                                <p className='capitalize font-semibold'>
                                    &#8377;
                                    <Link href={`/courses/${course.label.toLowerCase().split(" ").join("-")}`}>{course.price}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </Layout>    
  )
}

export default Courses