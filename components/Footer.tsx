import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-6">PICKIT<span className="text-gray-500">KOREA</span></h2>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8 font-light text-sm">
              (주)PICKIT KOREA는 혁신적인 기술과 프리미엄 서비스로<br/>
              고객의 비즈니스 성공을 함께하는 파트너입니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li><Link to="/about?tab=greeting" className="hover:text-white transition-colors">인사말</Link></li>
              <li><Link to="/about?tab=vision" className="hover:text-white transition-colors">경영비전</Link></li>
              <li><Link to="/about?tab=philosophy" className="hover:text-white transition-colors">경영철학</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">인재채용</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Business</h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li><Link to="/business?tab=manufacturing" className="hover:text-white transition-colors">제조부문</Link></li>
              <li><Link to="/business?tab=service" className="hover:text-white transition-colors">서비스부문</Link></li>
              <li><Link to="/business?tab=development" className="hover:text-white transition-colors">개발사업</Link></li>
              <li><Link to="/partners?tab=inquiry" className="hover:text-white transition-colors">B2B 제휴문의</Link></li>
              <li><Link to="/partners?tab=partnership" className="hover:text-white transition-colors">파트너쉽</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
          <p>© 2026 PICKIT KOREA Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;