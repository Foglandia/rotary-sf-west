import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Heart, Award, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

// Images will be replaced with the ones we just fetched or existing ones
import aboutHeroImg from "@assets/stock_images/diverse_group_of_peo_7bba3bc2.jpg"; 
import missionImg from "@assets/stock_images/volunteers_working_t_c19be4c5.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                About Rotary San Francisco West
              </h1>
              <div className="h-1 w-24 bg-[#d41367] rounded-full mx-auto"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a dedicated group of neighbors, friends, and community leaders who come together to create positive, lasting change in our communities and around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f59e0b]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#17458f]/20 rounded-full blur-2xl"></div>
                {/* Image removed as per request */}
                <div className="bg-muted/10 rounded-2xl p-8 border border-border/50 h-full flex items-center justify-center">
                   <p className="text-muted-foreground italic text-center max-w-sm">
                     "Service Above Self" is our motto and our mission.
                   </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The mission of the Rotary Club of San Francisco West is to serve and inspire our local community and international partners by creating service opportunities for ourselves and others as expressed in the Rotary principles.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="border-none shadow-md bg-primary/5">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-[#17458f] mb-4" />
                      <h3 className="font-bold text-lg mb-2">Fellowship</h3>
                      <p className="text-sm text-muted-foreground">Building lifelong friendships while serving our community.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md bg-[#d41367]/5">
                    <CardContent className="p-6">
                      <Heart className="h-8 w-8 text-[#d41367] mb-4" />
                      <h3 className="font-bold text-lg mb-2">Service</h3>
                      <p className="text-sm text-muted-foreground">Dedicated to "Service Above Self" in all our endeavors.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                Rotary members believe that we have a shared responsibility to take action on our world’s most persistent issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Promote Peace",
                  description: "We encourage dialogue to foster understanding within and across cultures.",
                  icon: Globe
                },
                {
                  title: "Fight Disease",
                  description: "We educate and equip communities to stop the spread of life-threatening diseases.",
                  icon: Heart
                },
                {
                  title: "Support Education",
                  description: "We support basic education and literacy, reduce gender disparity in education, and increase adult literacy.",
                  icon: Award
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
             <div className="space-y-6 text-center mb-12">
               <h2 className="text-3xl font-heading font-bold text-primary">Our Leadership</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Our club is led by a diverse group of professionals dedicated to making a difference. Meet the team that guides our service projects and club operations.
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Sarah Jenkins", role: "President" },
                { name: "Robert Chen", role: "Treasurer" },
                { name: "Emily Rodriguez", role: "New Member Recruitment Lead" }
              ].map((leader, index) => (
                <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {leader.role}
                    </div>
                    <h3 className="text-xl font-bold">
                      {leader.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
             </div>
             
             <div className="pt-12 text-center">
               <Button asChild size="lg">
                 <Link href="/leadership">Meet Our Full Team</Link>
               </Button>
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#17458f] py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Join us at our next meeting or participate in an upcoming service project to see what Rotary is all about.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="font-bold" asChild>
                <Link href="/join-us">Become a Member</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#17458f]" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
