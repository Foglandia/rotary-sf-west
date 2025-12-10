import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function JoinUs() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
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
      const response = await fetch("/api/membership-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. Our Recruitment Lead will contact you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          reason: "",
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
        description: "Unable to submit application. Please try again.",
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
              Join the Club
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join Rotary San Francisco West and become part of a vibrant community dedicated to making a difference! We're not just about service; we're about building lasting friendships, learning from each other, and having a great time while giving back. Whether we're organizing a local food drive, cleaning up our beautiful beaches, or enjoying a social mixer, you'll find a welcoming group of professionals who believe that service above self is the key to a fulfilling life. Come for the cause, stay for the community!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefits / Info Column */}
          <div className="lg:col-span-1 space-y-6">
             <Card className="bg-primary/5 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">Why Join?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                    <p className="text-sm">Connect with diverse professionals and community leaders.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                    <p className="text-sm">Make a tangible impact through hands-on service projects.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                    <p className="text-sm">Develop leadership skills and professional growth.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                    <p className="text-sm">Enjoy social events, dinners, and fun outings.</p>
                  </div>
                </CardContent>
             </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Membership Interest Form</CardTitle>
                <CardDescription>
                  Please fill out the details below and our Recruitment Lead will get in touch with you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="firstName" 
                        placeholder="Jane" 
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        data-testid="input-firstName"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jane@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                    <Input 
                      id="address" 
                      placeholder="123 Main St, San Francisco, CA 94117" 
                      required 
                      value={formData.address}
                      onChange={handleChange}
                      data-testid="input-address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to join Rotary? <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="reason" 
                      placeholder="Tell us a bit about your interests and what you hope to gain from membership..." 
                      className="min-h-[120px]"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      data-testid="input-reason"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto px-8"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
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
