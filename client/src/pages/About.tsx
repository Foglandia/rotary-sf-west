import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

import presidentImg from "@assets/NarineHeadshot_1765331555432.jpeg";
import treasurerImg from "@assets/stock_images/professional_man_bus_12f770ef.jpg";
import recruitmentImg from "@assets/stock_images/friendly_young_profe_541f0530.jpg";

export default function About() {
  const leaders = [
    { name: "Sarah Jenkins", role: "President", image: presidentImg },
    { name: "Robert Chen", role: "Treasurer", image: treasurerImg },
    { name: "Emily Rodriguez", role: "New Member Recruitment Lead", image: recruitmentImg }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* About Us Section */}
        <section className="bg-muted/30 py-12 md:py-16 border-b border-border/50">
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

        {/* Our Focus Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Our Focus</h2>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We support children and families and have several ongoing projects. Our club provides support to the Good Samaritan Family Resource Center by supplying Thanksgiving dinners to families and holiday gifts to children. SF West also runs a "breakfast club" at the Edgewood Center for Children and Families where we cook a hearty weekend breakfast for everyone that we sit down and enjoy with the kids and staff. SF West members also help out when needed at organizations like St. Anthony's dining room and the KZV Armenian School. Each month brings us a new opportunity to serve our community.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Preview Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6 mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary">Our Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Our club is led by a diverse group of professionals dedicated to making a difference. Meet the team that guides our service projects and club operations.
              </p>
            </div>
             
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
              {leaders.map((leader, index) => (
                <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

      </main>
      
      <Footer />
    </div>
  );
}
