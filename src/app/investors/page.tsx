"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { investors } from "../data/mockData";
import Link from "next/link";

const investorCollections = [
  { title: "Investors Backing AI Agents", count: 92, emoji: "🤖", color: "from-blue-900 to-indigo-800" },
  { title: "Investors Backing Indian AI Startups", count: 96, emoji: "🇮🇳", color: "from-orange-800 to-red-700" },
  { title: "Top Seed Investors", count: 214, emoji: "🌱", color: "from-green-800 to-teal-700" },
  { title: "Operator Angels", count: 178, emoji: "👼", color: "from-purple-900 to-purple-700" },
  { title: "OpenAI Alumni Investors", count: 65, emoji: "⬛", color: "from-gray-900 to-gray-700" },
  { title: "Enterprise AI Investors", count: 84, emoji: "🏢", color: "from-blue-800 to-blue-600" },
  { title: "Developer Tool Specialists", count: 80, emoji: "🛠️", color: "from-yellow-800 to-orange-600" },
  { title: "Healthcare AI Investors", count: 58, emoji: "🏥", color: "from-red-900 to-rose-700" },
];

const investorTypes = [
  { type: "Seed Investors", count: "1,248", emoji: "🌱" },
  { type: "Series A Investors", count: "884", emoji: "📈" },
  { type: "Angel Investors", count: "2,714", emoji: "👼" },
  { type: "Corporate Venture Funds", count: "322", emoji: "🏛️" },
  { type: "Late Stage Investors", count: "420", emoji: "🚀" },
  { type: "Family Offices", count: "198", emoji: "🏠" },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Discover Investors<br />
              <span className="text-[#FF3B5C]">Building the AI Economy</span>
            </h1>
            <p className="text-gray-500 text-base mb-6">
              Find VCs, angels, operators, corporate funds and emerging managers backing the next generation of AI companies.
            </p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm max-w-md">
              <svg className="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search investors, funds, firms..."
                className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
              />
              <button className="bg-[#FF3B5C] text-white rounded-full p-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {/* Popular searches */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["AI Agents", "Seed Investors", "Series A", "YC Backers", "India", "OpenAI Portfolio"].map((tag) => (
                <button key={tag} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#FF3B5C] hover:text-[#FF3B5C] transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Floating investor logos */}
          <div className="hidden md:flex relative w-80 h-64">
            {investors.map((inv, i) => (
              <div
                key={inv.id}
                className={`absolute bg-gradient-to-br ${inv.color} rounded-2xl px-4 py-2 text-white text-sm font-bold shadow-lg`}
                style={{
                  top: `${[5, 30, 55, 10, 40, 65][i]}%`,
                  left: `${[5, 40, 15, 65, 60, 45][i]}%`,
                }}
              >
                {inv.shortName}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Investors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 bg-gray-100 w-5 h-5 rounded flex items-center justify-center">01</span>
              <h2 className="section-title">Trending Investors</h2>
            </div>
          </div>
          <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {investors.map((investor) => (
            <Link href={`/investors/${investor.slug}`} key={investor.id}>
              <div className={`bg-gradient-to-br ${investor.color} rounded-2xl p-4 text-white h-44 flex flex-col justify-between cursor-pointer hover:opacity-90 transition-opacity`}>
                <div>
                  <p className="font-bold text-lg">{investor.shortName}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {investor.focus.slice(0, 2).map((f) => (
                      <span key={f} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                  <p className="text-xs text-white/70 mt-1">{investor.stage}</p>
                </div>
                <button className="text-xs text-white/80 hover:text-white text-left">
                  View portfolio →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Investor Collections */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 bg-gray-100 w-5 h-5 rounded flex items-center justify-center">02</span>
            <h2 className="section-title">Investor Collections</h2>
          </div>
          <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {investorCollections.map((col) => (
            <div key={col.title} className={`bg-gradient-to-br ${col.color} rounded-2xl p-5 text-white cursor-pointer hover:opacity-90 transition-opacity h-36 flex flex-col justify-between`}>
              <div className="text-3xl">{col.emoji}</div>
              <div>
                <p className="font-semibold text-sm">{col.title}</p>
                <p className="text-xs text-white/70">{col.count} Investors</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Investor Type */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold text-gray-400 bg-gray-100 w-5 h-5 rounded flex items-center justify-center">03</span>
          <h2 className="section-title">Browse by Investor Type</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {investorTypes.map((type) => (
            <div key={type.type} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-2xl">{type.emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-900">{type.type}</p>
                <p className="text-xs text-gray-500">{type.count} Investors</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Most Active Investors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 bg-gray-100 w-5 h-5 rounded flex items-center justify-center">04</span>
            <h2 className="section-title">Most Active Investors</h2>
          </div>
          <button className="text-sm text-gray-500 hover:text-[#FF3B5C]">View all →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {investors.slice(0, 4).map((investor) => (
            <div key={investor.id} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={`bg-gradient-to-br ${investor.color} w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                  {investor.shortName.slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{investor.name}</p>
                  <p className="text-xs text-gray-500">{investor.portfolio_count} portfolio companies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {investor.focus.map((f) => (
                  <span key={f} className="text-xs bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full text-gray-600">{f}</span>
                ))}
              </div>
              <button className="text-[#FF3B5C] text-xs mt-3 hover:underline">View portfolio →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Capital Graph CTA */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <p className="text-xs text-[#FF3B5C] font-semibold mb-2">🔗 Explore the Capital Graph</p>
          <h3 className="text-2xl font-bold mb-2">Visualize How Capital Moves in the AI Economy</h3>
          <p className="text-gray-400 text-sm mb-6">Explore the relationships between investors, founders, companies, funding rounds and products.</p>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            {["Investor", "Founder", "Company", "Funding Round", "Product"].map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white text-xs font-bold">
                  {["👤", "🧑", "🏢", "💰", "📦"][i]}
                </div>
                <span className="text-sm text-gray-300">{node}</span>
                {i < 4 && <span className="text-gray-600">→</span>}
              </div>
            ))}
          </div>
          <button className="btn-primary">Explore Capital Graph →</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}