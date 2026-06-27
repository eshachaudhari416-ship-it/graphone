import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { companies, categories } from "./data/mockData";
import Link from "next/link";

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
              Explore AI startups, unicorns, frontier labs, and emerging
              companies shaping the future of artificial intelligence.
            </p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm max-w-md">
              <svg className="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search companies, categories, founders, investors..."
                className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
              />
              <button className="bg-[#FF3B5C] text-white rounded-full p-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Floating logos decoration */}
          <div className="hidden md:flex relative w-80 h-64">
            {companies.slice(0, 6).map((c, i) => (
              <div
                key={c.id}
                className="absolute bg-white border border-gray-100 shadow-md rounded-2xl w-16 h-16 flex items-center justify-center text-2xl"
                style={{
                  top: `${[10, 0, 40, 20, 60, 30][i]}%`,
                  left: `${[10, 50, 70, 30, 55, 80][i]}%`,
                }}
              >
                {c.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#FF3B5C] hover:text-[#FF3B5C] transition-colors bg-white"
            >
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
          {/* Big cards - first 3 */}
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

          {/* Small cards - last 2 */}
          <div className="flex flex-col gap-3">
            {trending.slice(3, 5).map((company) => (
              <Link href={`/companies/${company.slug}`} key={company.id}>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-br ${company.color} w-10 h-10 rounded-xl flex items-center justify-center text-lg`}>
                      {company.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{company.name}</p>
                      <p className="text-xs text-gray-500">{company.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">{company.views}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fastest Growing */}
      <section className="max-w-7xl mx-auto px-4 py-8">
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
                <div className={`bg-gradient-to-br ${company.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3`}>
                  {company.logo}
                </div>
                <p className="font-semibold text-sm text-gray-900">{company.name}</p>
                <p className="text-xs text-gray-500">{company.category}</p>
              </div>
            </Link>
          ))}
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
                <div className={`bg-gradient-to-br ${company.color} h-24 flex items-center justify-center text-4xl`}>
                  {company.logo}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-900">{company.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{company.category}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{company.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{company.founded}</span>
                    <span className="text-xs text-gray-400">{company.employees} employees</span>
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
              <p className="text-xs text-gray-400 mt-0.5">{Math.floor(Math.random() * 900 + 100)} companies</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Unicorns */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-white font-bold text-lg">AI Unicorns 🦄</h2>
              <p className="text-gray-400 text-sm">Private companies valued at $1B+</p>
            </div>
            <button className="text-gray-400 hover:text-white text-sm">View all →</button>
          </div>
          <div className="flex flex-wrap gap-6">
            {unicorns.map((company) => (
              <Link href={`/companies/${company.slug}`} key={company.id}>
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  <div className={`bg-gradient-to-br ${company.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition-transform`}>
                    {company.logo}
                  </div>
                  <p className="text-white text-xs font-medium">{company.name}</p>
                  <p className="text-gray-400 text-xs">{company.valuation}</p>
                </div>
              </Link>
            ))}
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
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 rounded-full px-4 py-2 text-sm outline-none flex-1 md:w-64"
            />
            <button className="btn-primary whitespace-nowrap">Get updates</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}