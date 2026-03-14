import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowLeft, Users, Globe, Heart, MessageCircle } from "lucide-react";
import { Link, useParams } from "wouter";
import { getActivityBySlug, getCategoryDetails } from "@/lib/content";

const getCategoryIcon = (category: string) => {
  switch(category) {
    case "club": return Users;
    case "other_rotary": return Globe;
    case "community": return Heart;
    case "meeting": return MessageCircle;
    default: return Calendar;
  }
};

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

export default function ActivityDetail() {
  const params = useParams<{ slug: string }>();
  const activity = getActivityBySlug(params.slug || "");

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-primary mb-4">Activity Not Found</h1>
            <p className="text-muted-foreground mb-6">The activity you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = getCategoryDetails(activity.category);
  const CategoryIcon = getCategoryIcon(activity.category);
  const mapQuery = encodeURIComponent(activity.address);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${category.color} ${category.textColor} text-sm font-medium mb-3`}>
                <CategoryIcon className="h-4 w-4" />
                {category.label}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {activity.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-xl font-heading font-bold text-primary mb-4">Event Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-semibold">{activity.displayDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{activity.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold">{activity.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`h-10 w-10 rounded-full ${category.color} flex items-center justify-center shrink-0`}>
                        <CategoryIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Event Type</p>
                        <p className="font-semibold">{category.label}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {(activity.body || activity.description).split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {renderTextWithLinks(paragraph)}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/30 border-b">
                    <h2 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Location
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{activity.address}</p>
                  </div>
                  <div className="aspect-[2/1] w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className={`shadow-md border-t-4 ${category.borderColor}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">Ready to Join?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sign up to participate in this event and make a difference in our community.
                  </p>
                  <Button className="w-full" size="lg">
                    Sign Up for This Event
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have any questions about this event, please don't hesitate to reach out.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Spread the Word</h3>
                  <p className="text-sm text-muted-foreground">
                    Know someone who might be interested? Share this event with friends and family!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
