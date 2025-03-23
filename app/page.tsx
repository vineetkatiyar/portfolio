import Intro from '@/components/intro'
import NewsletterForm from '@/components/news-letter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <section className='pt-40 pb-16'>
      <div className='container max-w-3xl'>
        <Intro />
        <Skills />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  )
}
