import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <h3 className="font-bold text-lg mb-1">Join Us</h3>
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        data-testid="input-firstName"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        data-testid="input-lastName"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help?" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                      data-testid="input-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[150px]"
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      data-testid="input-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto font-semibold"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
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
