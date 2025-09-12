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
  HTML: <SiHtml5 className='text-black dark:text-white' />,
  CSS: <SiCss3 className='text-black dark:text-white' />,
  JavaScript: <SiJavascript className='text-black dark:text-white' />,
  TypeScript: <SiTypescript className='text-black dark:text-white' />,
  React: <SiReact className='text-black dark:text-white' />,
  'Next.js': <SiNextdotjs className='text-black dark:text-white' />,
  Tailwind: <SiTailwindcss className='text-black dark:text-white' />,
  Zustand: <RiBearSmileFill className='text-black dark:text-white' />,
  'React Query': <TbApi className='text-black dark:text-white' />,
  'Redux Toolkit': <SiRedux className='text-black dark:text-white' />,
  'Node.js': <SiNodedotjs className='text-black dark:text-white' />,
  Prisma: <SiPrisma className='text-black dark:text-white' />,
  Express: <SiExpress className='text-black dark:text-white' />,
  Mongoose: <MongooseIcon className='text-black dark:text-white' />,
  PostgreSQL: <SiPostgresql className='text-black dark:text-white' />,
  MongoDB: <SiMongodb className='text-black dark:text-white' />,
  MySQL: <SiMysql className='text-black dark:text-white' />,
  Git: <SiGit className='text-black dark:text-white' />,
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
      <h2 className='title text-2xl md:text-3xl mb-12 font-bold text-black dark:text-white'>My Skills</h2>

      <div className='grid gap-8'>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className='rounded-xl border-2 border-gray-500 dark:border-white/50 p-6 bg-white dark:bg-black'
          >
            <h3 className='mb-6 text-xl font-semibold text-black dark:text-white'>
              {category.title}
            </h3>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center rounded-xl border border-gray-500 dark:border-white/50 py-2 transition-all hover:scale-105 bg-white dark:bg-black'
                >
                  <div className='mb-2 text-2xl'>
                    {skillIcons[skill] || <TbApi className='text-black dark:text-white' />}
                  </div>
                  <span className='text-sm font-medium text-black dark:text-white'>
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