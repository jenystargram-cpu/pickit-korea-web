import React from 'react';
import { ChevronDown, ArrowRight, Globe, Leaf, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative text-white">
      
      {/* 
        Section 1: Spline 3D Spacer
      */}
      <div className="h-[90vh] md:h-screen w-full flex flex-col justify-end items-center pb-12 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce text-white/30">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* 
        Section 2: Hero Typography with Premium Gradients
      */}
      <div className="min-h-[80vh] w-full flex flex-col justify-center items-center px-6 relative z-10 bg-gradient-to-b from-transparent via-black/80 to-black pb-20">
        <div className="max-w-7xl w-full mx-auto text-center md:text-left">
          
          <div className="inline-flex items-center space-x-3 mb-8 opacity-0 animate-fade-in-up delay-100 justify-center md:justify-start">
            <span className="w-12 h-[1px] bg-gradient-to-r from-blue-500 to-transparent"></span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">Premium Solution Partner</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-12 opacity-0 animate-fade-in-up delay-200">
            <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">BEYOND</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-blue-100 to-gray-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] pb-2">
              LIMITS.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl leading-relaxed mb-16 opacity-0 animate-fade-in-up delay-300 mx-auto md:mx-0 text-center md:text-left border-l-0 md:border-l border-white/20 md:pl-8">
            (주)PICKIT KOREA는 제조 혁신과 글로벌 유통망을 연결하여<br className="hidden md:block"/>
            고객의 비즈니스에 새로운 차원의 가치를 제공합니다.
          </p>
        </div>
      </div>

      {/* 
        Section 3: Business Highlights - Enhanced Cards
      */}
      <div className="w-full bg-black py-24 md:py-32 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Our Business</h2>
               <p className="text-gray-500 max-w-lg">
                 우리는 제조, 유통, 개발의 3가지 핵심 영역에서<br/>
                 최고의 전문성으로 답을 제시합니다.
               </p>
            </div>
            <button 
              onClick={() => navigate('/business')}
              className="hidden md:flex items-center text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors mt-8 md:mt-0 group"
            >
              View All Areas <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {[
               { title: 'Manufacturing', desc: '정밀 가공 및 프리미엄 굿즈 제조', icon: '01' },
               { title: 'Distribution', desc: '글로벌 소싱 및 온/오프라인 유통', icon: '02' },
               { title: 'Development', desc: '시장 분석 및 비즈니스 전략 컨설팅', icon: '03' }
             ].map((item, idx) => (
               <div key={idx} className="group relative h-80 bg-neutral-900/40 border border-white/5 p-10 flex flex-col justify-between hover:bg-neutral-800/80 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]" onClick={() => navigate('/business')}>
                 {/* Inner Glow Blob on Hover */}
                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                 <div className="flex justify-between items-start relative z-10">
                   <span className="text-5xl font-light text-white/20 group-hover:text-blue-100/50 transition-colors duration-500">{item.icon}</span>
                   <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-blue-400 -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-50 transition-colors">{item.title}</h3>
                   <p className="text-gray-400 text-sm group-hover:text-gray-300">{item.desc}</p>
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 
        Section 4: Sustainability & ESG Banner
      */}
      <div className="w-full bg-neutral-950 py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 border border-emerald-500/30 rounded-full bg-emerald-900/10 text-emerald-400 text-xs font-bold tracking-wider mb-6 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
              <Leaf className="w-3 h-3 mr-2" /> SUSTAINABLE FUTURE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Responsible<br/>Business
            </h2>
            <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
              (주)PICKIT KOREA는 지속 가능한 성장을 위해<br/>
              환경과 사회에 대한 책임을 다합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <div className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-lg border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <Globe className="w-5 h-5 text-gray-300" />
                  <span className="text-sm font-medium text-gray-200">Global Standard</span>
               </div>
               <div className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-lg border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-gray-300" />
                  <span className="text-sm font-medium text-gray-200">Ethical Management</span>
               </div>
            </div>
          </div>
          
          {/* Abstract Graphic */}
          <div className="w-full md:w-1/2 h-64 md:h-80 relative">
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter">ESG</span>
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;