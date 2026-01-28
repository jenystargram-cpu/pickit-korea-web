import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const About: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'greeting';
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(searchParams.get('tab') || 'greeting');
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        {/* Align text left on mobile to fix visual ragged edges, center on desktop */}
        <div className="mb-16 md:mb-24 text-left md:text-center animate-fade-in-up">
           <div className="inline-flex items-center px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">B2B Professional & B2C</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter">
            BE SPECIAL,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              BE PREMIUM
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-400 max-w-2xl md:mx-auto leading-relaxed font-light tracking-wide">
            (주)PICKIT KOREA는 혁신적인 제조 기술과 
            프리미엄 유통 서비스를 결합하여 새로운 비즈니스 가치를 창출합니다.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex justify-start md:justify-center mb-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-8 md:space-x-12 border-b border-white/10 min-w-max px-2">
            {['greeting', 'vision', 'philosophy'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)}
                className={`pb-4 text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all relative whitespace-nowrap ${
                  activeTab === t ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {t === 'greeting' ? 'CEO Greeting' : t === 'vision' ? 'Management Vision' : 'Philosophy'}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ${
                  activeTab === t ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
          {activeTab === 'greeting' && (
            <div className="max-w-4xl mx-auto bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 md:p-16 rounded-sm">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">CEO Message</h3>
                  <div className="space-y-8 text-gray-300 leading-8 font-light text-justify text-sm md:text-base">
                    <p>
                      안녕하십니까, <strong className="text-white font-medium">(주)PICKIT KOREA</strong>를 찾아주신 여러분께 깊은 감사의 말씀을 드립니다.
                    </p>
                    <p>
                      급변하는 글로벌 경제의 흐름 속에서도 변하지 않는 가치는 바로 '본질'에 대한 집요한 탐구입니다. 
                      저희는 제조의 정밀함과 유통의 유연함, 그리고 개발의 통찰력을 융합하여 
                      고객의 비즈니스에 가장 최적화된 솔루션을 제공하고자 합니다.
                    </p>
                    <p>
                      <span className="text-lg md:text-xl text-white font-serif block my-4 border-l-2 border-white/30 pl-6 py-2 italic">
                        "탁월함은 우연이 아닌,<br/> 끊임없는 헌신과 혁신의 결과입니다."
                      </span>
                    </p>
                    <p>
                      단순히 제품을 만들고 전달하는 것을 넘어, 고객의 성공을 위한 가장 든든한 초석이 되겠습니다. 
                      <strong className="text-white"> 'BE SPECIAL, BE PREMIUM'</strong>이라는 약속 아래, 
                      타협하지 않는 품질과 진정성 있는 파트너십으로 더 높은 곳을 향해 함께 나아가겠습니다.
                    </p>
                    <p>
                      감사합니다.
                    </p>
                  </div>
                  <div className="mt-16 pt-10 border-t border-white/10 flex justify-between items-end">
                     <div>
                       <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Signature</p>
                       <p className="text-white text-xl md:text-2xl font-serif italic opacity-80">Kim Jeong Woo</p>
                     </div>
                     <div className="text-right">
                       <p className="text-xs text-gray-400 mb-1">대표이사</p>
                       <p className="text-white font-bold text-lg md:text-xl tracking-wide">김 정 우</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    en: "Innovation", 
                    ko: "혁신", 
                    desc: "기존의 틀을 깨는 창의적 사고와 도전정신",
                    bg: "bg-gradient-to-br from-neutral-900 to-black"
                  },
                  { 
                    en: "Trust", 
                    ko: "신뢰", 
                    desc: "투명한 경영과 원칙 준수를 통한 고객 신뢰",
                    bg: "bg-gradient-to-br from-neutral-900 to-black" 
                  },
                  { 
                    en: "Growth", 
                    ko: "성장", 
                    desc: "파트너와의 동반 성장을 통한 시너지 창출",
                    bg: "bg-gradient-to-br from-neutral-900 to-black" 
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`${item.bg} border border-white/5 p-10 flex flex-col justify-between h-80 group hover:border-white/20 transition-all duration-500`}>
                    <div>
                      <h3 className="text-4xl font-light text-white/10 mb-2 group-hover:text-white transition-colors duration-500 tracking-tighter">{item.en}</h3>
                      <h4 className="text-2xl font-bold text-white mb-4">{item.ko}</h4>
                      <div className="w-8 h-0.5 bg-white/20 group-hover:w-full transition-all duration-700 mb-6"></div>
                      <p className="text-gray-400 font-light leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex justify-end">
                       <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                         <span className="text-lg leading-none mt-[-2px]">→</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="max-w-5xl mx-auto">
               <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Core Values</h2>
                 <p className="text-gray-400 font-light">책임있는 경영과 굳건한 신뢰로 더 나은 미래를 만듭니다.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 {/* Responsibility */}
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
                    <div className="bg-neutral-900/50 border border-white/5 p-10 rounded-xl h-full relative z-10 hover:border-white/20 transition-all">
                       <div className="text-5xl font-bold text-white/5 mb-6">01</div>
                       <h3 className="text-2xl font-bold text-white mb-2">책임 경영</h3>
                       <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-6">Responsibility</h4>
                       <p className="text-gray-400 leading-relaxed font-light text-sm">
                         우리는 제품의 기획부터 생산, 유통, 사후 관리까지 전 과정에 대해 무한한 책임을 집니다. 
                         품질에 대한 타협 없는 고집과 고객 약속 이행을 최우선으로 하며, 
                         사회적 책임을 다하는 기업 시민으로서의 역할을 수행합니다.
                       </p>
                    </div>
                 </div>

                 {/* Trust */}
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
                    <div className="bg-neutral-900/50 border border-white/5 p-10 rounded-xl h-full relative z-10 hover:border-white/20 transition-all">
                       <div className="text-5xl font-bold text-white/5 mb-6">02</div>
                       <h3 className="text-2xl font-bold text-white mb-2">신뢰 경영</h3>
                       <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mb-6">Trust</h4>
                       <p className="text-gray-400 leading-relaxed font-light text-sm">
                         신뢰는 (주)PICKIT KOREA의 가장 소중한 자산입니다. 
                         투명하고 공정한 거래를 통해 파트너사와 고객에게 믿음을 주고, 
                         일관성 있는 가치 제공을 통해 지속 가능한 관계를 구축합니다.
                       </p>
                    </div>
                 </div>
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default About;