import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { pages } from "@/lib/content";

export default function Feedback() {
  const page = pages["feedback"];
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />

      <main className="flex-1">
        <section className="bg-muted/30 py-12 md:py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                {page?.title ?? "Feedback"}
              </h1>
              <div className="h-1 w-24 bg-[#d41367] rounded-full"></div>
              {page?.subtitle && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {page.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        {page?.body && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl prose prose-lg text-muted-foreground leading-relaxed">
                {page.body}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
