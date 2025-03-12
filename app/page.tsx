import ContactForm from '@/components/contact-form'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Skills from '@/components/skills'
// import Contact from './contact/page'

export default function Home() {
  return (
    <section className='pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <Skills />
        <RecentPosts />
        <RecentProjects />
        <ContactForm />
      </div>
    </section>
  )
}
