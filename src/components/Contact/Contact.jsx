import React, { useState } from "react";
import "./Contact.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Simulated API call - replace with actual backend integration later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on successful submission
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      setError("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact primary-container">
      <div className="contact__container">
        <div className="contact__content">
          {/* Contact Form Block */}
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact__form-input"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                    className="contact__form-textarea"
                  ></textarea>
                </div>

                {/* Submission Feedback */}
                {submitSuccess && (
                  <div className="contact__success-message">
                    Message sent successfully!
                  </div>
                )}
                {error && <div className="contact__error-message">{error}</div>}

                <button
                  type="submit"
                  className="contact__form-submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Enquire Now!"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Block */}
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
                  href="mailto:faizdevandco@gmail.com"
                  className="contact__link"
                  title="Email"
                >
                  <CiMail className="contact__icon" />
                  faizdevandco@gmail.com
                </a>
              </div>
              <div className="contact__detail">
                <a
                  href="tel:+917294800465"
                  className="contact__link"
                  title="Phone"
                >
                  <IoCallOutline className="contact__icon" />
                  +91 7294800465
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
