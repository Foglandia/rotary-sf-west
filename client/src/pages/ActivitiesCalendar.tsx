import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe, Heart, MessageCircle, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import foodDriveImg from "@assets/fooddrivesorting_1765320006510.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/stock_images/beach_cleanup_ocean__30385de7.jpg";
import christmasGiftsImg from "@assets/stock_images/volunteers_handing_o_4a2e2d94.jpg";
import breakfastMeetingImg from "@assets/stock_images/breakfast_meeting_gr_273dae38.jpg";

const upcomingActivities = [
  {
    id: 1,
    title: "Community Park Cleanup",
    date: "2025-12-15",
    time: "9:00 AM - 12:00 PM",
    location: "Bandstand at Golden Gate Park",
    description: "Join us for a morning of cleaning up our beloved park.",
    image: parkCleanupImg,
    category: "community"
  },
  {
    id: 0,
    title: "Hand out Christmas Gifts",
    date: "2025-12-18",
    time: "5:00 PM - 8:00 PM",
    location: "Community Hall",
    description: "Spread holiday cheer by helping us distribute gifts to families in our community.",
    image: christmasGiftsImg,
    category: "club"
  },
  {
    id: 2,
    title: "Food Drive Sorting",
    date: "2025-12-20",
    time: "10:00 AM - 2:00 PM",
    location: "Main Street Community Center",
    description: "Help us sort and pack food donations for local families in need.",
    image: foodDriveImg,
    category: "community"
  },
  {
    id: 3,
    title: "Senior Home Visit",
    date: "2026-01-05",
    time: "2:00 PM - 4:00 PM",
    location: "Sunrise Senior Living",
    description: "Spend time playing board games and chatting with residents.",
    image: seniorVisitImg,
    category: "club"
  },
  {
    id: 7,
    title: "Monthly Meeting",
    date: "2026-01-15",
    time: "7:30 AM - 9:00 AM",
    location: "Crepes on Cole",
    description: "Join us for our monthly club meeting.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 4,
    title: "Annual Charity Gala",
    date: "2026-01-15",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, City Hotel",
    description: "Our biggest fundraiser of the year!",
    image: galaEventImg,
    category: "club"
  },
  {
    id: 5,
    title: "Youth Reading Mentorship",
    date: "2026-01-22",
    time: "3:30 PM - 5:30 PM",
    location: "Westside Public Library",
    description: "Help foster a love for reading in our local youth.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 6,
    title: "Ocean Beach Cleanup",
    date: "2026-02-01",
    time: "10:00 AM - 1:00 PM",
    location: "Ocean Beach, Stairwell 17",
    description: "Let's keep our coastline beautiful!",
    image: beachCleanupImg,
    category: "community"
  },
];

const getCategoryDetails = (category: string) => {
  switch(category) {
    case "club":
      return { 
        label: "Club Activity", 
        color: "bg-[#17458f]", 
        textColor: "text-white",
        borderColor: "border-[#17458f]",
        icon: Users 
      };
    case "other_rotary":
      return { 
        label: "Other Rotary Club Event", 
        color: "bg-[#f59e0b]", 
        textColor: "text-white",
        borderColor: "border-[#f59e0b]",
        icon: Globe 
      };
    case "community":
      return { 
        label: "Community Event", 
        color: "bg-[#10b981]", 
        textColor: "text-white",
        borderColor: "border-[#10b981]",
        icon: Heart 
      };
    case "meeting":
      return { 
        label: "Club Meeting", 
        color: "bg-[#8b5cf6]", 
        textColor: "text-white",
        borderColor: "border-[#8b5cf6]",
        icon: MessageCircle 
      };
    default:
      return { 
        label: "Event", 
        color: "bg-gray-500", 
        textColor: "text-white",
        borderColor: "border-gray-500",
        icon: Calendar 
      };
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
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // December 2025
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  const activitiesByDate = upcomingActivities.reduce((acc, activity) => {
    if (!acc[activity.date]) {
      acc[activity.date] = [];
    }
    acc[activity.date].push(activity);
    return acc;
  }, {} as Record<string, typeof upcomingActivities>);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
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

        {/* View Toggle */}
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

        {/* Category Key/Legend */}
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
            {/* Calendar Navigation */}
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

            {/* Calendar Grid */}
            <Card className="max-w-4xl mx-auto shadow-md">
              <CardContent className="p-4">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-bold text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
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
                                  <div
                                    key={activity.id}
                                    className={`${category.color} ${category.textColor} text-[10px] md:text-xs p-1 rounded truncate cursor-pointer hover:opacity-90 transition-opacity`}
                                    title={`${activity.title} - ${activity.time}`}
                                  >
                                    <div className="font-semibold truncate">{activity.title}</div>
                                    <div className="opacity-80 hidden md:block">{activity.time}</div>
                                  </div>
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

        {/* Events List */}
        <section className={`max-w-4xl mx-auto ${viewMode === "calendar" ? "mt-12" : ""}`}>
          {viewMode === "calendar" && <h3 className="text-xl font-heading font-bold text-primary mb-6">Upcoming Events</h3>}
          <div className="space-y-3">
            {upcomingActivities.map((activity) => {
              const category = getCategoryDetails(activity.category);
              const Icon = category.icon;
              const eventDate = new Date(activity.date);
              const formattedDate = eventDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              });
              
              return (
                <Card key={activity.id} className={`border-l-4 ${category.borderColor}`}>
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
              );
            })}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
