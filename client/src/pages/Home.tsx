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
  return text.split(/(\[.*?\]\(.*?\)|https?:\/\/[^\s]+)/g).map((part, i) => {
    const mdMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (mdMatch) {
      return <a key={i} href={mdMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#17458f] underline hover:text-[#3d6db8]">{mdMatch[1]}</a>;
    }
    if (part.match(/^https?:\/\//)) {
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-[#17458f] underline hover:text-[#3d6db8]">{part}</a>;
    }
    return part;
  });
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
import bookDriveImg from "@assets/TheBookWagon_Logo_1770853730388.jpg";
import bookDrive1Img from "@assets/Rotary_20250201_001_Bookdrive_1772834648852.jpeg";
import bookDrive2Img from "@assets/Rotary_20250201_002_Bookdrive_1772834648852.jpeg";
import febMeetingImg from "@assets/Rotary_JanMeeting_1772834952435.jpeg";
import foodDriveImg from "@assets/Rotary_202511_004_Thanskgiving_Turkeygiveaway_GroupShot_1770766111577.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/OceanBeachCleanup_1770760972338.png";
import christmasGiftsImg from "@assets/stock_images/volunteers_handing_o_4a2e2d94.jpg";
import serviceAwardImg from "@assets/202602_001_ServiceAward_Frank_Narine_1770755899495.jpg";
import trailRepairImg from "@assets/20260221_WoodsideTrailRepair_1770756385281.jpeg";
import breakfastMeetingImg from "@assets/joyful_breakfast_cafe.jpg";
import holidayPartyImg from "@assets/20251207_001_RotaryHolidayParty_1770855168166.jpeg";
import holidayGiftsImg from "@assets/Rotary_202512_002_ChristmasGift_Giveaway_1770855337631.jpeg";
import giftGiveaway3Img from "@assets/Rotary_202512_003_ChristmasGift_Giveaway_Narine_1770855714399.jpeg";
import giftGiveaway1Img from "@assets/Rotary_202512_001_ChristmasGift_Giveaway_Narine_1770855741023.jpeg";
import debunking1Img from "@assets/20250802_001_FrankMary_Dubunking_Party_1770857265962.jpeg";
import debunking2Img from "@assets/20250802_002_FrankMary_Debunking_Party_1770857265963.jpg";
import debunking3Img from "@assets/20250802_003_FrankMary_Dubunking_Party_1770857265963.jpeg";
import debunking4Img from "@assets/20250802_004_FrankMary_Debunking_Party_1770857265963.jpg";
import giftGiveaway4Img from "@assets/Rotary_202512_004_ChristmasGive-away_1770857762272.jpg";
import thanksgiving1Img from "@assets/Rotary_202511_001_Thanksgiving_Turkeygiveaway_2025_1770857589358.jpeg";
import thanksgiving2Img from "@assets/Rotary_202511_002_Thanksgiving_Frank&Narine_1770857589359.jpeg";
import thanksgiving3Img from "@assets/Rotary_202511_003_Thanksgiving_Turkeys_2025_1770857589359.jpeg";
import thanksgiving4Img from "@assets/Rotary_202511_004_Thanskgiving_Turkeygiveaway_GroupShot_1770857589359.jpg";
import mlk1Img from "@assets/Rotary_202601_001_MaryNotsch_FrankMoreman_MLKDayEvent_1770858215166.jpeg";
import mlk2Img from "@assets/Rotary_202601_002_Narine_MaryNotsch_FrankMoreman_MLKDayEvent_1770858215166.jpg";
import mlk3Img from "@assets/Rotary_202601_003_MaryNotsch_FrankMoreman_MLKDayEvent_1770858215166.jpg";

// Mock Data for Upcoming Activities
const upcomingActivities = [
  {
    id: 8,
    title: "Monthly Meeting",
    date: "Mar 10, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    description: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
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
    id: 15,
    title: "Book Distribution - Cesar Chavez Elementary School",
    date: "Mar 25, 2026",
    time: "1:00 PM - 3:00 PM",
    location: "Cesar Chavez Elementary School, San Francisco",
    description: "We will join the Book Wagon team to distribute books to students at Cesar Chavez Elementary School.",
    image: bookDriveImg,
    category: "club"
  },
  {
    id: 17,
    title: "Monthly Meeting",
    date: "Apr 9, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    description: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 16,
    title: "Dia de los Ninos Book Give-away",
    date: "Apr 30, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "3090 23rd Street, San Francisco",
    description: "Volunteers needed to give away books and participate in reading activities. For more info visit https://sfpl.org/events/2023/04/30/celebration-dia-de-los-ningodia-de-los-libros",
    image: bookDriveImg,
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

const pastActivities: (typeof upcomingActivities[number] & { extraImages?: string[]; video?: string })[] = [
  {
    id: 106,
    title: "Monthly Meeting",
    date: "Feb 12, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    description: "Club members got together for breakfast. Danielle Butler from the Cole Valley Neighborhood Association gave us an overview of their organization and we discussed ways to work together.",
    image: febMeetingImg,
    category: "meeting"
  },
  {
    id: 105,
    title: "Book Wagon Book Drive",
    date: "Feb 1 - 28, 2026",
    time: "",
    location: "San Francisco",
    description: "We collected new and lightly-used children's books (infant to 5th grade) to be donated to the Book Wagon. The Book Wagon distributes free books to children in elementary schools in San Francisco so they can build a home library.",
    image: bookDrive1Img,
    extraImages: [bookDrive2Img],
    category: "club"
  },
  {
    id: 104,
    title: "MLK Day Volunteer Assistance",
    date: "Jan 19, 2026",
    time: "",
    location: "Museum of the African Diaspora (MOAD), San Francisco",
    description: "Rotary volunteers helped with MLK activities at MOAD.",
    image: mlk2Img,
    extraImages: [mlk1Img, mlk3Img],
    category: "community"
  },
  {
    id: 101,
    title: "Good Samaritan Christmas Gift Give-away",
    date: "Dec 18, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Good Samaritan Family Resource Center",
    description: "Rotary members handed out Christmas gifts at Good Samaritan. Thanks to [Andrea's Bakery](https://www.instagram.com/andreasbakerysf/?hl=en) for the tasty treats.",
    image: giftGiveaway4Img,
    extraImages: [giftGiveaway3Img, giftGiveaway1Img],
    category: "community"
  },
  {
    id: 100,
    title: "Rotary SF West Holiday Party",
    date: "Dec 7, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "San Francisco",
    description: "Team got together to wrap gifts for children and enjoy great food, drinks and company.",
    image: holidayPartyImg,
    extraImages: [holidayGiftsImg],
    video: "/videos/holiday_party.mov",
    category: "club"
  },
  {
    id: 103,
    title: "Good Samaritan Thanksgiving Meals Give-away",
    date: "Nov 22, 2025",
    time: "10:30 AM - 12:30 PM",
    location: "Good Samaritan Family Resource Center",
    description: "Rotary West Volunteers gathered at the Good Samaritan Family Resource Center to hand out Thanksgiving meals.",
    image: thanksgiving4Img,
    extraImages: [thanksgiving1Img, thanksgiving2Img, thanksgiving3Img],
    category: "community"
  },
  {
    id: 102,
    title: "Rotary SF West Debunking Gathering",
    date: "Aug 2, 2025",
    time: "5:30 PM - 8:30 PM",
    location: "San Francisco",
    description: "Members gathered for a fun debunking evening of fellowship and conversation.",
    image: debunking2Img,
    extraImages: [debunking1Img, debunking3Img, debunking4Img],
    category: "club"
  },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [pastVisibleCount, setPastVisibleCount] = useState(3);
  
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
                                    Learn More
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </div>
                            </CollapsibleTrigger>
                            <Button size="sm" className="h-8 px-4 font-semibold" asChild>
                              <Link href={`/activity/${activity.id}`}>View Details</Link>
                            </Button>
                          </div>
                      </div>

                    </div>
                    
                    <CollapsibleContent className="px-6 pb-6 animate-collapsible-down">
                      <div className="text-sm text-muted-foreground pt-0 border-t border-border/30 mt-[-0.5rem] pt-4">
                        <p className="hidden group-data-[state=open]:block">{renderTextWithLinks(activity.fullDescription || activity.description)}</p>
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

        {/* Past Activities Section - Full Width */}
        {pastActivities.length > 0 && (
          <section className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mt-12">
            <div className="bg-primary/5 p-6 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Past Activities
              </h2>
              
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
              {pastActivities.slice(0, pastVisibleCount).map((activity) => (
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

                    </div>

                  </div>

                  {(activity.extraImages?.length || activity.video) && (
                    <div className="px-6 pb-6 flex flex-wrap gap-4 items-start">
                      {activity.video && (
                        <video 
                          src={activity.video} 
                          controls 
                          className="w-64 h-48 rounded-lg shadow-sm object-cover"
                        />
                      )}
                      {activity.extraImages?.map((img: string, idx: number) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${activity.title} photo ${idx + 2}`} 
                          className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        />
                      ))}
                    </div>
                  )}
                  
                </Collapsible>
              ))}
            </div>
            
            {pastActivities.length > 3 && (
              <div className="p-4 bg-muted/30 border-t border-border/50 text-center">
                {pastVisibleCount < pastActivities.length ? (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setPastVisibleCount(pastActivities.length)}
                  >
                    View More Activities
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setPastVisibleCount(3)}
                  >
                    View Less Activities
                  </Button>
                )}
              </div>
            )}
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}