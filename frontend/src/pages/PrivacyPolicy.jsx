import React from 'react';
import { SITE } from '../data/site.js';

const TOC = [
  ['intro', '1. Introduction'],
  ['info-we-collect', '2. Information we collect'],
  ['how-we-use', '3. How we use information'],
  ['legal-basis', "4. Why we're allowed to use it"],
  ['sharing', '5. How we share information'],
  ['caregiver', '6. Caregiver & linked accounts'],
  ['security', '7. How we protect information'],
  ['retention', '8. Data retention & deletion'],
  ['your-rights', '9. Your privacy rights'],
  ['state-rights', '10. Notice for U.S. state residents'],
  ['hipaa', '11. About HIPAA & medical advice'],
  ['children', "12. Children's privacy"],
  ['notifications', '13. Push notifications & communications'],
  ['international', '14. Where we operate'],
  ['changes', '15. Changes to this policy'],
  ['contact', '16. Contact us'],
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">
            Effective date: <span className="placeholder">[Insert Effective Date]</span> · Last updated: <span className="placeholder">[Insert Date]</span>
          </p>
        </div>
      </section>

      <div className="container">
        <div className="legal-layout">
          <aside className="legal-toc" aria-label="Table of contents">
            <h4>On this page</h4>
            <ol>
              {TOC.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ol>
          </aside>

          <article className="legal-body">
            <div className="callout">
              <p><strong>Plain-language summary:</strong> Pillscare stores the medication schedule and reminder information you enter in the app so it can work. We do not sell your information, and we do not share your medication data with advertisers or other third parties for marketing purposes. This summary doesn't replace the full policy below.</p>
            </div>

            <h2 id="intro">1. Introduction</h2>
            <p>{SITE.legalEntity} ("Pillscare," "we," "us," or "our") provides the Pillscare mobile application and the website at <strong>{SITE.domain}</strong> (together, the "Service"). This Privacy Policy explains what information we collect from users of the Service, how we use and protect it, and the choices available to you. This Policy is written for users located in the United States. The Pillscare mobile app is where accounts are created and managed — this website does not host sign-in or account functionality.</p>
            <p>By creating an account in the Pillscare app, you agree to the collection and use of information as described in this Policy. If you do not agree, please do not use the Service.</p>

            <h2 id="info-we-collect">2. Information we collect</h2>
            <h3>2.1 Information you provide directly</h3>
            <ul>
              <li><strong>Account information:</strong> name, email address, password, and account role (e.g., individual user or caregiver), collected through the mobile app.</li>
              <li><strong>Medication schedule information:</strong> medication names, dosages, times of day, and notes you choose to enter (for example, "with food"). We treat this as sensitive health-related information.</li>
              <li><strong>Adherence records:</strong> whether a dose was marked taken, skipped, or missed, and the associated timestamp.</li>
              <li><strong>Caregiver linkage information:</strong> if you link a caregiver or care recipient account, the connection between those accounts and any permissions you set.</li>
              <li><strong>Communications:</strong> messages you send us through the app or the support contact form on this website.</li>
            </ul>
            <h3>2.2 Information collected automatically</h3>
            <ul>
              <li><strong>Device and usage data:</strong> device type, operating system, app version, crash logs, and general usage patterns within the app.</li>
              <li><strong>Push notification tokens:</strong> a device identifier used solely to deliver medication reminders and account-related alerts.</li>
              <li><strong>Website analytics:</strong> standard, non-identifying visit data (such as pages viewed) may be collected when you browse {SITE.domain}.</li>
            </ul>
            <h3>2.3 Information we do not collect</h3>
            <p>We do not collect Social Security numbers, government ID numbers, insurance information, or payment card details through the app unless a paid subscription is introduced in the future, in which case this Policy will be updated and payment processing will be handled by a PCI-compliant third-party processor that does not share full card numbers with us.</p>

            <h2 id="how-we-use">3. How we use information</h2>
            <p>We use the information described above to:</p>
            <ul>
              <li>Create and maintain your account;</li>
              <li>Operate the core function of the Service — storing medication schedules and sending timely reminders;</li>
              <li>Allow a linked caregiver account to view schedule and adherence information you've agreed to share;</li>
              <li>Maintain the security and integrity of the Service, including detecting fraud or abuse;</li>
              <li>Respond to support requests submitted through the app or this website;</li>
              <li>Diagnose technical problems and improve app performance and reliability;</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p><strong>We do not use your medication or health information to serve you advertising, and we do not sell it.</strong> We do not share it with data brokers.</p>

            <h2 id="legal-basis">4. Why we're allowed to use it</h2>
            <p>We process your information because it is necessary to provide the Service you've signed up for (performance of a contract), to comply with legal obligations that apply to us, and, where applicable, based on your consent — for example, when you choose to link a caregiver account.</p>

            <h2 id="sharing">5. How we share information</h2>
            <p>We do not sell your personal information or your medication data. We share information only in these limited circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> companies that host our infrastructure, send push notifications, or provide customer support tooling on our behalf, under contractual confidentiality and security obligations. They may not use your data for their own purposes.</li>
              <li><strong>Linked accounts:</strong> information you explicitly choose to share with a linked caregiver or care recipient.</li>
              <li><strong>Legal requirements:</strong> if required to comply with a valid legal process (such as a subpoena or court order), or to protect the rights, property, or safety of Pillscare, our users, or the public.</li>
              <li><strong>Business transfers:</strong> if Pillscare is involved in a merger, acquisition, or sale of assets, information may transfer as part of that transaction, subject to this Policy or a policy at least as protective.</li>
            </ul>
            <p>We do not share your information with advertisers, data brokers, or other third parties for their own marketing purposes.</p>

            <h2 id="caregiver">6. Caregiver &amp; linked accounts</h2>
            <p>Pillscare supports two kinds of accounts: an individual managing their own medication, and a caregiver who may be linked to that individual's account. Linking accounts requires the consent of the primary account holder (or their authorized representative). A linked caregiver may see the medication schedule and adherence history shared through the link; they do not automatically gain access to account credentials or unrelated personal information. You can unlink a caregiver connection at any time from within the app.</p>

            <h2 id="security">7. How we protect information</h2>
            <p>We use administrative, technical, and physical safeguards designed to protect your information, including encryption of data in transit (TLS) and at rest, access controls limiting employee access to what's necessary, and routine review of our security practices. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security. If we become aware of a breach affecting your personal information, we will notify you as required by applicable state law.</p>

            <h2 id="retention">8. Data retention &amp; deletion</h2>
            <p>We retain your account and medication information for as long as your account is active, and for a limited period afterward to allow for account recovery and to meet legal, accounting, or security obligations. You may request deletion of your account and associated data at any time (see Section 9). Once deleted, data is removed from active systems within a reasonable period and from backups on their normal rotation schedule.</p>

            <h2 id="your-rights">9. Your privacy rights</h2>
            <p>Depending on where you live, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you;</li>
              <li>Correct inaccurate information;</li>
              <li>Delete your account and associated data;</li>
              <li>Export your medication schedule and adherence history in a portable format;</li>
              <li>Withdraw consent for a linked caregiver connection;</li>
              <li>Opt out of non-essential push notifications and marketing emails.</li>
            </ul>
            <p>To exercise any of these rights, contact us using the details in Section 16. We will verify your identity before fulfilling a request. You may also manage most of these settings directly within the app.</p>

            <h2 id="state-rights">10. Notice for U.S. state residents</h2>
            <p>Pillscare is designed for use within the United States. Depending on your state of residence, additional rights may apply:</p>
            <h3>California (CCPA/CPRA)</h3>
            <p>California residents have the right to know what personal information is collected, request deletion, correct inaccurate information, and opt out of the "sale" or "sharing" of personal information. <strong>We do not sell or share personal information as those terms are defined under California law.</strong> California residents will not receive discriminatory treatment for exercising these rights.</p>
            <h3>Other states (Virginia, Colorado, Connecticut, Utah, and others with comprehensive privacy laws)</h3>
            <p>Residents of states with comprehensive privacy laws have similar rights to access, correct, delete, and obtain a copy of their personal information, and to opt out of targeted advertising, sale, and certain profiling — none of which Pillscare engages in with your health data.</p>
            <h3>Washington and consumer health data laws</h3>
            <p>Because medication information can be considered "consumer health data" under laws such as Washington's My Health My Data Act, we specifically confirm: we do not sell consumer health data, and we do not use geofencing around healthcare facilities. Where required, we will obtain your consent before collecting or sharing consumer health data outside of operating the Service, and we will honor requests to withdraw that consent and delete related data.</p>

            <h2 id="hipaa">11. About HIPAA &amp; medical advice</h2>
            <div className="callout medical">
              <p><strong>Pillscare is not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always consult your physician or qualified health provider about your medications. If you are experiencing a medical emergency, call 911 (or your local emergency number) immediately — do not rely on the app.</p>
            </div>
            <p>Pillscare is a consumer wellness and organization tool. In most cases, Pillscare is <strong>not a "covered entity" or "business associate"</strong> under the Health Insurance Portability and Accountability Act (HIPAA), because we do not provide medical care and do not receive health information from a covered healthcare provider or health plan on your behalf. <span className="placeholder">[Confirm this framing with counsel if Pillscare later integrates with pharmacies, providers, or insurers — that could change HIPAA status.]</span> Regardless of HIPAA's technical applicability, we apply the safeguards described in Section 7 to the medication information you store with us.</p>

            <h2 id="children">12. Children's privacy</h2>
            <p>Pillscare is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it. A parent or guardian who believes their child has provided information to us may contact us using the details in Section 16.</p>

            <h2 id="notifications">13. Push notifications &amp; communications</h2>
            <p>Medication reminder notifications are core to the Service; you can manage notification permissions through your device settings. We may also send account-related emails (such as password resets or security alerts), which are not optional while you hold an account, and occasional product update emails, which you may opt out of at any time.</p>

            <h2 id="international">14. Where we operate</h2>
            <p>Pillscare is built for users located in the United States, and our servers and service providers are located in the United States. If you access the Service from outside the United States, your information will be transferred to and processed in the United States.</p>

            <h2 id="changes">15. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the app or by email before the changes take effect. The "Last updated" date at the top of this page reflects the most recent revision.</p>

            <h2 id="contact">16. Contact us</h2>
            <p>If you have questions about this Privacy Policy or want to exercise a privacy right, contact us at:</p>
            <p>
              <strong>{SITE.legalEntity}</strong><br />
              Email: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a><br />
              Phone: <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}>{SITE.phone}</a><br />
              Address: {SITE.address.line1}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
