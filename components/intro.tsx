import Image from 'next/image'
import authorImage from '@/public/images/authors/logo.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0 space-y-3'>
        <h1 className='title no-underline'>Hey, I&#39;m Vineet Katiyar.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a fullstack developer at Techpile Technology in Lucknow <br />
          I specialize in creating full-stack solutions that solve real-world
          problems. With hands-on experience in React.js, Next.js, Node.js, and
          more, I recently developed an innovative e-commerce platform that not
          only improved the shopping experience but also optimized back-end
          performance. I love experimenting with new technologies and sharing my
          learning experiences with the developer community. Let&#39;s build
          something extraordinary together!
        </p>
        <div className='flex space-x-3 '>
          <Link
            href='/contact'
            className='group flex items-center gap-2 rounded-full bg-gray-500 px-7 py-3 text-white outline-none'
          >
            Contact me here
            <BsArrowRight className='' />
          </Link>

          <a
            className='group flex items-center gap-2 rounded-full bg-gray-500 px-7 py-3 text-white outline-none'
            href='/CV.pdf'
            download
          >
            Download CV
            <HiDownload className='' />
          </a>
        </div>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
