import React from "react";
import "../styles/Company.css"

const PolicyPage = () => {
  return (
    <div className="privacy-parent-container primary-container">
      <div className="sub__container">
        <h2>Privacy Policy</h2>
        <h3>Introduction</h3>
        <p>
          At faizdevandco.online, your privacy is important to us. This Privacy
          Policy outlines how we collect, use, and protect your personal
          information when you use our website and services. By using our
          website, you agree to the practices described in this policy.
        </p>
      </div>

      <div className="sub__container">
        <h3>Information We Collect</h3>
        <h4>Personal Information</h4>
        <p>
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, payment details, and any other
          information necessary to provide our services
        </p>
        <h4>Usage Data</h4>
        <p>
          We automatically collect information about how you use our website,
          such as your IP address, browser type, the pages you visit, and the
          time you spend on each page.
        </p>
        <h4>Cookies</h4>
        <p>
          Our website uses cookies and similar technologies to improve your
          experience. Cookies help us understand your preferences and enable
          certain website features.
        </p>
      </div>

      <div className="sub__container">
        <h3>How We Use Your Information</h3>
        <ul>
          <li>
            <b>To Provide Services:</b> We use your information to process
            transactions, deliver digital products, and offer customer support.
          </li>
          <li>
            <b>To Improve Our Website:</b> We analyze usage data to enhance our
            website, tailor your experience, and develop new features.
          </li>
          <li>
            <b>To Communicate:</b> We may send you updates, promotional offers,
            and other communications. You can opt out of marketing
            communications at any time.
          </li>
        </ul>
      </div>

      <div className="sub__container">
        <h3>Sharing Your Information</h3>
        <h4>With Service Providers</h4>
        <p>
          We may share your information with third-party providers who assist us
          in operating our website, processing payments, and delivering emails.
        </p>
        <h4>For Legal Purposes</h4>
        <p>
          We may disclose your information if required by law or to respond to
          legal requests from authorities.
        </p>
        <h4>In Business Transfers</h4>
        <p>
          In the event of a business transaction such as a merger, acquisition,
          or sale of assets, your information may be transferred to the new
          owner.
        </p>
      </div>

      <div className="sub__container">
        <h3>Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the internet is
          completely secure, and we cannot guarantee absolute security
        </p>
      </div>

      <div className="sub__container">
        <h3>Your Rights</h3>
        <ul>
          <li>
            <b>Request Deletion:</b> You can request the deletion of your
            personal data, subject to certain legal exceptions.
          </li>
          <li>
            <b>Opt-Out:</b> You can opt out of receiving promotional emails by
            following the unsubscribe instructions provided in those emails
          </li>
        </ul>
      </div>

      <div className="sub__container">
        <h3>Children's Privacy</h3>
        <p>
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          we discover that we have collected such information, we will take
          steps to delete it.
        </p>
      </div>

      <div className="sub__container">
        <h3>Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the "Last Updated" date will be updated
          accordingly. We encourage you to review this policy periodically.
        </p>
      </div>

      <div className="sub__container">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at <br /> contact@faizdevandco.online
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
