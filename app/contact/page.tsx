import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl space-y-10'>
        <h2 className='title'>Contact me!</h2>
        <ContactForm />
      </div>
    </section>
  )
}
