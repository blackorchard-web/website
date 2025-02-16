import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import Building from "../icons/building.svg";
import Parallax from "react-rellax";
import emailjs from '@emailjs/browser';

export const Head = () => <SEO title="Contact Us" />;

const ContactUsPage: React.FC<PageProps> = () => {
  const [status, setStatus] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);
  
  React.useEffect(() => {
    const publicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is missing');
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID;
    const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      setStatus('Configuration error. Please try again later.');
      return;
    }

    try {
      setStatus('Sending...');
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <header className="container-fluid bg-default contact-header text-white">
        <aside className="container">
          <div className="row pt-sm-0 overflow-none">
            <Parallax className="col-12 col-sm-4 mb-3 mb-sm-0 text-center" speed={4}>
              <img src={Logo} className="w-100 w-xs-90" alt="logo" />
            </Parallax>
            <div className="col-12 col-sm-6 mt-sm-auto pb-5 pb-sm-0 mb-sm-5 text-center text-sm-left">
              <h1 className="mb-3 font-weight-bold">Contact Us</h1>
              <svg viewBox="0 0 100 50" className="d-flex mx-auto ml-sm-1 w-[30px]">
                <polygon points="0,0 50,50 100,0" fill="#fff" />
              </svg>
            </div>
          </div>
        </aside>
      </header>

      <aside className="p-0 h-[15vh] relative">
        <svg viewBox="0 0 100 100" className="absolute top-0 w-full h-full -z-10" preserveAspectRatio="none">
          <polygon points="0,0 0,100 100,0" fill="#000" />
          <polygon points="0,100 100,0 100,100" fill="#f7f7f7" />
          <path d="M0 100,L100 0" strokeWidth={1} stroke="#999" />
        </svg>
      </aside>

      <section className="container-fluid bg-faded relative z-20 -mt-20">
        <div className="row pb-5 justify-content-center">
          <aside className="col-12 col-sm-10 col-lg-8">
            <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8 transform hover:scale-[1.01] transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  We'd love to hear from you. Please fill out this form and we'll get back to you promptly.
                </p>
              </div>

              <form 
                ref={formRef}
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5}
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none transition-all duration-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {status && (
                  <div className={`p-4 rounded-lg ${
                    status.includes('success') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : status === 'Sending...' 
                        ? 'bg-gray-50 text-gray-700 border border-gray-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {status}
                  </div>
                )}

                <div className="text-center">
                  <button 
                    type="submit"
                    className="inline-flex items-center px-8 py-4 text-white bg-black hover:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg font-medium"
                    disabled={status === 'Sending...'}
                  >
                    {status === 'Sending...' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-16 pt-12 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+234 123 456 7890</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@blackorchardltd.com</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-200">
                    <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <aside className="bg-faded pt-5 z-depth-bottom">
        <img src={Building} className="w-50 w-xs-100 mx-auto d-block z-depth-bottom" alt="building" />
      </aside>
      <hr className="m-0" />
    </>
  );
};

export default ContactUsPage;