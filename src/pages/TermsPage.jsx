import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Termspage.css";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Faiz Dev & Co.</title>
        <meta
          name="description"
          content="Review Faiz Dev & Co.'s Terms and Conditions outlining the rules, responsibilities, and legal agreements involved in using our web development and digital services."
        />
        <meta
          name="keywords"
          content="Terms and Conditions, Faiz Dev & Co, web development agreement, service terms, website usage, legal agreement, development policies, user obligations"
        />
        <link rel="canonical" href="https://www.faizdevandco.in/terms-page" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Faiz Dev & Co." />
        <meta
          property="og:url"
          content="https://www.faizdevandco.in/terms-page"
        />
        <meta
          property="og:title"
          content="Terms and Conditions | Faiz Dev & Co."
        />
        <meta
          property="og:description"
          content="Understand Faiz Dev & Co.'s service terms and legal policies. Know your rights and obligations when engaging with our web development services."
        />
      </Helmet>

      <div className="privacy-parent-container primary-container">
        <div className="sub__container">
          <h2>Terms and Conditions</h2>
          <p>
            <strong>Last Updated:</strong> June 05, 2025
          </p>
        </div>

        <div className="sub__container">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By using our website, requesting services, or engaging Faiz Dev &
            Co., you agree to these Terms and Conditions. If you do not agree,
            please refrain from using our services.
          </p>
        </div>

        <div className="sub__container">
          <h3>2. Services Provided</h3>
          <p>
            We provide website design, development, hosting setup, and
            maintenance services. Each service engagement will be detailed in a
            custom proposal.
          </p>
        </div>

        <div className="sub__container">
          <h3>3. Payment Terms</h3>
          <p>
            All service fees must be paid as per the agreement. Hosting and
            maintenance may be billed in advance. Payments are securely
            processed through designated gateways.
          </p>
        </div>

        <div className="sub__container">
          <h3>4. Intellectual Property</h3>
          <p>
            All deliverables remain our property until full payment is received.
            Upon payment, a limited license is granted for use in your project
            only.
          </p>
        </div>

        <div className="sub__container">
          <h3>5. Disclaimer</h3>
          <p>
            Services are provided “as is” without warranties. Your sole remedy
            is correction as per your agreement or proposal.
          </p>
        </div>

        <div className="sub__container">
          <h3>6. User Conduct</h3>
          <p>
            You agree not to misuse our website or services. Prohibited
            activities include:
          </p>
          <ul>
            <li>Sharing login credentials with unauthorized users</li>
            <li>Attempting to breach security or access unauthorized areas</li>
            <li>Uploading harmful, unlawful, or infringing content</li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>7. Modifications to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use implies acceptance of the updated terms.
          </p>
        </div>

        <div className="sub__container">
          <h3>8. Account Termination</h3>
          <p>
            We may suspend or terminate services if these Terms are violated.
            Outstanding payments remain due upon termination.
          </p>
        </div>

        <div className="sub__container">
          <h3>9. Governing Law</h3>
          <p>
            These Terms are governed by Indian law. Jurisdiction resides with
            courts located in West Bengal, India.
          </p>
        </div>

        <div className="sub__container">
          <h3>10. Contact Us</h3>
          <p>
            Questions or concerns? Contact us at:
            <br />
            <a href="mailto:faizdevandco@gmail.com">faizdevandco@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
