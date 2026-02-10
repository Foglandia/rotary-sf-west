import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronDown, Tag, BookOpen } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Link } from "wouter";

// Import downloaded stock images
import blogImg1 from "@assets/stock_images/community_volunteers_d7eb7d64.jpg";
import blogImg2 from "@assets/stock_images/community_volunteers_7e0dc292.jpg";
import blogImg3 from "@assets/images/elena-rodriguez_1.jpg";
import blogImg4 from "@assets/stock_images/community_volunteers_4735c16f.jpg";
import blogImg5 from "@assets/stock_images/picnic_in_park_with__bb86390f.jpg";
import blogImg6 from "@assets/stock_images/student_holding_cert_4d58b826.jpg";
import blogImg7 from "@assets/stock_images/person_giving_speech_6545fc12.jpg";

// Mock Data for Blog Posts
const blogPosts = [
  {
    id: 1,
    title: "Reflecting on a Year of Service",
    author: "Sarah Jenkins",
    date: "Dec 05, 2025",
    category: "President's Message",
    image: blogImg1,
    excerpt: "As we approach the end of 2025, I am filled with gratitude for the incredible dedication shown by our members. Together, we have made a tangible difference in our community.",
    content: `
      As we approach the end of 2025, I am filled with gratitude for the incredible dedication shown by our members. Together, we have made a tangible difference in our community. From our monthly park cleanups to the successful food drive, every hour volunteered has contributed to a stronger, more vibrant San Francisco.
      
      Looking ahead to 2026, we have ambitious goals. We plan to expand our youth mentorship program and launch a new initiative focused on environmental sustainability. I invite all members to bring their ideas and energy to our upcoming planning meeting.
      
      Thank you for your service and commitment to Rotary's values. Let's make the coming year our best one yet!
    `
  },
  {
    id: 2,
    title: "Successful Food Drive: 5,000 lbs Collected!",
    author: "Michael Chen",
    date: "Nov 12, 2025",
    category: "Project Update",
    image: blogImg2,
    excerpt: "We are thrilled to announce that our annual Thanksgiving Food Drive was a resounding success. Thanks to the generosity of our neighbors, we collected over 5,000 pounds of food.",
    content: `
      We are thrilled to announce that our annual Thanksgiving Food Drive was a resounding success. Thanks to the generosity of our neighbors and the hard work of our volunteers, we collected over 5,000 pounds of non-perishable food items.
      
      These donations have been distributed to the SF Food Bank and local shelters, ensuring that hundreds of families will have a warm meal this holiday season. A special shout-out to the local schools that participated in our collection contest!
      
      This event highlights the power of community coming together for a common cause. We look forward to continuing this tradition for years to come.
    `
  },
  {
    id: 3,
    title: "Member Spotlight: Elena Rodriguez",
    author: "David Smith",
    date: "Oct 20, 2025",
    category: "Member Spotlight",
    image: blogImg3,
    excerpt: "Meet Elena Rodriguez, one of our newest members who has already made a huge impact. Elena joined us in August and has spearheaded our new literacy initiative.",
    content: `
      Meet Elena Rodriguez, one of our newest members who has already made a huge impact. Elena joined us in August and has spearheaded our new literacy initiative, connecting Rotary volunteers with local elementary schools.
      
      "I believe that education is the key to unlocking potential," says Elena. "Rotary gives me the platform to turn that belief into action."
      
      Outside of Rotary, Elena is a graphic designer and avid hiker. Next time you see her at a meeting, be sure to say hello and ask her about her favorite trails in the Bay Area!
    `
  },
  {
    id: 4,
    title: "Rotary International Convention Recap",
    author: "James Wilson",
    date: "Sep 15, 2025",
    category: "Club News",
    image: blogImg4,
    excerpt: "Last month, a delegation from our club attended the Rotary International Convention. It was an inspiring week filled with workshops, networking, and cultural exchange.",
    content: `
      Last month, a delegation from our club attended the Rotary International Convention. It was an inspiring week filled with workshops, networking, and cultural exchange with Rotarians from around the world.
      
      Key takeaways included new strategies for membership engagement and innovative approaches to fundraising. We returned with fresh ideas and a renewed sense of purpose.
      
      We will be sharing a detailed presentation of our experience at the next club meeting. We encourage all members to consider attending next year's convention – it is truly a life-changing experience.
    `
  },
  {
    id: 5,
    title: "Annual Summer Picnic: Fun in the Sun",
    author: "Lisa Wong",
    date: "Aug 08, 2025",
    category: "Social Event",
    image: blogImg5,
    excerpt: "The sun was shining and the BBQ was sizzling at our annual summer picnic last weekend. It was wonderful to see so many members and their families enjoying Golden Gate Park.",
    content: `
      The sun was shining and the BBQ was sizzling at our annual summer picnic last weekend. It was wonderful to see so many members and their families enjoying Golden Gate Park.
      
      We had a great turnout for the volleyball tournament, and the kids loved the face painting station. These social events are the glue that holds our club together, building friendships that translate into better teamwork for our service projects.
      
      A huge thank you to the social committee for organizing such a fantastic day!
    `
  },
  {
    id: 6,
    title: "Scholarship Winners Announced",
    author: "Robert Taylor",
    date: "Jul 15, 2025",
    category: "Youth Service",
    image: blogImg6,
    excerpt: "We are proud to announce the recipients of this year's Rotary San Francisco West College Scholarships. Three outstanding high school seniors were selected based on their academic achievements and community service.",
    content: `
      We are proud to announce the recipients of this year's Rotary San Francisco West College Scholarships. Three outstanding high school seniors were selected based on their academic achievements and commitment to community service.
      
      Each student received a $2,500 scholarship to support their higher education goals. We were incredibly impressed by the caliber of applications this year.
      
      "These young leaders give me so much hope for the future," said Scholarship Chair, Robert Taylor. We wish them all the best as they embark on their college journeys.
    `
  },
  {
    id: 7,
    title: "Guest Speaker: The Future of Urban Farming",
    author: "Sarah Jenkins",
    date: "Jun 22, 2025",
    category: "Meeting Recap",
    image: blogImg7,
    excerpt: "At last week's meeting, we had the pleasure of hearing from Dr. Emily Chen about the growing importance of urban farming. Her insights into sustainable city living were truly eye-opening.",
    content: `
      At last week's meeting, we had the pleasure of hearing from Dr. Emily Chen about the growing importance of urban farming. Her insights into sustainable city living were truly eye-opening.
      
      Dr. Chen shared examples of successful rooftop gardens and community plots that are reducing food deserts in our city. She also provided practical tips for starting a small herb garden, even in a small apartment.
      
      Inspired by her talk, the club is exploring a partnership with a local community garden for an upcoming service project. Stay tuned for details!
    `
  }
];

const getCategoryColor = (category: string) => {
  switch(category) {
    case "President's Message": return "bg-[#17458f] text-white";
    case "Project Update": return "bg-[#10b981] text-white";
    case "Member Spotlight": return "bg-[#f59e0b] text-white";
    case "Club News": return "bg-[#8b5cf6] text-white";
    case "Social Event": return "bg-[#ec4899] text-white";
    case "Youth Service": return "bg-[#eab308] text-white";
    case "Meeting Recap": return "bg-[#6366f1] text-white";
    default: return "bg-gray-500 text-white";
  }
};

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="space-y-6 mb-12 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
              Club Blog
            </h1>
            <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            News, stories, and updates from Rotary San Francisco West.
          </p>
        </section>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="divide-y divide-border/50 bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
             {blogPosts.slice(0, visibleCount).map((post) => (
                <Collapsible key={post.id} className="group">
                  <div className="p-6 hover:bg-muted/30 transition-colors flex flex-col md:flex-row gap-6 md:items-start">
                    
                    <div className="shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 md:w-48 md:h-32 object-cover rounded-lg shadow-sm"
                      />
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex flex-col gap-1">
                            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit flex items-center gap-1 ${getCategoryColor(post.category)}`}>
                              <Tag className="h-3 w-3" />
                              {post.category}
                            </div>
                            <h3 className="font-bold text-xl text-foreground mt-1 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <User className="h-4 w-4" />
                                <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <p className="text-base text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4">
                          <CollapsibleTrigger asChild>
                              <Button variant="outline" size="sm" className="gap-2 group/btn">
                                  <BookOpen className="h-4 w-4" />
                                  Read Full Post
                                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                              </Button>
                          </CollapsibleTrigger>
                        </div>
                    </div>

                  </div>
                  
                  <CollapsibleContent className="px-6 pb-8 animate-collapsible-down">
                    <div className="pt-4 border-t border-border/30">
                      <div className="prose prose-blue max-w-none text-muted-foreground whitespace-pre-line">
                        {post.content}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
          </div>

          <div className="text-center">
            {visibleCount < blogPosts.length ? (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVisibleCount(blogPosts.length)}
              >
                Load More Posts
              </Button>
            ) : visibleCount > 3 ? (
               <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVisibleCount(3)}
              >
                Show Less
              </Button>
            ) : null}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
