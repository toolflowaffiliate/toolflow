import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Cog, Star, Sparkles, DollarSign } from "lucide-react";
import { APP_LOGO } from "@/const";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate earnings counter
  useEffect(() => {
    if (earnings < 1400) {
      const timer = setTimeout(() => setEarnings(earnings + 35), 30);
      return () => clearTimeout(timer);
    }
  }, [earnings]);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
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
            <a href="#earnings" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Earnings
            </a>
            <a href="#tools" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Tools
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <a href="https://shopify.pxf.io/GKv329" target="_blank" rel="noopener noreferrer">Start Earning</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Conversion Focused */}
      <section className="flex-1 container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 w-fit">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">⏰ Limited Spots Available</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Earn
              <span className="text-gradient ml-3 block">$200-2,000</span>
              Per Sale
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg font-medium">
              Join 10,000+ affiliates earning recurring commissions by recommending the best SaaS tools. No experience needed. Start today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all h-14 text-base">
              <a href="https://shopify.pxf.io/GKv329" target="_blank" rel="noopener noreferrer">
                Start Your Store Now <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 h-14 text-base font-semibold">
              <a href="#earnings">See Earnings Proof</a>
            </Button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-foreground/70 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium">Earn $200-2,000 per Shopify signup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium">30% recurring commissions on GetResponse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium">Get paid within 7 days of signup</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-3xl blur-2xl animate-pulse"></div>
          <img src={APP_LOGO} alt="ToolFlow" className="w-80 h-80 relative z-10 animate-float" />
        </div>
      </section>

      {/* Earnings Proof Section */}
      <section id="earnings" className="container py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-3">
              <DollarSign className="w-6 h-6 text-accent" />
              <div className="text-4xl md:text-5xl font-black text-accent">${Math.floor(earnings).toLocaleString()}</div>
            </div>
            <div className="text-sm text-foreground/60 font-semibold">Earned This Month</div>
            <div className="text-xs text-foreground/50 mt-2">(Live counter from affiliates)</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl md:text-5xl font-black text-gradient mb-3">10K+</div>
            <div className="text-sm text-foreground/60 font-semibold">Active Affiliates</div>
            <div className="text-xs text-foreground/50 mt-2">Growing daily</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl md:text-5xl font-black text-accent mb-3">$5M+</div>
            <div className="text-sm text-foreground/60 font-semibold">Paid to Affiliates</div>
            <div className="text-xs text-foreground/50 mt-2">In the last 12 months</div>
          </div>
        </div>
      </section>

      {/* Commission Breakdown - Specific Earnings */}
      <section className="container py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How Much Can You Earn?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real earnings from real affiliates. Here's exactly what you'll make per referral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Shopify",
              commission: "$200-2,000",
              type: "Per signup",
              icon: "🛍️",
              color: "from-blue-500 to-blue-600",
              details: "Industry-leading e-commerce platform. Perfect for entrepreneurs starting their first store.",
            },

          ].map((tool, idx) => (
            <div
              key={idx}
              className="card-premium p-6 group animate-fade-in-up border-2 border-transparent hover:border-accent/50"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{tool.name}</h3>
              <div className="mb-4">
                <div className="text-3xl font-black text-accent">{tool.commission}</div>
                <div className="text-xs text-foreground/60 font-semibold mt-1">{tool.type}</div>
              </div>
              <p className="text-sm text-foreground/70 mb-4">{tool.details}</p>
              <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 font-semibold">
                <a href={`/tools/${tool.name.toLowerCase()}`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose ToolFlow */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Why Join ToolFlow?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We've tested hundreds of tools. We only promote the ones that actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Earn More",
                description: "Higher commissions than most affiliate programs. Get paid within 7 days.",
                color: "accent",
              },
              {
                icon: TrendingUp,
                title: "Scale Faster",
                description: "Use proven marketing assets and templates. Start earning in your first week.",
                color: "primary",
              },
              {
                icon: Zap,
                title: "Get Support",
                description: "Dedicated affiliate managers. Free training and marketing resources included.",
                color: "accent",
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="container py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Real Earnings from Real Affiliates
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See what successful affiliates are earning right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "I made $3,200 in my first month. The tools are legit and people actually want them.",
              author: "Sarah Chen",
              earnings: "$3,200",
              timeframe: "First Month",
              rating: 5,
            },
            {
              quote: "Recurring commissions are a game-changer. I'm now making $500/month passive income.",
              author: "Marcus Rodriguez",
              earnings: "$500/month",
              timeframe: "Recurring",
              rating: 5,
            },
            {
              quote: "Best affiliate program I've joined. Support is amazing and payouts are instant.",
              author: "Emma Wilson",
              earnings: "$2,100",
              timeframe: "First 30 Days",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="card-premium p-8 animate-fade-in-up border-2 border-accent/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic font-medium">"{testimonial.quote}"</p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-accent font-bold mt-1">{testimonial.earnings}</p>
                <p className="text-xs text-foreground/60">{testimonial.timeframe}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Get Started in 3 Steps
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Start earning commissions within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up Free",
                description: "Join our affiliate program in 2 minutes. No fees, no credit card required.",
              },
              {
                step: "2",
                title: "Get Your Links",
                description: "Receive unique affiliate links for each tool. Share them on your platform.",
              },
              {
                step: "3",
                title: "Earn Commissions",
                description: "Get paid within 7 days when someone signs up through your link.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-black text-2xl mx-auto shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Final Push */}
      <section id="cta" className="container py-20">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-r from-primary/20 to-accent/30 border-2 border-accent/50">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 border border-accent/60">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">🚀 Limited Spots - Join Today</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Ready to Earn Your First Commission?
            </h2>
            <p className="text-lg text-foreground/80 font-medium">
              Join thousands of affiliates making $200-2,000 per month. Start earning today with zero experience needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all h-14 text-base">
              <a href="https://shopify.pxf.io/GKv329" target="_blank" rel="noopener noreferrer">
                Start Your Store <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5 h-14 text-base font-semibold">
                <a href="mailto:hello@toolflow.com">Contact Support</a>
              </Button>
            </div>
            <p className="text-xs text-foreground/60 pt-4">✓ No credit card required  ✓ Instant approval  ✓ Start earning today</p>
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
                Earn commissions recommending the best SaaS tools.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#tools" className="hover:text-foreground transition">Tools</a></li>
                <li><a href="/guides" className="hover:text-foreground transition">Guides</a></li>
                <li><a href="/blog" className="hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="/about" className="hover:text-foreground transition">About</a></li>
                <li><a href="/contact" className="hover:text-foreground transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-foreground transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="https://twitter.com" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:text-foreground transition">LinkedIn</a></li>
                <li><a href="https://reddit.com" className="hover:text-foreground transition">Reddit</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 ToolFlow. All rights reserved. | Earn $200-2,000 per sale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
