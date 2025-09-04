import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xdkeqjoy");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  if (state.succeeded) {
    return (
      <section id="contact" className="contact primary-container">
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__form">
              <div className="contact__form-wrapper">
                <div className="contact__success-message">
                  Message sent successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact primary-container">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__form">
            <div className="contact__form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="contact__form-input"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="contact__form-input"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="contact__form-textarea"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="contact__form-submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Enquire Now!"}
                </button>
              </form>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__info-content">
              <h1 className="contact__title">Let's talk</h1>
              <h3 className="contact__subtitle">How we can help you?</h3>
              <p className="contact__text">
                If you'd like to work with us, drop us a message using the
                contact form or get in touch via email or phone.
              </p>
              <p className="contact__text">See you!</p>
            </div>
            <div className="contact__details">
              <div className="contact__detail">
                <a
                  href="tel:+918101395176"
                  className="contact__link"
                  title="Phone"
                >
                  <IoCallOutline className="contact__icon" />
                  Call Now
                </a>
              </div>
              <div className="contact__detail">
                <a
                  href="https://wa.link/73zyrm"
                  target="_blank"
                  className="contact__link"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="contact__icon" />
                  WhatsApp
                </a>
              </div>
              <div className="contact__detail">
                <a
                  href="mailto:faizdevandco@gmail.com"
                  className="contact__link"
                  title="Email"
                >
                  <CiMail className="contact__icon" />
                  faizdevandco@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
