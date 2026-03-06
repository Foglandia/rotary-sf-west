import parkCleanupImg from "@assets/communityparkcleanup_1765319980781.jpg";
import angelIslandImg from "@assets/1024px-Angel_Island_(California)_1770767921980.jpeg";
import bookDriveImg from "@assets/TheBookWagon_Logo_1770853730388.jpg";
import trailRepairImg from "@assets/20260221_WoodsideTrailRepair_1770756385281.jpeg";
import foodDriveImg from "@assets/Rotary_202511_004_Thanskgiving_Turkeygiveaway_GroupShot_1770766111577.jpg";
import seniorVisitImg from "@assets/seniorhomevisit_1765319920810.jpg";
import galaEventImg from "@assets/stock_images/group_of_volunteers__4ab34d47.jpg";
import readingMentorshipImg from "@assets/stock_images/volunteers_teaching__9d9025ed.jpg";
import beachCleanupImg from "@assets/OceanBeachCleanup_1770760972338.png";
import christmasGiftsImg from "@assets/stock_images/volunteers_handing_o_4a2e2d94.jpg";
import breakfastMeetingImg from "@assets/stock_images/breakfast_meeting_gr_273dae38.jpg";

export interface DropOffLocation {
  name: string;
  address: string;
}

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
  dropOffLocations?: DropOffLocation[];
}

export const activities: Activity[] = [
  {
    id: 18,
    title: "Serve Breakfast at Edgewood Development Center",
    date: "2026-03-07",
    displayDate: "Mar 7, 2026",
    time: "9:00 AM - 11:00 AM",
    location: "Edgewood Bayview - Hunters Point",
    address: "3801 3rd Street, Suite 601 & 320, San Francisco",
    description: "Join us to cook and serve breakfast to teens at the Edgewood Development Center.",
    fullDescription: "Join us to cook and serve breakfast to teens at the Edgewood Development Center.\n\nWe will cook and serve a full breakfast to teens and young adults in residence at the Edgewood Development Center. Bring your pancake making skills!",
    image: seniorVisitImg,
    category: "community"
  },
  {
    id: 8,
    title: "Monthly Meeting",
    date: "2026-03-10",
    displayDate: "Mar 10, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
    fullDescription: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 4,
    title: "District 5150 Interact Leadership Conference",
    date: "2026-03-19",
    displayDate: "Mar 19, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "SF War Memorial Veterans Building",
    address: "401 Van Ness Avenue, San Francisco",
    description: "Let's get cooking! All District 5150 Interactors are invited to attend this year's Winter Leadership Conference. Registration required. Registration form and parental consent (waiver) form at https://linktr.ee/districtcouncil",
    fullDescription: "Let's get cooking! All District 5150 Interactors are invited to attend this year's Winter Leadership Conference.\n\nRegistration required. Registration form and parental consent (waiver) form at https://linktr.ee/districtcouncil",
    image: galaEventImg,
    category: "other_rotary"
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
  {
    id: 19,
    title: "Serve Breakfast at Edgewood Development Center",
    date: "2026-05-30",
    displayDate: "May 30, 2026",
    time: "9:00 AM - 11:00 AM",
    location: "Edgewood Bayview - Hunters Point",
    address: "3801 3rd Street, Suite 601 & 320, San Francisco",
    description: "Join us to cook and serve breakfast to teens at the Edgewood Development Center.",
    fullDescription: "Join us to cook and serve breakfast to teens at the Edgewood Development Center.\n\nWe will cook and serve a full breakfast to teens and young adults in residence at the Edgewood Development Center. Bring your pancake making skills!",
    image: seniorVisitImg,
    category: "community"
  },
  {
    id: 13,
    title: "Angel Island Picnic",
    date: "2026-05-03",
    displayDate: "May 3, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "San Francisco Ferry Terminal",
    address: "San Francisco Ferry Terminal, San Francisco, CA",
    description: "Join us for a picnic on Angel Island. We will meet at the Ferry Terminal at 11:00 AM.",
    fullDescription: "Join us for a picnic on Angel Island. We will meet at the Ferry Terminal at 11:00 AM.\n\nFor ferry schedule and tickets visit https://www.goldengate.org/ferry/angel-island-ferry/",
    image: angelIslandImg,
    category: "club"
  },
  {
    id: 15,
    title: "Book Distribution - Cesar Chavez Elementary School",
    date: "2026-03-25",
    displayDate: "Mar 25, 2026",
    time: "1:00 PM - 3:00 PM",
    location: "Cesar Chavez Elementary School, San Francisco",
    address: "Cesar Chavez Elementary School, San Francisco, CA",
    description: "We will join the Book Wagon team to distribute books to students at Cesar Chavez Elementary School.",
    fullDescription: "We will join the Book Wagon team to distribute books to students at Cesar Chavez Elementary School.\n\nThis is a wonderful opportunity to see the impact of the Book Wagon Book Drive firsthand as we hand out free books to elementary school students, helping them build their own home libraries.",
    image: bookDriveImg,
    category: "club"
  },
  {
    id: 17,
    title: "Monthly Meeting",
    date: "2026-04-09",
    displayDate: "Apr 9, 2026",
    time: "7:30 AM - 8:30 AM",
    location: "Crepes on Cole",
    address: "Crepes on Cole, 100 Carl Street, San Francisco, 94117",
    description: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
    fullDescription: "Join us for the monthly Rotary SF West meeting. We will discuss upcoming activities.",
    image: breakfastMeetingImg,
    category: "meeting"
  },
  {
    id: 16,
    title: "Dia de los Ninos Book Give-away",
    date: "2026-04-30",
    displayDate: "Apr 30, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "3090 23rd Street, San Francisco",
    address: "3090 23rd Street, San Francisco",
    description: "Volunteers needed to give away books and participate in reading activities.",
    fullDescription: "Volunteers needed to give away books and participate in reading activities.\n\nFor more info visit https://sfpl.org/events/2023/04/30/celebration-dia-de-los-ningodia-de-los-libros",
    image: bookDriveImg,
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
