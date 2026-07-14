import React from 'react';
import { SITE } from '../data/site.js';

const TOC = [
  ['acceptance', '1. Acceptance of terms'],
  ['eligibility', '2. Eligibility'],
  ['accounts', '3. Your account'],
  ['medical-disclaimer', '4. Medical disclaimer'],
  ['acceptable-use', '5. Acceptable use'],
  ['caregiver-terms', '6. Caregiver & linked accounts'],
  ['fees', '7. Fees & subscriptions'],
  ['ip', '8. Intellectual property'],
  ['third-party', '9. Third-party platforms'],
  ['disclaimer', '10. Disclaimer of warranties'],
  ['liability', '11. Limitation of liability'],
  ['indemnification', '12. Indemnification'],
  ['termination', '13. Termination'],
  ['governing-law', '14. Governing law & disputes'],
  ['changes', '15. Changes to these terms'],
  ['contact', '16. Contact us'],
];

export default function Terms() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
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
            <h2 id="acceptance">1. Acceptance of terms</h2>
            <p>These Terms &amp; Conditions ("Terms") form an agreement between you and {SITE.legalEntity} ("Pillscare," "we," "us," or "our") governing your use of the Pillscare mobile application and the website at {SITE.domain} (together, the "Service"). By creating an account in the app or using this website, you agree to be bound by these Terms and by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated by reference. If you do not agree, do not use the Service.</p>

            <h2 id="eligibility">2. Eligibility</h2>
            <p>The Service is intended for use by individuals located in the United States who are at least 18 years old. If you are setting up or managing the Service on behalf of another person (for example, as a caregiver or family member for a senior), you represent that you are authorized to do so and that you will use the Service consistent with that person's wishes and applicable law.</p>

            <h2 id="accounts">3. Your account</h2>
            <p>Accounts are created and managed within the Pillscare mobile app; this website does not offer sign-in or registration. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> if you suspect unauthorized access to your account. You agree to provide accurate information when creating your account and to keep it up to date.</p>

            <h2 id="medical-disclaimer">4. Medical disclaimer</h2>
            <div className="callout medical">
              <p><strong>Pillscare is an organizational and reminder tool. It is not a medical device, and it does not provide medical advice, diagnosis, or treatment.</strong> Reminders are based solely on the information you or a linked caregiver enter into the app; Pillscare does not verify dosages, drug interactions, or medical appropriateness. Always follow the guidance of a licensed physician or pharmacist regarding your medications.</p>
              <p><strong>Do not use Pillscare in a medical emergency.</strong> If you or someone you are caring for is experiencing a medical emergency, call 911 (or your local emergency number) immediately.</p>
            </div>
            <p>You are solely responsible for verifying that medication information entered into the app is accurate and for making medication decisions in consultation with a qualified healthcare provider. Pillscare is not liable for missed, incorrect, or delayed reminders, including those caused by device settings, notification permissions, connectivity issues, or software errors.</p>

            <h2 id="acceptable-use">5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose or in violation of these Terms;</li>
              <li>Attempt to gain unauthorized access to another user's account or data;</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the app, except as permitted by law;</li>
              <li>Interfere with or disrupt the integrity or performance of the Service;</li>
              <li>Use the Service to store or transmit information you do not have the right to share, including another person's medical information without authorization.</li>
            </ul>

            <h2 id="caregiver-terms">6. Caregiver &amp; linked accounts</h2>
            <p>If you link your account to another user's account as a caregiver, you agree to use any information you can view (such as medication schedules and adherence history) only for the purpose of supporting that person's care, and not to share it further without their consent. The primary account holder may revoke a caregiver link at any time. Pillscare is not responsible for arrangements or disputes between linked users regarding how the app is used.</p>

            <h2 id="fees">7. Fees &amp; subscriptions</h2>
            <p><span className="placeholder">[Pillscare is currently offered free of charge. If in-app purchases or a subscription plan are introduced, this section will be updated to describe pricing, billing cycle, auto-renewal terms, and cancellation process, consistent with Apple App Store and Google Play billing requirements.]</span></p>

            <h2 id="ip">8. Intellectual property</h2>
            <p>The Service, including its design, text, graphics, logos, and underlying software, is owned by Pillscare or its licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the app for your personal, non-commercial use in accordance with these Terms. You retain ownership of the medication and personal information you enter into the Service.</p>

            <h2 id="third-party">9. Third-party platforms</h2>
            <p>If you download Pillscare through the Apple App Store or Google Play Store, your use is also subject to the applicable platform's terms of service, including Apple's Standard End User License Agreement where no separate EULA is provided. In the event of a conflict between these Terms and a platform's mandatory terms, the platform's terms will govern solely with respect to that platform's requirements.</p>

            <h2 id="disclaimer">10. Disclaimer of warranties</h2>
            <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT REMINDERS WILL BE DELIVERED WITHOUT DELAY OR FAILURE.</p>

            <h2 id="liability">11. Limitation of liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, PILLSCARE AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF HEALTH, LIFE, DATA, OR PROFITS, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE WILL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE MONTHS BEFORE THE CLAIM AROSE. Some states do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.</p>

            <h2 id="indemnification">12. Indemnification</h2>
            <p>You agree to indemnify and hold Pillscare harmless from any claims, damages, or expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your misuse of the Service.</p>

            <h2 id="termination">13. Termination</h2>
            <p>You may stop using the Service and delete your account at any time from within the app or by contacting us. We may suspend or terminate your access to the Service if you violate these Terms, or if we discontinue the Service, with notice where reasonably practicable.</p>

            <h2 id="governing-law">14. Governing law &amp; disputes</h2>
            <p>These Terms are governed by the laws of the State of Alabama, without regard to its conflict-of-laws principles, and applicable United States federal law. <span className="placeholder">[Insert arbitration clause and venue details here if Badexy Technologies LLC wants to require arbitration for disputes — recommended to be finalized with counsel.]</span></p>

            <h2 id="changes">15. Changes to these terms</h2>
            <p>We may update these Terms from time to time. If we make material changes, we will notify you through the app or by email before the changes take effect. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</p>

            <h2 id="contact">16. Contact us</h2>
            <p>
              <strong>{SITE.legalEntity}</strong><br />
              Email:  Info@badexytechnologies.com <br />
              Phone:  (334) 354-5922 <br />
              Address: 5726 Lake Cyrus Blvd, Birmingham, Alabama 35244
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
