import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our club, interested in membership, or want to partner on a project? 
            We'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold text-primary">Get in Touch</h2>
            
            <div className="grid gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries and membership info</p>
                    <a href="mailto:rcofsfw@gmail.com" className="text-primary font-medium hover:underline">
                      rcofsfw@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 5pm</p>
                    <a href="tel:+14152034779" className="text-primary font-medium hover:underline">
                      (415) 203-4779
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">Monthly meetings. Third Thursday at 7:30 am</p>
                    <address className="not-italic text-foreground">
                      Crepes on Cole<br />
                      San Francisco, CA 94117
                    </address>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold text-primary">Send a Message</h2>
            <Card className="border shadow-md">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[150px]"
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto font-semibold">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
