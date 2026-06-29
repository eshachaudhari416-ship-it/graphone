"use client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { sequoiaDetail } from "../../data/mockData";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

export default function InvestorProfile() {
  const investor = sequoiaDetail;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <p className="text-xs text-green-600 font-semibold mb-2">✓ Verified Investor</p>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
                {investor.logo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">{investor.name}</h1>
                  <span className="text-blue-500">✓</span>
                </div>
                <p className="text-gray-500 text-sm">{investor.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span>📍 {investor.location}</span>
              <span>📅 Founded {investor.founded}</span>
              <span>🏢 {investor.type}</span>
            </div>
            <button className="btn-primary">+ Follow Investor</button>
          </div>

          {/* Key People */}
          <div className="w-full md:w-72">
            <p className="font-semibold text-sm text-gray-700 mb-3">Key people</p>
            <div className="flex gap-3 flex-wrap">
              {investor.keyPeople.map((person) => (
                <div key={person.name} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl mb-1">
                    {person.emoji}
                  </div>
                  <p className="text-xs font-medium text-gray-900">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 bg-gray-50 rounded-2xl p-4 mb-8">
          <div className="text-center">
            <p className="text-xl font-bold text-[#FF3B5C]">+{investor.stats.deals_90days}</p>
            <p className="text-xs text-gray-500">Deals Last 90 Days</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-500">+{investor.stats.lead_investments}</p>
            <p className="text-xs text-gray-500">Lead Investments</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-500">{investor.stats.most_active_stage}</p>
            <p className="text-xs text-gray-500">Most Active Stage</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{investor.stats.top_partner}</p>
            <p className="text-xs text-gray-500">Top Partner</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-purple-500">{investor.stats.top_focus}</p>
            <p className="text-xs text-gray-500">Top Focus Area</p>
          </div>
        </div>

        {/* Thesis + Concentration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section className="bg-gray-50 rounded-2xl p-6">
            <h2 className="section-title mb-3">Investment Thesis</h2>
            <p className="text-sm text-gray-600 mb-4">{investor.thesis}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {investor.focusTags.map((tag) => (
                <span key={tag} className="tag tag-pink">{tag}</span>
              ))}
            </div>
            <p className="text-xs font-semibold text-gray-500 mb-2">Preferred Stages</p>
            <div className="flex gap-2">
              {investor.stages.map((stage) => (
                <span key={stage} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-600">{stage}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title mb-3">Portfolio Concentration</h2>
            <div className="flex items-center gap-6">
              <div className="w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={investor.concentration} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="percent">
                      {investor.concentration.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {investor.concentration.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-semibold ml-auto pl-4">{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Recent Investments */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Recent Investments</h2>
            <button className="text-[#FF3B5C] text-sm hover:underline">View all investments →</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {investor.recentInvestments.map((inv) => (
              <div key={inv.name} className={`bg-gradient-to-br ${inv.color} rounded-2xl p-4 text-white min-w-[160px] flex-shrink-0`}>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-lg mb-3">
                  {inv.logo}
                </div>
                <p className="font-bold">{inv.name}</p>
                <p className="text-xs text-white/70">{inv.category}</p>
                <p className="text-xs text-white/70">{inv.stage}</p>
                <p className="font-bold mt-2">{inv.amount}</p>
                <p className="text-xs text-white/70">{inv.date}</p>
                <p className="text-xs text-white/70">{inv.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Velocity */}
        <section className="mb-8">
          <h2 className="section-title mb-4">Investment Velocity</h2>
          <div className="bg-gray-50 rounded-2xl p-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={investor.velocity}>
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="deals" fill="#FF3B5C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Portfolio Winners */}
        <section className="mb-8">
          <h2 className="section-title mb-4">Portfolio Winners</h2>
          <p className="text-xs text-gray-500 mb-3">Notable Winners</p>
          <div className="flex flex-wrap gap-3">
            {investor.portfolioWinners.map((winner) => (
              <div key={winner} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 font-semibold text-sm text-gray-700 hover:shadow-sm cursor-pointer">
                {winner}
              </div>
            ))}
          </div>
        </section>

        {/* Co Investors */}
        <section className="mb-8">
          <h2 className="section-title mb-4">Co-Investor Network</h2>
          <div className="flex flex-wrap gap-3">
            {investor.coInvestors.map((co) => (
              <div key={co} className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:shadow-sm cursor-pointer">
                {co}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}