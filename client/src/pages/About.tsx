import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pages } from "@/lib/content";

export default function About() {
  const page = pages["about"];
  const m = page?.meta ?? {};
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        <section className="bg-muted/30 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                {page?.title ?? "About Us"}
              </h1>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              {page?.body && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {page.body}
                </p>
              )}
            </div>
          </div>
        </section>

        {m.rotaryTitle && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl space-y-6">
                <h2 className="text-3xl font-heading font-bold text-primary">{m.rotaryTitle}</h2>
                <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
                {m.rotaryBody && (
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {m.rotaryBody}
                  </p>
                )}
                {m.rotaryUrl && (
                  <a 
                    href={m.rotaryUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#17458f] hover:text-[#d41367] font-semibold transition-colors"
                    data-testid="link-rotary-international"
                  >
                    {m.rotaryLinkLabel ?? "Learn More"}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
