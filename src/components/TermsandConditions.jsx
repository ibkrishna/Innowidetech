import React from "react";

function TermsandConditions() {
  return (
    <>
      {/* max-w-3xl  add in below div for center the content*/}
      <div className="px-4 py-8  mx-auto">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        {/* <p className="text-sm text-gray-600 mb-4">
          <strong>Effective Date: September 10, 2024</strong>
        </p> */}
        <p className="mb-4">
          Welcome to Innowide Technologies Pvt Ltd ("we," "us," or "our"). By
          accessing and using our website{" "}
          <a
            href="https://innowidetechnologies.com/"
            className="text-blue-500 hover:underline"
          >
            https://innowidetechnologies.com/
          </a>{" "}
          and our services, you agree to the following terms and conditions.
          Please review them thoroughly before using our site.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our website, you accept and agree to comply with these terms
          and conditions. We may update these terms at any time without prior
          notice. Specific areas of the site may have their own terms, which
          will take precedence over these general terms if there is a conflict.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. User Definitions</h2>
        <p className="mb-4">
          The term "User" refers to anyone who accesses or uses our website.
          "Innowide Technologies" refers to Innowide Technologies Pvt Ltd.
          "Site" refers to{" "}
          <a
            href="https://innowidetechnologies.com/"
            className="text-blue-500 hover:underline"
          >
            https://innowidetechnologies.com/
          </a>{" "}
          managed and owned by Innowide Technologies Pvt Ltd.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          3. Modification and Termination
        </h2>
        <p className="mb-4">
          We reserve the right to terminate access to the site at any time, for
          any reason. Upon termination, the provisions regarding disclaimer of
          warranties, accuracy of information, and indemnification will remain
          in effect. We may also monitor access to our site.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p className="mb-4">
          All content on our site, including software, text, images, graphics,
          videos, and audio, is owned exclusively by Innowide Technologies. No
          content from this site may be copied, modified, reproduced,
          republished, uploaded, transmitted, or distributed in any form without
          our prior written consent. Unauthorized use of the site’s materials
          may infringe on copyright, trademark, and other applicable laws,
          potentially resulting in legal penalties. Innowide Technologies'
          trademarks cannot be used without our express written permission.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          5. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          We make no warranties, express or implied, regarding the information,
          data, or products available on our site. The site and all its content
          are offered on an "as is" and "as available" basis. We deny any
          implied warranties, including those related to merchantability,
          suitability for a specific purpose, and non-infringement.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Liability Limitation</h2>
        <p className="mb-4">
          We are not responsible for any damage to your computer system or data
          loss resulting from downloading content from our site. We may alter or
          discontinue any aspect of the website at any time, including content
          and features. We also reserve the right to change these terms, with
          such changes taking effect immediately upon posting.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold Innowide Technologies harmless from
          any losses, damages, costs, or expenses, including reasonable
          attorney’s fees, arising out of your misuse of our site or services.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          8. Accuracy of Information
        </h2>
        <p className="mb-4">
          While we strive to provide accurate information, we do not warrant the
          accuracy, completeness, or adequacy of the content on our site. We do
          not guarantee that: (a) the site will meet your needs; (b) the site
          will be available without interruption, securely, or error-free; (c)
          the results obtained from using the site or its services will be
          reliable or accurate.
        </p>

        <h2 className="text-xl font-semibold mb-2">9. Privacy</h2>
        <p className="mb-4">
          We are committed to protecting your privacy and do not share your
          information with external parties. We may use your data to enhance
          your experience on our site.
        </p>

        <h2 className="text-xl font-semibold mb-2">10. Third-Party Links</h2>
        <p className="mb-4">
          Our site might feature links to other websites and services. We are
          not accountable for the content or availability of these third-party
          sites. We are not liable for any loss or damage arising from
          interactions with third parties.
        </p>

        <p className="mt-8">
          Thank you for using Innowide Technologies Pvt Ltd. Your adherence to
          these terms helps us maintain a secure and effective online
          experience.
        </p>
      </div>
    </>
  );
}

export default TermsandConditions;
