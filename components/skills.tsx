'use client'

import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiRedux
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { DiMongodb as MongooseIcon } from 'react-icons/di'
import { RiBearSmileFill } from 'react-icons/ri'

// Your existing data
export const frontend = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Zustand',
  'React Query',
  'Redux Toolkit'
] as const

export const backend = ['Node.js', 'Prisma', 'Express', 'Mongoose'] as const
export const database = ['PostgreSQL', 'MongoDB', 'MySQL'] as const
export const versionControl = ['Git', 'GitHub'] as const

// Map skills to icons
const skillIcons: Record<string, React.ReactElement> = {
  HTML: <SiHtml5 className='text-orange-500' />,
  CSS: <SiCss3 className='text-blue-500' />,
  JavaScript: <SiJavascript className='text-yellow-500' />,
  TypeScript: <SiTypescript className='text-blue-600' />,
  React: <SiReact className='text-cyan-500' />,
  'Next.js': <SiNextdotjs className='text-black dark:text-white' />,
  Tailwind: <SiTailwindcss className='text-cyan-400' />,
  Zustand: <RiBearSmileFill className='text-amber-600' />,
  'React Query': <TbApi className='text-red-500' />,
  'Redux Toolkit': <SiRedux className='text-purple-500' />,
  'Node.js': <SiNodedotjs className='text-green-600' />,
  Prisma: <SiPrisma className='text-blue-800 dark:text-blue-300' />,
  Express: <SiExpress className='text-gray-800 dark:text-gray-200' />,
  Mongoose: <MongooseIcon className='text-red-600' />,
  PostgreSQL: <SiPostgresql className='text-blue-700' />,
  MongoDB: <SiMongodb className='text-green-700' />,
  MySQL: <SiMysql className='text-blue-600' />,
  Git: <SiGit className='text-orange-600' />,
  GitHub: <SiGithub className='text-black dark:text-white' />
}

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', skills: frontend },
    { title: 'Backend', skills: backend },
    { title: 'Database', skills: database },
    { title: 'Version Control', skills: versionControl }
  ]

  return (
    <section id='skills' className='pb-16'>
      <h2 className='title mb-12 font-bold text-cyan-700'>My Skills</h2>

      <div className='grid gap-8'>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900'
          >
            <h3 className='mb-6 text-xl font-semibold text-gray-800 dark:text-white'>
              {category.title}
            </h3>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 py-2 transition-all hover:scale-105 hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
                >
                  <div className='mb-2 text-2xl'>
                    {skillIcons[skill] || <TbApi />}
                  </div>
                  <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
