import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Cog, Star, Sparkles } from "lucide-react";
import { APP_LOGO } from "@/const";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3 animate-fade-in-down">
            <img src={APP_LOGO} alt="ToolFlow Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-foreground hidden sm:inline">ToolFlow</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#tools" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Tools
            </a>
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#cta">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Trusted by 10,000+ Entrepreneurs</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Automate Your
              <span className="text-gradient ml-3">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-lg">
              Discover the best SaaS tools and automation solutions designed to save you time, increase efficiency, and scale your business—without the guesswork.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <a href="#tools">
                Explore Tools <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Curated SaaS recommendations from experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Honest reviews & detailed comparisons</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Free automation guides & templates</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-3xl blur-2xl animate-pulse"></div>
          <img src={APP_LOGO} alt="ToolFlow" className="w-80 h-80 relative z-10 animate-float" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16 grid grid-cols-3 gap-8 mb-8">
        {[
          { number: "10K+", label: "Active Users" },
          { number: "50+", label: "Tools Reviewed" },
          { number: "$5M+", label: "Saved Annually" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
            <div className="text-sm text-foreground/60">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Value Propositions */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose ToolFlow?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              We've tested hundreds of tools so you don't have to. Get honest recommendations backed by real experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Save Time",
                description: "Stop wasting hours researching tools. We've done the work for you with detailed reviews and comparisons.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Scale Faster",
                description: "Use the same tools trusted by thousands of successful entrepreneurs and small business owners.",
                color: "accent",
              },
              {
                icon: Cog,
                title: "Automate Everything",
                description: "Learn proven automation strategies to streamline your workflow and focus on what matters most.",
                color: "primary",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-premium p-8 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="container py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Tools
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Handpicked SaaS solutions for entrepreneurs who want to work smarter, not harder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Shopify",
              description: "Build and scale your online store with ease",
              category: "E-commerce",
              icon: "🛍️",
              color: "from-blue-500 to-blue-600",
            },
            {
              name: "GetResponse",
              description: "Email marketing and automation platform",
              category: "Marketing",
              icon: "📧",
              color: "from-purple-500 to-purple-600",
            },
            {
              name: "ConvertKit",
              description: "Creator platform for writers and podcasters",
              category: "Content",
              icon: "✍️",
              color: "from-pink-500 to-pink-600",
            },
            {
              name: "Zapier",
              description: "Connect your favorite apps and automate workflows",
              category: "Automation",
              icon: "⚡",
              color: "from-orange-500 to-orange-600",
            },
            {
              name: "Semrush",
              description: "SEO and digital marketing toolkit",
              category: "SEO",
              icon: "📊",
              color: "from-green-500 to-green-600",
            },
            {
              name: "Kinsta",
              description: "Premium managed WordPress hosting",
              category: "Hosting",
              icon: "🌐",
              color: "from-cyan-500 to-cyan-600",
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="card-premium p-6 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {tool.category}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{tool.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">{tool.description}</p>
              <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                <a href={`/tools/${tool.name.toLowerCase()}`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
            <a href="/tools">View All Tools</a>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Get started in minutes and start discovering the best tools for your business.
            </p>
          </div>

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
              <div
                key={idx}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Entrepreneurs
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See what successful business owners are saying about ToolFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "ToolFlow saved me weeks of research. The reviews are honest and the recommendations actually work.",
              author: "Sarah Chen",
              role: "E-commerce Founder",
              rating: 5,
            },
            {
              quote: "I implemented the automation stack and cut my manual work by 80%. Best decision ever.",
              author: "Marcus Rodriguez",
              role: "Digital Marketer",
              rating: 5,
            },
            {
              quote: "The email sequences are gold. My open rates increased by 40% after using their templates.",
              author: "Emma Wilson",
              role: "Content Creator",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="card-premium p-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="container py-20">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Automate Your Success?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are using ToolFlow to discover the best tools and automate their workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <a href="/tools">
                  Explore Tools <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <a href="mailto:hello@toolflow.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12 mt-12">
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
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 ToolFlow. All rights reserved. | Automate Your Success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
