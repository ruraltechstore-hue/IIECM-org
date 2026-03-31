import { LEGAL_ENTITY_NAME } from '../constants/site';
import PolicyContactCard from '../components/PolicyContactCard';
import PolicyDocument from '../components/policy/PolicyDocument';
import PolicyPageLayout from '../components/policy/PolicyPageLayout';
import PolicySection, { policyListClass } from '../components/policy/PolicySection';
import PolicySubsection from '../components/policy/PolicySubsection';

export default function CookiePolicy() {
  return (
    <PolicyPageLayout title="Cookie Policy">
      <PolicyDocument>
        <PolicySection title="What Are Cookies?">
          <p>
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
          </p>
        </PolicySection>

        <PolicySection title="How IIECM Uses Cookies">
          <p>{LEGAL_ENTITY_NAME} uses cookies and similar technologies to:</p>
          <ul className={policyListClass}>
            <li>Improve website functionality and user experience</li>
            <li>Remember your preferences where applicable</li>
            <li>Track usage analytics to understand how our website is used</li>
            <li>Personalize learning recommendations based on your interests</li>
            <li>Maintain security and prevent fraud</li>
            <li>Analyze website performance and optimize content</li>
          </ul>
        </PolicySection>

        <PolicySection title="Types of Cookies We Use">
          <div className="space-y-6">
            <PolicySubsection title="Essential Cookies">
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of essential cookies.
              </p>
              <ul className={policyListClass}>
                <li>Security cookies (to protect against fraud)</li>
                <li>Session cookies (to maintain your browsing session)</li>
              </ul>
            </PolicySubsection>
            <PolicySubsection title="Performance Cookies">
              <p>
                These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages. This helps us improve website performance.
              </p>
            </PolicySubsection>
            <PolicySubsection title="Functionality Cookies">
              <p>
                These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
              </p>
            </PolicySubsection>
            <PolicySubsection title="Analytics Cookies">
              <p>We use analytics cookies to understand website traffic and user behavior. This helps us:</p>
              <ul className={policyListClass}>
                <li>Understand which courses and content are most popular</li>
                <li>Identify areas for improvement</li>
                <li>Track marketing campaign effectiveness</li>
                <li>Analyze user engagement patterns</li>
              </ul>
            </PolicySubsection>
            <PolicySubsection title="Marketing Cookies">
              <p>
                These cookies track your online activity to help deliver more relevant advertising and limit the number of times you see an advertisement. They may be set by our advertising partners.
              </p>
            </PolicySubsection>
          </div>
        </PolicySection>

        <PolicySection title="Third-Party Cookies">
          <p>We may use trusted third-party services that also set cookies on your device. These may include:</p>
          <ul className={policyListClass}>
            <li>Google Analytics (for website analytics)</li>
            <li>Social media platforms (for social sharing features)</li>
            <li>Payment processors (for secure transactions)</li>
            <li>Learning management system providers</li>
          </ul>
          <p className="pt-2">
            These third parties have their own privacy policies, and we recommend reviewing them.
          </p>
        </PolicySection>

        <PolicySection title="Managing Cookies">
          <p>Users may disable cookies via browser settings. Most web browsers allow you to:</p>
          <ul className={policyListClass}>
            <li>View what cookies are stored on your device</li>
            <li>Delete cookies</li>
            <li>Block all cookies</li>
            <li>Block third-party cookies</li>
            <li>Delete cookies when you close your browser</li>
          </ul>
          <PolicySubsection title="How to Disable Cookies">
            <p>You can control and/or delete cookies through your browser settings:</p>
            <ul className={policyListClass}>
              <li>
                <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data
              </li>
              <li>
                <strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data
              </li>
            </ul>
          </PolicySubsection>
        </PolicySection>

        <PolicySection title="Impact of Disabling Cookies">
          <p>If you disable cookies:</p>
          <ul className={policyListClass}>
            <li>Some features of our website may not function properly</li>
            <li>You may need to manually enter information repeatedly</li>
            <li>Your user experience may be less personalized</li>
            <li>Some embedded content or third-party features may not work as expected</li>
          </ul>
        </PolicySection>

        <PolicySection title="Cookie Consent">
          <p>
            By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. When you first visit our website, you may see a cookie consent banner. You can manage your cookie preferences at any time.
          </p>
        </PolicySection>

        <PolicySection title="Updates to This Policy">
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any changes will be posted on this page with an updated date.
          </p>
        </PolicySection>

        <PolicyContactCard />
      </PolicyDocument>
    </PolicyPageLayout>
  );
}
