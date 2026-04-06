import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "wouter";
import { pages } from "@/lib/content";

import socialImg from "@assets/stock_images/picnic_in_park_with__bb86390f.jpg";

const page = pages["social-events"];
const m = page?.meta ?? {};

export default function SocialEvents() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              {page?.title ?? "Social Events"}
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          {(page?.subtitle || page?.body) && (
            <p className="text-lg text-muted-foreground">
              {page?.subtitle || page?.body}
            </p>
          )}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={socialImg} 
              alt="Members enjoying a social event" 
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-6">
            {m.sectionHeading && (
              <h2 className="text-2xl font-heading font-bold text-primary">{m.sectionHeading}</h2>
            )}
            {m.sectionDescription && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {m.sectionDescription}
              </p>
            )}
            {m.sectionDescription2 && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {m.sectionDescription2}
              </p>
            )}
          </div>
        </div>

        <section className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border/50">
          {m.ctaHeading && (
            <h2 className="text-2xl font-bold font-heading text-primary mb-4">
              {m.ctaHeading}
            </h2>
          )}
          {m.ctaDescription && (
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {m.ctaDescription}
            </p>
          )}
          <Button asChild size="lg" className="px-8 shadow-md">
            <Link href="/activities-calendar">
              <Calendar className="h-4 w-4 mr-2" />
              {m.ctaButtonLabel ?? "View Calendar"}
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
