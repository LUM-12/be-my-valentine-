//----------------------------------------------
//=============== the game logic================
//----------------------------------------------

const questions  = [
  {
    id: 0,
    question: "i have a very important question to ask you , can you guess it ?",
  },
  {
    id: 1,
    question: "Do you love me",
  },
  {
    id: 2,
    question: "how much do you love me 🥺"
  },
  {
    id: 3,
    question: "Every time we talk , i just forget how fast time passes "
  },
  {
    id: 4,
    question: "You are my comfort , my best friend and ...my babyy ,  "
  },
  {
    id:5,
    question:"but there's one thing missing here, my valentine "
  },
  {
    id:6,
    question:"so ehem,  will you be my valentine and complete me ? "
  },
  {
    id:7,
    question:"yayyy thank you Babyyyy"
  }
];


window.onload = function() {
  const startBtn = document.getElementById('start-btn');
  const overlay = document.getElementById('popup-overlay');
  const music = document.getElementById('bg-music');

  startBtn.addEventListener('click', function() {
    // 1. Play the audio
    music.play().catch(error => {
      console.log("Audio play failed:", error);
    });

    // 2. Hide the popup
    overlay.style.display = 'none';
    
    // 3. Optional: Trigger your Phase 1 logic here
    // loadphase1(); 
  });
};




let phase = 0;
const quest = document.getElementById('question');
const yesBtn = document.getElementById('yes-btn');
const gifInage = document.getElementById('gif');

const slideContainer = document.getElementById('slide-container');
const yesno = document.querySelectorAll('.btn');
console.log(yesno);
const slide = document.createElement('input');
  slide.classList.add('slider');
  
const sliderNum = document.createElement('h3');
const loveValue = document.createElement('h2')
loveValue.id ='pulsating-box';
console.log(loveValue)

const scalar = 4;
const unicorn = confetti.shapeFromText({ text: '😘', scalar });
const star = confetti.shapeFromText({ text: '🎈', scalar });

//const box = document.getElementById('pulsating-box');
//console.log(box)

// Function to start the pulse
function startPulse() {
  loveValue.classList.add('pulse-active');
}

// Function to stop the pulse
function stopPulse() {
  loveValue.classList.remove('pulse-active');
}

// Example: Start pulsing immediately



//------------ movibg no button ---------------

const noButton = document.querySelector('.btn-container button:nth-child(2)');
const container2 = document.querySelector('.btn-container');

// Make container MUCH larger
container2.style.minHeight = '300px'; // Increased from 100px
container2.style.position = 'relative';

noButton.style.transition = 'all 0.2s ease-out';

noButton.addEventListener('click', () => {
    const containerRect = container2.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    // OLD randomizer (boring):
    // const randomX = Math.random() * maxX;
    // const randomY = Math.random() * maxY;
    
    // NEW extreme randomizer:
    const randomX = Math.random() < 0.5 
        ? Math.random() * maxX * 0.3  // Left side (0-30%)
        : maxX * 0.7 + Math.random() * maxX * 0.3; // Right side (70-100%)
    
    const randomY = Math.random() < 0.5
        ? Math.random() * maxY * 0.3  // Top side (0-30%)
        : maxY * 0.7 + Math.random() * maxY * 0.3; // Bottom side (70-100%)
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});


function loadquestion(){
  if(phase === 0){
    quest.textContent = questions[1].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2F6h0871ZJQjYAAAAC%2Fanime-chibi.gif&f=1&ipt=8c7e172dcc2810da2f5b9a949d1c6d9079efe2782b3a9d48c2cb934e890cb659"
  }
} 

function loadSlider(){
    
  slide.type = 'range';
  slide.min = 0;
  slide.max = 1288;
  slide.value = 0 ;
  
  sliderNum.textContent = slide.value * 101 + '%';
  
  slide.addEventListener('input', () => {
    sliderNum.textContent = slide.value * 101 + '%';
    if( slide.value < 200){
      loveValue.textContent = "Only This much 🥺 ?";
      
      yesno.forEach(element => {
        element.style.display = 'none';
         });
    }
    if(slide.value > 500){
      loveValue.textContent = "wow that's a lot";
      startPulse();
      yesno.forEach(element => {
        element.style.display = 'block';
         });
      
    }
    if(slide.value > 1100){
      loveValue.textContent = "Oh My god Baby I love you too 😍😍 ";
      startPulse();
    }
  
    });
  
  slideContainer.appendChild(loveValue);
  slideContainer.appendChild(sliderNum);
  slideContainer.appendChild(slide);
  console.log(loveValue)
  
}

function loadphase2(){
  if(phase === 1){
    quest.textContent = questions[2].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifdb.com%2Fimages%2Fhigh%2Fcute-little-white-bunny-amazing-reaction-y1lqvs0v3gzb66z0.gif&f=1&ipt=5b762070b297decff90ec0c654648eed5a9c3c5a21a198e8924e8bbf570c444a"
  }
  else if (phase === 2){
    quest.textContent = questions[3].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FzbpcSjClbZoAAAAC%2Fkissy-kiss.gif&f=1&ipt=2392f28d07e2680a4dc2c08fdc566252e0a123646b8f94c876a4f8b7ae56c511"
  }
  else if (phase === 3){
    quest.textContent = questions[4].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FPxwDtGv_ROkAAAAi%2Fcute-love.gif&f=1&ipt=ba43d6a4e86f73620592f64304d8c1edbf42b74e3053414916c67d193ad1979b"
  }
  else if (phase === 4){
    quest.textContent = questions[5].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fz_YLnl5ssnkAAAAC%2Fbunny-cute.gif&f=1&ipt=132616d4cec9538d2d69fcf2aaf78b385cf8ca564d0a34c7a2a76aedf6db0f0b"
  }
  else if (phase === 5){
    quest.textContent = questions[6].question;
    gifInage.src = "img_1_1770313813017-removebg-preview.png"
  }
  else if (phase === 6){
    quest.textContent = questions[7].question;
    gifInage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fm%2FEz5hrhPD7dwAAAAC%2Fhappy-love.gif&f=1&ipt=11cc5b15a01fd0b82088eab2354efcb06dcebdccadba17540e2c99ee85b97298"
  }
}


yesBtn.addEventListener("click",()=>{
  if(phase === 0){
    
    loadquestion();
    console.log(questions[1].question);
    phase++;
    console.log(phase);
    
  }
  else if(phase === 1){
    yesno.forEach(element => {
        element.style.display = 'none';
         });
    loadphase2();
    loadSlider();
    phase++;
    console.log(phase);
    yesBtn.innerText = " Next ";
    
  }
  else if(phase === 2){
   // yesno.forEach(btn => btn.remove());
    stopPulse()
    if(slide) slide.remove();
    if(sliderNum) sliderNum.remove();
    if(loveValue) loveValue.remove();
    loadphase2();
    phase++;
    
  }
  else if(phase === 3){
    
    loadphase2();
    phase++;
  }
  else if(phase === 4){
    
    loadphase2();
    phase++;
    yesBtn.innerText = " yes ";
  }
  else if(phase === 5){
    loadphase2();
    phase++;
    yesBtn.innerText = " Next ";
  }
  else if(phase === 6){
    loadphase2();
    phase++;
    yesBtn.innerText = " Next ";
    confetti({
    shapes: [unicorn, star],
    particleCount: 120,
    spread: 150,
    scalar: scalar
  });
  }
  
});
9
console.log('hello world ');
//---------------------------------------------
//------------- floating emojis ----------------
//----------------------------------------------

const container = document.getElementById('emoji-container');

const emojis = ['🥰', '😘', '😍', '️💓', '💕', '💝' , '💞' ,  '💖' , ' 💌' , '🌹' , '🎈'];


function createEmoji() {
  const emojiEl = document.createElement('div');
  emojiEl.classList.add('emoji');
  
  // Randomize the emoji and properties
  emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emojiEl.style.left = Math.random() * 100 + 'vw';
  
  // Randomize duration between 3 and 8 seconds
  const duration = Math.random() * 5 + 3;
  emojiEl.style.animationDuration = duration + 's';
  
  // Randomize size slightly
  emojiEl.style.opacity = Math.random() * 0.8 + 0.5;
  
  container.appendChild(emojiEl);

  // Remove the element after the animation ends to save memory
  setTimeout(() => {
    emojiEl.remove();
  }, duration * 1000);
}

// Create a new emoji every 300ms
setInterval(createEmoji, 200);
