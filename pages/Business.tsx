import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Factory, ShoppingBag, PieChart, ArrowRight, CheckCircle2 } from 'lucide-react';

const Business: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  useEffect(() => {
    if (tab) {
      const element = document.getElementById(tab);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [tab]);

  const sections = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      korTitle: '제조 부문',
      subtitle: 'Precision & Quality',
      icon: <Factory className="w-6 h-6" />,
      description: '최첨단 설비와 장인 정신을 바탕으로 스테인리스 304 메탈카드, 프리미엄 명함, 커스텀 키트 등 고품질 제조 솔루션을 제공합니다. 기획부터 생산까지 원스톱 프로세스를 통해 고객의 브랜드 가치를 높입니다.',
      details: [
        'Metal Card & Business Card Production',
        'Custom Corporate Welcome Kits',
        'Premium Goods Manufacturing',
        'High-Precision Laser Processing'
      ],
      link: 'https://pickit-korea.com',
      align: 'left',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'service',
      title: 'Distribution Service',
      korTitle: '서비스 부문',
      subtitle: 'Global Network',
      icon: <ShoppingBag className="w-6 h-6" />,
      description: '의류, 소형가전, 홈데코, 명품 등 다양한 라이프스타일 카테고리의 상품을 발굴하고, 국내외 유수의 온라인 채널을 통해 유통합니다. 강력한 물류 네트워크를 기반으로 안정적인 공급망을 구축했습니다.',
      details: [
        'Global Product Sourcing',
        'Online Channel Distribution Strategy',
        'Brand Licensing & Partnerships',
        'Integrated Logistics Solutions'
      ],
      align: 'right',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 'development',
      title: 'Development',
      korTitle: '개발사업 부문',
      subtitle: 'Insight & Strategy',
      icon: <PieChart className="w-6 h-6" />,
      description: '전문가들의 심도 있는 경험과 데이터를 바탕으로 신규 사업의 타당성을 검토하고, 정밀한 시장 분석 보고서를 제공합니다. 성공적인 비즈니스 런칭을 위한 전략적 로드맵을 제시합니다.',
      details: [
        'Business Feasibility Study',
        'In-depth Market Research',
        'Strategic Business Consulting',
        'Data-Driven Growth Analysis'
      ],
      align: 'left',
      gradient: 'from-emerald-600 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20 pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-12 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
          BUSINESS<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">AREAS</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 mb-8"></div>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          (주)PICKIT KOREA는 각 분야의 전문성을 바탕으로<br/>
          고객의 성공적인 비즈니스를 위한 최적의 솔루션을 제공합니다.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-0">
        {sections.map((section, idx) => (
          <div 
            id={section.id} 
            key={section.id} 
            className="w-full border-t border-white/10 py-24 md:py-32"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${section.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="flex-1">
                   <div className="flex items-center space-x-3 mb-6 text-gray-500">
                      <span className={`text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                        {section.subtitle}
                      </span>
                      <div className="w-12 h-[1px] bg-gray-700"></div>
                   </div>
                   
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{section.korTitle}</h2>
                   <h3 className="text-xl md:text-2xl font-light text-gray-500 mb-8">{section.title}</h3>
                   
                   <p className="text-gray-300 leading-8 mb-10 text-justify">
                     {section.description}
                   </p>
                   
                   <ul className="space-y-4 mb-10">
                     {section.details.map((detail, dIdx) => (
                       <li key={dIdx} className="flex items-center text-gray-400">
                         <CheckCircle2 className={`w-5 h-5 mr-4 flex-shrink-0 text-gray-500`} />
                         <span className="text-sm tracking-wide">{detail}</span>
                       </li>
                     ))}
                   </ul>

                   {section.link && (
                     <a 
                       href={section.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group inline-flex items-center px-8 py-4 border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 hover:border-white"
                     >
                       Visit Website
                       <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                     </a>
                   )}
                </div>

                {/* Visual Content (Abstract Representation) */}
                <div className="flex-1 w-full h-[400px] md:h-[500px] relative">
                  {/* Background Container */}
                  <div className="w-full h-full bg-neutral-900/50 backdrop-blur-sm border border-white/5 relative overflow-hidden group rounded-xl shadow-2xl">
                     {/* Decorative Gradients */}
                     <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br opacity-10 transition-opacity duration-700 group-hover:opacity-20 ${section.gradient}`} />
                     
                     {/* Center Number & Icon */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none drop-shadow-sm">
                          0{idx + 1}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className={`w-24 h-24 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                             {React.cloneElement(section.icon as React.ReactElement, { className: "w-10 h-10" })}
                           </div>
                        </div>
                     </div>

                     {/* Grid Overlay */}
                     <div className="absolute inset-0 opacity-20 pointer-events-none" 
                          style={{ backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                     ></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;