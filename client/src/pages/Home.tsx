import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section Placeholder */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
            Make a Difference Today
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join our community of passionate volunteers dedicated to creating positive change. 
            Together, we can build a better future for everyone.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold bg-background/50 backdrop-blur">
              View Activities
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative background element */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </div>
  );
}
