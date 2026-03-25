export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export interface Activity {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  date: string;
  time: string;
  location: string;
  address: string;
  category: "club" | "other_rotary" | "community" | "meeting";
  image: string;
  extraImages?: string[];
  video?: string;
  description: string;
  body: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  order: number;
}

export interface PageContent {
  title: string;
  slug: string;
  subtitle?: string;
  heroImage?: string;
  formUrl?: string;
  body: string;
}

export interface HomeContent {
  welcomeTitle: string;
  welcomeText: string;
  missionStatement: string;
  carouselImages: { src: string; alt: string }[];
  quickLinks: { label: string; href: string; external?: boolean }[];
}

export interface SiteSettings {
  clubName: string;
  email: string;
  phone: string;
  meetingDay: string;
  meetingTime: string;
  meetingLocation: string;
  meetingAddress: string;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
}

const activityModules = import.meta.glob("@content/activities/*.md", { eager: true }) as Record<string, { default: any }>;
const leaderModules = import.meta.glob("@content/leaders/*.md", { eager: true }) as Record<string, { default: any }>;
const pageModules = import.meta.glob("@content/pages/*.md", { eager: true }) as Record<string, { default: any }>;
const homeModules = import.meta.glob("@content/home/*.md", { eager: true }) as Record<string, { default: any }>;
const settingsModules = import.meta.glob("@content/settings/*.json", { eager: true }) as Record<string, { default: any }>;

function getSlug(path: string): string {
  const parts = path.split("/");
  const filename = parts[parts.length - 1];
  return filename.replace(/\.(md|json)$/, "");
}

function loadActivities(): Activity[] {
  return Object.entries(activityModules).map(([path, mod]) => {
    const data = mod.default;
    return {
      slug: getSlug(path),
      title: data.title,
      status: data.status,
      date: data.date,
      time: data.time || "",
      location: data.location,
      address: data.address || data.location,
      category: data.category,
      image: data.image,
      extraImages: data.extraImages,
      video: data.video,
      description: data.description,
      body: data.body || "",
    };
  });
}

function loadLeaders(): Leader[] {
  return Object.entries(leaderModules)
    .map(([, mod]) => {
      const data = mod.default;
      return {
        name: data.name,
        role: data.role,
        image: data.image,
        bio: data.bio,
        email: data.email || "",
        linkedin: data.linkedin || "#",
        order: data.order || 99,
      };
    })
    .sort((a, b) => a.order - b.order);
}

function loadPages(): Record<string, PageContent> {
  const pages: Record<string, PageContent> = {};
  for (const [path, mod] of Object.entries(pageModules)) {
    const data = mod.default;
    const slug = data.slug || getSlug(path);
    pages[slug] = {
      title: data.title,
      slug,
      subtitle: data.subtitle,
      heroImage: data.heroImage,
      formUrl: data.formUrl,
      body: data.body || "",
    };
  }
  return pages;
}

function loadHome(): HomeContent {
  const entries = Object.values(homeModules);
  if (entries.length === 0) {
    return { welcomeTitle: "", welcomeText: "", missionStatement: "", carouselImages: [], quickLinks: [] };
  }
  const data = entries[0].default;
  return {
    welcomeTitle: data.welcomeTitle || "",
    welcomeText: data.welcomeText || "",
    missionStatement: data.missionStatement || "",
    carouselImages: data.carouselImages || [],
    quickLinks: data.quickLinks || [],
  };
}

function loadSettings(): SiteSettings {
  const entries = Object.values(settingsModules);
  if (entries.length === 0) {
    return { clubName: "", email: "", phone: "", meetingDay: "", meetingTime: "", meetingLocation: "", meetingAddress: "", facebookUrl: "", instagramUrl: "", youtubeUrl: "" };
  }
  const data = entries[0].default || entries[0];
  return data as SiteSettings;
}

const allActivities = loadActivities();
export const upcomingActivities = allActivities
  .filter((a) => a.status === "upcoming")
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
export const pastActivities = allActivities
  .filter((a) => a.status === "past")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const leaders = loadLeaders();
export const pages = loadPages();
export const homeContent = loadHome();
export const siteSettings = loadSettings();

export function getActivityBySlug(slug: string): Activity | undefined {
  return allActivities.find((a) => a.slug === slug);
}

export function getPage(slug: string): PageContent | undefined {
  return pages[slug];
}

export const getCategoryDetails = (category: string) => {
  switch (category) {
    case "club":
      return { label: "Club Activity", color: "bg-[#17458f]", textColor: "text-white", borderColor: "border-[#17458f]" };
    case "other_rotary":
      return { label: "Other Rotary Club Event", color: "bg-[#f59e0b]", textColor: "text-white", borderColor: "border-[#f59e0b]" };
    case "community":
      return { label: "Community Event", color: "bg-[#10b981]", textColor: "text-white", borderColor: "border-[#10b981]" };
    case "meeting":
      return { label: "Club Meeting", color: "bg-[#8b5cf6]", textColor: "text-white", borderColor: "border-[#8b5cf6]" };
    default:
      return { label: "Event", color: "bg-gray-500", textColor: "text-white", borderColor: "border-gray-500" };
  }
};
