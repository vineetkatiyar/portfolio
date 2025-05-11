'use client'

import React from 'react'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="mb-16 max-w-5xl mx-auto text-center px-4">
      <h2 className="title mb-8 text-left text-3xl font-bold text-gray-800 dark:text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-gray-800 dark:text-white/80 transition hover:scale-105 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
