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
          <aside className="col-12 col-sm-10 col-lg-8 contact-card">
            <div className="card p-lg-5">
              <form 
                ref={formRef}
                method="POST" 
                onSubmit={handleSubmit} 
                id="contactForm"
              >
                <div className="card-block row">
                  <div className="col-12 col-sm-6 px-3">
                    <article className="form-group">
                      <input type="text" className="form-control" name="name" required />
                      <hr />
                      <label className="col-form-label">Fullname</label>
                    </article>
                  </div>
                  <div className="col-12 col-sm-6 px-3">
                    <article className="form-group">
                      <input type="email" className="form-control" name="email" required />
                      <hr />
                      <label className="col-form-label">Email</label>
                    </article>
                  </div>
                  <div className="col-12 px-3">
                    <article className="form-group">
                      <textarea rows={5} className="form-control" name="message" required></textarea>
                      <hr />
                      <label className="col-form-label">Message</label>
                    </article>
                  </div>
                  <div className="col-12 p-3 text-right">
                    <h4 id="status" className="text-center text-warning">{status}</h4>
                    <button className="btn btn-info btn-lg px-sm-5" type="submit" id="contactBtn">
                      Send
                    </button>
                  </div>
                </div>
              </form>
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