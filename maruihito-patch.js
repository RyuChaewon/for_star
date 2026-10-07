/* MARUIHITO Australia Runtime Patch */
(function(){
  var memoryNotes=[
    "20살, 둘이 속초로 탈출. 성인 뿌빠 외전의 첫 저장점.",
    "경희대 축제 침투 완료. 예별이 학교에서 공연 보며 청춘 데이터 수집.",
    "한강 피크닉. 단, 태굥이는 뚝섬을 반포라고 확신했다. 위치정보 신뢰도 하락.",
    "1월생 둘의 합동 생일. 태굥이 × 예별이 생일 패치 동시 적용.",
    "학교도 학과도 다르지만 시험기간엔 이상하게 같은 테이블에 모이는 시스템.",
    "호주 교환학생 복귀 후 마루이히토에게 '센스' 기능이 갑자기 업데이트된 사건.",
    "오랜만의 뿌빠. 연초 추억 생성 완료. 공백 기간은 만나자마자 자동 삭제됨.",
    "잠실 서버 접속. 밀린 잼얘 대량 동기화.",
    "연남동 서버 접속. 이번에도 잼얘 과부하. 도파민 로그 다수 검출.",
    "막학기 시험기간. 결국 또 카페에서 같이 공부 중인 세 사람.",
    "작년 이맘때 채원이 생일. 뿌빠 출석 확인 완료.",
    "졸업 프로젝트 마감도 예별이 옆자리 버프로 버텨낸 기록.",
    "안양시내 뿌빠 회동. 즐겁게 놀았으나 채원이 위장 시스템이 중도 종료됨.",
    "시간이 갈수록 이상하게 더 선명해지는 것들이 있음. 해당 데이터는 삭제하지 않기로 함.",
    "중앙공원 번개 피크닉. 별 계획 없었는데 행복도 수치 비정상적으로 높음.",
    "올해 생일까지 함께. MARUIHITO ARCHIVE 현재 시점 동기화 완료."
  ];
  caps=memoryNotes;

  cover=function(){
    S('<div class="card"><div class="center"><div style="font-size:52px">🌏</div><div class="ey">MARUIHITO SYSTEM · PRIVATE BUILD</div><div class="title">AUSTRALIA<br>RUNTIME</div></div><div class="ticket"><div class="air">USER PROFILE / KIM YEBYEOL</div><div class="route"><div><div class="code">SEOUL</div><div class="city">CURRENT SERVER</div></div><div style="font-size:25px">→</div><div style="text-align:right"><div class="code">AUS</div><div class="city">NEXT SERVER</div></div></div><div class="tr"><div><div class="label">CODENAME</div><div class="val">MARUIHITO</div></div><div><div class="label">ORIGIN</div><div class="val">안양외고 일본어과</div></div><div><div class="label">CURRENT BUILD</div><div class="val">경희대 국제학과 · 졸업 직전</div></div><div><div class="label">MODE</div><div class="val">WORKING HOLIDAY</div></div></div></div><div class="center"><p class="sub">오래 기다린 비자 승인 이후, 마루이히토의 다음 런타임을 준비합니다.</p><button class="btn" onclick="verify()">시스템 시작 →</button></div></div>');
  };

  verify=function(){
    S('<div class="card"><div class="ey">01 · IDENTITY CHECK</div><div class="big">MARUIHITO 본인 확인</div><p class="sub">연락 확인 주기: 예측 불가<br>모든 사람에게 공평하게 답장이 느림<br>예외 계정: 일본인 남자친구<br><br>위 특성이 본인과 일치합니까?</p><button class="btn" onclick="test()">놀랍게도 일치함</button><button class="btn alt" onclick="alert(\'거짓말 감지. 뿌빠 데이터베이스는 이미 알고 있습니다.\')">나는 연락 잘 보는데?</button></div>');
  };

  test=function(){
    S('<div class="card"><div class="ey">02 · PRE-DEPARTURE DIAGNOSTIC</div><div class="big">호주 런타임 사전 점검</div><p class="sub">Q. 출국까지 비자가 안 나와 한참을 기다렸다. 이제 진짜 떠날 수 있게 됐다. 가장 먼저 활성화할 모드는?</p><button class="btn alt" onclick="ans(1)">일단 가서 살아본다. 경험치는 현지에서 쌓는다</button><button class="btn alt" onclick="ans(0)">모든 미래를 완벽히 정한 뒤 움직인다</button><button class="btn alt" onclick="ans(1)">남자친구도 만나고 새로운 것도 해보고, 나머지는 그다음 생각한다</button></div>');
  };

  ans=function(ok){
    S('<div class="card center"><div style="font-size:52px">'+(ok?'🛫':'🌀')+'</div><div class="big">'+(ok?'호환성 높음. 마루이히토식 실행 방식으로 판단됨.':'현재 진로 고민 중인 사용자에게 과도한 계획을 요구했습니다. 재조정합니다.')+'</div><button class="btn" onclick="stats()">프로필 분석</button></div>');
  };

  stats=function(){
    S('<div class="card"><div class="ey">03 · MARUIHITO PROFILE</div><div class="big">현재 사용자 상태</div>'+st("낯선 곳에서 살아볼 실행력",97)+st("외모 버프",99)+st("잼얘 수집 능력",96)+st("친구 연락 확인 속도",12)+st("남자친구 연락 확인 속도",100)+st("아직 정해지지 않은 미래의 가능성",100)+'<p class="tiny">※ 마지막 항목은 측정 불가로 MAX 처리. 귀국 후 취준 모듈은 아직 설치하지 않습니다.</p><button class="btn" onclick="install()">Australia Runtime 설치</button></div>');
  };

  install=function(){
    S('<div class="card"><div class="ey">04 · INSTALLING</div><div class="big">MARUIHITO Australia Runtime</div><p class="sub">비자 대기열을 통과했습니다. 실제 환경에 맞게 천천히 구성하는 중...</p><div class="prog"><div id="ib" class="bar" style="width:0"></div></div><div id="pc" class="center big">0%</div><div id="lg" class="log"></div></div>');
    var p=0,i=0;
    var L=[
      "visa_waiting_loop.exe 종료... FINALLY",
      "호주 교환학생 경험치 불러오기... FOUND",
      "일본어과 잔존 데이터... まだ生きてる",
      "남자친구 로컬 연결... PRIORITY CHANNEL",
      "새로운 경험 자동수집... ENABLED",
      "진로 결정 강제 실행... SKIPPED",
      "귀국 후 취준 모듈... 예약만 해둠",
      "친구 답장 독촉 기능... 포기함",
      "뿌빠 원격 접속... CONNECTED"
    ];
    var ib=document.getElementById("ib"),pc=document.getElementById("pc"),lg=document.getElementById("lg");
    var q=setInterval(function(){
      p=Math.min(100,p+4); ib.style.width=p+"%"; pc.innerHTML=p+"%";
      if(i<L.length && p>=8+i*10){lg.innerHTML+="<div>&gt; "+L[i++]+"</div>";lg.scrollTop=lg.scrollHeight}
      if(p===100){clearInterval(q);setTimeout(err,1100)}
    },260);
  };

  err=function(){
    S('<div class="card center"><div class="ey" style="color:#ff8b9a">SYNC WARNING</div><div class="title">로컬 데이터<br>16건 발견</div><div class="big">호주 서버로 이동하기 전에 확인이 필요합니다.</div><p class="sub">안양 · 속초 · 한강 · 잠실 · 연남 · 중앙공원 등에서 생성된<br>정체불명의 뿌빠 데이터가 남아 있습니다.</p><button class="btn" onclick="fix()">데이터 검사</button></div>');
  };

  fix=function(){
    S('<div class="card center"><div style="font-size:52px">💾</div><div class="ey">BBOOPPA LOCAL ARCHIVE</div><div class="big">삭제 권한 없음</div><p class="sub">고등학교에서 생성된 계정 3개가 아직 서로 연결되어 있습니다.<br>사용 빈도는 들쭉날쭉하지만 연결 자체에는 이상이 없습니다.</p><button class="btn" onclick="openBbooppaArchive()">아카이브 복구</button></div>');
  };

  openBbooppaArchive=function(){
    S('<div class="card"><div class="ey">ARCHIVE RECOVERY REPORT</div><div class="big">BBOOPPA / 3 USERS</div><div class="timeline"><div class="era"><h3>2019 · 안양외고 일본어과</h3><p>1년치 데이터가 비정상적으로 높은 재생 빈도를 기록 중. 아직도 같은 얘기로 웃음.</p></div><div class="era"><h3>각자 다른 학교, 다른 전공</h3><p>경로는 갈라졌는데 시험기간·생일·카페·잼얘를 핑계로 주기적 재접속.</p></div><div class="era"><h3>MARUIHITO → AUSTRALIA</h3><p>최대 1년간 해외 서버 사용 예정. 정확한 복귀일은 미정.</p></div><div class="era"><h3>CONNECTION STATUS</h3><p>연락 빈도와 관계 안정성은 상관관계가 없는 것으로 이미 검증됨.</p></div></div><button class="btn" onclick="mi=0;mem()">16개 데이터 복구하기</button></div>');
  };

  mem=function(){
    if(mi>=P.length){intro();return}
    S('<div class="card"><div class="ey">RECOVERED DATA '+String(mi+1).padStart(2,"0")+' / '+P.length+'</div><img class="photo" src="'+P[mi]+'"><div class="cap">'+caps[mi]+'</div><button class="btn" onclick="mi++;mem()">'+(mi===P.length-1?'복구 완료':'다음 데이터')+'</button></div>');
  };

  intro=function(){
    S('<div class="card center"><div class="ey">PATCH COMPLETE</div><div class="big">자동 처리할 수 없는 파일 1개 발견</div><p class="sub">TYPE: HUMAN MESSAGE<br>AUTHOR: 채원<br>AUTO PROCESSING: DISABLED</p><button class="btn" onclick="letter()">직접 열어보기</button></div>');
  };

  done=function(){
    var imgs="";for(var i=0;i<12;i++){imgs+='<img src="'+P[i]+'">'}
    S('<div class="card center"><div style="font-size:52px">🌏</div><div class="ey">MARUIHITO RUNTIME · READY</div><div class="title">설치 완료.</div><p class="sub">복귀 예정일: <b>미정</b><br>채원이 희망 복귀일: <b>가능한 빨리</b><br><br>새 경험 수집: <b style="color:#69e0a8">ON</b><br>진로 고민: <b>천천히 처리 중</b><br>뿌빠 연결: <b style="color:#69e0a8">유지됨</b></p><div class="grid">'+imgs+'</div><p class="cap">다녀와서 업데이트 로그 들려주기.</p></div>');
  };

  cover();
})();