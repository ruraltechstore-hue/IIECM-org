import PolicyContactCard from '../components/PolicyContactCard';
import PolicyDocument from '../components/policy/PolicyDocument';
import PolicyPageLayout from '../components/policy/PolicyPageLayout';
import PolicySection, { policyListClass } from '../components/policy/PolicySection';
import { SITE_EMAIL, SITE_PHONE } from '../constants/site';

export default function RefundPolicy() {
  return (
    <PolicyPageLayout title="Refund & Cancellation Policy">
      <PolicyDocument>
        <PolicySection title="General Policy">
          <p>
            At IIECM, we strive to provide high-quality educational services. Please read our refund and cancellation policy carefully before enrolling in any course or program.
          </p>
        </PolicySection>

        <PolicySection title="Non-Refundable After LMS Access">
          <p>
            Fees once paid are <strong>non-refundable</strong> after LMS (Learning Management System) access is granted. Once you receive access to course materials and the learning platform, the enrollment is considered active and non-refundable.
          </p>
        </PolicySection>

        <PolicySection title="Refund Eligibility">
          <p>Refunds (if applicable) are processed only under the following conditions:</p>
          <ul className={policyListClass}>
            <li>Written agreement or special arrangement made at the time of enrollment</li>
            <li>Technical issues preventing LMS access that cannot be resolved within a reasonable timeframe</li>
            <li>Course cancellation by IIECM</li>
            <li>Duplicate payment or payment errors</li>
          </ul>
        </PolicySection>

        <PolicySection title="Refund Processing Time">
          <p>When a refund is approved:</p>
          <ul className={policyListClass}>
            <li>Refund requests are processed within 7-10 business days</li>
            <li>The amount will be credited to the original payment method</li>
            <li>Bank processing time may vary (5-7 additional business days)</li>
          </ul>
        </PolicySection>

        <PolicySection title="Course Cancellation by Student">
          <ul className={policyListClass}>
            <li>Students must submit cancellation requests in writing to {SITE_EMAIL}</li>
            <li>Cancellations before LMS access may be eligible for partial refund (subject to administrative fees)</li>
            <li>No refunds will be provided after LMS access is granted</li>
          </ul>
        </PolicySection>

        <PolicySection title="Internship Certificates">
          <p>
            Internship certificates once issued are <strong>non-cancellable</strong> and <strong>non-refundable</strong>. This applies to all three stages of internship programs.
          </p>
        </PolicySection>

        <PolicySection title="Course Transfers">
          <p>In some cases, IIECM may allow course transfers:</p>
          <ul className={policyListClass}>
            <li>Transfer to a different course of equivalent or lower value may be permitted</li>
            <li>Transfer requests must be made within 7 days of enrollment</li>
            <li>A nominal administrative fee may apply</li>
            <li>Transfers are subject to approval and availability</li>
          </ul>
        </PolicySection>

        <PolicySection title="Technical Issues">
          <p>If you experience technical difficulties:</p>
          <ul className={policyListClass}>
            <li>Contact our support team immediately at {SITE_EMAIL} or {SITE_PHONE}</li>
            <li>We will work to resolve the issue within 48-72 hours</li>
            <li>If the issue cannot be resolved, a refund may be considered</li>
          </ul>
        </PolicySection>

        <PolicySection title="Exceptions">
          <p>IIECM reserves the right to make exceptions to this policy on a case-by-case basis for:</p>
          <ul className={policyListClass}>
            <li>Medical emergencies (with appropriate documentation)</li>
            <li>Extenuating circumstances (at IIECM&apos;s discretion)</li>
            <li>Errors made by IIECM in course delivery</li>
          </ul>
        </PolicySection>

        <PolicySection title="Bulk Enrollments and Institutional Agreements">
          <p>Special refund and cancellation terms may apply to:</p>
          <ul className={policyListClass}>
            <li>Bulk enrollments from colleges and institutions</li>
            <li>Corporate training programs</li>
            <li>Customized programs</li>
          </ul>
          <p className="pt-2">These terms will be specified in the respective agreement or contract.</p>
        </PolicySection>

        <PolicySection title="Policy Updates">
          <p>
            IIECM reserves the right to update this Refund & Cancellation Policy at any time. Changes will be posted on this page with an updated date.
          </p>
        </PolicySection>

        <PolicyContactCard
          preamble={
            <>
              <p>
                To request a refund or for questions about this policy, email us with subject line:{' '}
                <strong>Refund Request - [Your Name] - [Course Name]</strong>
              </p>
            </>
          }
        />
      </PolicyDocument>
    </PolicyPageLayout>
  );
}
