import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "dist/public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "dist/public",
    },
  },
  schema: {
    collections: [
      {
        name: "activity",
        label: "Activities",
        path: "content/activities",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "status", label: "Status", required: true, options: ["upcoming", "past"] },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "displayDate", label: "Display Date", required: true },
          { type: "string", name: "time", label: "Time" },
          { type: "string", name: "location", label: "Location", required: true },
          { type: "string", name: "address", label: "Full Address" },
          { type: "string", name: "category", label: "Category", required: true, options: ["club", "community", "meeting", "other_rotary"] },
          { type: "image", name: "image", label: "Main Image", required: true },
          { type: "image", name: "extraImages", label: "Extra Images", list: true },
          { type: "string", name: "video", label: "Video URL" },
          { type: "string", name: "description", label: "Short Description", required: true, ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Full Description", isBody: true },
        ],
      },
      {
        name: "leader",
        label: "Leadership Team",
        path: "content/leaders",
        format: "md",
        fields: [
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "role", label: "Role", required: true },
          { type: "image", name: "image", label: "Headshot", required: true },
          { type: "string", name: "bio", label: "Bio", required: true, ui: { component: "textarea" } },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "linkedin", label: "LinkedIn URL" },
          { type: "number", name: "order", label: "Display Order" },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Page Title", required: true },
          { type: "string", name: "slug", label: "URL Slug", required: true },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "rich-text", name: "body", label: "Page Content", isBody: true },
        ],
      },
      {
        name: "homePage",
        label: "Home Page",
        path: "content/home",
        format: "md",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "welcomeTitle", label: "Welcome Title" },
          { type: "string", name: "welcomeText", label: "Welcome Text", ui: { component: "textarea" } },
          { type: "string", name: "missionStatement", label: "Mission Statement", ui: { component: "textarea" } },
          {
            type: "object",
            name: "carouselImages",
            label: "Carousel Images",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
          {
            type: "object",
            name: "quickLinks",
            label: "Quick Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link URL" },
              { type: "boolean", name: "external", label: "Opens in new tab?" },
            ],
          },
        ],
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "clubName", label: "Club Name" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "meetingDay", label: "Meeting Day" },
          { type: "string", name: "meetingTime", label: "Meeting Time" },
          { type: "string", name: "meetingLocation", label: "Meeting Location" },
          { type: "string", name: "meetingAddress", label: "Meeting Address" },
          { type: "string", name: "facebookUrl", label: "Facebook URL" },
          { type: "string", name: "instagramUrl", label: "Instagram URL" },
          { type: "string", name: "youtubeUrl", label: "YouTube URL" },
        ],
      },
    ],
  },
});
