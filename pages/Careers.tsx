import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              JOIN<br/>OUR TEAM
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              (주)PICKIT KOREA와 함께 미래를 만들어갈<br/>
              열정적인 인재를 기다립니다.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
               <ArrowRight className="w-8 h-8 text-white -rotate-45" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {['Proactive', 'Professional', 'Potential'].map((item, idx) => (
             <div key={idx} className="bg-neutral-900 border border-white/5 p-8 flex flex-col h-64 justify-between hover:bg-neutral-800 transition-colors group">
                <span className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">0{idx+1}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                  <p className="text-sm text-gray-500">
                    {item === 'Proactive' && '주도적으로 문제를 정의하고 해결하는 인재'}
                    {item === 'Professional' && '해당 분야 최고의 전문성을 추구하는 인재'}
                    {item === 'Potential' && '끊임없는 성장으로 미래를 준비하는 인재'}
                  </p>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-white text-black p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Recruitment Inquiry</h2>
              <p className="text-neutral-600 mb-2">이력서와 포트폴리오를 아래 이메일로 보내주세요.</p>
              <p className="text-neutral-500 text-sm">* 서류전형 &gt; 1차면접 &gt; 2차면접 &gt; 최종합격</p>
            </div>
            
            <a 
              href="mailto:recruit@pickit-korea.com" 
              className="group flex items-center px-10 py-5 bg-black text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <span className="font-bold mr-4">지원하기</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};

export default Careers;