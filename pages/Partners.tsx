import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Handshake, Send, Building2, Users } from 'lucide-react';

const Partners: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'inquiry';
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(searchParams.get('tab') || 'inquiry');
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center animate-fade-in-up">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Handshake className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6 tracking-tighter">
            BUSINESS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
              PARTNER
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            (주)PICKIT KOREA와 함께 성공적인 비즈니스 미래를 설계하십시오.<br/>
            귀사의 소중한 제안을 기다립니다.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-12 border-b border-white/10">
            {['inquiry', 'partnership'].map((t) => (
              <button 
                key={t}
                onClick={() => setActiveTab(t)}
                className={`pb-4 text-sm md:text-base font-bold tracking-widest uppercase transition-all relative ${
                  activeTab === t ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {t === 'inquiry' ? 'B2B 제휴문의' : 'Partnership'}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ${
                  activeTab === t ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
          {activeTab === 'inquiry' && (
            <div className="max-w-3xl mx-auto bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-2">B2B Alliance Inquiry</h2>
              <p className="text-gray-500 mb-8 text-sm">작성해주신 내용은 담당자가 검토 후 3일 이내에 연락드립니다.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Company Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="기업명" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Person In Charge</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="담당자명" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Contact</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="연락처" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="이메일 주소" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Inquiry Type</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none">
                    <option>제조 위탁 문의 (OEM/ODM)</option>
                    <option>상품 유통 및 입점 제안</option>
                    <option>기업 특판 및 대량 구매</option>
                    <option>기타 제휴 문의</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Message</label>
                  <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="제안 내용을 상세히 적어주세요." />
                </div>

                <div className="pt-4">
                  <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <span>문의하기</span>
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'partnership' && (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Growing Together</h2>
                   <div className="w-12 h-1 bg-white mb-6"></div>
                   <p className="text-gray-400 leading-8 text-lg mb-8">
                     (주)PICKIT KOREA는 파트너사와의 동반 성장을 핵심 가치로 여깁니다.
                     단순한 거래 관계를 넘어, 서로의 강점을 극대화하고 약점을 보완하는
                     전략적 파트너십을 지향합니다.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
                        <Building2 className="w-8 h-8 text-white mx-auto mb-3" />
                        <h4 className="text-white font-bold">인프라 공유</h4>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
                        <Users className="w-8 h-8 text-white mx-auto mb-3" />
                        <h4 className="text-white font-bold">네트워크 확장</h4>
                      </div>
                   </div>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-10 rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <h3 className="text-xl font-bold text-white mb-8 relative z-10">Partnership Benefits</h3>
                  <ul className="space-y-6 relative z-10">
                    {[
                      '제조/생산 라인 우선 배정 및 공정 최적화 지원',
                      '자사 온라인 유통 채널 입점 및 마케팅 지원',
                      '신규 사업 개발 시 공동 투자 및 컨소시엄 구성',
                      '시장 분석 리포트 및 트렌드 데이터 공유'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-xs mr-4 mt-1">{idx+1}</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;