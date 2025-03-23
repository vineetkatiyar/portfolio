'use client'

import React from 'react'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <section
      id='skills'
      className='mb-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-24'
    >
      <h2 className='title mb-10 text-left'>My Skills</h2>
      <ul className='flex flex-wrap justify-center gap-2'>
        {skillsData.map((skill, index) => (
          <li
            className='borderBlack rounded-xl bg-gray-100 px-5 py-3 dark:bg-white/10 dark:text-white/80'
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
