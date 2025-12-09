import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-[#17458f] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="font-heading font-extrabold text-2xl leading-none">
                Rotary
              </span>
              <span className="font-heading font-light text-base leading-none opacity-90">
                San Francisco West
              </span>
            </div>
            <p className="text-sm text-blue-100 max-w-xs">
              Dedicated to community service, bringing together business and professional leaders to provide humanitarian service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading">Contact Us</h3>
            <div className="space-y-3 text-sm text-blue-100">
              <a href="mailto:rcofsfw@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                rcofsfw@gmail.com
              </a>
              <a href="tel:+14152034779" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                (415) 203-4779
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  100 Carl Street<br />
                  San Francisco, CA 94117
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-heading">Information</h3>
            <div className="flex flex-col gap-2 text-sm text-blue-100">
              <Link href="/privacy-policy" className="hover:text-white transition-colors hover:underline underline-offset-4 w-fit">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors hover:underline underline-offset-4 w-fit">
                Contact Us
              </Link>
              <Link href="/about" className="hover:text-white transition-colors hover:underline underline-offset-4 w-fit">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>© {new Date().getFullYear()} Rotary Club of San Francisco West. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
              <XIconBetter />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
