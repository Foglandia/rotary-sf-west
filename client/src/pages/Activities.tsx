import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, GlassWater, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";
import { pages, siteSettings } from "@/lib/content";

export default function Activities() {
  const page = pages["activities"];
  const m = page?.meta ?? {};
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              {page?.title ?? "Our Activities"}
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          {(page?.subtitle || page?.body) && (
            <p className="text-lg text-muted-foreground">
              {page?.subtitle || page?.body}
            </p>
          )}
          <Button asChild className="mt-2">
            <Link href="/activities-calendar">
              <Calendar className="h-4 w-4 mr-2" />
              View Activities Calendar
            </Link>
          </Button>
        </section>

        <div className="space-y-16 md:space-y-24">
          
          {/* Monthly Meetings */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {m.meetingsBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] font-medium text-sm">
                  <Users className="h-4 w-4" />
                  {m.meetingsBadge}
                </div>
              )}
              {m.meetingsHeading && (
                <h2 className="text-3xl font-heading font-bold text-primary">{m.meetingsHeading}</h2>
              )}
              {m.meetingsDescription && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {m.meetingsDescription}
                </p>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-muted/30 border-border/50">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">When</h4>
                      <p className="text-sm text-muted-foreground">
                        {siteSettings.meetingDay}<br />{siteSettings.meetingTime}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-border/50">
                  <CardContent className="p-4 flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Where</h4>
                      <p className="text-sm text-muted-foreground">
                        {siteSettings.meetingLocation}<br />{siteSettings.meetingAddress}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="pt-2">
                <Button asChild className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/90">
                  <Link href="/join-us">{m.meetingsButtonLabel ?? "Join Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
               <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#8b5cf6]/10 rounded-2xl -z-10"></div>
               <img 
                 src="/uploads/202602_001_ServiceAward_Frank_Narine_1770766292210.jpg" 
                 alt="Rotary Club Monthly Meeting" 
                 className="rounded-2xl shadow-lg w-3/4 object-contain mx-auto"
               />
            </div>
          </section>

          {/* Club Activities */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2 space-y-6">
              {m.clubActivitiesBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] font-medium text-sm">
                  <Calendar className="h-4 w-4" />
                  {m.clubActivitiesBadge}
                </div>
              )}
              {m.clubActivitiesHeading && (
                <h2 className="text-3xl font-heading font-bold text-primary">{m.clubActivitiesHeading}</h2>
              )}
              {m.clubActivitiesDescription && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {m.clubActivitiesDescription}
                </p>
              )}
              {Array.isArray(m.clubActivitiesItems) && m.clubActivitiesItems.length > 0 && (
                <ul className="space-y-2 text-muted-foreground">
                  {m.clubActivitiesItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="pt-2">
                <Button asChild className="bg-[#10b981] hover:bg-[#10b981]/90">
                  <Link href="/join-us">{m.clubActivitiesButtonLabel ?? "Join Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="lg:order-1 relative">
               <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-[#10b981]/10 rounded-2xl -z-10"></div>
               <img 
                 src="/uploads/Rotary_202601_002_Narine_MaryNotsch_FrankMoreman_MLKDayEvent_1770766554161.jpg" 
                 alt="Volunteers working in the park" 
                 className="rounded-2xl shadow-lg w-3/4 object-contain mx-auto"
               />
            </div>
          </section>

          {/* Social Events */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {m.socialEventsBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 text-[#ec4899] font-medium text-sm">
                  <GlassWater className="h-4 w-4" />
                  {m.socialEventsBadge}
                </div>
              )}
              {m.socialEventsHeading && (
                <h2 className="text-3xl font-heading font-bold text-primary">{m.socialEventsHeading}</h2>
              )}
              {m.socialEventsDescription && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {m.socialEventsDescription}
                </p>
              )}
              {m.socialEventsDescription2 && (
                <p className="text-muted-foreground">
                  {m.socialEventsDescription2}
                </p>
              )}
              <div className="pt-2">
                <Button asChild className="bg-[#ec4899] hover:bg-[#ec4899]/90">
                  <Link href="/join-us">{m.socialEventsButtonLabel ?? "Join Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
               <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#ec4899]/10 rounded-2xl -z-10"></div>
               <img 
                 src="/uploads/20250802_002_FrankMaryParty_1770766243760.jpg" 
                 alt="Club social picnic" 
                 className="rounded-2xl shadow-lg w-full object-cover aspect-video"
               />
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
