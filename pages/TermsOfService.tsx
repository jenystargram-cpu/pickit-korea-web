import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-white mb-8">이용약관</h1>
        <div className="bg-neutral-900 border border-white/10 p-8 rounded-lg text-gray-400 text-sm leading-relaxed space-y-6 text-justify">
          
          <div>
            <h2 className="text-white font-bold text-lg mb-2">제1조 (목적)</h2>
            <p>
              본 약관은 (주)PICKIT KOREA(이하 "회사")가 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">제2조 (정의)</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>"사이트"란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.</li>
              <li>"이용자"란 사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">제3조 (약관의 명시와 개정)</h2>
            <p>
              회사는 본 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 이용자가 알 수 있도록 사이트의 초기 서비스화면에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">제4조 (서비스의 제공 및 변경)</h2>
            <p>① 회사는 다음과 같은 업무를 수행합니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>재화 또는 용역에 대한 정보 제공 및 구매 계약의 체결</li>
              <li>구매 계약이 체결된 재화 또는 용역의 배송</li>
              <li>기타 회사가 정하는 업무</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">제5조 (서비스의 중단)</h2>
            <p>
              회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">제6조 (개인정보보호)</h2>
            <p>
              회사는 이용자의 정보수집 시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회사는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
            </p>
          </div>
          
          <div>
             <h2 className="text-white font-bold text-lg mb-2">제7조 (분쟁해결)</h2>
             <p>
                회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
             </p>
          </div>

          <p className="pt-8 border-t border-white/10 text-xs text-gray-500">
            부칙: 본 약관은 2026년 1월 1일부터 시행합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;