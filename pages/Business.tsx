import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Factory, ShoppingBag, PieChart, ArrowUpRight, Check } from 'lucide-react';

const Business: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  useEffect(() => {
    if (tab) {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [tab]);

  const sections = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      korTitle: '제조 부문',
      icon: <Factory className="w-8 h-8" />,
      description: '스테인리스 304 메탈카드, 프리미엄 명함, 커스텀 키트 등 고품질 제조 솔루션을 제공합니다.',
      details: [
        'Metal Card & Business Card',
        'Custom Welcome Kit',
        'Premium Goods',
        'Precision Processing'
      ],
      link: 'https://www.pickitkorea.com',
      imageGradient: 'from-blue-600/20 to-black',
      accentColor: 'text-blue-400',
      glowColor: 'shadow-blue-900/50'
    },
    {
      id: 'service',
      title: 'Distribution Service',
      korTitle: '서비스 부문',
      icon: <ShoppingBag className="w-8 h-8" />,
      description: '의류, 소형가전, 홈데코, 명품 등 다양한 카테고리의 상품을 온라인 채널을 통해 유통합니다.',
      details: [
        'Global Sourcing',
        'Online Distribution',
        'Brand Licensing',
        'Logistics Network'
      ],
      imageGradient: 'from-purple-600/20 to-black',
      accentColor: 'text-purple-400',
      glowColor: 'shadow-purple-900/50'
    },
    {
      id: 'development',
      title: 'Development',
      korTitle: '개발사업 부문',
      icon: <PieChart className="w-8 h-8" />,
      description: '전문가들의 심도 있는 경험을 바탕으로 사업성 검토 및 정밀한 시장 분석 보고서를 제공합니다.',
      details: [
        'Feasibility Study',
        'Market Research',
        'Business Strategy',
        'Consulting'
      ],
      imageGradient: 'from-emerald-600/20 to-black',
      accentColor: 'text-emerald-400',
      glowColor: 'shadow-emerald-900/50'
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Business Area
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed border-l-2 border-white/20 pl-6">
            We provide professional solutions across Manufacturing, Distribution, and Development.<br/>
            최상의 비즈니스 가치를 창출하는 3가지 핵심 영역입니다.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div 
              id={section.id} 
              key={section.id} 
              className="group relative bg-neutral-900/80 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"/>
              
              <div className="flex flex-col md:flex-row">
                {/* Left: Title & Icon */}
                <div className="md:w-2/5 p-10 md:p-14 md:border-r border-white/5 relative overflow-hidden flex flex-col justify-between">
                   <div className={`absolute inset-0 bg-gradient-to-br ${section.imageGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}></div>
                   
                   <div className="relative z-10">
                      <div className={`bg-black/40 w-20 h-20 flex items-center justify-center rounded-2xl mb-10 text-white backdrop-blur-xl border border-white/10 shadow-lg ${section.glowColor} group-hover:scale-110 transition-transform duration-500`}>
                        {section.icon}
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-3 ${section.accentColor}`}>{section.title}</h3>
                        <h2 className="text-4xl font-bold text-white tracking-tight">{section.korTitle}</h2>
                      </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 md:mt-0">
                     <span className="text-6xl font-bold text-white/5 absolute -bottom-4 -left-4 select-none">0{idx + 1}</span>
                   </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-black/20">
                  <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed border-b border-white/5 pb-8">
                    {section.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
                    {section.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 group-hover:text-white transition-colors duration-300">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${section.accentColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-sm tracking-wide font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {section.link && (
                    <div className="mt-auto">
                      <a 
                        href={section.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors"
                      >
                        <span className="border-b border-white/30 group-hover/link:border-white pb-1 transition-all">Visit Website</span>
                        <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;