import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-white mb-8">개인정보처리방침</h1>
        <div className="bg-neutral-900 border border-white/10 p-8 rounded-lg text-gray-400 text-sm leading-relaxed space-y-6 text-justify">
          <p>
            (주)PICKIT KOREA(이하 '회사')는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
          </p>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">1. 개인정보의 처리 목적</h2>
            <p>회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>재화 또는 서비스 제공: 물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 요금결제·정산, 채권추심 등</li>
              <li>고충처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등</li>
              <li>마케팅 및 광고에의 활용: 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 등</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">2. 개인정보의 처리 및 보유 기간</h2>
            <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.</p>
            <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>홈페이지 회원 가입 및 관리: 회원 탈퇴 시까지</li>
              <li>재화 또는 서비스 제공: 재화·서비스 공급완료 및 요금결제·정산 완료 시까지</li>
              <li>전자상거래 등에서의 소비자 보호에 관한 법률에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">3. 정보주체의 권리, 의무 및 그 행사방법</h2>
            <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>개인정보 열람요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제요구</li>
              <li>처리정지 요구</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">4. 처리하는 개인정보의 항목</h2>
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>필수항목: 성명, 회사명, 연락처, 이메일</li>
              <li>수집방법: 홈페이지(제휴문의, 채용지원)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2">5. 개인정보 보호책임자</h2>
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="bg-black/50 p-4 mt-2 rounded border border-white/5">
              <p>▶ 개인정보 보호책임자</p>
              <p>성명 : 관리자</p>
              <p>직급 : 대표이사</p>
              <p>연락처 : info@pickitkorea.com</p>
            </div>
          </div>
          
          <p className="pt-8 border-t border-white/10 text-xs text-gray-500">
            본 방침은 2026년 1월 1일부터 시행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;