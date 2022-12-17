//All Made By Neksha DeSilva
//All Images And Icons Of Roar™ is belongs to NekshaDeSilva
const trackNowPlay = new Audio("http://timtechsoftware.com/uploads/Jackpot.mp3");
const play = document.querySelector('.playbtn');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const prog = document.querySelector('.media-progress');
const imgplay = document.querySelector('.playcls');
const volume = document.querySelector('.volume');
const replay = document.querySelector('.replay');
const lyr = document.querySelector('.lyrics');
const trackDur = document.querySelector('.duration');
const song = document.querySelector('.title');
const showMore= document.querySelector('.more-effects');
const keyCommon = document.querySelector('.keys');
const browserMode = document.querySelector('.browser');
const addNew = document.querySelector('.add');
const gobtn = document.querySelector('.go');
const inputLink = document.querySelector('.newSong');
const closeTop= document.querySelector('.close-top');
forward.addEventListener('click', function(){
    trackNowPlay.currentTime += 10;
})
play.addEventListener('click', function(){
    if(trackNowPlay.paused){
        localStorage.setItem('playing?', '1');
        trackNowPlay.play();
       
        play.innerHTML = '<path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
    }
    else{
        localStorage.setItem('playing?', '0');
        trackNowPlay.pause();
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }
})
trackNowPlay.addEventListener('timeupdate', function(){
    lyr.scrollBy(0,(trackNowPlay.currentTime)/20);
    prog.style.width=  trackNowPlay.currentTime+"%";
    if(trackNowPlay.paused){
        document.querySelector('.roar-monster-section').style.backgroundImage = ' url(roarmonster-classic.png)';
        play.innerHTML = '<path class="<path class="playcls" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>';
    }else{
        document.querySelector('.roar-monster-section').style.backgroundImage = '';
        play.innerHTML = '<path class="playcls" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>';
    }
    trackDur.innerHTML = Math.floor((trackNowPlay.currentTime*60)/60);
    if(trackDur.innerHTML > 59){
        trackDur.innerHTML = Math.round(Math.floor((trackNowPlay.currentTime*60)/60)/60) + 'm+';
    }else if(10> trackDur.innerHTML){
        trackDur.innerHTML = '0.0'+Math.floor((trackNowPlay.currentTime*60)/60)
    }else if(10<=trackDur.innerHTML){
        trackDur.innerHTML = '0.'+Math.floor((trackNowPlay.currentTime*60)/60)
    }

    if(!inputLink.value){
      gobtn.disabled = true;
      gobtn.style.cursor = 'default';
      gobtn.style.fill = 'rgb(119, 7, 211)';
    }else{
      gobtn.disabled = false;
      gobtn.style.fill = '';
      gobtn.style.cursor = '';
    }
})

backward.addEventListener('click', function(){
    trackNowPlay.currentTime -= 10;
})
replay.addEventListener('click', function(){
   
        trackNowPlay.currentTime = 0;
        trackNowPlay.pause();
  
})
trackNowPlay.addEventListener('canplay', function(){
   document.querySelector('.fireshell-load').style.visibility = 'hidden';
   document.querySelector('.fireshell-load').style.position = 'fixed';
   document.querySelector('.roar-monster-section').style.visibility = 'visible';
   document.querySelector('.roar-monster-section').style.position = 'relative';
   document.querySelector('.roar-monster-section').style.animation = 'fade-in 1s 1';
   
})
let onpage = 0;
showMore.addEventListener('mouseup', function(){
    document.querySelector('.right').style.width = '10%';
    showMore.style.position = 'relative';
   
    if(onpage == 0){
        document.querySelector('.right').style.width = '10rem';
        onpage = 1;
    }else if(onpage == 1){
        document.querySelector('.right').style.width = '0%';
        onpage = 0;
    }
})
if(localStorage.getItem('playing?') == '1' ){
    trackNowPlay.play();
    
}else{
    trackNowPlay.pause();
}

  if(navigator.userAgent.match(/Android/i)){
    browserMode.innerHTML= '<path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>';

  }
  if(navigator.userAgent.match(/iPhone/i)){
    browserMode.innerHTML= '<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/><path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>';
  }else{
    browserMode.innerHTML= '<path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>';
  }

  trackNowPlay.addEventListener('ended', function(){
    setTimeout(afterReplay ,3000 );
    trackDur.innerHTML = 'Replaying In 3 seconds'; 
  })
  function afterReplay(){
    trackNowPlay.play();
    
  }
  document.querySelector('.developer').addEventListener('click',function(){
    window.open("https://github.com/NekshaDeSilva");
  })
  document.querySelector('.emailus').addEventListener('click',function(){
    window.open("mailto:rohandesilvahotmail@gmail.com");
  })
  trackNowPlay.addEventListener('playing', function(){
    document.querySelector('.roar-monster-section').style.animation = 'roarplay-anim 10s infinite linear';
  })
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
addNew.addEventListener('click', function(){
  document.querySelector('.top').style.height = '3rem';
  noneinWindow();
  inputLink.style.visibility = 'visible';
  inputLink.style.position =  'relative';
  gobtn.style.visibility = 'visible';
  gobtn.style.position =  'relative';
  closeTop.style.visibility = 'visible';
  closeTop.style.position =  'relative';
})
function noneinWindow(){
  document.querySelector('.right').style.width = '0%';
  onpage = 0;
}
closeTop.addEventListener('click', function(){
  document.querySelector('.top').style.height = '0rem';
  noneinWindow();
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
  inputLink.style.visibility = 'hidden';
  inputLink.style.position =   'fixed';
})
gobtn.addEventListener('click', function(){
  let inputLinkValue = inputLink.value;
  closetopF();
  const trackNowPlay = new Audio(inputLinkValue);
  console.log(trackNowPlay);
  
  trackNowPlay.play();
})
function closetopF(){
  document.querySelector('.top').style.height = '0rem';
  noneinWindow();
  gobtn.style.visibility = 'hidden';
  gobtn.style.position =   'fixed';
  closeTop.style.visibility = 'hidden';
  closeTop.style.position =   'fixed';
  inputLink.style.visibility = 'hidden';
  inputLink.style.position =   'fixed';
}
