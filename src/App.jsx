import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Line, ComposedChart, Cell
} from 'recharts';
import { 
  Home, 
  MessageSquare, 
  Bell, 
  Gift, 
  Thermometer, 
  User, 
  Send,
  RefreshCw,
  Calendar,
  Heart,
  ChevronRight,
  Clock,
  CheckCircle2,
  Plus,
  Users,
  Check,
  Sparkles,
  MessageCircle,
  Briefcase,
  Smile
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(false);
  const [groupLoading, setGroupLoading] = useState(false);
  const [showGroupResults, setShowGroupResults] = useState(false);
  
  // 상태 관리
  const [selectedGroup, setSelectedGroup] = useState('회사동료');
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [recipient, setRecipient] = useState('아빠');
  const [variationIndex, setVariationIndex] = useState(0);

  // 1. 날짜 기반 자동 시즌 추적 로직
  const autoSeason = useMemo(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    if (month === 12 && date >= 15) return '연말';
    if (month === 1 && date <= 15) return '연초';
    if (month === 9 || month === 10) return '추석'; // 예시
    if (month === 1 || month === 2) return '설날'; // 예시
    return '계절 안부'; // 기본값
  }, []);

  // 받는 사람별 기본 맥락 및 관계 설정
  const recipientData = {
    '아빠': { 
      context: "아빠가 최근 무릎이 아프다고 하셨음. 오늘 전국적으로 비 소식 있음.",
      relation: 'parent',
      tone: 'polite'
    },
    '엄마': { 
      context: "엄마가 어제 고등학교 동창회에 다녀오셨음. 모임이 즐거우셨는지 궁금함.",
      relation: 'parent',
      tone: 'polite'
    },
    '동생': { 
      context: "이번 주말에 동생이 중요한 자격증 시험을 앞두고 있음. 응원이 필요함.",
      relation: 'sibling',
      tone: 'casual'
    },
    '남자친구': { 
      context: "우리 오늘 만난 지 1000일 되는 날임! 함께한 시간에 대한 고마움 전하기.",
      relation: 'partner',
      tone: 'casual'
    }
  };

  const [context, setContext] = useState(recipientData['아빠'].context);

  // 대시보드 및 타임라인 데이터 (기존 유지)
  const dashboardData = [
    { name: '엄마', actual: 3, ideal: 7 },
    { name: '아빠', actual: 1, ideal: 5 },
    { name: '동생', actual: 2, ideal: 3 },
    { name: '남자친구', actual: 15, ideal: 10 },
  ];

  const timelineData = [
    { date: '05.20(월)', title: '아빠 정기검진', desc: '검진 결과 어떠셨는지 물어보기', type: 'health', icon: '🏥' },
    { date: '05.21(화)', title: '엄마 고등학교 동창회', desc: '모임 즐거우셨는지 안부 인사', type: 'event', icon: '🎉' },
    { date: '05.23(목)', title: '동생 자격증 시험', desc: '시험 잘 보라고 응원 메시지 보내기', type: 'support', icon: '📚' },
  ];

  // 전체 인물 데이터 (그룹화 및 말투 데이터 반영)
  const allPeople = [
    { id: 'p1', name: '김부장님', group: '회사동료', context: '최근 등산 모임', icon: '⛰️', tone: 'formal' },
    { id: 'p2', name: '이차장님', group: '회사동료', context: '골프 라운딩', icon: '🏌️‍♂️', tone: 'formal' },
    { id: 'p3', name: '박대리님', group: '회사동료', context: '프로젝트 마감', icon: '💻', tone: 'formal' },
    { id: 'p4', name: '최주임님', group: '회사동료', context: '신입사원 연수', icon: '✨', tone: 'formal' },
    { id: 'p5', name: '아빠', group: '가족', context: '무릎 건강 관리', icon: '👨', tone: 'polite' },
    { id: 'p6', name: '엄마', group: '가족', context: '동창회 모임', icon: '👩', tone: 'polite' },
    { id: 'p7', name: '민수', group: '친한친구', context: '이직 준비 중', icon: '👦', tone: 'casual' },
    { id: 'p8', name: '지혜', group: '친한친구', context: '강아지 입양', icon: '👧', tone: 'casual' },
  ];

  // 2. 말투 및 맥락 기반 메시지 생성 로직 (Persona Cloning)
  const generateAImessage = useCallback((person, season, isGroup = false, index = 0) => {
    const tone = person.tone || 'polite';
    const name = person.name;
    const ctx = person.context;

    // 반말/캐주얼 (친구, 동생, 파트너)
    if (tone === 'casual') {
      const templates = [
        () => `${name}야! 벌써 ${season}이네. 시간 진짜 빠르다ㅋㅋ 저번에 말한 ${ctx}은 어때? 잘 되고 있지? 날씨 추운데 감기 조심하고, 조만간 얼굴 보자!`,
        () => `안녕 ${name}! 오늘 날씨 보니까 네 생각나서 톡해. ${season}이라 분위기도 연말연말하네~ ${ctx}은 잘 마무리했어? 화이팅하고 답장 줘!`,
        () => `${name}! ${season} 안부 전한다ㅎㅎ 요즘 ${ctx} 때문에 정신없지? 너무 무리하지 말고 맛있는 거 챙겨 먹어! 홧팅!`
      ];
      return templates[index % templates.length]();
    }

    // 존댓말/격식 (직장 상사)
    if (tone === 'formal') {
      const templates = [
        () => `${name}, 안녕하십니까. 어느덧 한 해를 마무리하는 ${season} 시즌입니다. 지난번 ${ctx} 관련해서 조언해주신 덕분에 큰 힘이 되었습니다. 추운 날씨에 건강 유의하시고 따뜻한 연말 되시길 바랍니다.`,
        () => `${name}님, 평소 베풀어주신 배려에 감사드리며 ${season} 안부 인사 올립니다. 요즘 진행하시는 ${ctx} 프로젝트도 잘 마무리되시길 응원하겠습니다. 새해 복 많이 받으십시오.`,
      ];
      return templates[index % templates.length]();
    }

    // 존댓말/따뜻함 (부모님)
    const templates = [
      () => `${name}, 오늘 날씨가 많이 쌀쌀하네요. ${season}이라 더 부모님 생각이 나요. 최근에 ${ctx} 때문에 힘드셨을 텐데 오늘은 좀 어떠세요? 무리하지 마시고 건강 잘 챙기세요. 사랑해요!`,
      () => `${name}, 어느새 ${season}이네요! ${ctx}은 잘 해결되셨는지 궁금해서 연락드렸어요. 늘 감사한 마음인 거 아시죠? 오늘 하루도 기분 좋게 보내세요!`
    ];
    return templates[index % templates.length]();
  }, []);

  // 핸들러들
  const handleRecipientChange = (newRecipient) => {
    setRecipient(newRecipient);
    setContext(recipientData[newRecipient].context);
    setVariationIndex(0);
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    setSelectedPeople([]);
    setShowGroupResults(false);
  };

  const togglePerson = (id) => {
    setShowGroupResults(false);
    setSelectedPeople(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleGenerateGroupMessages = () => {
    if (selectedPeople.length === 0) return;
    setGroupLoading(true);
    setTimeout(() => {
      setGroupLoading(false);
      setShowGroupResults(true);
    }, 1000);
  };

  const renderHome = () => (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="bg-[#3C1E1E] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm opacity-80 mb-1">오늘의 안부 미션</p>
          <h2 className="text-2xl font-bold">아빠에게 연락할 시간이에요! 💡</h2>
          <div className="mt-4 flex items-center text-xs bg-white/20 w-fit px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <Calendar size={12} className="mr-1" /> 목표 달성률 65% (분석 완료)
          </div>
        </div>
        <Sparkles className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 rotate-12" />
      </div>

      <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 flex items-center mb-4 px-1"><BarChart size={18} className="mr-2 text-yellow-500" /> 주간 연락 레포트</h3>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600 }} />
              <YAxis hide />
              <Bar dataKey="actual" fill="#FEE500" radius={[4, 4, 0, 0]} barSize={24}>
                {dashboardData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.actual < entry.ideal ? '#FEE500' : '#FFD400'} />))}
              </Bar>
              <Line type="monotone" dataKey="ideal" stroke="#3C1E1E" strokeWidth={2} dot={{ r: 4, fill: '#3C1E1E' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 flex items-center mb-6"><Clock size={18} className="mr-2 text-[#3C1E1E]" /> 챙겨줘 나나</h3>
        <div className="relative">
          <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div className="w-20 pt-1 text-right">
                  <span className="text-[10px] font-bold text-gray-400 block leading-none">{item.date.split('(')[0]}</span>
                  <span className="text-[9px] text-gray-300 font-medium">({item.date.split('(')[1]}</span>
                </div>
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 border-white ${index === 0 ? 'bg-red-50' : index === 1 ? 'bg-yellow-50' : 'bg-blue-50'}`}>{item.icon}</div>
                </div>
                <div className="flex-1 bg-gray-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-sm text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-tight mb-3">{item.desc}</p>
                  <button onClick={() => setActiveTab('writer')} className="flex items-center text-[10px] font-bold text-[#3C1E1E] bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">안부 보내기 <ChevronRight size={10} className="ml-1" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWriter = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
      {/* 1. 기억해 나나 (1:1) */}
      <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg flex items-center text-gray-800"><MessageSquare size={20} className="mr-2 text-[#3C1E1E]" /> 기억해 나나</h3>
          <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold">1:1 맞춤분석</span>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded-xl border border-transparent focus-within:border-yellow-400 transition-all">
             <label className="text-[10px] font-bold text-gray-400 block mb-1">받는 사람</label>
             <select value={recipient} onChange={(e) => handleRecipientChange(e.target.value)} className="bg-transparent w-full text-sm font-bold text-gray-700 outline-none border-none p-0 focus:ring-0 cursor-pointer">
               {Object.keys(recipientData).map(r => <option key={r} value={r}>{r}</option>)}
             </select>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-transparent focus-within:border-yellow-400 transition-all">
             <label className="text-[10px] font-bold text-gray-400 block mb-1">최근 상황 맥락</label>
             <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={2} className="bg-transparent w-full text-sm text-gray-600 leading-tight outline-none border-none p-0 focus:ring-0 resize-none font-medium" />
          </div>
          
          <button onClick={() => {setLoading(true); setTimeout(() => {setVariationIndex(prev => prev + 1); setLoading(false);}, 600);}} className="w-full bg-[#FEE500] text-[#3C1E1E] font-black py-4 rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-all text-sm">
            {loading ? <RefreshCw className="animate-spin mr-2" size={18} /> : <Send className="mr-2" size={18} />} 
            안부 문구 새롭게 생성
          </button>

          <div className={`bg-[#FEE500]/5 p-5 rounded-[28px] border-2 border-dashed border-[#FEE500]/30 transition-all relative ${loading ? 'opacity-30' : 'opacity-100'}`}>
             <div className="flex justify-between items-center mb-3">
               <span className="text-[10px] font-bold text-[#3C1E1E] flex items-center gap-1"><Sparkles size={12} className="text-yellow-600" /> AI 말투 복제 완료</span>
               <span className="text-[9px] bg-white px-2 py-0.5 rounded-full font-bold text-gray-400 uppercase">
                {recipientData[recipient].tone === 'casual' ? '반말 모드' : '존댓말 모드'}
               </span>
             </div>
             <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
               "{generateAImessage({ name: recipient, tone: recipientData[recipient].tone, context: context }, '오늘', false, variationIndex)}"
             </p>
          </div>
        </div>
      </section>

      {/* 2. 챙겨줘 나나 (단체 안부) */}
      <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-lg flex items-center text-gray-800"><Users size={20} className="mr-2 text-blue-500" /> 챙겨줘 나나</h3>
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
            <Sparkles size={10} className="text-blue-500" />
            <span className="text-[10px] text-blue-500 font-bold">자동 추적: {autoSeason}</span>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 mb-6">AI가 오늘 날짜와 가장 가까운 연락 명분을 찾아냈어요.</p>

        {/* 그룹 필터 버튼 */}
        <div className="mb-4">
          <div className="flex bg-gray-100 p-1.5 rounded-2xl gap-1">
            {[
              { id: '회사동료', icon: <Briefcase size={14} /> },
              { id: '가족', icon: <Heart size={14} /> },
              { id: '친한친구', icon: <Smile size={14} /> }
            ].map((grp) => (
              <button
                key={grp.id}
                onClick={() => handleGroupChange(grp.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-bold transition-all ${
                  selectedGroup === grp.id ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {grp.icon} {grp.id}
              </button>
            ))}
          </div>
        </div>

        {/* 인물 선택 리스트 */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {allPeople
            .filter(p => p.group === selectedGroup)
            .map((person) => (
              <button 
                key={person.id}
                onClick={() => togglePerson(person.id)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-sm font-bold ${
                  selectedPeople.includes(person.id) ? 'bg-blue-50/50 border-blue-400 text-blue-700' : 'bg-gray-50 border-transparent text-gray-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{person.icon}</span>
                  <span>{person.name}</span>
                </div>
                {selectedPeople.includes(person.id) && <CheckCircle2 size={16} className="text-blue-500" />}
              </button>
            ))}
        </div>

        <button 
          onClick={handleGenerateGroupMessages}
          disabled={groupLoading || selectedPeople.length === 0}
          className={`w-full font-black py-4 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all mb-2 ${
            selectedPeople.length > 0 ? 'bg-[#3C1E1E] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
          }`}
        >
          {groupLoading ? <RefreshCw className="animate-spin mr-2" size={18} /> : <Sparkles className="mr-2" size={18} />}
          {selectedPeople.length > 0 ? `${selectedPeople.length}명의 ${autoSeason} 안부 동시 생성` : '대상을 선택해주세요'}
        </button>

        {/* AI 분석 결과 영역 */}
        {showGroupResults && (
          <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-500">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-blue-500" />
                <span className="text-xs font-bold text-gray-600">AI 말투 클로닝 결과 ({selectedPeople.length})</span>
              </div>
              <span className="text-[10px] text-gray-400 italic">맥락 기반 1:1 메시지</span>
            </div>

            <div className={`space-y-4 ${groupLoading ? 'opacity-30 blur-sm' : 'opacity-100'}`}>
              {allPeople
                .filter(p => selectedPeople.includes(p.id))
                .map((person) => (
                  <div key={person.id} className="bg-blue-50/30 p-5 rounded-3xl border border-blue-100 relative shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm shadow-inner">{person.icon}</div>
                        <span className="text-[12px] font-bold text-blue-800">{person.name}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${person.tone === 'casual' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {person.tone === 'casual' ? '반말' : '존댓말'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl text-[13px] leading-relaxed text-gray-700 shadow-sm relative z-10 font-medium">
                      "{generateAImessage(person, autoSeason, true)}"
                      <div className="absolute -left-2 top-4 w-4 h-4 bg-white rotate-45 transform border-b border-l border-white"></div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 bg-white/80 text-gray-500 text-[10px] font-bold py-2.5 rounded-xl border border-blue-100">내용 수정</button>
                      <button className="flex-1 bg-blue-500 text-white text-[10px] font-bold py-2.5 rounded-xl shadow-md flex items-center justify-center">
                        <MessageCircle size={12} className="mr-1" /> 카톡 발송
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
            
            <button className="w-full bg-[#3C1E1E] text-white text-xs font-black py-4 rounded-2xl shadow-xl mt-4 animate-bounce">
              선택한 {selectedPeople.length}명에게 일괄 전송하기
            </button>
          </div>
        )}
      </section>
    </div>
  );

  return (
    <div className="flex justify-center bg-gray-200 min-h-screen font-sans">
      <div className="w-full max-w-[430px] bg-[#F9F9F9] min-h-screen flex flex-col relative shadow-2xl overflow-hidden border-x border-gray-300">
        <header className="px-6 py-6 bg-[#F9F9F9] flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
          <div>
            <h1 className="text-2xl font-black text-[#3C1E1E] flex items-center tracking-tighter">기억나나? <span className="ml-1 text-[#FEE500] text-3xl">.</span></h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Personal Greeting Assistant</p>
          </div>
          <div className="flex gap-2">
            <button className="relative p-2 bg-white rounded-xl shadow-sm border border-gray-50"><Bell size={18} className="text-gray-600" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <button className="p-2 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-600"><User size={18} /></button>
          </div>
        </header>

        <main className="flex-1 px-5 pt-4 overflow-y-auto no-scrollbar">
          {activeTab === 'home' ? renderHome() : renderWriter()}
        </main>

        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] bg-[#3C1E1E]/95 backdrop-blur-md rounded-[32px] p-2 flex justify-between items-center shadow-2xl z-20">
          <button onClick={() => setActiveTab('home')} className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-[#FEE500]' : 'text-white/40'}`}><Home size={20} /><span className="text-[9px] font-bold">홈</span></button>
          <button onClick={() => setActiveTab('writer')} className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${activeTab === 'writer' ? 'text-[#FEE500]' : 'text-white/40'}`}><MessageSquare size={20} /><span className="text-[9px] font-bold">AI 비서</span></button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1 text-white/40"><Thermometer size={20} /><span className="text-[9px] font-bold">온도계</span></button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1 text-white/40"><Gift size={20} /><span className="text-[9px] font-bold">선물</span></button>
        </nav>
        <div className="h-1 w-32 bg-gray-300 rounded-full mx-auto mb-2 absolute bottom-1 left-1/2 -translate-x-1/2 opacity-20"></div>
      </div>
    </div>
  );
};

export default App;