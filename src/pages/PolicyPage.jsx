import { Helmet } from "react-helmet-async";
import "../styles/Company.css";

const PolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Faiz Dev & Co.</title>
        <meta
          name="description"
          content="Review Faiz Dev & Co.'s Privacy Policy to understand how we collect, use, and safeguard your personal information while delivering professional web development and digital services."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, user data security, Faiz Dev & Co. privacy, web development privacy, GDPR compliance, secure web services"
        />

        <link rel="canonical" href="https://www.faizdevandco.in/policy-page" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Faiz Dev & Co." />
        <meta
          property="og:url"
          content="https://www.faizdevandco.in/policy-page"
        />
        <meta property="og:title" content="Privacy Policy | Faiz Dev & Co." />
        <meta
          property="og:description"
          content="Understand how Faiz Dev & Co. collects, uses, and protects your personal data when you use our web development and digital services."
        />
      </Helmet>

      <div className="privacy-parent-container primary-container">
        <div className="sub__container">
          <h2>Privacy Policy</h2>
          <p className="last-updated">
            <strong>Last updated:</strong> June 05, 2025
          </p>
          <p>
            At Faiz Dev & Co., your privacy is our priority. This policy
            explains what we collect, why, and how you can manage it.
          </p>
        </div>

        <div className="sub__container">
          <h3>Information We Collect</h3>
          <ul>
            <li>
              <strong>Personal Data:</strong> Name, email, payment info you
              share.
            </li>
            <li>
              <strong>Cookies:</strong> To power features, analytics, and
              preferences.
            </li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>How We Use Your Info</h3>
          <ul>
            <li>Deliver and improve our web-dev services.</li>
            <li>Send you updates & offers (opt-out anytime).</li>
            <li>Analyze usage for a better experience.</li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>Sharing Your Data</h3>
          <ul>
            <li>With trusted providers (hosting, payments, email).</li>
            <li>When required by law or legal processes.</li>
            <li>In business transfers (e.g., merger or sale).</li>
          </ul>
        </div>

        <div className="sub__container">
          <h3>Security & Your Rights</h3>
          <p>
            We apply safeguards, but no internet transfer is 100% secure. You
            can <strong>access</strong>, <strong>update</strong>, or{" "}
            <strong>delete</strong> your data, and you can{" "}
            <strong>unsubscribe</strong> from marketing emails at any time.
          </p>
        </div>

        <div className="sub__container">
          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
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

export default PolicyPage;
