(function(){
 let promptEvent=null;
 window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();promptEvent=e;});
 window.installMaruihito=async function(){
   if(promptEvent){promptEvent.prompt();await promptEvent.userChoice;promptEvent=null;return;}
   alert("갤럭시에서는 브라우저 메뉴(⋮) → ‘홈 화면에 추가’ 또는 ‘앱 설치’를 눌러주세요.");
 };
 if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
 const oldDone=window.done;
 window.done=function(){
   oldDone();
   setTimeout(function(){
     const card=document.querySelector(".card");
     if(card){
       const box=document.createElement("div");
       box.innerHTML='<button class="btn" style="margin-top:18px" onclick="installMaruihito()">MARUIHITO.exe 설치하기</button><p class="tiny">홈 화면에 저장하면 앱처럼 다시 실행할 수 있습니다.</p>';
       card.appendChild(box);
     }
   },0);
 };
})();