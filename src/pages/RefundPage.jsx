import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Company.css";

const RefundPage = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Faiz Dev & Co.</title>
        <meta
          name="description"
          content="Read Faiz Dev & Co.'s Refund Policy to understand the conditions under which refunds are considered for our web development services."
        />
        <meta
          name="keywords"
          content="refund policy, web development refund, Faiz Dev & Co. refund, service cancellation, non-refundable services, web development terms"
        />

        {/* Canonical Tag (must match the live indexed URL) */}
        <link
          rel="canonical"
          href="https://www.faizdevandco.in/refund-policy"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Faiz Dev & Co." />
        <meta
          property="og:url"
          content="https://www.faizdevandco.in/refund-policy"
        />
        <meta property="og:title" content="Refund Policy | Faiz Dev & Co." />
        <meta
          property="og:description"
          content="Understand Faiz Dev & Co.'s policies regarding refunds for web development services. Know your rights and limitations."
        />
      </Helmet>

      <div className="privacy-parent-container primary-container">
        <div className="sub__container">
          <h2>Refund Policy</h2>
          <p className="last-updated">
            <strong>Last updated:</strong> May 01, 2025
          </p>
        </div>

        <div className="sub__container">
          <h3>1. Introduction</h3>
          <p>
            Thank you for choosing Faiz Dev & Co. for your website development
            needs. This Refund Policy explains when, if ever, we offer refunds
            for our services.
          </p>
        </div>

        <div className="sub__container">
          <h3>2. Eligibility for Refunds</h3>
          <p>
            Our standard policy is that all development fees are non‑refundable.
            However, if work has not yet commenced on your project after
            payment, you may request a full refund.
          </p>
        </div>

        <div className="sub__container">
          <h3>3. Non-Refundable Situations</h3>
          <p>Refunds will not be granted in the following cases:</p>
          <ul>
            <li>
              Any deliverables already provided (mockups, designs, code, etc.).
            </li>
            <li>Work has commenced or is in progress on your project.</li>
            <li>
              Changes or delays caused by client feedback or scope revisions.
            </li>
            <li>
              Fees for hosting setup, maintenance, or activated third-party
              services.
            </li>
            <li>
              Cancellation requests received after the project kickoff date.
            </li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>4. Final Decision</h3>
          <p>
            All refund requests are reviewed by the Faiz Dev & Co. leadership
            team. Our decision is final and binding.
          </p>
        </div>

        <div className="sub__container">
          <h3>5. Changes to This Refund Policy</h3>
          <p>
            We may update this policy from time to time. Any changes will be
            posted with a new “Last updated” date. Please review it
            periodically.
          </p>
        </div>

        <div className="sub__container">
          <h3>6. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Refund Policy,
            please contact us:
            <br />
            <a href="mailto:faizdevandco@gmail.com" rel="noopener noreferrer">
              faizdevandco@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RefundPage;
