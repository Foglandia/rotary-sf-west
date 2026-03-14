import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { leaders } from "@/lib/content";

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
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
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
              <CardContent className="flex flex-col flex-1">
                <CardDescription className="text-base leading-relaxed flex-1">
                  {leader.bio}
                </CardDescription>
                
                <div className="flex items-center gap-2 pt-4 mt-4 border-t border-border/50">
                   <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                     <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-[#0077b5]">
                       <Linkedin className="h-5 w-5" />
                     </Button>
                   </a>
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
