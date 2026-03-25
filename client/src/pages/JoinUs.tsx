import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { pages } from "@/lib/content";

const page = pages["join-us"];

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
                  {page?.title ?? "Join the Club"}
                </h1>
                <div className="h-1 w-20 bg-[#d41367] rounded-full mx-auto"></div>
              </div>
              {page?.body && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {page.body}
                </p>
              )}
            </div>
            {page?.heroImage && (
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary/10 rounded-2xl -z-10"></div>
                <img
                  src={page.heroImage}
                  alt={`${page.title} hero image`}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefits / Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary/5 border-primary/20 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Why Join?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                  <p className="text-sm">Connect with diverse professionals and community leaders.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                  <p className="text-sm">Make a tangible impact through hands-on service projects.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                  <p className="text-sm">Develop leadership skills and professional growth.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#d41367] shrink-0 mt-0.5" />
                  <p className="text-sm">Enjoy social events, dinners, and fun outings.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Form Embed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border/50 shadow-md overflow-hidden bg-white">
              {page?.formUrl ? (
                <iframe
                  src={page.formUrl}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Membership Interest Form"
                  className="block"
                  data-testid="iframe-membership-form"
                >
                  Loading form…
                </iframe>
              ) : null}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
