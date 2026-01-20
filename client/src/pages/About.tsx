import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                About Us
              </h1>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Perhaps you have been at Crepes on Cole on a Thursday morning and seen a group of folks at a long table, talking animatedly. You may have thought it was a group of friends meeting for morning coffee, which it is, but it's so much more. What you're seeing is the monthly meeting of the San Francisco West Rotary Club, one of the oldest Rotary Clubs in the city.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Rotary Club is the world's largest service organization with over 1.2 million members. It is a grassroots organization with most of the service being carried out by the members in their local communities. Rotarians work together on both regional and international projects which can be anything from providing academic scholarships for high school and college students to building sanitation facilities for a girl's school in Bangladesh. Bay Area Rotary clubs work together each year to put on a weeklong leadership camp in the Santa Cruz mountains that is free to Bay Area high school students.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The mission of the Rotary Club of San Francisco West is to serve and inspire our local community and international partners by creating service opportunities for ourselves and others as expressed in the Rotary principles.
              </p>
              <div className="space-y-4 pt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Fellowship</h3>
                  <p className="text-muted-foreground">Building lifelong friendships while serving our community.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Service</h3>
                  <p className="text-muted-foreground">Dedicated to "Service Above Self" in all our endeavors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rotary brings together a global network of volunteers who dedicate their time and talents to tackle the world's most pressing humanitarian challenges. Rotary connects 1.2 million members from more than 200 countries and geographical areas. Their work impacts lives at both the local and international levels, helping families in the need in their polio-free world.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6 mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary">Our Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Our club is led by a diverse group of professionals dedicated to making a difference. Meet the team that guides our service projects and club operations.
              </p>
            </div>
             
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
              {[
                { name: "Sarah Jenkins", role: "President" },
                { name: "Robert Chen", role: "Treasurer" },
                { name: "Emily Rodriguez", role: "New Member Recruitment Lead" }
              ].map((leader, index) => (
                <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-2">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#17458f] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Make a Difference?</h2>
              <p className="text-blue-100 text-lg">
                Join us at our next meeting or participate in an upcoming service project to see what Rotary is all about.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="font-bold" asChild>
                  <Link href="/join-us">Become a Member</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#17458f]" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
