import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function JoinUs() {
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
            Join Rotary San Francisco West and become part of a vibrant community dedicated to making a difference! We’re not just about service; we’re about building lasting friendships, learning from each other, and having a great time while giving back. Whether we're organizing a local food drive, cleaning up our beautiful beaches, or enjoying a social mixer, you'll find a welcoming group of professionals who believe that service above self is the key to a fulfilling life. Come for the cause, stay for the community!
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
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St, San Francisco, CA 94117" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to join Rotary?</Label>
                    <Textarea 
                      id="reason" 
                      placeholder="Tell us a bit about your interests and what you hope to gain from membership..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                      Submit Application
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
