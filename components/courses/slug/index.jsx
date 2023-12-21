import Layout from '@/components/shared/layout'
import Meta from '@/components/shared/meta'
import { useRouter } from 'next/router'
import React from 'react'


const courseLessons = [
    {
        lessonName: 'core concept',
        chapters: [
            {
                chapterName: 'ch-1 intro',
                duration: '30min'
            },
            {
                chapterName: 'ch-2 core basics',
                duration: '30min'
            },
            {
                chapterName: 'ch-3 core intermediate',
                duration: '30min'
            },
            {
                chapterName: 'ch-4 core advance',
                duration: '30min'
            },
            {
                chapterName: 'ch-5 core practice',
                duration: '30min'
            },
        ],
    },
    {
        lessonName: 'core concept',
        chapters: [
            {
                chapterName: 'ch-1 intro',
                duration: '30min'
            },
            {
                chapterName: 'ch-2 core basics',
                duration: '30min'
            },
            {
                chapterName: 'ch-3 core intermediate',
                duration: '30min'
            },
            {
                chapterName: 'ch-4 core advance',
                duration: '30min'
            },
            {
                chapterName: 'ch-5 core practice',
                duration: '30min'
            },
        ],
    },
    {
        lessonName: 'core concept',
        chapters: [
            {
                chapterName: 'ch-1 intro',
                duration: '30min'
            },
            {
                chapterName: 'ch-2 core basics',
                duration: '30min'
            },
            {
                chapterName: 'ch-3 core intermediate',
                duration: '30min'
            },
            {
                chapterName: 'ch-4 core advance',
                duration: '30min'
            },
            {
                chapterName: 'ch-5 core practice',
                duration: '30min'
            },
        ],
    },
    {
        lessonName: 'core concept',
        chapters: [
            {
                chapterName: 'ch-1 intro',
                duration: '30min'
            },
            {
                chapterName: 'ch-2 core basics',
                duration: '30min'
            },
            {
                chapterName: 'ch-3 core intermediate',
                duration: '30min'
            },
            {
                chapterName: 'ch-4 core advance',
                duration: '30min'
            },
            {
                chapterName: 'ch-5 core practice',
                duration: '30min'
            },
        ],
    },
    {
        lessonName: 'core concept',
        chapters: [
            {
                chapterName: 'ch-1 intro',
                duration: '30min'
            },
            {
                chapterName: 'ch-2 core basics',
                duration: '30min'
            },
            {
                chapterName: 'ch-3 core intermediate',
                duration: '30min'
            },
            {
                chapterName: 'ch-4 core advance',
                duration: '30min'
            },
            {
                chapterName: 'ch-5 core practice',
                duration: '30min'
            },
        ],
    },
]

const Slug = () => {
    const router = useRouter()

  return (
    <Layout>
        <Meta title={router.query.slug && router.query.slug.toLowerCase().split("-").join(" ") } />
        <div className=' bg-gray-200 py-10'>
            <div className="container mx-auto w-[85%] grid md:grid-cols-3 md:gap-x-4 relative">
                <div className="col-span-2 flex flex-col gap-y-4">
                    <div className=" bg-white p-6 flex flex-col gap-4">
                        <h1 className='text-3xl font-bold capitalize'>{router.query.slug && router.query.slug.toLowerCase().split("-").join(" ")}</h1>
                        <p className='text-gray-500'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers.
                        </p>
                    </div>
                    {
                        courseLessons && courseLessons.map((lesson, lessonIndex)=>(
                            <div key={lessonIndex} className=" bg-white p-6 mt-4 flex flex-col gap-4">
                                <h1 className='text-3xl font-bold capitalize'>{lesson.lessonName}</h1>
                            <ul className='ml-5'>
                                {
                                    lesson.chapters.map((chapter, chapterIndex)=>(
                                        <li key={chapterIndex} className='py-2'>
                                            <h3 className='capitalize font-semibold'>{chapter.chapterName}</h3>
                                            <p className='capitalize text-gray-500 text-sm'>{chapter.duration}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        ))
                    }
                </div>
                <div className="col-span-1 ">
                    <h2 className='bg-indigo-500 w-fit py-2 px-4 rounded-t-md capitalize font-bold text-white'>pay onetime</h2>
                    <div className="bg-white sticky top-16">
                        <div className="p-3 flex flex-col gap-5">
                            <h1 className=' capitalize font-bold text-4xl'>rs. 4000</h1>
                            <ul className='flex flex-col gap-2'>
                                <li className='flex gap-1 items-center'>
                                    <i className='bx bx-check-circle text-xl'></i>
                                    <p className='text-sm'>6 Months free internships</p>
                                </li>
                                <li className='flex gap-1 items-center'>
                                    <i className='bx bx-check-circle text-xl'></i>
                                    <p className='text-sm'>Help & Ticket Support</p>
                                </li>
                                <li className='flex gap-1 items-center'>
                                    <i className='bx bx-check-circle text-xl'></i>
                                    <p className='text-sm'>Increase daily video limit</p>
                                </li>
                                <li className='flex gap-1 items-center'>
                                    <i className='bx bx-check-circle text-xl'></i>
                                    <p className='text-sm'>Unlimited downloads</p>
                                </li>
                                <li className='flex gap-1 items-center'>
                                    <i className='bx bx-check-circle text-xl'></i>
                                    <p className='text-sm'>Lifetime profile access</p>
                                </li>
                            </ul>
                            <button className='text-xl rounded-md font-bold capitalize text-white py-4 bg-gradient-to-tr from-indigo-500 to-rose-400'>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Slug