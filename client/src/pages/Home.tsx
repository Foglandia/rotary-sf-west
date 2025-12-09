import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@assets/stock_images/diverse_group_of_vol_41b6559d.jpg";
import image2 from "@assets/stock_images/volunteers_packing_f_6a3a0d33.jpg";
import image3 from "@assets/stock_images/happy_volunteers_wor_0c694cf7.jpg";
import image4 from "@assets/stock_images/beach_cleanup_volunt_2ef89fde.jpg";

// Mock Data for Upcoming Activities
const upcomingActivities = [
  {
    id: 1,
    title: "Community Park Cleanup",
    date: "Dec 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Central City Park",
    description: "Join us for a morning of cleaning up our beloved park. Gloves and bags provided.",
  },
  {
    id: 2,
    title: "Food Drive Sorting",
    date: "Dec 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Street Community Center",
    description: "Help us sort and pack food donations for local families in need this holiday season.",
  },
  {
    id: 3,
    title: "Senior Home Visit",
    date: "Jan 05, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Sunrise Senior Living",
    description: "Spend time playing board games and chatting with residents. Bring your smiles!",
  },
];

// Mock Data for Quick Links
const quickLinks = [
  { label: "Volunteer Application", href: "/membership" },
  { label: "Donate Now", href: "#" },
  { label: "Partner Organizations", href: "#" },
  { label: "Volunteer Handbook", href: "#" },
  { label: "Annual Report 2024", href: "#" },
];

const carouselImages = [
  { src: image1, alt: "Volunteers planting trees" },
  { src: image2, alt: "Packing food boxes" },
  { src: image3, alt: "Helping seniors" },
  { src: image4, alt: "Beach cleanup" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      {/* Horizontal Scrolling Image Carousel */}
      <section className="w-full bg-muted/20 border-b border-border/50">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                   <img 
                     src={image.src} 
                     alt={image.alt} 
                     className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <p className="text-white font-bold text-lg">{image.alt}</p>
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
             <CarouselPrevious className="relative left-0 bg-background/80 hover:bg-background pointer-events-auto shadow-md border-primary/20" />
             <CarouselNext className="relative right-0 bg-background/80 hover:bg-background pointer-events-auto shadow-md border-primary/20" />
          </div>
        </Carousel>
      </section>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Intro Section - Full Width at Top */}
        <section className="space-y-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
              Welcome to Rotary San Francisco West
            </h1>
            <div className="h-1 w-20 bg-secondary rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-primary leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8 shadow-md">
              Join Us Today
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
          
          {/* Left Sidebar: Quick Links (30% - 3/10 cols) */}
          <aside className="lg:col-span-3 space-y-6">
             <section className="bg-muted/30 rounded-2xl p-6 border border-border/50 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-secondary" />
                Quick Links
              </h2>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    className="group flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-secondary group-hover:text-primary transition-colors" />
                    <span className="font-medium text-base underline-offset-4 group-hover:underline">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </aside>

          {/* Main Content Area: Upcoming Activities (70% - 7/10 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Upcoming Activities Section */}
             <section className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full">
              <div className="bg-primary/5 p-6 border-b border-border/50">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Upcoming Activities
                </h2>
              </div>
              
              <div className="divide-y divide-border/50">
                {upcomingActivities.map((activity) => (
                  <div key={activity.id} className="p-6 hover:bg-muted/30 transition-colors flex flex-col md:flex-row gap-6 md:items-center">
                    
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-foreground">
                            {activity.title}
                        </h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                {activity.location}
                            </span>
                            <div className="text-sm text-[#657f99] font-semibold uppercase tracking-wide">
                                {activity.date} • {activity.time}
                            </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                        {activity.description}
                        </p>
                    </div>

                    <div className="shrink-0">
                      <Button variant="outline" size="sm" className="w-full md:w-auto font-semibold group">
                        View Details <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-muted/30 border-t border-border/50 text-center">
                <Button variant="ghost" className="w-full">
                  View Full Calendar
                </Button>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}
