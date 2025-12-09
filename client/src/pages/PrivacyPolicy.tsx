import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </section>

        <div className="max-w-4xl mx-auto prose prose-blue prose-lg dark:prose-invert">
          <p>
            At Rotary San Francisco West, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Contact us via our contact form or email.</li>
            <li>Sign up for our newsletter or event notifications.</li>
            <li>Register for an event or volunteer opportunity.</li>
            <li>Apply for membership.</li>
          </ul>
          <p>
            The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect for specific purposes, including:
          </p>
          <ul>
            <li>Responding to your inquiries and providing information about our club.</li>
            <li>Sending you newsletters, updates, and event invitations (you may opt-out at any time).</li>
            <li>Processing event registrations and volunteer sign-ups.</li>
            <li>Improving our website and services.</li>
          </ul>

          <h3>3. Cookies and Tracking Technologies</h3>
          <p>
            Our website may use "cookies" to enhance your user experience. Cookies are small files placed on your hard drive for record-keeping purposes. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Note that some parts of the website may not function properly if cookies are disabled.
          </p>

          <h3>4. Third-Party Links</h3>
          <p>
            Our website may contain links to other websites, such as Rotary International, Rotary District 5150, or social media platforms. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any linked websites you visit.
          </p>

          <h3>5. Data Security</h3>
          <p>
            We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            Rotary San Francisco West has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to frequently check this page for any changes.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Rotary San Francisco West</strong><br />
            Email: <a href="mailto:rcofsfw@gmail.com">rcofsfw@gmail.com</a>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
