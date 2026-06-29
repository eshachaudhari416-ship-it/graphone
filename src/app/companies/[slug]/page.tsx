"use client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { companies, openAIDetail } from "../../data/mockData";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { notFound } from "next/navigation";

const acquisitions = [
  { name: "Rockset", date: "2024", focus: "Database technology", logo: "R" },
  { name: "io", date: "2025", focus: "AI device startup", logo: "O" },
];

const investments = [
  { name: "Figure", focus: "Humanoid Robotics", stage: "Series B" },
  { name: "Harvey", focus: "Legal AI", stage: "Series C" },
  { name: "Physical Intelligence", focus: "Robotics AI", stage: "Series A" },
];

const researchPapers = [
  { title: "GPT-4 Technical Report", date: "Mar 2023" },
  { title: "GPT-4o System Card", date: "May 2024" },
  { title: "Sora: A Review", date: "Feb 2024" },
  { title: "DALL-E 3 Technical Report", date: "Oct 2023" },
  { title: "Whisper: Robust Speech Recognition", date: "Dec 2022" },
];

const patents = [
  { title: "System for training large language models", category: "AI / ML", owner: "OpenAI", filed: "2022-01-14", published: "2023-04-21" },
  { title: "Methods for aligning AI models", category: "AI Safety", owner: "OpenAI", filed: "2022-07-11", published: "2023-12-18" },
  { title: "Efficient inference for transformer models", category: "AI / ML", owner: "OpenAI", filed: "2022-03-09", published: "2023-11-02" },
];

const openJobs = [
  { title: "Research Scientist", dept: "Research", location: "San Francisco, CA", type: "Full-time" },
  { title: "Software Engineer, Infrastructure", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Product Manager, ChatGPT", dept: "Product", location: "Remote", type: "Full-time" },
  { title: "Safety Systems Engineer", dept: "Safety", location: "San Francisco, CA", type: "Full-time" },
  { title: "ML Engineer, Training", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
];

const alumniCompanies = [
  "Anthropic", "Perplexity", "Thinking Machines Lab", "Safe Superintelligence", "World Labs"
];

const collections = [
  "AI Labs", "Foundation Models", "Generative AI", "Top AI Companies"
];

export default function CompanyDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (slug === "openai") {
    const company = openAIDetail;
    return (
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Tabs */}
        <div className="border-b border-gray-100 sticky top-14 bg-white z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-6 text-sm overflow-x-auto">
              {["Overview", "Timeline", "Funding", "Ownership", "Investors", "Leadership", "Products", "More"].map((tab, i) => (
                <button key={tab} className={`py-3 px-1 whitespace-nowrap font-medium border-b-2 transition-colors ${i === 0 ? "border-[#FF3B5C] text-[#FF3B5C]" : "border-transparent text-gray-500 hover:text-gray-900"}`}>
                  {i + 1}. {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 relative">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-3xl">⬛</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                    <span className="text-blue-500">✓</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 max-w-lg">{company.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span>🌐 {company.website}</span>
                <span>📅 Founded {company.founded}</span>
                <span>📍 {company.location}</span>
                <span>👥 {company.employees} employees</span>
                <span>🔒 {company.stage}</span>
              </div>
              <div className="flex gap-3 mb-4">
                <span>𝕏</span><span>in</span><span>▶</span><span>🐙</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <span key={tag} className="tag tag-pink">{tag}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-0 w-48 h-32 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl opacity-60" />
          </div>

          {/* Timeline */}
          <section className="mb-10">
            <h2 className="section-title mb-6">2. Timeline</h2>
            <div className="relative">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200" />
              <div className="flex justify-between relative overflow-x-auto gap-4">
                {company.timeline.map((item) => (
                  <div key={item.year} className="flex flex-col items-center min-w-[80px]">
                    <div className="w-3 h-3 bg-[#FF3B5C] rounded-full mb-3 z-10" />
                    <p className="text-xs font-bold text-gray-900">{item.year}</p>
                    <p className="text-xs text-gray-500 text-center mt-1">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Funding + Ownership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="section-title mb-4">3. Funding Timeline</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs border-b border-gray-100">
                    <th className="text-left py-2">Round</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {company.funding.map((f) => (
                    <tr key={f.round} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-2.5 font-medium text-gray-900">{f.round}</td>
                      <td className="py-2.5 text-gray-500">{f.date}</td>
                      <td className="py-2.5 text-gray-900 font-semibold">{f.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View funding history →</button>
            </section>

            <section>
              <h2 className="section-title mb-4">4. Ownership</h2>
              <div className="flex items-center gap-6">
                <div className="w-36 h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={company.ownership} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="percent">
                        {company.ownership.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {company.ownership.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-semibold text-gray-900 ml-auto pl-4">{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Investors */}
          <section className="mb-10">
            <h2 className="section-title mb-4">5. Investors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">Seed Investors</h3>
                <div className="space-y-2">
                  {company.investors.seed.map((inv) => (
                    <div key={inv} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">👤</span>
                      {inv}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">Series Investors</h3>
                <div className="space-y-2">
                  {company.investors.seriesA.map((inv) => (
                    <div key={inv} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">🏢</span>
                      {inv}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">Growth Investors</h3>
                <div className="space-y-2">
                  {company.investors.growth.map((inv) => (
                    <div key={inv} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">💼</span>
                      {inv}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founders */}
          <section className="mb-10">
            <h2 className="section-title mb-4">6. Founders & Leadership</h2>
            <div className="flex flex-wrap gap-6">
              {company.founders.map((founder) => (
                <div key={founder.name} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xl">{founder.emoji}</div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{founder.name}</p>
                    <p className="text-xs text-gray-500">{founder.title}</p>
                  </div>
                </div>
              ))}
              <button className="text-[#FF3B5C] text-sm hover:underline self-center">View all leadership →</button>
            </div>
          </section>

          {/* Products */}
          <section className="mb-10">
            <h2 className="section-title mb-4">7. Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {company.products.map((product) => (
                <div key={product.name} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-xl mb-2">{product.emoji}</div>
                  <p className="font-semibold text-xs text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{product.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Acquisitions + Investments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="section-title mb-4">8. Acquisitions</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs border-b border-gray-100">
                    <th className="text-left py-2">Company</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {acquisitions.map((a) => (
                    <tr key={a.name} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold">{a.logo}</div>
                          <span className="font-medium text-gray-900">{a.name}</span>
                        </div>
                      </td>
                      <td className="py-2.5 text-gray-500">{a.date}</td>
                      <td className="py-2.5 text-gray-500">{a.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all acquisitions →</button>
            </section>

            <section>
              <h2 className="section-title mb-4">9. Investments</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs border-b border-gray-100">
                    <th className="text-left py-2">Company</th>
                    <th className="text-left py-2">Focus</th>
                    <th className="text-left py-2">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((inv) => (
                    <tr key={inv.name} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-xs">🏢</div>
                          <span className="font-medium text-gray-900">{inv.name}</span>
                        </div>
                      </td>
                      <td className="py-2.5 text-gray-500">{inv.focus}</td>
                      <td className="py-2.5 text-gray-500">{inv.stage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all investments →</button>
            </section>
          </div>

          {/* Competitor Landscape */}
          <section className="mb-10">
            <h2 className="section-title mb-4">10. Competitor Landscape</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-3">Direct Competitors</p>
                <div className="flex flex-wrap gap-3">
                  {company.competitors.map((comp) => (
                    <div key={comp} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 hover:shadow-sm cursor-pointer">
                      <span className="text-lg">🏢</span>
                      <span className="text-sm font-medium text-gray-700">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Adjacent Competitors</p>
                <div className="flex flex-wrap gap-3">
                  {["Perplexity", "Cursor", "Replit"].map((comp) => (
                    <div key={comp} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 hover:shadow-sm cursor-pointer">
                      <span className="text-lg">🏢</span>
                      <span className="text-sm font-medium text-gray-700">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Ecosystem Graph */}
          <section className="mb-10">
            <h2 className="section-title mb-4">11. AI Ecosystem Graph</h2>
            <div className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden h-64 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center node */}
                <div className="relative">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl z-10 relative">⬛</div>
                  {/* Surrounding nodes */}
                  {[
                    { label: "ChatGPT", x: "-120px", y: "-80px", color: "bg-green-100" },
                    { label: "GPT-4o", x: "0px", y: "-100px", color: "bg-blue-100" },
                    { label: "Microsoft", x: "120px", y: "-60px", color: "bg-blue-200" },
                    { label: "Anthropic", x: "-140px", y: "60px", color: "bg-orange-100" },
                    { label: "Sequoia", x: "130px", y: "70px", color: "bg-red-100" },
                    { label: "Y Combinator", x: "-60px", y: "100px", color: "bg-orange-200" },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className={`absolute ${node.color} rounded-full px-3 py-1 text-xs font-medium text-gray-700 whitespace-nowrap shadow-sm`}
                      style={{ transform: `translate(${node.x}, ${node.y})` }}
                    >
                      {node.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* News + Open Jobs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="section-title mb-4">12. News</h2>
              <div className="space-y-3">
                {company.news.map((item) => (
                  <div key={item.title} className="flex items-start justify-between gap-4 py-2 border-b border-gray-50 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <p className="text-sm text-gray-700 hover:text-[#FF3B5C]">{item.title}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{item.date}</span>
                  </div>
                ))}
              </div>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all news →</button>
            </section>

            <section>
              <h2 className="section-title mb-4">13. Open Jobs</h2>
              <div className="space-y-2">
                {openJobs.map((job) => (
                  <div key={job.title} className="flex items-center justify-between py-2 border-b border-gray-50 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{job.title}</p>
                      <p className="text-xs text-gray-500">{job.dept} · {job.location}</p>
                    </div>
                    <span className="text-xs text-gray-400">{job.type}</span>
                  </div>
                ))}
              </div>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all jobs →</button>
            </section>
          </div>

          {/* Research Papers + Patents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="section-title mb-4">14. Research Papers</h2>
              <div className="space-y-2">
                {researchPapers.map((paper) => (
                  <div key={paper.title} className="flex items-center justify-between py-2 border-b border-gray-50 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <p className="text-sm text-gray-700 hover:text-[#FF3B5C]">📄 {paper.title}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{paper.date}</span>
                  </div>
                ))}
              </div>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all papers →</button>
            </section>

            <section>
              <h2 className="section-title mb-4">15. Patents</h2>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100">
                    <th className="text-left py-2">Patent</th>
                    <th className="text-left py-2">Category</th>
                    <th className="text-left py-2">Filed</th>
                  </tr>
                </thead>
                <tbody>
                  {patents.map((patent) => (
                    <tr key={patent.title} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-2 text-gray-700 max-w-[160px] truncate">{patent.title}</td>
                      <td className="py-2 text-gray-500">{patent.category}</td>
                      <td className="py-2 text-gray-500">{patent.filed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="text-[#FF3B5C] text-sm mt-3 hover:underline">View all patents →</button>
            </section>
          </div>

          {/* Alumni + Collections + Similar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <section>
              <h2 className="section-title mb-4">16. Alumni Companies</h2>
              <div className="space-y-2">
                {alumniCompanies.map((comp) => (
                  <div key={comp} className="flex items-center gap-2 py-1.5 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-lg">🏢</span>
                    <span className="text-sm text-gray-700">{comp}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-title mb-4">17. Collections</h2>
              <div className="space-y-2">
                {collections.map((col) => (
                  <div key={col} className="flex items-center gap-2 py-1.5 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-gray-700">{col}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-title mb-4">18. Similar Companies</h2>
              <div className="space-y-2">
                {company.similar.map((comp) => (
                  <div key={comp} className="flex items-center gap-2 py-1.5 hover:bg-gray-50 px-2 rounded cursor-pointer">
                    <span className="text-lg">🏢</span>
                    <span className="text-sm text-gray-700">{comp}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // For all other companies
  const company = companies.find((c) => c.slug === slug);
  if (!company) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`bg-gradient-to-br ${company.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl`}>
            {company.logo}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            <p className="text-gray-500 text-sm">{company.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {company.tags.map((tag) => (
            <span key={tag} className="tag tag-pink">{tag}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">Founded</p>
            <p className="font-bold text-gray-900">{company.founded}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">Stage</p>
            <p className="font-bold text-gray-900">{company.stage}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">Funding</p>
            <p className="font-bold text-gray-900">{company.funding_total}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">Employees</p>
            <p className="font-bold text-gray-900">{company.employees}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-1">📍 {company.location}</p>
          <p className="text-sm text-gray-500 mb-1">🌐 {company.website}</p>
          {company.is_unicorn && (
            <p className="text-sm text-purple-600 font-semibold mt-2">🦄 Unicorn — Valued at {company.valuation}</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}