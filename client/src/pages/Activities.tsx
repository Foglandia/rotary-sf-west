import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, GlassWater, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

// Import images
import meetingImg from "@assets/202602_001_ServiceAward_Frank_Narine_1770766292210.jpg";
import activityImg from "@assets/Rotary_202601_002_Narine_MaryNotsch_FrankMoreman_MLKDayEvent_1770766554161.jpg";
import socialImg from "@assets/20250802_002_FrankMaryParty_1770766243760.jpg";

export default function Activities() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Our Activities
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            From service projects to social gatherings, there's always something happening at Rotary San Francisco West.
          </p>
          <Button asChild className="mt-2">
            <Link href="/activities-calendar">
              <Calendar className="h-4 w-4 mr-2" />
              View Activities Calendar
            </Link>
          </Button>
        </section>

        <div className="space-y-16 md:space-y-24">
          
          {/* Monthly Meetings Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] font-medium text-sm">
                <Users className="h-4 w-4" />
                Regular Gatherings
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">Monthly Meetings</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join us for breakfast and an update on Rotary San Francisco West upcoming activities. All are welcome. You can show up or contact us at rcofsfw@gmail.com for more information on upcoming meetings.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-muted/30 border-border/50">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">When</h4>
                      <p className="text-sm text-muted-foreground">Second Tuesday of every month<br/>7:30 AM - 8:30 AM</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-border/50">
                  <CardContent className="p-4 flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">Where</h4>
                      <p className="text-sm text-muted-foreground">Crepes on Cole<br/>100 Carl St, San Francisco</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="pt-2">
                 <Button asChild className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/90">
                   <Link href="/join-us">Join Us</Link>
                 </Button>
              </div>

            </div>
            <div className="relative">
               <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#8b5cf6]/10 rounded-2xl -z-10"></div>
               <img 
                 src={meetingImg} 
                 alt="Rotary Club Monthly Meeting" 
                 className="rounded-2xl shadow-lg w-full object-contain"
               />
            </div>
          </section>

          {/* Club Activities Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] font-medium text-sm">
                <Calendar className="h-4 w-4" />
                Service Projects
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">Club Activities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in taking action. Our club organizes diverse service projects throughout the year, ranging from environmental cleanups to youth mentorship programs. Whether you have a few hours on a weekend or want to lead a long-term initiative, there are plenty of ways to get involved and make a tangible difference.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
                  Park Cleanups & Tree Planting
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
                  Food Drives & Distribution
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
                  Senior Home Visits
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
                  Youth Literacy Programs
                </li>
              </ul>
              <div className="pt-2">
                 <Button asChild className="bg-[#10b981] hover:bg-[#10b981]/90">
                   <Link href="/join-us">Join Us</Link>
                 </Button>
              </div>
            </div>
            <div className="lg:order-1 relative">
               <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-[#10b981]/10 rounded-2xl -z-10"></div>
               <img 
                 src={activityImg} 
                 alt="Volunteers working in the park" 
                 className="rounded-2xl shadow-lg w-3/4 object-contain mx-auto"
               />
            </div>
          </section>

          {/* Social Events Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 text-[#ec4899] font-medium text-sm">
                <GlassWater className="h-4 w-4" />
                Fun & Fellowship
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">Social Events</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's not all work! We pride ourselves on being a friendly and welcoming group. Our social committee organizes regular happy hours, holiday parties, picnics, and group outings. These events are the glue that holds our club together, fostering deep friendships that last a lifetime.
              </p>
              <p className="text-muted-foreground">
                Recent social events have included a wine tasting tour, a group hike in Marin, and our annual summer BBQ. Spouses, partners, and friends are always welcome to join the fun.
              </p>
              <div className="pt-2">
                 <Button asChild className="bg-[#ec4899] hover:bg-[#ec4899]/90">
                   <Link href="/join-us">Join Us</Link>
                 </Button>
              </div>
            </div>
            <div className="relative">
               <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#ec4899]/10 rounded-2xl -z-10"></div>
               <img 
                 src={socialImg} 
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
