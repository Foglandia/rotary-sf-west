import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

const groupImg = "/uploads/RotarySFWest_Group_1769969400809.jpeg";
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBoXzfh3yePzM0kYAWgdUUgDm_EtKm5OWiBmyWRdsrH-zs7g/viewform?usp=header";

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
                  Join the Club
                </h1>
                <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join Rotary San Francisco West and become part of a vibrant community dedicated to making a difference! We're not just about service; we're about building lasting friendships, learning from each other, and having a great time while giving back. Whether we're organizing a local food drive, cleaning up our beautiful beaches, or enjoying a social mixer, you'll find a welcoming group of professionals who believe that service above self is the key to a fulfilling life. Come for the cause, stay for the community!
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary/10 rounded-2xl -z-10"></div>
              <img
                src={groupImg}
                alt="Rotary San Francisco West members group photo"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
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

          {/* Membership Interest Form Link */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-md h-full flex flex-col justify-center">
              <CardContent className="p-10 flex flex-col items-center text-center gap-6">
                <h2 className="text-2xl font-bold text-foreground">Membership Interest Form</h2>
                <p className="text-muted-foreground max-w-md">
                  Ready to take the next step? Fill out our membership interest form and our Recruitment Lead will get in touch with you shortly.
                </p>
                <Button size="lg" className="px-8 shadow-md gap-2" asChild>
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="link-membership-form">
                    Open Membership Form
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
