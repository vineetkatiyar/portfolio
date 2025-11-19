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

// Your existing data with added proficiency levels (0-100)
export const frontend = [
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 60 },
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 70 },
  { name: 'Tailwind', level: 85 },
  { name: 'Zustand', level: 75 },
  { name: 'Tanstack Query', level: 75 },
  { name: 'Redux Toolkit', level: 80 }
] as const

export const backend = [
  { name: 'Node.js', level: 85 },
  { name: 'Prisma', level: 80 },
  { name: 'Express', level: 80 },
  { name: 'Mongoose', level: 80 }
] as const

export const database = [
  { name: 'PostgreSQL', level: 70 },
  { name: 'MongoDB', level: 80 },
] as const

export const versionControl = [
  { name: 'Git', level: 80 },
  { name: 'GitHub', level: 90 }
] as const

// Map skills to icons
const skillIcons: Record<string, React.ReactElement> = {
  JavaScript: <SiJavascript className='text-foreground' />,
  TypeScript: <SiTypescript className='text-foreground' />,
  React: <SiReact className='text-foreground' />,
  'Next.js': <SiNextdotjs className='text-foreground' />,
  Tailwind: <SiTailwindcss className='text-foreground' />,
  Zustand: <RiBearSmileFill className='text-foreground' />,
  'Tanstack Query': <TbApi className='text-foreground' />,
  'Redux Toolkit': <SiRedux className='text-foreground' />,
  'Node.js': <SiNodedotjs className='text-foreground' />,
  Prisma: <SiPrisma className='text-foreground' />,
  Express: <SiExpress className='text-foreground' />,
  Mongoose: <MongooseIcon className='text-foreground' />,
  PostgreSQL: <SiPostgresql className='text-foreground' />,
  MongoDB: <SiMongodb className='text-foreground' />,
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
    <section id='skills' className='pb-12'>
      {/* Your original heading style */}
      <h2 className='title mb-5 text-2xl font-bold text-foreground md:text-3xl'>
        My Skills
      </h2>

      <div className='space-y-8'>
        {skillCategories.map(category => (
          <div key={category.title} className='space-y-4'>
            {/* Your original category header style */}
            <h3 className='mb-6 text-xl font-semibold text-foreground'>
              {category.title}
            </h3>

            {/* Compact Progress Bars Grid */}
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
              {category.skills.map(skill => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 rounded-md border border-border bg-card p-2 transition-colors duration-200 hover:bg-accent/5'
                >
                  {/* Icon */}
                  <div className='flex-shrink-0 text-lg text-foreground'>
                    {skillIcons[skill.name]}
                  </div>

                  {/* Name and Progress Bar */}
                  <div className='min-w-0 flex-1'>
                    <div className='mb-1 flex items-center justify-between'>
                      <span className='truncate text-xs font-medium text-foreground'>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
