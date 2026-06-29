import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { companies, categories } from "./data/mockData";
import Link from "next/link";

const breakoutCompanies = [
  { name: "Pika", desc: "Launched new 1.0 video model", logo: "🎬" },
  { name: "Cognition", desc: "Created $970M Series B", logo: "🧠" },
  { name: "Adept", desc: "Enterprise adoption surged 200%", logo: "⚡" },
];

const recentlyFunded = [
  { name: "xAI", amount: "$6B Series B", date: "May 20, 2024", investor: "a16z", logo: "𝕏" },
  { name: "Databricks", amount: "$10B Series J", date: "Apr 15, 2024", investor: "Microsoft", logo: "🧱" },
  { name: "Mistral AI", amount: "$640M Series B", date: "May 20, 2024", investor: "Lightspeed", logo: "🌀" },
];

const startupsToWatch = [
  { name: "Deci", desc: "AI inference platform High performance", logo: "🔮" },
  { name: "Typeface", desc: "AI marketing platform Generative content", logo: "✍️" },
  { name: "Granola", desc: "AI Notetaker For teams", logo: "📝" },
];

const frontierLabs = [
  { name: "OpenAI", logo: "⬛" },
  { name: "Anthropic", logo: "🔺" },
  { name: "Google DeepMind", logo: "🟦" },
  { name: "xAI", logo: "𝕏" },
  { name: "Meta AI", logo: "🔵" },
  { name: "SSI", logo: "🔬" },
];

const openSourceLeaders = [
  { name: "Hugging Face", stars: "100K", logo: "🤗" },
  { name: "Mistral AI", stars: "50K", logo: "🌀" },
  { name: "Ollama", stars: "15K", logo: "🦙" },
  { name: "Together AI", stars: "8K", logo: "🤝" },
  { name: "Databricks", stars: "12K", logo: "🧱" },
];

const curatedCollections = [
  { title: "OpenAI Alumni Startups", count: 40, color: "from-gray-900 to-gray-700" },
  { title: "YC AI Startups", count: 385, color: "from-orange-600 to-orange-400" },
  { title: "AI Agent Leaders", count: 127, color: "from-blue-900 to-blue-700" },
  { title: "AI Infrastructure Leaders", count: 89, color: "from-purple-900 to-purple-700" },
  { title: "Most Funded AI Startups", count: 94, color: "from-green-900 to-green-700" },
];

const newOnGraphOne = [
  { name: "MemGPT", logo: "💾", category: "AI Memory" },
  { name: "Bria AI", logo: "🎨", category: "AI Video" },
  { name: "CharacterX", logo: "👾", category: "AI Chat" },
  { name: "Unity", logo: "🎮", category: "AI LPA" },
  { name: "Palette", logo: "🎭", category: "AI Design" },
];

export default function Home() {
  const trending = companies.slice(0, 5);
  const fastestGrowing = companies.slice(2, 7);
  const emerging = companies.slice(4, 8);
  const unicorns = companies.filter((c) => c.is_unicorn);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-pink-50 text-[#FF3B5C] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              AI COMPANIES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Discover the world's most innovative{" "}
              <span className="text-[#FF3B5C]">AI companies</span>
            </h1>
            <p className="text-gray-500 text-base mb-6">
              Explore AI startups, unicorns, frontier labs, and emerging companies shaping the future of artificial intelligence.
            </p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm max-w-md">
              <svg className="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search companies, categories, founders, investors..." className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400" />
              <button className="bg-[#FF3B5C] text-white rounded-full p-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex relative w-80 h-64">
            {companies.slice(0, 6).map((c, i) => (
              <div key={c.id} className="absolute bg-white border border-gray-100 shadow-md rounded-2xl w-16 h-16 flex items-center justify-center text-2xl"
                style={{ top: `${[10, 0, 40, 20, 60, 30][i]}%`, left: `${[10, 50, 70, 30, 55, 80][i]}%` }}>
                {c.logo}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button key={cat} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#FF3B5C] hover:text-[#FF3B5C] transition-colors bg-white">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Companies */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#FF3B5C] text-white text-xs font-bold w-5 h-5 rounded flex items-center justify-center">🔥</span>
              <h2 className="section-title">Trending AI Companies</h2>
            </div>
            <p className="section-subtitle">The most searched, viewed and discussed AI companies right now.</p>
          </div>
          <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {trending.slice(0, 3).map((company, i) => (
            <Link href={`/companies/${company.slug}`} key={company.id}>
              <div className={`bg-gradient-to-br ${company.color} rounded-2xl p-5 text-white h-48 flex flex-col justify-between cursor-pointer hover:opacity-90 transition-opacity`}>
                <div>
                  <div className="text-2xl mb-2">{company.logo}</div>
                  <h3 className="font-bold text-lg">{company.name}</h3>
                  <p className="text-xs text-white/70">{company.category}</p>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">{company.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">🔥 Trending #{i + 1}</span>
                  <span className="text-xs text-white/70">{company.views} views</span>
                </div>
              </div>
            </Link>
          ))}
          <div className="flex flex-col gap-3">
            {trending.slice(3, 5).map((company) => (
              <Link href={`/companies/${company.slug}`} key={company.id}>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-br ${company.color} w-10 h-10 rounded-xl flex items-center justify-center text-lg`}>{company.logo}</div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{company.name}</p>
                      <p className="text-xs text-gray-500">{company.category}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{company.views}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fastest Growing */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-400">②</span>
                  <h2 className="section-title">Fastest Growing AI Companies</h2>
                </div>
                <p className="section-subtitle">Companies showing strong momentum across key growth signals.</p>
              </div>
              <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {fastestGrowing.map((company) => (
                <Link href={`/companies/${company.slug}`} key={company.id}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer card-hover">
                    <div className={`bg-gradient-to-br ${company.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3`}>{company.logo}</div>
                    <p className="font-semibold text-sm text-gray-900">{company.name}</p>
                    <p className="text-xs text-gray-500">{company.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Market leaders CTA */}
          <div className="hidden md:flex w-56 bg-gray-900 rounded-2xl p-5 text-white flex-col justify-between flex-shrink-0">
            <div>
              <h3 className="font-bold text-sm mb-2">Explore tomorrow's market leaders today.</h3>
              <p className="text-xs text-gray-400">Discover categories with the highest growth potential across the AI landscape.</p>
            </div>
            <button className="bg-[#FF3B5C] text-white text-xs px-3 py-2 rounded-full mt-4">Explore Growth Leaders →</button>
          </div>
        </div>
      </section>

      {/* Emerging Startups */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-400">③</span>
              <h2 className="section-title">Emerging AI Startups to Watch</h2>
            </div>
            <p className="section-subtitle">Promising early-stage companies gaining real traction.</p>
          </div>
          <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {emerging.map((company) => (
            <Link href={`/companies/${company.slug}`} key={company.id}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer card-hover">
                <div className={`bg-gradient-to-br ${company.color} h-24 flex items-center justify-center text-4xl`}>{company.logo}</div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-900">{company.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{company.category}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{company.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{company.founded}</span>
                    <span className="text-xs text-gray-400">{company.employees}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-bold text-gray-400">④</span>
          <h2 className="section-title">Browse by Category</h2>
        </div>
        <p className="section-subtitle">Explore companies by what they're building.</p>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <div key={cat} className="flex flex-col items-center text-center p-3 bg-white border border-gray-100 rounded-xl hover:border-[#FF3B5C] hover:shadow-sm transition-all cursor-pointer">
              <span className="text-xl mb-2">🤖</span>
              <p className="text-xs font-medium text-gray-700">{cat}</p>
              <p className="text-xs text-gray-400 mt-0.5">{Math.floor(Math.random() * 900 + 100)} cos</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breakout + Recently Funded + Startups to Watch */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Breakout Companies */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF3B5C]">⑤</span>
              <h2 className="section-title">Breakout Companies</h2>
            </div>
            <p className="section-subtitle">Companies making big moves.</p>
            <div className="space-y-3">
              {breakoutCompanies.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm cursor-pointer">
                  <span className="text-2xl">{c.logo}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Funded */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF3B5C]">⑥</span>
              <h2 className="section-title">Recently Funded AI Startups</h2>
            </div>
            <p className="section-subtitle">Latest funding announcements.</p>
            <div className="space-y-3">
              {recentlyFunded.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm cursor-pointer">
                  <span className="text-2xl">{c.logo}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.amount} · {c.date}</p>
                    <p className="text-xs text-gray-400">{c.investor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Startups to Watch */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF3B5C]">⑦</span>
              <h2 className="section-title">Startups to Watch</h2>
            </div>
            <p className="section-subtitle">High potential companies to keep an eye on.</p>
            <div className="space-y-3">
              {startupsToWatch.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm cursor-pointer">
                  <span className="text-2xl">{c.logo}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Unicorns */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-gray-900">🦄 AI Unicorns</h2>
              <p className="text-sm text-gray-500">Private companies valued at $1B+</p>
            </div>
            <button className="text-gray-400 hover:text-[#FF3B5C] text-sm">View all →</button>
          </div>
          <div className="flex flex-wrap gap-6">
            {unicorns.map((company) => (
              <Link href={`/companies/${company.slug}`} key={company.id}>
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  <div className={`bg-gradient-to-br ${company.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform`}>{company.logo}</div>
                  <p className="text-gray-900 text-xs font-medium">{company.name}</p>
                  <p className="text-gray-400 text-xs">{company.valuation}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frontier AI Labs */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-white font-bold mb-1">Frontier AI Labs</h2>
          <p className="text-gray-400 text-sm mb-4">Organizations advancing the state of the art.</p>
          <div className="flex flex-wrap gap-6">
            {frontierLabs.map((lab) => (
              <div key={lab.name} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                <span className="text-xl">{lab.logo}</span>
                <span className="text-white text-sm font-medium">{lab.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Leaders */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gray-800 rounded-2xl p-6">
          <h2 className="text-white font-bold mb-1">Open Source AI Leaders</h2>
          <p className="text-gray-400 text-sm mb-4">Leading the open source movement.</p>
          <div className="flex flex-wrap gap-6">
            {openSourceLeaders.map((lab) => (
              <div key={lab.name} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                <span className="text-xl">{lab.logo}</span>
                <span className="text-white text-sm font-medium">{lab.name}</span>
                <span className="text-gray-400 text-xs">{lab.stars} ⭐</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-bold text-gray-400">⑧</span>
          <h2 className="section-title">Curated Collections</h2>
        </div>
        <p className="section-subtitle">Hand-picked lists for faster discovery.</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {curatedCollections.map((col) => (
            <div key={col.title} className={`bg-gradient-to-br ${col.color} rounded-2xl p-5 text-white min-w-[180px] flex-shrink-0 cursor-pointer hover:opacity-90`}>
              <p className="font-bold text-sm mb-1">{col.title}</p>
              <p className="text-xs text-white/70">{col.count} companies</p>
            </div>
          ))}
        </div>
      </section>

      {/* New on GraphOne + Explore All */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="section-title">New on GraphOne</h2>
              <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {newOnGraphOne.map((c) => (
                <div key={c.name} className="flex flex-col items-center text-center cursor-pointer group">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:shadow-md transition-shadow">{c.logo}</div>
                  <p className="text-xs font-medium text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">Explore All Companies</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Category", "Funding Stage", "Country", "Team Size"].map((filter) => (
                <button key={filter} className="text-xs border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#FF3B5C] hover:text-[#FF3B5C] transition-colors">
                  {filter} ↓
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>Sort by: Trending</span>
              <span>30,000+ companies</span>
            </div>
            <button className="btn-primary w-full text-center">Explore Companies →</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FF3B5C]">●</span>
              <p className="text-sm text-gray-500">Be the first to discover what's next in AI</p>
            </div>
            <p className="text-gray-600 text-sm">Join thousands of builders, investors and researchers.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Enter your email" className="border border-gray-200 rounded-full px-4 py-2 text-sm outline-none flex-1 md:w-64" />
            <button className="btn-primary whitespace-nowrap">Get updates</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}