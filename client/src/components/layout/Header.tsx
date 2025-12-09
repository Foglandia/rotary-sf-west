import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/generated_images/volunteer_organization_logo.png";
import { Input } from "@/components/ui/input";

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


const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link href={href}>
      <span className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`}>
        {children}
      </span>
    </Link>
  );
};

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logoImage} 
              alt="Volunteer Connect Logo" 
              className="h-8 w-8 rounded-full object-cover border border-border" 
            />
            <span className="font-heading font-bold text-lg text-primary hidden sm:inline-block">
              Rotary San Francisco West
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/activities">Activities</NavLink>
          <NavLink href="/membership">Membership</NavLink>
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
                  <Link href="/about"><span className="text-lg font-medium cursor-pointer">About Us</span></Link>
                  <Link href="/activities"><span className="text-lg font-medium cursor-pointer">Activities</span></Link>
                  <Link href="/membership"><span className="text-lg font-medium cursor-pointer">Membership</span></Link>
                  <Link href="/blog"><span className="text-lg font-medium cursor-pointer">Blog</span></Link>
                  <div className="flex gap-4 mt-4 pt-4 border-t">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><InstagramIconBetter /></a>
                    <a href="#"><XIconBetter /></a>
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
