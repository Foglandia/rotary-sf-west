import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import presidentImg from "@assets/NarineHeadshot_1765331555432.jpeg";
import treasurerImg from "@assets/Ken_Lai_Headshot_1769795085503.jpg";
import membershipImg from "@assets/Mary_Notsch_headshot_1769795201406.jpeg";
import communityServiceImg from "@assets/Frank_Moreman_Headshot_1769795317278.jpg";
import youthServicesImg from "@assets/RobertJocson_Headshot_1769795497883.jpeg";
import foundationImg from "@assets/Bill_Gilmore_Headshot_1769795602195.jpg";

const leadershipTeam = [
  {
    name: "Narine Kerelian",
    role: "President",
    image: presidentImg,
    bio: "Narine leads Rotary SF West with a vision for inclusive community service and impactful local projects. She also provides leadership and support for the Rotary SF West Board.",
    email: "narine.kerelian@example.com",
    linkedin: "https://www.linkedin.com/in/narine-n-kerelian-ph-d-15902915/"
  },
  {
    name: "Ken Lai",
    role: "Treasurer",
    image: treasurerImg,
    bio: "Ken brings extensive financial expertise to our board. He ensures our club's resources are managed transparently and effectively to maximize our contribution to the community.",
    email: "ken.lai@example.com",
    linkedin: "#"
  },
  {
    name: "Mary Notsch",
    role: "Membership Chair",
    image: membershipImg,
    bio: "Mary recruits new members and welcomes them to the club. She is responsible for new member onboarding.",
    email: "mary.notsch@example.com",
    linkedin: "https://www.linkedin.com/in/mary-b-notsch-2489129/"
  },
  {
    name: "Frank Moreman",
    role: "Community Service",
    image: communityServiceImg,
    bio: "Frank coordinates our community service projects and ensures our club continues to make a positive impact in San Francisco.",
    email: "frank.moreman@example.com",
    linkedin: "#"
  },
  {
    name: "Robert Jocson",
    role: "Youth Services/Secretary",
    image: youthServicesImg,
    bio: "Robert oversees our youth programs and serves as club secretary, keeping our records organized and our meetings running smoothly.",
    email: "robert.jocson@example.com",
    linkedin: "#"
  },
  {
    name: "Bill Glimore",
    role: "Foundation Chair",
    image: foundationImg,
    bio: "Bill leads our foundation initiatives and helps connect our local efforts with Rotary International's global mission.",
    email: "bill.glimore@example.com",
    linkedin: "#"
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Club Leadership
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated individuals who serve on our board and lead our committees.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leadershipTeam.map((leader, index) => (
            <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {leader.role}
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {leader.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {leader.bio}
                </CardDescription>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                   <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-[#0077b5]">
                     <Linkedin className="h-5 w-5" />
                   </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border/50">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">
            Interested in Serving?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are always looking for passionate members to join our committees and take on leadership roles. Whether you have skills in event planning, marketing, or community outreach, there's a place for you on our team.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 shadow-md">
              Contact Us
            </Button>
          </Link>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
