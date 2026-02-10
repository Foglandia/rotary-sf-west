import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import trailRepairImg from "@assets/20260221_WoodsideTrailRepair_1770756385281.jpeg";
import foodDriveImg from "@assets/fooddrivesorting_1765320006510.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/OceanBeachCleanup_1770760972338.png";
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
    title: "Monthly Meeting",
    date: "2026-02-12",
    displayDate: "Feb 12, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities.",
    fullDescription: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities. All are welcome. You can show up or contact us at rcofsfw@gmail.com for more information on upcoming meetings.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 8,
    title: "Monthly Meeting",
    date: "2026-03-10",
    displayDate: "Mar 10, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities.",
    fullDescription: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities. All are welcome. You can show up or contact us at rcofsfw@gmail.com for more information on upcoming meetings.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 9,
    title: "Monthly Meeting",
    date: "2026-04-09",
    displayDate: "Apr 9, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities.",
    fullDescription: "Join us for breakfast and an update on Rotary San Francisco West upcoming activities. All are welcome. You can show up or contact us at rcofsfw@gmail.com for more information on upcoming meetings.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 1,
    title: "Woodland Canyon Creek Restoration",
    date: "2025-12-15",
    displayDate: "Dec 15, 2025",
    time: "8:45 AM - 12:30 PM",
    location: "Woods Lot, 100 Medical Center Way",
    address: "Woods Lot, 100 Medical Center Way, San Francisco",
    description: "Come join us on Mount Sutro for a morning in habitat restoration activities and help us uncover Woodland Canyon Creek!",
    fullDescription: "Come join us on Mount Sutro for a morning in habitat restoration activities and help us uncover Woodland Canyon Creek!\n\nThis is a family-friendly event and all ages are welcome to participate. We'll have refreshments available and will provide all necessary supplies including gloves, bags, and gardening tools.\n\nPlease wear comfortable clothes that can get dirty and closed-toe shoes. Sunscreen and water bottles are recommended.",
    image: trailRepairImg,
    category: "community"
  },
  {
    id: 0,
    title: "Spring Food Donation",
    date: "2026-02-18",
    displayDate: "Feb 18, 2026",
    time: "5:00 PM - 8:00 PM",
    location: "Community Hall",
    address: "Community Hall, San Francisco, CA",
    description: "Help us collect and distribute food donations to families in our community. We need volunteers to help organize and hand out food to those in need.",
    fullDescription: "Help us collect and distribute food donations to families in our community. We need volunteers to help organize and hand out food to those in need.\n\nThis event supports over 200 families in our neighborhood. Volunteers will help with food sorting and distribution. We especially need volunteers who can help with setup starting at 3:00 PM.\n\nRefreshments will be provided for all volunteers.",
    image: christmasGiftsImg,
    category: "club"
  },
  {
    id: 2,
    title: "Food Pantry",
    date: "2026-02-28",
    displayDate: "Feb 28, 2026",
    time: "7:30 AM - 11:00 AM",
    location: "Florence Fang Community Farm",
    address: "1 Diana Street, San Francisco",
    description: "The Florence Fang Community Farm is a partner of the SF-Marin Food Bank and serves 350 participating families every week in its food pantry program. Volunteers are needed to help pantry set up, distribute food, breakdown cardboard, and post-pantry clean up. If you have a passion for food security and want to help provide a critical service to the Bayview community, please come out!",
    fullDescription: "The Florence Fang Community Farm is a partner of the SF-Marin Food Bank and serves 350 participating families every week in its food pantry program. Volunteers are needed to help pantry set up, distribute food, breakdown cardboard, and post-pantry clean up. If you have a passion for food security and want to help provide a critical service to the Bayview community, please come out!\n\nProject Requirements & Important Notes\n\nParking is limited. Please park along Williams Ave or take public transportation.\n\nThe site is outside on a farm, please wear sturdy, close-toed shoes, and clothes appropriate for the weather.\n\nVolunteers are welcome to help out at the farm after the food pantry is closed. The farm is open till 1pm.",
    image: foodDriveImg,
    category: "community"
  },
  {
    id: 3,
    title: "Senior Home Visit",
    date: "2026-03-07",
    displayDate: "Mar 07, 2026",
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
    title: "Annual Charity Lunch",
    date: "2026-03-19",
    displayDate: "Mar 19, 2026",
    time: "11:30 AM - 1:00 PM",
    location: "Grand Ballroom, City Hotel",
    address: "Grand Ballroom, City Hotel, San Francisco, CA",
    description: "Our biggest fundraiser of the year! Join us for a delightful lunch and auctions to support our community projects. Tickets available online.",
    fullDescription: "Our biggest fundraiser of the year! Join us for a delightful lunch and auctions to support our community projects. Tickets available online.\n\nThe afternoon will feature a gourmet lunch, live entertainment, and both silent and live auctions with amazing prizes. All proceeds go directly to funding our community service projects for the coming year.\n\nTickets are $150 per person or $250 per couple. Tables of 8 are available for $1,000.",
    image: galaEventImg,
    category: "club"
  },
  {
    id: 5,
    title: "Youth Reading Monthly Mentorship",
    date: "2026-02-28",
    displayDate: "Feb 28, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Westside Public Library",
    address: "Westside Public Library, San Francisco, CA",
    description: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.",
    fullDescription: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.\n\nThis ongoing program meets on the fourth Saturday of every month. Volunteers commit to at least one session per month, though regular participation is encouraged to build relationships with students.\n\nTraining is provided for all new mentors. Background check must be completed at least one week before your first session.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 10,
    title: "Youth Reading Monthly Mentorship",
    date: "2026-03-28",
    displayDate: "Mar 28, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Westside Public Library",
    address: "Westside Public Library, San Francisco, CA",
    description: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.",
    fullDescription: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.\n\nThis ongoing program meets on the fourth Saturday of every month. Volunteers commit to at least one session per month, though regular participation is encouraged to build relationships with students.\n\nTraining is provided for all new mentors. Background check must be completed at least one week before your first session.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 11,
    title: "Youth Reading Monthly Mentorship",
    date: "2026-04-25",
    displayDate: "Apr 25, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Westside Public Library",
    address: "Westside Public Library, San Francisco, CA",
    description: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.",
    fullDescription: "Help foster a love for reading in our local youth. Volunteers will be paired with elementary school students for one-on-one reading sessions and homework help. Background check required.\n\nThis ongoing program meets on the fourth Saturday of every month. Volunteers commit to at least one session per month, though regular participation is encouraged to build relationships with students.\n\nTraining is provided for all new mentors. Background check must be completed at least one week before your first session.",
    image: readingMentorshipImg,
    category: "other_rotary"
  },
  {
    id: 6,
    title: "Ocean Beach Cleanup",
    date: "2026-03-07",
    displayDate: "Mar 7, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Ocean Beach, Stairwell 17",
    address: "Ocean Beach, Stairwell 17, San Francisco, CA",
    description: "Come join the fun and help conserve and protect our beautiful public beaches!",
    fullDescription: "Come join the fun and help conserve and protect our beautiful public beaches!\n\nAll cleanup supplies will be provided. Please dress in layers as beach weather can be unpredictable. We'll celebrate our efforts with coffee and snacks afterward at a nearby café.",
    image: beachCleanupImg,
    category: "community"
  },
  {
    id: 12,
    title: "Servant Leadership for Rotarians Program 2026",
    date: "2026-03-28",
    displayDate: "Mar 28, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Rotary Terrace",
    address: "312 Miller Ave., South San Francisco",
    description: "Join fellow Rotarians for an immersive day of servant leadership training. This program is designed to help Rotarians develop and strengthen their leadership skills through the lens of service.",
    fullDescription: "Join fellow Rotarians for an immersive day of servant leadership training. This program is designed to help Rotarians develop and strengthen their leadership skills through the lens of service.\n\nThis full-day program will cover key principles of servant leadership, practical applications for Rotary projects, and collaborative exercises to build stronger club leadership.",
    image: breakfastMeetingImg,
    category: "other_rotary"
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
