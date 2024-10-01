import React from "react";

function Privacy() {
  return (
    <>
      {/* max-w-3xl  add in below div for center the content*/}
      <div className="mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        {/* <p className="text-gray-700 mb-6"><strong>Effective Date: September 10, 2024</strong></p> */}

        <p className="mb-4">
          Welcome to Innowide Technologies ("we," "us," or "our"). This Privacy
          Policy outlines how we collect, use, and protect the personal
          information you provide when you visit our website . We are committed
          to protecting your privacy and managing your personal data with care.
          By accessing our website or using our services, you agree to the
          practices detailed in this Privacy Policy. Please review this policy
          thoroughly. If you disagree with our practices, we recommend not using
          our website or services.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold mb-1">
            1.1 Personal Information
          </h3>
          <p className="mb-4">
            When interacting with our website or services, we may collect
            personal details such as your name, email address, phone number, and
            other contact information you provide.
          </p>

          <h3 className="text-lg font-semibold mb-1">
            1.2 Automatically Collected Data
          </h3>
          <p className="mb-4">
            We may automatically collect non-personal information, including
            your IP address, browser type, operating system, referring website,
            pages you visit, and the dates and times of your visits.
          </p>

          <h3 className="text-lg font-semibold mb-1">
            1.3 Cookies and Tracking Technologies
          </h3>
          <p className="mb-4">
            We use cookies and similar tracking technologies to improve your
            experience on our website and for analytical purposes. You can
            adjust your cookie settings through your browser.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <h3 className="text-lg font-semibold mb-1">2.1 Providing Services</h3>
          <p className="mb-4">
            We utilize your information to deliver the Software services you
            request, such as email marketing, social media advertising, SEO, and
            related services.
          </p>

          <h3 className="text-lg font-semibold mb-1">2.2 Communication</h3>
          <p className="mb-4">
            We may use your contact details to send you updates, newsletters,
            promotional offers, and other information pertaining to our
            services.
          </p>

          <h3 className="text-lg font-semibold mb-1">2.3 Enhancing Services</h3>
          <p className="mb-4">
            We analyze non-personal data to improve our services, website, and
            overall user experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Sharing Your Information
          </h2>
          <h3 className="text-lg font-semibold mb-1">
            3.1 With Service Providers
          </h3>
          <p className="mb-4">
            We might share your information with reliable third-party service
            providers who help us deliver our services.
          </p>

          <h3 className="text-lg font-semibold mb-1">3.2 Legal Compliance</h3>
          <p className="mb-4">
            We may disclose your information if required to meet legal
            obligations, respond to governmental authorities, or address legal
            requests.
          </p>

          <h3 className="text-lg font-semibold mb-1">
            3.3 Business Transitions
          </h3>
          <p className="mb-4">
            If our business undergoes a merger, acquisition, or sale, your
            information might be transferred to the new organization.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Your Choices</h2>
          <p className="mb-4">
            You can opt out of our marketing communications at any time by
            following the unsubscribe instructions in our emails or by
            contacting us directly.
          </p>
          <p className="mb-4">
            You can modify your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Security</h2>
          <p className="mb-4">
            We implement appropriate measures to safeguard your personal
            information from unauthorized access, disclosure, modification, or
            loss. However, please be aware that no method of online data
            transmission or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Updates to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may periodically update this Privacy Policy to reflect changes in
            our practices or to comply with legal and regulatory requirements.
            Significant changes will be communicated via email or by posting a
            prominent notice on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p className="mb-4">
            For any inquiries or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <address className="mb-4">
            <p className="font-semibold">Innowide Technologies</p>
            <p>Office No: 501, 5th Floor, Elite Padmavati Corporate</p>
            <p>Hyderabad, Telangana, 500081</p>
            <p>
              Email:{" "}
              <a
                href="mailto:innowidetechnologieshr@gmail.com"
                className="hover:underline"
              >
                innowidetechnologieshr@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:7075541674" className="hover:underline">
                7075541674
              </a>
            </p>
          </address>
        </section>

        <p className="text-gray-700">
          Thank you for choosing Innowide Technologies. We are dedicated to
          protecting your privacy and providing outstanding Software services.
        </p>
      </div>
    </>
  );
}

export default Privacy;
