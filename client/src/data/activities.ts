import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import foodDriveImg from "@assets/fooddrivesorting_1765320006510.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/stock_images/beach_cleanup_ocean__30385de7.jpg";
import christmasGiftsImg from "@assets/stock_images/volunteers_handing_o_4a2e2d94.jpg";
import breakfastMeetingImg from "@assets/stock_images/breakfast_meeting_gr_273dae38.jpg";

export interface Activity {
  id: number;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  address: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "club" | "other_rotary" | "community" | "meeting";
}

export const activities: Activity[] = [
  {
    id: 7,
    title: "February Monthly Meeting",
    date: "2026-02-05",
    displayDate: "Feb 5, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for our monthly club meeting where we discuss upcoming projects, hear from guest speakers, and enjoy a delicious breakfast together. It's a great way to start the day and connect with fellow members.",
    fullDescription: "Join us for our monthly club meeting where we discuss upcoming projects, hear from guest speakers, and enjoy a delicious breakfast together. It's a great way to start the day and connect with fellow members.\n\nThis month's guest speaker will discuss community engagement strategies and how we can expand our impact in the coming year. We'll also be voting on new initiatives and reviewing our recent service projects.\n\nBreakfast is included with your attendance. Please RSVP so we can ensure adequate seating.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 1,
    title: "Community Park Cleanup",
    date: "2025-12-15",
    displayDate: "Dec 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Bandstand at Golden Gate Park",
    address: "Bandstand, Golden Gate Park, San Francisco, CA",
    description: "Join us for a morning of cleaning up our beloved park. We'll be planting new flowers, painting benches, and clearing trails to ensure a safe and beautiful space for everyone to enjoy. Gloves and bags provided.",
    fullDescription: "Join us for a morning of cleaning up our beloved park. We'll be planting new flowers, painting benches, and clearing trails to ensure a safe and beautiful space for everyone to enjoy. Gloves and bags provided.\n\nThis is a family-friendly event and all ages are welcome to participate. We'll have refreshments available and will provide all necessary supplies including gloves, bags, and gardening tools.\n\nPlease wear comfortable clothes that can get dirty and closed-toe shoes. Sunscreen and water bottles are recommended.",
    image: parkCleanupImg,
    category: "community"
  },
  {
    id: 0,
    title: "Hand out Christmas Gifts",
    date: "2025-12-18",
    displayDate: "Dec 18, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Community Hall",
    address: "Community Hall, San Francisco, CA",
    description: "Spread holiday cheer by helping us distribute gifts to families in our community. We need volunteers to help organize gifts and hand them out to children and parents.",
    fullDescription: "Spread holiday cheer by helping us distribute gifts to families in our community. We need volunteers to help organize gifts and hand them out to children and parents.\n\nThis annual tradition brings joy to over 200 families in our neighborhood. Volunteers will help with gift sorting, wrapping, and distribution. We especially need volunteers who can help with setup starting at 3:00 PM.\n\nFestive attire is encouraged! Hot cocoa and cookies will be provided for all volunteers.",
    image: christmasGiftsImg,
    category: "club"
  },
  {
    id: 2,
    title: "Food Drive Sorting",
    date: "2026-02-28",
    displayDate: "Feb 28, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Main Street Community Center",
    address: "900 Pennsylvania Ave. San Francisco, CA 94107",
    description: "Help us sort and pack food supplies for local families and seniors in need. We will repack dry goods, sort produce, and fill food boxes. Please wear comfortable clothes and closed-toe shoes. It is often cold in the warehouse so we recommend bringing a jacket.",
    fullDescription: "Help us sort and pack food supplies for local families and seniors in need. We will repack dry goods, sort produce, and fill food boxes. Please wear comfortable clothes and closed-toe shoes. It is often cold in the warehouse so we recommend bringing a jacket.",
    image: foodDriveImg,
    category: "community"
  },
  {
    id: 3,
    title: "Senior Home Visit",
    date: "2026-01-05",
    displayDate: "Jan 05, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Sunrise Senior Living",
    address: "Sunrise Senior Living, San Francisco, CA",
    description: "Spend time playing board games and chatting with residents. Bring your smiles! We are looking for volunteers who can play piano or guitar to lead a sing-along session with the seniors.",
    fullDescription: "Spend time playing board games and chatting with residents. Bring your smiles! We are looking for volunteers who can play piano or guitar to lead a sing-along session with the seniors.\n\nThis is one of our most rewarding activities. Many of our senior friends look forward to these visits all month. We'll have board games, cards, and art supplies available.\n\nIf you have any musical talents, please let us know! We'd love to have live music for our afternoon together. Background check required for first-time volunteers.",
    image: seniorVisitImg,
    category: "club"
  },
  {
    id: 4,
    title: "Annual Charity Gala",
    date: "2026-01-15",
    displayDate: "Jan 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, City Hotel",
    address: "Grand Ballroom, City Hotel, San Francisco, CA",
    description: "Our biggest fundraiser of the year! Join us for an evening of dinner, dancing, and auctions to support our community projects. Formal attire requested. Tickets available online.",
    fullDescription: "Our biggest fundraiser of the year! Join us for an evening of dinner, dancing, and auctions to support our community projects. Formal attire requested. Tickets available online.\n\nThe evening will feature a gourmet three-course dinner, live entertainment, and both silent and live auctions with amazing prizes. All proceeds go directly to funding our community service projects for the coming year.\n\nTickets are $150 per person or $250 per couple. Tables of 8 are available for $1,000. Black tie optional.",
    image: galaEventImg,
    category: "club"
  },
  {
    id: 5,
    title: "Youth Reading Mentorship",
    date: "2026-01-22",
    displayDate: "Jan 22, 2026",
    time: "3:30 PM - 5:30 PM",
    location: "Westside Public Library",
    address: "Westside Public Library, San Francisco, CA",
    description: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.",
    fullDescription: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.\n\nThis ongoing program meets every Thursday during the school year. Volunteers commit to at least one session per month, though weekly participation is encouraged to build relationships with students.\n\nTraining is provided for all new mentors. Background check must be completed at least one week before your first session.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 6,
    title: "Ocean Beach Cleanup",
    date: "2026-02-01",
    displayDate: "Feb 01, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Ocean Beach, Stairwell 17",
    address: "Ocean Beach, Stairwell 17, San Francisco, CA",
    description: "Let's keep our coastline beautiful! We're partnering with the Surf Rider Foundation to remove plastic and debris from the beach. Bring reusable water bottles and sunscreen.",
    fullDescription: "Let's keep our coastline beautiful! We're partnering with the Surf Rider Foundation to remove plastic and debris from the beach. Bring reusable water bottles and sunscreen.\n\nThis cleanup is part of a citywide effort to reduce ocean pollution. We'll focus on the area around Stairwell 17, which tends to accumulate debris from winter storms.\n\nAll cleanup supplies will be provided. Please dress in layers as beach weather can be unpredictable. We'll celebrate our efforts with coffee and snacks afterward at a nearby café.",
    image: beachCleanupImg,
    category: "community"
  },
];

export const getCategoryDetails = (category: string) => {
  switch(category) {
    case "club":
      return { 
        label: "Club Activity", 
        color: "bg-[#17458f]", 
        textColor: "text-white",
        borderColor: "border-[#17458f]",
      };
    case "other_rotary":
      return { 
        label: "Other Rotary Club Event", 
        color: "bg-[#f59e0b]", 
        textColor: "text-white",
        borderColor: "border-[#f59e0b]",
      };
    case "community":
      return { 
        label: "Community Event", 
        color: "bg-[#10b981]", 
        textColor: "text-white",
        borderColor: "border-[#10b981]",
      };
    case "meeting":
      return { 
        label: "Club Meeting", 
        color: "bg-[#8b5cf6]", 
        textColor: "text-white",
        borderColor: "border-[#8b5cf6]",
      };
    default:
      return { 
        label: "Event", 
        color: "bg-gray-500", 
        textColor: "text-white",
        borderColor: "border-gray-500",
      };
  }
};

export const getActivityById = (id: number): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};
