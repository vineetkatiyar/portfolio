import Image from 'next/image'
import authorImage from '@/public/images/authors/logo.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 space-y-3 md:mt-0'>
        <h1 className='title no-underline text-2xl md:text-3xl font-bold'>Hey, I&#39;m Vineet Katiyar.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a fullstack developer at Wire Wings in Lucknow <br />
          I specialize in creating full-stack solutions that solve real-world
          problems. With hands-on experience in React.js, Next.js, Node.js, and
          more, I love experimenting with new technologies and sharing my
          learning experiences with the developer community.
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
