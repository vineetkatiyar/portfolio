import Image from 'next/image'
import authorImage from '@/public/images/authors/logo.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 space-y-3 md:mt-0'>
        <h1 className='title text-2xl font-bold no-underline md:text-3xl'>
          Hey, I&#39;m Vineet Katiyar.
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I’m a Full Stack Developer at Blox, working on a Bahrain government
          forensic lab project. <br />
          I build scalable, production-ready applications using Next.js, React,
          and Node.js, focusing on performance, clean architecture, and robust
          API systems. <br />
          My work includes implementing role-based access control, multilingual
          platforms (English/Arabic), and integrating serverless backend
          services like AWS Lambda.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vineet Katiyar'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
