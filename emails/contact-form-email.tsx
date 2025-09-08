interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div className="max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 font-sans">
    <h1 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
      📩 New Contact Form Submission
    </h1>

    <p className="text-base text-gray-700 mb-4">
      <span className="font-semibold text-blue-600">{name}</span>{' '}
      <span className="text-gray-500">({email})</span> has sent you a message:
    </p>

    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Message:</h2>
      <p className="text-gray-700 leading-relaxed">{message}</p>
    </div>

    <footer className="text-sm text-gray-500 text-center border-t border-gray-200 pt-3">
      This message was sent from your website contact form.
    </footer>
  </div>
)

export default ContactFormEmail
