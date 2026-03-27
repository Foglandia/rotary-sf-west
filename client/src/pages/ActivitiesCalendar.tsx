import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe, Heart, MessageCircle, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import { upcomingActivities, getCategoryDetails } from "@/lib/content";

const getCategoryIcon = (category: string) => {
  switch(category) {
    case "club": return Users;
    case "other_rotary": return Globe;
    case "community": return Heart;
    case "meeting": return MessageCircle;
    default: return Calendar;
  }
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const formatDateKey = (year: number, month: number, day: number) => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function ActivitiesCalendar() {
  const [currentDate, setCurrentDate] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  const activitiesByDate = upcomingActivities.reduce((acc, activity) => {
    const dateStr = new Date(activity.date).toISOString().split('T')[0];
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(activity);
    return acc;
  }, {} as Record<string, typeof upcomingActivities>);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-8 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Activities Calendar
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            View all our upcoming events and activities at a glance.
          </p>
        </section>

        <div className="flex justify-center gap-2 mb-6">
          <Button
            variant={viewMode === "calendar" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("calendar")}
            className="gap-2"
          >
            <LayoutGrid className="h-4 w-4" />
            Calendar
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="gap-2"
          >
            <List className="h-4 w-4" />
            List
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#17458f]"></div>
            <span className="text-sm font-medium text-muted-foreground">Club Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#f59e0b]"></div>
            <span className="text-sm font-medium text-muted-foreground">Other Rotary Club Event</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
            <span className="text-sm font-medium text-muted-foreground">Community Event</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#8b5cf6]"></div>
            <span className="text-sm font-medium text-muted-foreground">Club Meeting</span>
          </div>
        </div>

        {viewMode === "calendar" && (
          <>
            <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
              <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-2xl font-heading font-bold text-primary">
                {monthNames[month]} {year}
              </h2>
              <Button variant="outline" size="icon" onClick={goToNextMonth}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <Card className="max-w-4xl mx-auto shadow-md">
              <CardContent className="p-4">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-bold text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => {
                    const dateKey = day ? formatDateKey(year, month, day) : null;
                    const dayActivities = dateKey ? activitiesByDate[dateKey] || [] : [];
                    
                    return (
                      <div
                        key={index}
                        className={`min-h-[100px] md:min-h-[120px] border rounded-lg p-1 ${
                          day ? "bg-card" : "bg-muted/30"
                        }`}
                      >
                        {day && (
                          <>
                            <div className="text-sm font-medium text-muted-foreground mb-1 px-1">
                              {day}
                            </div>
                            <div className="space-y-1">
                              {dayActivities.map((activity) => {
                                const category = getCategoryDetails(activity.category);
                                return (
                                  <Link
                                    key={activity.slug}
                                    href={`/activity/${activity.slug}`}
                                    className={`${category.color} ${category.textColor} text-[10px] md:text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 transition-opacity block`}
                                    title={`${activity.title} - ${activity.time}`}
                                  >
                                    <div className="font-semibold truncate">{activity.title}</div>
                                    <div className="opacity-80 hidden md:block">{activity.time}</div>
                                  </Link>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        <section className={`max-w-4xl mx-auto ${viewMode === "calendar" ? "mt-12" : ""}`}>
          {viewMode === "calendar" && <h3 className="text-xl font-heading font-bold text-primary mb-6">Upcoming Events</h3>}
          <div className="space-y-3">
            {upcomingActivities.map((activity) => {
              const category = getCategoryDetails(activity.category);
              const Icon = getCategoryIcon(activity.category);
              const eventDate = new Date(activity.date);
              const formattedDate = eventDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              });
              
              return (
                <Link key={activity.slug} href={`/activity/${activity.slug}`} className="block">
                  <Card className={`border-l-4 ${category.borderColor} hover:shadow-md transition-shadow cursor-pointer`}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className={`${category.color} p-2 rounded-lg shrink-0`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {formattedDate} • {activity.time}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.location}</p>
                      </div>
                      <div className={`${category.color} ${category.textColor} text-xs px-2 py-1 rounded-full shrink-0 hidden sm:block`}>
                        {category.label}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
