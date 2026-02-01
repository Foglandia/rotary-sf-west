import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* About Us Section */}
        <section className="bg-muted/30 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                About Us
              </h1>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Rotary San Francisco West, we support children and families and have several ongoing projects. Our club provides support to the Good Samaritan Family Resource Center by supplying Thanksgiving dinners to families and holiday gifts to children. SF West also runs a "breakfast club" at the Edgewood Center for Children and Families where we cook a hearty weekend breakfast for everyone that we sit down and enjoy with the kids and staff. SF West members also help out when needed at organizations like St. Anthony's dining room and the KZV Armenian School. Each month brings us a new opportunity to serve our community.
              </p>
            </div>
          </div>
        </section>

        {/* Rotary International Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Rotary International</h2>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Rotary Club is the world's largest service organization with over 1.2 million members. It is a grassroots organization with most of the service being carried out by the members in their local communities. Rotarians work together on both regional and international projects which can be anything from providing academic scholarships for high school and college students to building sanitation facilities for a girl's school in Bangladesh. Bay Area Rotary clubs work together each year to put on a weeklong leadership camp in the Santa Cruz mountains that is free to Bay Area high school students.
              </p>
              <a 
                href="https://www.rotary.org/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#17458f] hover:text-[#d41367] font-semibold transition-colors"
                data-testid="link-rotary-international"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
