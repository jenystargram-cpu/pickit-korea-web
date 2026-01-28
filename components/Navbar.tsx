import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string, query?: string) => {
    navigate({
      pathname: path,
      search: query ? `?tab=${query}` : '',
    });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 relative">
            <div className="text-2xl font-bold tracking-tighter text-white">
              PICKIT<span className="text-gray-500">KOREA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            
            {/* About Group */}
            <div className="relative group h-full flex items-center">
              <button 
                className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors py-2"
                onClick={() => handleNavClick('/about')}
              >
                회사 소개
              </button>
              <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-2 min-w-[140px] shadow-2xl">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/about', 'greeting'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    인사말
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/about', 'vision'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    경영비전
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/about', 'philosophy'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    경영철학
                  </button>
                </div>
              </div>
            </div>

            {/* Business Area Group */}
            <div className="relative group h-full flex items-center">
              <button 
                className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors py-2"
                onClick={() => handleNavClick('/business')}
              >
                사업 영역
              </button>
              <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-2 min-w-[140px] shadow-2xl">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/business', 'manufacturing'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    제조부문
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/business', 'service'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    서비스부문
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/business', 'development'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    개발사업
                  </button>
                </div>
              </div>
            </div>

            {/* Partners (Business) Group */}
            <div className="relative group h-full flex items-center">
              <button 
                className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors py-2"
                onClick={() => handleNavClick('/partners')}
              >
                비즈니스
              </button>
              <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-2 min-w-[140px] shadow-2xl">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/partners', 'inquiry'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    B2B 제휴문의
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNavClick('/partners', 'partnership'); }}
                    className="block w-full text-left px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    파트너쉽
                  </button>
                </div>
              </div>
            </div>

            {/* Careers */}
            <button 
              onClick={() => handleNavClick('/careers')} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              인재채용
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="flex flex-col h-full justify-center px-10 space-y-8 overflow-y-auto no-scrollbar py-20">
            <div>
              <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">About Company</p>
              <button onClick={() => handleNavClick('/about', 'greeting')} className="block text-2xl font-bold text-white mb-2 hover:text-gray-300">인사말</button>
              <button onClick={() => handleNavClick('/about', 'vision')} className="block text-2xl font-bold text-white mb-2 hover:text-gray-300">경영비전</button>
              <button onClick={() => handleNavClick('/about', 'philosophy')} className="block text-2xl font-bold text-white hover:text-gray-300">경영철학</button>
            </div>
            
            <div className="w-full h-[1px] bg-white/10"></div>
            
            <div>
              <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">Business Area</p>
              <button onClick={() => handleNavClick('/business', 'manufacturing')} className="block text-2xl font-bold text-white mb-2 hover:text-gray-300">제조부문</button>
              <button onClick={() => handleNavClick('/business', 'service')} className="block text-2xl font-bold text-white mb-2 hover:text-gray-300">서비스부문</button>
              <button onClick={() => handleNavClick('/business', 'development')} className="block text-2xl font-bold text-white hover:text-gray-300">개발사업</button>
            </div>

            <div className="w-full h-[1px] bg-white/10"></div>

            <div>
              <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">Business Partner</p>
              <button onClick={() => handleNavClick('/partners', 'inquiry')} className="block text-2xl font-bold text-white mb-2 hover:text-gray-300">B2B 제휴문의</button>
              <button onClick={() => handleNavClick('/partners', 'partnership')} className="block text-2xl font-bold text-white hover:text-gray-300">파트너쉽</button>
            </div>

            <div className="w-full h-[1px] bg-white/10"></div>

            <div>
              <button onClick={() => handleNavClick('/careers')} className="block text-2xl font-bold text-white hover:text-gray-300">인재채용</button>
            </div>
         </div>
      </div>
    </>
  );
};

export default Navbar;