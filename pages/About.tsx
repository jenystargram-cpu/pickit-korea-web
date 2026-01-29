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
    <div className="min-h-screen bg-black pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section: Premium Gold Gradient */}
        <div className="py-20 md:py-32 border-b border-white/10 mb-20 animate-fade-in-up">
           <h4 className="text-gray-500 font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">About Company</h4>
           <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter mb-8">
             BE SPECIAL,<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
               BE PREMIUM.
             </span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
             혁신적인 제조 기술과 프리미엄 유통 서비스를 결합하여<br/>
             비즈니스의 새로운 기준을 제시합니다.
           </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-20 overflow-x-auto no-scrollbar">
          <div className="flex space-x-12 min-w-max">
            {['greeting', 'vision', 'philosophy'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors relative group ${
                  activeTab === t ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {t === 'greeting' ? 'CEO Message' : t === 'vision' ? 'Vision' : 'Core Values'}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-amber-200 to-amber-600 transition-transform duration-300 origin-left ${
                  activeTab === t ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in min-h-[500px]">
          {activeTab === 'greeting' && (
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
               {/* Left Side: Name Plate Box */}
               <div className="md:w-1/3">
                 <div className="w-full h-full min-h-[300px] bg-gradient-to-b from-neutral-900/80 to-black border border-white/10 p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm shadow-2xl">
                    {/* Top Decorative Line */}
                    <div className="w-8 h-1 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                    
                    {/* Bottom Info */}
                    <div className="relative z-10">
                       <p className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Representative Director</p>
                       <div className="space-y-1">
                         <p className="text-white text-2xl font-light">대표이사</p>
                         <p className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">김 정 우</p>
                       </div>
                    </div>

                    {/* Watermark Background */}
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <span className="text-8xl font-black text-white leading-none">CEO</span>
                    </div>
                    
                    {/* Subtle Glow */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
                 </div>
               </div>
               
               {/* Right Side: Message */}
               <div className="md:w-2/3">
                 <h3 className="text-3xl font-serif italic text-white mb-10 leading-snug">
                   "<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400">탁월함</span>은 우연이 아닌,<br/> 끊임없는 헌신과 혁신의 결과입니다."
                 </h3>
                 <div className="space-y-6 text-gray-400 leading-8 font-light text-justify md:text-left md:pr-12">
                    <p>
                      안녕하십니까, (주)PICKIT KOREA를 방문해주신 여러분을 진심으로 환영합니다.
                    </p>
                    <p>
                      급변하는 글로벌 경제 환경 속에서 기업이 생존하고 성장하기 위해서는 
                      본질에 집중하는 힘이 필요합니다. 저희 픽잇코리아는 '제조'의 정밀함과 '유통'의 유연함, 
                      그리고 '개발'의 통찰력을 하나로 융합하여 고객 여러분께 최적의 솔루션을 제공하고 있습니다.
                    </p>
                    <p>
                      단순한 비즈니스 파트너를 넘어, 고객사의 성공이 곧 우리의 성공이라는 믿음으로 
                      모든 프로젝트에 임하고 있습니다. <strong className="text-white">BE SPECIAL, BE PREMIUM</strong>이라는 
                      슬로건 아래, 타협하지 않는 품질과 신뢰를 바탕으로 더 높은 곳을 향해 함께 나아가겠습니다.
                    </p>
                    <p>
                      여러분의 비즈니스 여정에 가장 든든한 동반자가 될 것을 약속드립니다.
                      감사합니다.
                    </p>
                 </div>
                 <div className="mt-12">
                   <p className="text-white font-bold text-lg tracking-wider drop-shadow-md">주식회사 피킷코리아</p>
                 </div>
               </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "INNOVATION", 
                  desc: "기존의 틀을 깨는 창의적 사고와 도전정신으로 새로운 가치를 창출합니다.",
                  num: "01",
                  color: "from-blue-500 to-cyan-400"
                },
                { 
                  title: "TRUST", 
                  desc: "투명한 경영과 원칙 준수를 통해 고객과 사회로부터 신뢰받는 기업이 됩니다.",
                  num: "02",
                  color: "from-purple-500 to-pink-400" 
                },
                { 
                  title: "GROWTH", 
                  desc: "파트너와의 동반 성장을 추구하며 지속 가능한 미래를 만들어갑니다.",
                  num: "03",
                  color: "from-amber-500 to-orange-400" 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-900/30 border border-white/10 p-12 flex flex-col justify-between h-96 hover:bg-neutral-900/80 hover:border-white/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                  {/* Hover Border Gradient via Pseudo-element trick or simple border color */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-gray-500 border border-gray-700 rounded-full px-3 py-1 mb-6 inline-block">VISION {item.num}</span>
                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                  
                  {/* Ambient Glow */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`}></div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="border border-white/10 p-12 md:p-20 relative overflow-hidden bg-neutral-900/20 backdrop-blur-sm">
               <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 max-w-3xl">
                 <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Core Philosophy</h2>
                 
                 <div className="space-y-16">
                    <div className="flex flex-col md:flex-row gap-8">
                       <div className="w-16 h-16 border border-white/20 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                         01
                       </div>
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-4">책임 경영 (Responsibility)</h3>
                         <p className="text-gray-400 leading-relaxed font-light">
                           우리는 제품의 기획부터 생산, 유통, 사후 관리까지 전 과정에 대해 무한한 책임을 집니다. 
                           품질에 대한 타협 없는 고집과 고객 약속 이행을 최우선으로 합니다.
                         </p>
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                       <div className="w-16 h-16 border border-white/20 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                         02
                       </div>
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-4">신뢰 경영 (Trust)</h3>
                         <p className="text-gray-400 leading-relaxed font-light">
                           신뢰는 (주)PICKIT KOREA의 가장 소중한 자산입니다. 
                           투명하고 공정한 거래를 통해 파트너사와 고객에게 믿음을 주고, 
                           일관성 있는 가치 제공을 통해 지속 가능한 관계를 구축합니다.
                         </p>
                       </div>
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