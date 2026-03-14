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
import { upcomingActivities, pastActivities, homeContent, getCategoryDetails } from "@/lib/content";

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

const getCategoryIcon = (category: string) => {
  switch(category) {
    case "club": return Users;
    case "other_rotary": return Globe;
    case "community": return Heart;
    case "meeting": return MessageCircle;
    default: return Calendar;
  }
};

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [pastVisibleCount, setPastVisibleCount] = useState(3);
  
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <section className="w-full bg-muted/20 border-b border-border/50">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {homeContent.carouselImages.map((image, index) => (
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
          
          <aside className="lg:col-span-2 space-y-6">
             <section className="bg-muted/30 rounded-2xl p-6 border border-border/50 sticky top-24">
              <div className="flex flex-col gap-3">
                {homeContent.quickLinks.map((link, index) => (
                  link.external ? (
                    <a 
                      key={index} 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-[#d41367] group-hover:text-primary transition-colors" />
                      <span className="font-medium text-base underline-offset-4 group-hover:underline">
                        {link.label}
                      </span>
                    </a>
                  ) : (
                    <Link 
                      key={index} 
                      href={link.href}
                      className="group flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-[#d41367] group-hover:text-primary transition-colors" />
                      <span className="font-medium text-base underline-offset-4 group-hover:underline">
                        {link.label}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </section>
          </aside>

          <div className="lg:col-span-8 space-y-12">
            
             <section className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full">
              <div className="bg-primary/5 p-6 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Upcoming Activities
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
                {upcomingActivities.slice(0, visibleCount).map((activity) => {
                  const category = getCategoryDetails(activity.category);
                  const Icon = getCategoryIcon(activity.category);
                  return (
                  <Collapsible key={activity.slug} className="group">
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
                              <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit flex items-center gap-1 ${category.color} text-white`}>
                                <Icon className="h-3 w-3" />
                                {category.label}
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
                                  {activity.displayDate} • {activity.time}
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
                              <Link href={`/activity/${activity.slug}`}>View Details</Link>
                            </Button>
                          </div>
                      </div>

                    </div>
                    
                    <CollapsibleContent className="px-6 pb-6 animate-collapsible-down">
                      <div className="text-sm text-muted-foreground pt-0 border-t border-border/30 mt-[-0.5rem] pt-4">
                        <p className="hidden group-data-[state=open]:block">{renderTextWithLinks(activity.body || activity.description)}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  );
                })}
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
              {pastActivities.slice(0, pastVisibleCount).map((activity) => {
                const category = getCategoryDetails(activity.category);
                const Icon = getCategoryIcon(activity.category);
                return (
                <Collapsible key={activity.slug} className="group">
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
                            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit flex items-center gap-1 ${category.color} text-white`}>
                              <Icon className="h-3 w-3" />
                              {category.label}
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
                                {activity.displayDate} • {activity.time}
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
                );
              })}
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
