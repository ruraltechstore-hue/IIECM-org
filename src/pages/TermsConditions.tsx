import { LEGAL_ENTITY_NAME } from '../constants/site';
import PolicyContactCard from '../components/PolicyContactCard';
import PolicyDocument from '../components/policy/PolicyDocument';
import PolicyPageLayout from '../components/policy/PolicyPageLayout';
import PolicySection, { policyListClass } from '../components/policy/PolicySection';

export default function TermsConditions() {
  return (
    <PolicyPageLayout title="Terms & Conditions">
      <PolicyDocument>
        <PolicySection title="Introduction">
          <p>
            Welcome to {LEGAL_ENTITY_NAME}. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </PolicySection>

        <PolicySection title="Acceptance of Terms">
          <p>
            By using IIECM services, including our website, Learning Management System (LMS), and educational programs, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </PolicySection>

        <PolicySection title="User Responsibilities">
          <p>By using our services, users agree to:</p>
          <ul className={policyListClass}>
            <li>Follow academic integrity and ethical conduct</li>
            <li>Not misuse, copy, or redistribute course materials without authorization</li>
            <li>Use LMS access for personal learning purposes only</li>
            <li>Provide accurate and truthful information during registration</li>
            <li>Respect intellectual property rights</li>
            <li>Not engage in any activity that disrupts or interferes with our services</li>
          </ul>
        </PolicySection>

        <PolicySection title="Course Enrollment and Access">
          <ul className={policyListClass}>
            <li>Course enrollment is subject to availability and payment confirmation</li>
            <li>LMS access is provided after successful enrollment and payment</li>
            <li>Course content and materials are for personal educational use only</li>
            <li>Access duration and terms vary by course and program</li>
          </ul>
        </PolicySection>

        <PolicySection title="Intellectual Property">
          <p>
            All course materials, content, logos, and trademarks are the property of IIECM or our licensors. Users may not reproduce, distribute, or create derivative works without express written permission.
          </p>
        </PolicySection>

        <PolicySection title="Certification">
          <ul className={policyListClass}>
            <li>Certificates are issued upon successful completion of course requirements</li>
            <li>Certificates verify participation and completion but do not guarantee employment</li>
            <li>IIECM reserves the right to withhold certificates for violations of academic integrity</li>
          </ul>
        </PolicySection>

        <PolicySection title="Limitation of Liability">
          <p>IIECM strives to provide quality education but makes no guarantees regarding:</p>
          <ul className={policyListClass}>
            <li>Job placement or career outcomes</li>
            <li>Specific learning outcomes or skill acquisition</li>
            <li>Uninterrupted or error-free service</li>
          </ul>
        </PolicySection>

        <PolicySection title="Modifications to Services">
          <p>IIECM reserves the right to:</p>
          <ul className={policyListClass}>
            <li>Update courses, pricing, and policies at any time</li>
            <li>Modify or discontinue services with reasonable notice</li>
            <li>Change course content and curriculum to maintain relevance</li>
          </ul>
        </PolicySection>

        <PolicySection title="Termination">
          <p>IIECM reserves the right to suspend or terminate user access for:</p>
          <ul className={policyListClass}>
            <li>Violation of these Terms & Conditions</li>
            <li>Fraudulent or illegal activities</li>
            <li>Misuse of course materials or LMS</li>
            <li>Non-payment of fees</li>
          </ul>
        </PolicySection>

        <PolicySection title="Governing Law">
          <p>
            These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
          </p>
        </PolicySection>

        <PolicyContactCard />
      </PolicyDocument>
    </PolicyPageLayout>
  );
}
