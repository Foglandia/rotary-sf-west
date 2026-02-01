import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Rotary San Francisco West Terms of Use
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </section>

        <div className="max-w-4xl mx-auto prose prose-blue prose-lg dark:prose-invert">
          <p className="mb-8">
            Welcome to the Rotary San Francisco West website. By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully before using our site.
          </p>

          <h3 className="mt-12 mb-4">1. Acceptance of Terms</h3>
          <p className="mb-8">
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
          </p>

          <h3 className="mt-12 mb-4">2. Use of Website</h3>
          <p className="mb-4">
            You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of this website. Prohibited behavior includes:
          </p>
          <ul className="mb-8 space-y-2 list-disc list-inside">
            <li>Harassing or causing distress to any person</li>
            <li>Transmitting obscene or offensive content</li>
            <li>Disrupting the normal flow of the website</li>
            <li>Attempting to gain unauthorized access to any part of the website</li>
          </ul>

          <h3 className="mt-12 mb-4">3. Intellectual Property</h3>
          <p className="mb-8">
            The content on this website, including text, graphics, logos, images, and software, is the property of Rotary San Francisco West or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
          </p>

          <h3 className="mt-12 mb-4">4. User-Submitted Content</h3>
          <p className="mb-8">
            If you submit any content to our website (such as comments, form submissions, or other materials), you grant Rotary San Francisco West a non-exclusive, royalty-free license to use, modify, and display that content in connection with our website and activities. You are responsible for ensuring that your submissions do not violate any third-party rights.
          </p>

          <h3 className="mt-12 mb-4">5. Disclaimer of Warranties</h3>
          <p className="mb-8">
            This website is provided "as is" without any representations or warranties, express or implied. Rotary San Francisco West makes no representations or warranties regarding the accuracy, completeness, or reliability of any content on this website. We do not warrant that the website will be available at all times or that it will be free from errors or viruses.
          </p>

          <h3 className="mt-12 mb-4">6. Limitation of Liability</h3>
          <p className="mb-8">
            To the fullest extent permitted by law, Rotary San Francisco West shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of this website. This includes damages for loss of profits, data, or other intangible losses.
          </p>

          <h3 className="mt-12 mb-4">7. Third-Party Links</h3>
          <p className="mb-8">
            Our website may contain links to third-party websites, including Rotary International and Rotary District 5150. These links are provided for your convenience only. We have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h3 className="mt-12 mb-4">8. Modifications to Terms</h3>
          <p className="mb-8">
            Rotary San Francisco West reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
          </p>

          <h3 className="mt-12 mb-4">9. Governing Law</h3>
          <p className="mb-8">
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>

          <h3 className="mt-12 mb-4">10. Contact Us</h3>
          <p className="mb-4">
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p className="mb-8">
            <strong>Rotary San Francisco West</strong><br />
            Email: <a href="mailto:rcofsfw@gmail.com" className="text-primary hover:underline">rcofsfw@gmail.com</a>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
