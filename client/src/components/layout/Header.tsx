import { Link, useLocation } from "wouter";
import { Search, Menu, X, Youtube } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/RotaryLogo_transparent_1765320789572.png";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const SocialIcon = ({ name, path }: { name: string; path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 hover:text-secondary transition-colors"
  >
    <path d={path} />
    <title>{name}</title>
  </svg>
);

const FacebookIcon = () => (
  <SocialIcon
    name="Facebook"
    path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  />
);

const InstagramIconBetter = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 hover:text-secondary transition-colors"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const XIconBetter = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18" // Slightly smaller to match visual weight
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 hover:text-secondary transition-colors"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768" />
    <path d="M13.228 10.772l6.772 -6.772" />
  </svg>
)


const NavLink = ({ href, children, subItems }: { href: string; children: React.ReactNode; subItems?: { label: string; href: string }[] }) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  if (subItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="h-full flex items-center outline-none focus:outline-none">
          <span className={`cursor-pointer text-sm font-semibold transition-colors hover:text-primary/80 flex items-center gap-1 text-[#17458f] ${isActive ? "font-bold" : ""}`}>
            {children}
            <ChevronDown className="h-3 w-3" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={0} className="mt-0 rounded-t-none border-t-0">
          {subItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.href} className="cursor-pointer font-semibold text-[#17458f]">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={href} className="h-full flex items-center">
      <span className={`cursor-pointer text-sm font-semibold transition-colors hover:text-primary/80 text-[#17458f] ${isActive ? "font-bold" : ""}`}>
        {children}
      </span>
    </Link>
  );
};

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-[74px] flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex flex-col items-start hidden sm:flex gap-1">
              <span className="font-heading font-extrabold text-2xl text-primary leading-none">
                Rotary
              </span>
              <span className="font-heading font-light text-base text-primary leading-none">
                San Francisco West
              </span>
            </div>
            <img 
              src={logoImage} 
              alt="Rotary Logo" 
              className="h-16 w-16 object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex h-full items-stretch gap-8">
          <NavLink 
            href="/about"
            subItems={[
              { label: "Leadership", href: "/leadership" },
              { label: "Rotary District 5150", href: "/district-5150" },
              { label: "Rotary International", href: "/rotary-international" },
              { label: "Contact Us", href: "/contact" },
            ]}
          >
            About Us
          </NavLink>
          <NavLink 
            href="/activities"
            subItems={[
              { label: "Monthly Meetings", href: "/monthly-meetings" },
              { label: "Club Activities", href: "/club-activities" },
              { label: "Social Events", href: "/social-events" },
            ]}
          >
            Activities
          </NavLink>
          <NavLink 
            href="/membership"
            subItems={[
              { label: "Learn More", href: "/membership-learn-more" },
              { label: "Join Us", href: "/join-us" },
            ]}
          >
            Membership
          </NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 border-r pr-4 border-border/50">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Instagram">
              <InstagramIconBetter />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="X (Twitter)">
              <XIconBetter />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Search Toggle */}
          <div className="relative flex items-center">
             {isSearchOpen ? (
                 <div className="absolute right-0 flex items-center bg-background border rounded-full px-2 py-1 shadow-md w-64 animate-in fade-in slide-in-from-right-4">
                     <Input 
                        placeholder="Search..." 
                        className="border-none shadow-none focus-visible:ring-0 h-8 text-sm"
                        autoFocus
                        onBlur={() => setIsSearchOpen(false)} 
                     />
                     <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsSearchOpen(false)}>
                         <X className="h-3 w-3" />
                     </Button>
                 </div>
             ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                    <Search className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
             )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="space-y-3">
                    <Link href="/about"><span className="text-lg font-medium cursor-pointer block">About Us</span></Link>
                    <div className="pl-4 flex flex-col gap-2 text-base text-muted-foreground">
                      <Link href="/leadership"><span className="cursor-pointer hover:text-primary">Leadership</span></Link>
                      <Link href="/district-5150"><span className="cursor-pointer hover:text-primary">Rotary District 5150</span></Link>
                      <Link href="/rotary-international"><span className="cursor-pointer hover:text-primary">Rotary International</span></Link>
                      <Link href="/contact"><span className="cursor-pointer hover:text-primary">Contact Us</span></Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/activities"><span className="text-lg font-medium cursor-pointer block">Activities</span></Link>
                    <div className="pl-4 flex flex-col gap-2 text-base text-muted-foreground">
                      <Link href="/monthly-meetings"><span className="cursor-pointer hover:text-primary">Monthly Meetings</span></Link>
                      <Link href="/club-activities"><span className="cursor-pointer hover:text-primary">Club Activities</span></Link>
                      <Link href="/social-events"><span className="cursor-pointer hover:text-primary">Social Events</span></Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/membership"><span className="text-lg font-medium cursor-pointer block">Membership</span></Link>
                    <div className="pl-4 flex flex-col gap-2 text-base text-muted-foreground">
                      <Link href="/membership-learn-more"><span className="cursor-pointer hover:text-primary">Learn More</span></Link>
                      <Link href="/join-us"><span className="cursor-pointer hover:text-primary">Join Us</span></Link>
                    </div>
                  </div>
                  <Link href="/blog"><span className="text-lg font-medium cursor-pointer">Blog</span></Link>
                  <div className="flex gap-4 mt-4 pt-4 border-t">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><InstagramIconBetter /></a>
                    <a href="#"><XIconBetter /></a>
                    <a href="#"><Youtube className="h-5 w-5 hover:text-secondary transition-colors" /></a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
