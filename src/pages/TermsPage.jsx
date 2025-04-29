import React from "react";
import { Helmet } from "react-helmet"; 
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

        {/* Open Graph / Facebook */}
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
            <b>Last updated:</b> April 23, 2025
          </p>

          <p>
            Please read these terms and conditions carefully before using Our
            Service.
          </p>

          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h4>Definitions</h4>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li>
              <b>Affiliate</b> means an entity that controls, is controlled by
              or is under common control with a party...
            </li>
            <li>
              <b>Country</b> refers to: West Bengal, India
            </li>
            <li>
              <b>Company</b> refers to Faiz Dev &amp; Co.
            </li>
            <li>
              <b>Device</b> means any device that can access the Service such as
              a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <b>Service</b> refers to the Website.
            </li>
            <li>
              <b>Terms and Conditions</b> means these Terms and Conditions that
              form the entire agreement...
            </li>
            <li>
              <b>Third-party Social Media Service</b> means any services or
              content provided by a third-party...
            </li>
            <li>
              <b>Website</b> refers to Faiz Dev &amp; Co., accessible from
              https://faizdevandco.in
            </li>
            <li>
              <b>You</b> means the individual or entity using the Service.
            </li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>Acknowledgment</h3>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company...
          </p>
        </div>

        <div className="sub__container">
          <h3>Links to Other Websites</h3>
          <p>
            Our Service may contain links to third-party websites or services
            not owned or controlled by the Company...
          </p>
        </div>

        <div className="sub__container">
          <h3>Termination</h3>
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever...
          </p>
        </div>

        <div className="sub__container">
          <h3>Limitation of Liability</h3>
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers...
          </p>
        </div>

        <div className="sub__container">
          <h3>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind...
          </p>
        </div>

        <div className="sub__container">
          <h3>Governing Law</h3>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service...
          </p>
        </div>

        <div className="sub__container">
          <h3>Disputes Resolution</h3>
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve it informally by contacting the Company.
          </p>
        </div>

        <div className="sub__container">
          <h3>For European Union (EU) Users</h3>
          <p>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident.
          </p>
        </div>

        <div className="sub__container">
          <h3>United States Legal Compliance</h3>
          <p>
            You represent and warrant that You are not located in a country that
            is subject to the United States government embargo...
          </p>
        </div>

        <div className="sub__container">
          <h3>Severability and Waiver</h3>
          <h4>Severability</h4>
          <p>
            If any provision of these Terms is held to be unenforceable or
            invalid, that provision will be interpreted to best accomplish the
            objectives...
          </p>
          <h4>Waiver</h4>
          <p>
            The failure to exercise a right or to require performance of an
            obligation shall not affect a party's ability to do so later...
          </p>
        </div>

        <div className="sub__container">
          <h3>Translation Interpretation</h3>
          <p>
            If these Terms and Conditions have been translated, the original
            English version shall prevail in case of a dispute.
          </p>
        </div>

        <div className="sub__container">
          <h3>Changes to These Terms and Conditions</h3>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            Continued use of the Service after changes means You accept them.
          </p>
        </div>

        <div className="sub__container">
          <h3>Contact Us</h3>
          <p>
            If you have any questions about these Terms and Conditions, You can
            contact us:
            <br />
            By email: faizdevandco@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
