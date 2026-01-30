import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

import socialImg from "@assets/stock_images/picnic_in_park_with__bb86390f.jpg";

export default function SocialEvents() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Social Events
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Mixed in with service is a large dose of friendship and fun. SF West members enjoy picnics, dinners, and other social gatherings throughout the year.
          </p>
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
            <h2 className="text-2xl font-heading font-bold text-primary">Building Friendships</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond our service work, Rotary San Francisco West is a community of friends. Our social events provide opportunities to connect with fellow members in relaxed settings, share experiences, and build lasting relationships.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From seasonal picnics to holiday dinners, there are multiple opportunities throughout the year to enjoy each other's company outside of our regular meetings and service projects.
            </p>
          </div>
        </div>

        <section className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border/50">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">
            Join Us at Our Next Event
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check our activities calendar to see upcoming social events and gatherings. All members and prospective members are welcome!
          </p>
          <Button asChild size="lg" className="px-8 shadow-md">
            <Link href="/activities-calendar">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
