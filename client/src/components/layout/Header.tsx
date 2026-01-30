import { Link, useLocation } from "wouter";
import { Menu, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/RotaryLogo_transparent_1765320789572.png";
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


const NavLink = ({ href, children, subItems }: { href: string; children: React.ReactNode; subItems?: { label: string; href: string; external?: boolean }[] }) => {
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
              {item.external ? (
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-pointer font-semibold text-[#17458f] w-full block"
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className="cursor-pointer font-semibold text-[#17458f]">
                  {item.label}
                </Link>
              )}
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
              { label: "Overview", href: "/about" },
              { label: "Leadership", href: "/leadership" },
              { label: "Rotary District 5150", href: "https://rotary5150.org/", external: true },
              { label: "Rotary International", href: "https://www.rotary.org/en", external: true },
              { label: "Contact Us", href: "/contact" },
            ]}
          >
            About Us
          </NavLink>
          <NavLink 
            href="/activities"
            subItems={[
              { label: "Our Activities", href: "/activities" },
              { label: "Activities Calendar", href: "/activities-calendar" },
              { label: "Social Events", href: "/social-events" },
            ]}
          >
            Activities
          </NavLink>
          <NavLink href="/join-us">
            Membership
          </NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 border-r pr-4 border-border/50">
            <a href="https://www.facebook.com/RCofSFW" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/rcsfwest/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Instagram">
              <InstagramIconBetter />
            </a>
                        <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
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
                      <Link href="/about"><span className="cursor-pointer hover:text-primary">Overview</span></Link>
                      <Link href="/leadership"><span className="cursor-pointer hover:text-primary">Leadership</span></Link>
                      <a href="https://rotary5150.org/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary">Rotary District 5150</a>
                      <a href="https://www.rotary.org/en" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-primary">Rotary International</a>
                      <Link href="/contact"><span className="cursor-pointer hover:text-primary">Contact Us</span></Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-lg font-medium block">Activities</span>
                    <div className="pl-4 flex flex-col gap-2 text-base text-muted-foreground">
                      <Link href="/activities"><span className="cursor-pointer hover:text-primary">Our Activities</span></Link>
                      <Link href="/activities-calendar"><span className="cursor-pointer hover:text-primary">Activities Calendar</span></Link>
                      <Link href="/social-events"><span className="cursor-pointer hover:text-primary">Social Events</span></Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/join-us"><span className="text-lg font-medium cursor-pointer block">Membership</span></Link>
                  </div>
                  <Link href="/blog"><span className="text-lg font-medium cursor-pointer">Blog</span></Link>
                  <div className="flex gap-4 mt-4 pt-4 border-t">
                    <a href="https://www.facebook.com/RCofSFW" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/rcsfwest/" target="_blank" rel="noopener noreferrer"><InstagramIconBetter /></a>
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
