import { LEGAL_ENTITY_NAME } from '../constants/site';
import PolicyContactCard from '../components/PolicyContactCard';
import PolicyDocument from '../components/policy/PolicyDocument';
import PolicyPageLayout from '../components/policy/PolicyPageLayout';
import PolicySection, { policyListClass } from '../components/policy/PolicySection';

export default function PrivacyPolicy() {
  return (
    <PolicyPageLayout title="Privacy Policy">
      <PolicyDocument>
        <PolicySection title="Introduction">
          <p>
            {LEGAL_ENTITY_NAME} respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>
        </PolicySection>

        <PolicySection title="Information We Collect">
          <p>We collect personal information such as name, email address, phone number, and other details you provide when:</p>
          <ul className={policyListClass}>
            <li>Registering for courses</li>
            <li>Submitting inquiry forms</li>
            <li>Applying for partnerships</li>
            <li>Contacting our support team</li>
            <li>Using our Learning Management System</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We collect and use your personal information only for educational, communication, and service delivery purposes, including:</p>
          <ul className={policyListClass}>
            <li>Processing course enrollments and providing access to educational content</li>
            <li>Communicating about courses, programs, and services</li>
            <li>Sending important updates and notifications</li>
            <li>Providing customer support</li>
            <li>Improving our services and user experience</li>
            <li>Processing partnership applications</li>
          </ul>
        </PolicySection>

        <PolicySection title="Data Protection">
          <p>
            We do not sell or misuse user data. Your information is stored securely using industry-standard security measures and is used only to enhance learning services and fulfill our commitments to you.
          </p>
        </PolicySection>

        <PolicySection title="Data Sharing">
          <p>We do not share your personal information with third parties except:</p>
          <ul className={policyListClass}>
            <li>When required by law or legal process</li>
            <li>With your explicit consent</li>
            <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
          </ul>
        </PolicySection>

        <PolicySection title="Your Rights">
          <p>You have the right to:</p>
          <ul className={policyListClass}>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (subject to legal obligations)</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </PolicySection>

        <PolicySection title="Cookies and Tracking">
          <p>
            We use cookies and similar technologies to improve website functionality and user experience. For more information, please refer to our Cookie Policy.
          </p>
        </PolicySection>

        <PolicySection title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </PolicySection>

        <PolicyContactCard />
      </PolicyDocument>
    </PolicyPageLayout>
  );
}
