import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Cog } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="ToolFlow Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-foreground hidden sm:inline">ToolFlow</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#tools" className="text-sm text-foreground/70 hover:text-foreground transition">
              Tools
            </a>
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition">
              How It Works
            </a>
            <Button asChild variant="default" size="sm">
              <a href="#cta">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Automate Your Success
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Discover the best SaaS tools and automation solutions designed to save you time, increase efficiency, and scale your business—without the guesswork.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#tools">
                Explore Tools <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Curated SaaS recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Honest reviews & comparisons</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Free automation guides</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>
          <img src={APP_LOGO} alt="ToolFlow" className="w-64 h-64 relative z-10" />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-card/50 border-t border-border py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose ToolFlow?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Save Time</h3>
              <p className="text-foreground/70">
                Stop wasting hours researching tools. We've done the work for you with detailed reviews and comparisons.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Scale Faster</h3>
              <p className="text-foreground/70">
                Use the same tools trusted by thousands of successful entrepreneurs and small business owners.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Automate Everything</h3>
              <p className="text-foreground/70">
                Learn proven automation strategies to streamline your workflow and focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Featured Tools
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Handpicked SaaS solutions for entrepreneurs who want to work smarter, not harder.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Shopify",
              description: "Build and scale your online store with ease",
              category: "E-commerce",
              icon: "🛍️",
            },
            {
              name: "GetResponse",
              description: "Email marketing and automation platform",
              category: "Marketing",
              icon: "📧",
            },
            {
              name: "ConvertKit",
              description: "Creator platform for writers and podcasters",
              category: "Content",
              icon: "✍️",
            },
            {
              name: "Zapier",
              description: "Connect your favorite apps and automate workflows",
              category: "Automation",
              icon: "⚡",
            },
            {
              name: "Semrush",
              description: "SEO and digital marketing toolkit",
              category: "SEO",
              icon: "📊",
            },
            {
              name: "Kinsta",
              description: "Premium managed WordPress hosting",
              category: "Hosting",
              icon: "🌐",
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {tool.category}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{tool.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">{tool.description}</p>
              <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                <a href={`/tools/${tool.name.toLowerCase()}`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="/tools">View All Tools</a>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-card/50 border-t border-border py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse Tools",
                description: "Explore our curated collection of SaaS tools",
              },
              {
                step: "2",
                title: "Read Reviews",
                description: "Get honest, detailed reviews and comparisons",
              },
              {
                step: "3",
                title: "Get Exclusive Deals",
                description: "Access special offers and discounts",
              },
              {
                step: "4",
                title: "Scale Your Business",
                description: "Start automating and growing faster",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="container py-20">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Automate Your Success?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are using ToolFlow to discover the best tools and automate their workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/tools">
                Explore Tools <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:hello@toolflow.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt="ToolFlow" className="w-6 h-6" />
                <span className="font-bold text-foreground">ToolFlow</span>
              </div>
              <p className="text-sm text-foreground/60">
                Automate Your Success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="/tools" className="hover:text-foreground transition">Tools</a></li>
                <li><a href="/guides" className="hover:text-foreground transition">Guides</a></li>
                <li><a href="/blog" className="hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="/about" className="hover:text-foreground transition">About</a></li>
                <li><a href="/contact" className="hover:text-foreground transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-foreground transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="https://twitter.com" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:text-foreground transition">LinkedIn</a></li>
                <li><a href="https://reddit.com" className="hover:text-foreground transition">Reddit</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 ToolFlow. All rights reserved. | Automate Your Success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
