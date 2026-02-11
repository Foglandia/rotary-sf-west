import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowRight, ExternalLink, ChevronRight, ChevronDown, Users, Globe, Heart, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const renderTextWithLinks = (text: string) => {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    part.match(/^https?:\/\//) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-[#17458f] underline hover:text-[#3d6db8]">{part}</a>
    ) : (
      part
    )
  );
};

import carouselImg1 from "@assets/Rotary_202601_001_MaryNotsch_FrankMoreman_MLKDayEvent_1769799672466.jpeg";
import carouselImg2 from "@assets/Rotary_202512_003_ChristmasGift_Giveaway_Narine_1769799672467.jpeg";
import carouselImg3 from "@assets/Rotary_202511_004_Thanskgiving_Turkeygiveaway_GroupShot_1769799672468.jpg";
import carouselImg4 from "@assets/Rotary_202511_002_Thanksgiving_Frank&Narine_1769799672468.jpeg";
import carouselImg5 from "@assets/Rotary_202511_001_Thanksgiving_Turkeygiveaway_2025_1769799672468.jpeg";
import carouselImg6 from "@assets/Rotary_202512_002_ChristmasGift_Giveaway_1769799672468.jpeg";
import carouselImg7 from "@assets/202602_001_ServiceAward_Frank_Narine_Ma_1769968477823.jpg";

import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import angelIslandImg from "@assets/1024px-Angel_Island_(California)_1770767921980.jpeg";
import bookDriveImg from "@assets/children-reading-books.jpg";
import foodDriveImg from "@assets/Rotary_202511_004_Thanskgiving_Turkeygiveaway_GroupShot_1770766111577.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/OceanBeachCleanup_1770760972338.png";
import christmasGiftsImg from "@assets/stock_images/volunteers_handing_o_4a2e2d94.jpg";
import serviceAwardImg from "@assets/202602_001_ServiceAward_Frank_Narine_1770755899495.jpg";
import trailRepairImg from "@assets/20260221_WoodsideTrailRepair_1770756385281.jpeg";
import breakfastMeetingImg from "@assets/stock_images/breakfast_meeting_gr_273dae38.jpg";

// Mock Data for Upcoming Activities
const upcomingActivities = [
  {
    id: 0,
    title: "Monthly Meeting",
    date: "Feb 12, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    description: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities.",
    image: serviceAwardImg,
    category: "club"
  },
  {
    id: 1,
    title: "Woodland Canyon Creek Restoration",
    date: "Feb 21, 2026",
    time: "8:45 AM - 12:30 PM",
    location: "Woods Lot, 100 Medical Center Way, San Francisco",
    description: "Come join us on Mount Sutro for a morning in habitat restoration activities and help us uncover Woodland Canyon Creek! For more info visit https://www.sutrostewards.org/events",
    image: trailRepairImg,
    category: "community"
  },
  {
    id: 2,
    title: "Food Pantry",
    date: "Feb 28, 2026",
    time: "7:30 AM - 11:00 AM",
    location: "Florence Fang Community Farm, 1 Diana Street, San Francisco",
    description: "The Florence Fang Community Farm is a partner of the SF-Marin Food Bank and serves 350 participating families every week in its food pantry program. Volunteers are needed to help pantry set up, distribute food, breakdown cardboard, and post-pantry clean up. If you have a passion for food security and want to help provide a critical service to the Bayview community, please come out! For more info visit https://ffcommunityfarm.org/volunteer-copy",
    image: foodDriveImg,
    category: "community"
  },
  {
    id: 7,
    title: "Monthly Meeting",
    date: "Jan 15, 2026",
    time: "7:30 AM - 9:00 AM",
    location: "Crepes on Cole",
    description: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 4,
    title: "District 5150 Interact Leadership Conference",
    date: "Mar 19, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "SF War Memorial Veterans Building, 401 Van Ness Avenue, San Francisco",
    description: "Let's get cooking! All District 5150 Interactors are invited to attend this year's Winter Leadership Conference. Registration required. Registration form and parental consent (waiver) form at https://linktr.ee/districtcouncil",
    image: galaEventImg,
    category: "other_rotary"
  },
  {
    id: 6,
    title: "Ocean Beach Cleanup",
    date: "Mar 7, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Ocean Beach, Stairwell 17",
    description: "Come join the fun and help conserve and protect our beautiful public beaches! For more info visit https://www.parksconservancy.org/events/ocean-beach/ocean-beach-clean-ups",
    image: beachCleanupImg,
    category: "community"
  },
  {
    id: 13,
    title: "Angel Island Picnic",
    date: "May 3, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "San Francisco Ferry Terminal, San Francisco",
    description: "Join us for a picnic on Angel Island. We will meet at the Ferry Terminal at 11:00 AM.",
    image: angelIslandImg,
    category: "club"
  },
  {
    id: 14,
    title: "Book Wagon Book Drive",
    date: "Feb 1 - 28, 2026",
    time: "All Month",
    location: "915 Cole St. and 248 West Portal Street, San Francisco",
    description: "We are collecting new and lightly-used children's books (infant to 5th grade) to be donated to the Book Wagon. The Book Wagon distributes free books to children in elementary schools in San Francisco so they can build a home library.",
    image: bookDriveImg,
    category: "club"
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
        label: "Other Rotary Club Event", 
        color: "bg-[#f59e0b] text-white", 
        icon: Globe 
      };
    case "community":
      return { 
        label: "Community Event", 
        color: "bg-[#10b981] text-white", 
        icon: Heart 
      };
    case "meeting":
      return { 
        label: "Club Meeting", 
        color: "bg-[#8b5cf6] text-white", 
        icon: MessageCircle 
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
  { label: "Activities Calendar", href: "/activities-calendar" },
  { label: "Club Blog", href: "/blog" },
  { label: "Rotary International", href: "https://www.rotary.org/en", external: true },
];

const carouselImages = [
  { src: carouselImg1, alt: "MLK Day Event - Mary Notsch and Frank Moreman" },
  { src: carouselImg2, alt: "Christmas Gift Giveaway" },
  { src: carouselImg3, alt: "Thanksgiving Turkey Giveaway Group" },
  { src: carouselImg4, alt: "Holiday Gift Wrapping" },
  { src: carouselImg6, alt: "Gift Bags for Families" },
  { src: carouselImg7, alt: "Service Award - Teddy & Fiona Ma" },
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
            Rotary San Francisco West is a diverse local service group made up of community members, business and nonprofit owners, educators and civic leadership. We provide ongoing support to several family focused nonprofits: Good Samaritan Family Resource Center and the Edgewood Center for Children and Families. We also provide volunteer help at local schools, community gardens and at community meal programs.
          </p>
          <p className="text-lg md:text-xl text-primary leading-relaxed">
            Mixed in with the service is a large dose of friendship and fun. SF West members meet up for picnics, dinners and other social events. There are also multiple opportunities throughout the year to mix with other Rotarians at conferences and training in areas such as leadership and public speaking. The Rotary is truly a global family where all are welcome.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/membership">
              <Button size="lg" className="px-8 shadow-md">
                Join Us Today
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
          
          {/* Left Sidebar: Quick Links (20% - 2/10 cols) */}
          <aside className="lg:col-span-2 space-y-6">
             <section className="bg-muted/30 rounded-2xl p-6 border border-border/50 sticky top-24">
              <div className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
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
                    <span className="text-xs font-medium text-muted-foreground">Other Rotary Club Event</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#10b981]"></div>
                    <span className="text-xs font-medium text-muted-foreground">Community Event</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]"></div>
                    <span className="text-xs font-medium text-muted-foreground">Club Meeting</span>
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

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                              {renderTextWithLinks(activity.description)}
                          </p>

                          <div className="flex items-center gap-4">
                            <CollapsibleTrigger asChild>
                                <div className="flex items-center gap-1 text-sm text-primary font-semibold cursor-pointer hover:underline group/trigger select-none w-fit">
                                    View Details
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </div>
                            </CollapsibleTrigger>
                            <Button size="sm" className="h-8 px-4 font-semibold" asChild>
                              <Link href={`/activity/${activity.id}`}>Learn More</Link>
                            </Button>
                          </div>
                      </div>

                    </div>
                    
                    <CollapsibleContent className="px-6 pb-6 animate-collapsible-down">
                      <div className="text-sm text-muted-foreground pt-0 border-t border-border/30 mt-[-0.5rem] pt-4">
                        <p className="hidden group-data-[state=open]:block">{renderTextWithLinks(activity.description)}</p>
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
      <Footer />
    </div>
  );
}