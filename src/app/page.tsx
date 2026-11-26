import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain, Zap, BarChart3, Star, Users, Code2,
  ArrowRight, Building2, ShoppingBag,
  BookOpen, Globe, Database, TrendingUp,
} from "lucide-react";

const stats = [
  { value: "10B+", label: "Searches Powered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<50ms", label: "Average Response Time" },
  { value: "140+", label: "Countries Served" },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Understands Intent",
    desc: "Natural language processing interprets what users mean, not just the words they type. Ambiguous queries return relevant results.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    desc: "Display search results as users type. Sub-50ms response times keep experiences fast and fluid across any device.",
  },
  {
    icon: Star,
    title: "Personalised Discovery",
    desc: "Adapt search results to individual users based on behaviour, preferences and context to increase engagement.",
  },
  {
    icon: BarChart3,
    title: "Search Analytics",
    desc: "Track queries, clicks, conversions and zero-result searches. Use data to continuously improve your search experience.",
  },
  {
    icon: TrendingUp,
    title: "Smart Recommendations",
    desc: "Surface relevant products, articles and content that users did not know to search for. Drive discovery beyond search.",
  },
  {
    icon: Code2,
    title: "Developer First",
    desc: "Clean APIs, comprehensive SDKs and detailed documentation make integration fast and integration maintenance simple.",
  },
];

const solutions = [
  { icon: ShoppingBag, label: "Ecommerce", desc: "Convert browsers into buyers with product search that understands shopping intent." },
  { icon: Building2, label: "Enterprise", desc: "Unify knowledge across internal systems with intelligent enterprise search." },
  { icon: BookOpen, label: "Education", desc: "Help students and educators find the right learning materials instantly." },
  { icon: Globe, label: "Marketplaces", desc: "Match buyers with sellers through precise, faceted search across large catalogs." },
  { icon: Database, label: "Knowledge Bases", desc: "Make documentation and support content instantly findable and useful." },
  { icon: Users, label: "SaaS Platforms", desc: "Embed powerful in-app search to improve user retention and feature discovery." },
];

const steps = [
  { step: "01", title: "Connect Your Data", desc: "Upload content, provide URLs or connect via API. SearchSprout ingests and indexes your information automatically." },
  { step: "02", title: "Configure Your Experience", desc: "Use the visual dashboard to customise search behaviour, ranking rules, filters and result layouts." },
  { step: "03", title: "Deploy in Minutes", desc: "Embed the search experience using our UI components or build custom interfaces with the Search API." },
  { step: "04", title: "Analyse and Optimise", desc: "Monitor search performance, identify gaps and use AI-powered insights to continuously improve results." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#071F20", padding: "5rem 0 4rem", overflow: "hidden" }}>
          <div className="container-ss" style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(22,198,83,0.12)", border: "1px solid rgba(22,198,83,0.3)",
              borderRadius: "2rem", padding: "0.375rem 1rem", marginBottom: "1.75rem"
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#16C653", display: "inline-block" }} />
              <span style={{ color: "#16C653", fontSize: "0.875rem", fontWeight: 500 }}>AI-Powered Search Infrastructure</span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-manrope)", fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1,
              color: "#FFFFFF", maxWidth: "800px", margin: "0 auto 1.25rem"
            }}>
              Search That Understands.<br />
              <span style={{ color: "#16C653" }}>Discovery That Converts.</span>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.72)",
              maxWidth: "620px", margin: "0 auto 2.5rem", lineHeight: 1.65
            }}>
              SearchSprout helps businesses deliver intelligent search experiences with AI-powered discovery, personalised results and actionable search insights.
            </p>

            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/signup" className="btn-primary" style={{ padding: "0.75rem 1.75rem", fontSize: "1rem" }}>
                Get started <ArrowRight size={16} />
              </Link>
              <Link href="/login" className="btn-outline" style={{ padding: "0.75rem 1.75rem", fontSize: "1rem" }}>
                Sign in
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.75rem", color: "#FFFFFF" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Grid */}
        <section style={{ background: "#FFFFFF", padding: "5rem 0" }}>
          <div className="container-ss">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                Intelligent Search for Modern Businesses
              </h2>
              <p style={{ color: "#65736D", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
                Every capability you need to build search experiences that understand, discover and convert.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {aiFeatures.map((f) => (
                <div key={f.title} className="card-ss" style={{ transition: "transform 0.15s, box-shadow 0.15s" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "0.625rem", background: "#E8F8EE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <f.icon size={22} color="#16C653" />
                  </div>
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ color: "#65736D", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: "#F7FAF8", padding: "5rem 0" }}>
          <div className="container-ss">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                How SearchSprout Works
              </h2>
              <p style={{ color: "#65736D", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
                From data ingestion to live search experience in four simple steps.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {steps.map((s) => (
                <div key={s.step} style={{ position: "relative" }}>
                  <div style={{ fontSize: "3rem", fontFamily: "var(--font-manrope)", fontWeight: 900, color: "#E8F8EE", lineHeight: 1 }}>{s.step}</div>
                  <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem", marginTop: "0.25rem" }}>{s.title}</h3>
                  <p style={{ color: "#65736D", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section style={{ background: "#FFFFFF", padding: "5rem 0" }}>
          <div className="container-ss">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
                Built for Every Industry
              </h2>
              <p style={{ color: "#65736D", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
                SearchSprout adapts to your business type, delivering the right search experience for your audience.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {solutions.map((s) => (
                <Link key={s.label} href="/solutions" style={{ textDecoration: "none" }}>
                  <div className="card-ss" style={{ cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "0.5rem", background: "#063B38", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <s.icon size={20} color="#16C653" />
                      </div>
                      <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "1rem", color: "#071F20" }}>{s.label}</span>
                    </div>
                    <p style={{ color: "#65736D", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section style={{ background: "#F7FAF8", padding: "5rem 0" }}>
          <div className="container-ss" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{ color: "#65736D", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              Start free and scale as you grow. No hidden fees, no surprise charges.
            </p>
            <Link href="/pricing" className="btn-primary" style={{ fontSize: "1rem", padding: "0.75rem 2rem" }}>
              View All Plans <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#063B38", padding: "5rem 0" }}>
          <div className="container-ss" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#FFFFFF", marginBottom: "1rem" }}>
              Search Smarter. Discover More. Grow Faster.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
              Join thousands of businesses already using SearchSprout to transform their search experience.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/signup" className="btn-primary" style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}>
                Get started <ArrowRight size={16} />
              </Link>
              <Link href="/login" className="btn-outline" style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}>
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
