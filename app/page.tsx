import Intro from '@/components/intro'
import NewsletterForm from '@/components/news-letter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <section className='pb-10 pt-28'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <Skills />
        <NewsletterForm />
      </div>
    </section>
  )
}
