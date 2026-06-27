"use client";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { products, productCategories } from "../data/mockData";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#FF3B5C] text-xs font-semibold mb-4">
              ● LIVE AI INTELLIGENCE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              The Global Intelligence<br />
              Layer <span className="text-[#FF3B5C]">for AI.</span>
            </h1>
            <p className="text-gray-500 text-base mb-6">
              One graph connecting companies, founders, investors, products, funding and talent.
            </p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm max-w-md">
              <svg className="text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search companies, founders, investors or products..."
                className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
              />
              <button className="bg-[#FF3B5C] text-white rounded-full p-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {/* Most searched */}
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Most searched</p>
              <div className="flex flex-wrap gap-2">
                {["Databricks", "Notion", "Framer", "Webflow", "LangChain"].map((tag) => (
                  <button key={tag} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#FF3B5C] hover:text-[#FF3B5C] transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Floating logos */}
          <div className="hidden md:flex relative w-80 h-64">
            {products.slice(0, 6).map((p, i) => (
              <div
                key={p.id}
                className="absolute bg-white border border-gray-100 shadow-md rounded-2xl w-16 h-16 flex items-center justify-center text-2xl"
                style={{
                  top: `${[10, 0, 40, 20, 60, 30][i]}%`,
                  left: `${[10, 50, 70, 30, 55, 80][i]}%`,
                }}
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection of the week */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Collection card */}
          <div className="flex-1 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-100 rounded-2xl p-6">
            <p className="text-xs font-bold text-orange-500 mb-2">🔥 COLLECTION OF THE WEEK</p>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Vibe Coding Tools</h3>
            <p className="text-sm text-gray-500 mb-4">The best AI tools for vibe coding, building and shipping faster.</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["🖱️", "✳️", "💬", "🎨"].map((logo, i) => (
                  <div key={i} className="w-8 h-8 bg-white border-2 border-white rounded-full flex items-center justify-center text-sm shadow-sm">
                    {logo}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">2,341 products</span>
            </div>
            <button className="btn-primary mt-4">Explore Collection →</button>
          </div>

          {/* Product of the day */}
          <div className="w-full md:w-64 bg-white border border-gray-100 rounded-2xl p-5">
            <p className="text-xs font-bold text-yellow-500 mb-3">🏆 Product of the Day</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-2xl">
                🖱️
              </div>
              <div>
                <p className="font-bold text-gray-900">Cursor</p>
                <p className="text-xs text-gray-500">AI-first code editor</p>
              </div>
            </div>
            <button className="w-full btn-primary text-center">View Product</button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-1 overflow-x-auto border-b border-gray-100 pb-0">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat
                  ? "border-[#FF3B5C] text-[#FF3B5C]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products List */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#FF3B5C] font-bold text-sm">⚡ POPULAR RIGHT NOW</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{products.length * 1000}+ products</span>
            <span>Sort by: Popular</span>
          </div>
        </div>

        {/* Popular pills */}
        <div className="flex gap-3 overflow-x-auto mb-6 pb-2">
          {products.slice(0, 7).map((p) => (
            <div key={p.id} className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-3 py-1.5 whitespace-nowrap hover:border-[#FF3B5C] cursor-pointer transition-colors">
              <span>{p.logo}</span>
              <span className="text-xs font-medium text-gray-700">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Product rows */}
        <div className="space-y-1">
          {filtered.map((product, i) => (
            <div key={product.id}>
              {/* Sponsored banner example */}
              {i === 4 && (
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-4 my-3">
                  <div>
                    <span className="text-xs text-purple-500 font-semibold">SPONSORED</span>
                    <p className="font-bold text-gray-900 mt-1">Build AI agents in minutes</p>
                    <p className="text-sm text-gray-500">The all-in-one platform to design, deploy and scale AI workflows.</p>
                  </div>
                  <button className="btn-primary whitespace-nowrap">Try GraphOne Studio →</button>
                </div>
              )}
              <div className="flex items-center justify-between py-4 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {product.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      {product.trending && (
                        <span className="text-xs text-[#FF3B5C] bg-pink-50 px-2 py-0.5 rounded-full">
                          🔥 {product.trending}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{product.description}</p>
                    <div className="flex gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <span>🤍</span>
                    <span>{product.upvotes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{product.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-outline px-8">Load more products ↓</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}