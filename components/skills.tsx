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
  HTML: <SiHtml5 className='text-foreground' />,
  CSS: <SiCss3 className='text-foreground' />,
  JavaScript: <SiJavascript className='text-foreground' />,
  TypeScript: <SiTypescript className='text-foreground' />,
  React: <SiReact className='text-foreground' />,
  'Next.js': <SiNextdotjs className='text-foreground' />,
  Tailwind: <SiTailwindcss className='text-foreground' />,
  Zustand: <RiBearSmileFill className='text-foreground' />,
  'React Query': <TbApi className='text-foreground' />,
  'Redux Toolkit': <SiRedux className='text-foreground' />,
  'Node.js': <SiNodedotjs className='text-foreground' />,
  Prisma: <SiPrisma className='text-foreground' />,
  Express: <SiExpress className='text-foreground' />,
  Mongoose: <MongooseIcon className='text-foreground' />,
  PostgreSQL: <SiPostgresql className='text-foreground' />,
  MongoDB: <SiMongodb className='text-foreground' />,
  MySQL: <SiMysql className='text-foreground' />,
  Git: <SiGit className='text-foreground' />,
  GitHub: <SiGithub className='text-foreground' />
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
      <h2 className='title text-2xl md:text-3xl mb-12 font-bold text-foreground'>My Skills</h2>

      <div className='grid gap-8'>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className='rounded-lg border p-6 bg-card'
          >
            <h3 className='mb-6 text-xl font-semibold text-foreground'>
              {category.title}
            </h3>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center rounded-lg border py-2 transition-all hover:scale-105 bg-card'
                >
                  <div className='mb-2 text-2xl'>
                    {skillIcons[skill] || <TbApi className='text-foreground' />}
                  </div>
                  <span className='text-sm font-medium text-foreground'>
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