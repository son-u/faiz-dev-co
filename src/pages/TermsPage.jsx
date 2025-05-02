import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Termspage.css";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Faiz Dev &amp; Co.</title>
        <meta
          name="description"
          content="Review the Terms and Conditions of Faiz Dev &amp; Co. to understand the rules, obligations, and legal agreements involved in using our web development services."
        />
        <meta
          name="keywords"
          content="web development, new web devloper, new web agency near me, terms and conditions, service agreement, Faiz Dev &amp; Co. terms, website usage rules, legal agreement, service policies, user obligations"
        />
        <link rel="canonical" href="https://www.faizdevandco.in/terms-page" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Faiz Dev &amp; Co." />
        <meta
          property="og:url"
          content="https://www.faizdevandco.in/terms-page"
        />
        <meta
          property="og:title"
          content="Terms and Conditions | Faiz Dev &amp; Co."
        />
        <meta
          property="og:description"
          content="Learn about Faiz Dev &amp; Co.'s Terms and Conditions, outlining the rights, responsibilities, and expectations when using our professional digital services."
        />
      </Helmet>

      <div className="privacy-parent-container primary-container">
        <div className="sub__container">
          <h2>Terms and Conditions</h2>
          <p>
            <strong>Last Updated :</strong> May 01, 2025
          </p>
        </div>

        <div className="sub__container">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our website, requesting a quote, or engaging
            Faiz Dev & Co.'s services, you agree to these Terms and Conditions.
            If you do not agree, please do not use or request our services.
          </p>
        </div>

        <div className="sub__container">
          <h3>2. Services Provided</h3>
          <p>
            Faiz Dev & Co. offers website design, development, hosting setup,
            and maintenance services tailored to businesses and individuals.
            Scope, deliverables, timelines, and pricing will be outlined in your
            individual proposal.
          </p>
        </div>

        <div className="sub__container">
          <h3>3. Payment Terms</h3>
          <p>
            All fees for services must be paid according to the schedule in your
            proposal. Hosting and maintenance charges (if included) are billed
            in advance. Payments are processed securely through our chosen
            payment gateways.
          </p>
        </div>

        

        <div className="sub__container">
          <h3>4. Intellectual Property</h3>
          <p>
            All designs, code, and materials created by Faiz Dev & Co. remain
            our intellectual property until full payment is received. Upon
            payment, you receive a non-exclusive, non-transferable license to
            use the deliverables for your project. Unauthorized reproduction or
            distribution is prohibited.
          </p>
        </div>

        <div className="sub__container">
          <h3>5. Disclaimer</h3>
          <p>
            Services and deliverables are provided “AS IS” and “AS AVAILABLE.”
            Faiz Dev & Co. disclaims all warranties, express or implied,
            including merchantability or fitness for a particular purpose. Your
            sole remedy for any defects is correction as outlined in your
            proposal.
          </p>
        </div>

        <div className="sub__container">
          <h3>6. User Conduct</h3>
          <p>
            You agree not to misuse our website or services, including but not
            limited to:
          </p>
          <ul>
            <li>
              Sharing admin or login credentials with unauthorized parties.
            </li>
            <li>
              Attempting to disrupt or gain unauthorized access to our systems.
            </li>
            <li>Uploading malicious or infringing content.</li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>7. Modifications to Terms</h3>
          <p>
            Faiz Dev & Co. reserves the right to update or modify these Terms
            and Conditions at any time without prior notice. Your continued use
            or engagement after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div className="sub__container">
          <h3>8. Account Termination</h3>
          <p>
            We may suspend or terminate your access to any hosted services or
            our website if you breach these Terms or for any other reason at our
            discretion. Termination does not relieve you of obligations to pay
            outstanding fees.
          </p>
        </div>

        <div className="sub__container">
          <h3>9. Governing Law and Jurisdiction</h3>
          <p>
            These Terms and Conditions are governed by the laws of India. Any
            disputes arising under or in connection with these Terms shall be
            subject to the exclusive jurisdiction of the courts in West Bengal,
            India.
          </p>
        </div>

        <div className="sub__container">
          <h3>10. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Terms & Conditions,
            please contact us:
            <br />
            <a href="mailto:faizdevandco@gmail.com">faizdevandco@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
