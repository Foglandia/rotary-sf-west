import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowRight, ExternalLink, ChevronRight, ChevronDown, Users, Globe, Heart } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

import image1 from "@assets/stock_images/diverse_group_of_vol_41b6559d.jpg";
import image2 from "@assets/stock_images/volunteers_packing_f_6a3a0d33.jpg";
import image3 from "@assets/stock_images/happy_volunteers_wor_0c694cf7.jpg";
import image4 from "@assets/stock_images/beach_cleanup_volunt_2ef89fde.jpg";
import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import foodDriveImg from "@assets/fooddrivesorting_1765320006510.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/stock_images/beach_cleanup_ocean__30385de7.jpg";

// Mock Data for Upcoming Activities
const upcomingActivities = [
  {
    id: 1,
    title: "Community Park Cleanup",
    date: "Dec 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Central City Park",
    description: "Join us for a morning of cleaning up our beloved park. We'll be planting new flowers, painting benches, and clearing trails to ensure a safe and beautiful space for everyone to enjoy. Gloves and bags provided.",
    image: parkCleanupImg,
    category: "community"
  },
  {
    id: 2,
    title: "Food Drive Sorting",
    date: "Dec 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Street Community Center",
    description: "Help us sort and pack food donations for local families in need this holiday season. We have received over 5000 pounds of non-perishable items that need to be categorized and boxed for distribution.",
    image: foodDriveImg,
    category: "community"
  },
  {
    id: 3,
    title: "Senior Home Visit",
    date: "Jan 05, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Sunrise Senior Living",
    description: "Spend time playing board games and chatting with residents. Bring your smiles! We are looking for volunteers who can play piano or guitar to lead a sing-along session with the seniors.",
    image: seniorVisitImg,
    category: "club"
  },
  {
    id: 4,
    title: "Annual Charity Gala",
    date: "Jan 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, City Hotel",
    description: "Our biggest fundraiser of the year! Join us for an evening of dinner, dancing, and auctions to support our community projects. Formal attire requested. Tickets available online.",
    image: galaEventImg,
    category: "club"
  },
  {
    id: 5,
    title: "Youth Reading Mentorship",
    date: "Jan 22, 2026",
    time: "3:30 PM - 5:30 PM",
    location: "Westside Public Library",
    description: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 6,
    title: "Ocean Beach Cleanup",
    date: "Feb 01, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Ocean Beach, Stairwell 17",
    description: "Let's keep our coastline beautiful! We're partnering with the Surf Rider Foundation to remove plastic and debris from the beach. Bring reusable water bottles and sunscreen.",
    image: beachCleanupImg,
    category: "community"
  },
];

const getCategoryDetails = (category: string) => {
  switch(category) {
    case "club":
      return { 
        label: "Club Activity", 
        color: "bg-[#17458f] text-white", 
        icon: Users 
      };
    case "other_rotary":
      return { 
        label: "Other Rotary Event", 
        color: "bg-[#f59e0b] text-white", 
        icon: Globe 
      };
    case "community":
      return { 
        label: "Community Event", 
        color: "bg-[#10b981] text-white", 
        icon: Heart 
      };
    default:
      return { 
        label: "Event", 
        color: "bg-gray-500 text-white", 
        icon: Calendar 
      };
  }
};

// Mock Data for Quick Links
const quickLinks = [
  { label: "Join the Club", href: "/join-us" },
  { label: "Club Leadership", href: "/leadership" },
  { label: "Club Blog", href: "/blog" },
  { label: "Rotary International", href: "/rotary-international" },
];

const carouselImages = [
  { src: image1, alt: "Volunteers planting trees" },
  { src: image2, alt: "Packing food boxes" },
  { src: image3, alt: "Helping seniors" },
  { src: image4, alt: "Beach cleanup" },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  
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
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight">
              Welcome to Rotary San Francisco West
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full"></div>
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
          
          {/* Left Sidebar: Quick Links (20% - 2/10 cols) */}
          <aside className="lg:col-span-2 space-y-6">
             <section className="bg-muted/30 rounded-2xl p-6 border border-border/50 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-[#d41367]" />
                Quick Links
              </h2>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    className="group flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-[#d41367] group-hover:text-primary transition-colors" />
                    <span className="font-medium text-base underline-offset-4 group-hover:underline">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </aside>

          {/* Main Content Area: Upcoming Activities (80% - 8/10 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Upcoming Activities Section */}
             <section className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full">
              <div className="bg-primary/5 p-6 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Upcoming Activities
                </h2>
                
                {/* Category Key/Legend */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#17458f]"></div>
                    <span className="text-xs font-medium text-muted-foreground">Club Activity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]"></div>
                    <span className="text-xs font-medium text-muted-foreground">Other Rotary Event</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#10b981]"></div>
                    <span className="text-xs font-medium text-muted-foreground">Community Event</span>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-border/50">
                {upcomingActivities.slice(0, visibleCount).map((activity) => (
                  <Collapsible key={activity.id} className="group">
                    <div className="p-6 hover:bg-muted/30 transition-colors flex flex-col md:flex-row gap-6 md:items-start">
                      
                      <div className="shrink-0">
                        <img 
                          src={activity.image} 
                          alt={activity.title} 
                          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-sm"
                        />
                      </div>

                      <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex flex-col gap-1">
                              <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit flex items-center gap-1 ${getCategoryDetails(activity.category).color}`}>
                                {(() => {
                                  const Icon = getCategoryDetails(activity.category).icon;
                                  return <Icon className="h-3 w-3" />;
                                })()}
                                {getCategoryDetails(activity.category).label}
                              </div>
                              <h3 className="font-bold text-lg text-foreground mt-1">
                                  {activity.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                  {activity.location}
                              </span>
                              <div className="text-sm text-[#657f99] font-semibold uppercase tracking-wide">
                                  {activity.date} • {activity.time}
                              </div>
                          </div>

                          <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                              {activity.description}
                          </p>

                          <CollapsibleTrigger asChild>
                              <div className="flex items-center gap-1 text-sm text-primary font-semibold cursor-pointer hover:underline group/trigger select-none w-fit">
                                  View Details
                                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                              </div>
                          </CollapsibleTrigger>
                      </div>

                    </div>
                    
                    <CollapsibleContent className="px-6 pb-6 animate-collapsible-down">
                      <div className="text-sm text-muted-foreground pt-0 border-t border-border/30 mt-[-0.5rem] pt-4">
                        <p className="hidden group-data-[state=open]:block">{activity.description}</p>
                        <p className="mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
              
              <div className="p-4 bg-muted/30 border-t border-border/50 text-center">
                {visibleCount < upcomingActivities.length ? (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setVisibleCount(upcomingActivities.length)}
                  >
                    View More Activities
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setVisibleCount(3)}
                  >
                    View Less Activities
                  </Button>
                )}
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}