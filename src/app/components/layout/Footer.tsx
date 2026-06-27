import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="text-[#FF3B5C]">●</span>
              <span>GraphOne</span>
            </div>
            <p className="text-sm text-gray-500">
              The global intelligence layer for the AI economy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-gray-900">AI Companies</Link></li>
              <li><Link href="/products" className="hover:text-gray-900">AI Products</Link></li>
              <li><Link href="/investors" className="hover:text-gray-900">Investors</Link></li>
              <li className="hover:text-gray-900 cursor-pointer">Funding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-gray-900 cursor-pointer">Research</li>
              <li className="hover:text-gray-900 cursor-pointer">Newsletter</li>
              <li className="hover:text-gray-900 cursor-pointer">Blog</li>
              <li className="hover:text-gray-900 cursor-pointer">Help Center</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-gray-900 cursor-pointer">About</li>
              <li className="hover:text-gray-900 cursor-pointer">Careers</li>
              <li className="hover:text-gray-900 cursor-pointer">Privacy</li>
              <li className="hover:text-gray-900 cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-400">
          © 2024 GraphOne. All rights reserved.
        </div>
      </div>
    </footer>
  );
}