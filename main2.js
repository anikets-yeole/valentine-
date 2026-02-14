document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
    
    // Add floating emojis with click interaction
    const emojis = ['💕', '💖', '💗', '💝', '💘', '🌹', '🎀', '✨'];
    for (let i = 0; i < 8; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'floating-emoji';
      emoji.innerHTML = emojis[i];
      emoji.style.left = Math.random() * 100 + '%';
      emoji.style.top = Math.random() * 100 + '%';
      emoji.style.animationDelay = Math.random() * 4 + 's';
      emoji.style.cursor = 'pointer';
      
      // Add click event for sparkle effect
      emoji.addEventListener('click', function(e) {
        createSparkles(e.clientX, e.clientY);
        playClickSound();
      });
      
      document.body.appendChild(emoji);
    }
    
    // Auto-play background music with user interaction
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;
    
    // Try to play music on first user interaction
    const playMusic = () => {
      bgMusic.play().catch(e => console.log('Music autoplay prevented'));
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
    
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);
  });
  
  // Create sparkle effect on click
  function createSparkles(x, y) {
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.position = 'fixed';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      sparkle.style.fontSize = '20px';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '9999';
      sparkle.style.animation = `sparkleOut 0.8s ease-out forwards`;
      sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }
  }
  
  // Play click sound effect
  function playClickSound() {
    const audio = new Audio();
    audio.volume = 0.2;
    // Using a simple beep sound data URL
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGS57OihUBELTKXh8bllHAU2jdXvzn0vBSh+zPDajzsKElyx6OyrWBUIQ5zd8sFuJAUuhM/z24k2CBhkuezooVARC0yl4fG5ZRwFNo3V7859LwUofsz';
  }
  
  // Create confetti explosion
  function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#f67280', '#355c7d', '#6c5ce7', '#a29bfe'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '10002';
        confetti.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        confetti.style.animation = `confettiFall 2s ease-out forwards`;
        confetti.style.setProperty('--vx', vx + 'vw');
        confetti.style.setProperty('--vy', vy + 'vh');
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
      }, i * 10);
    }
  }
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  let yesButtonScale = 1;
  
  function no() {
    counter++;
    
    // Make Yes button bigger each time No is clicked
    yesButtonScale += 0.2;
    const yesBtn = document.getElementById('yes');
    yesBtn.style.transform = `scale(${yesButtonScale})`;
    yesBtn.style.transition = 'transform 0.3s ease';
    
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    let bgMusic = document.getElementById("bgMusic");
    happyMusic.pause();
    bgMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      
      if (counter === 1) {
        modelImage.src = "please.jpg";
      } else {
        modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      }
      
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    if (counter >= 3) {
        // Create confetti explosion
        createConfetti();
        
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";
        
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        const mainImg = document.getElementById("mainImg");
        
        btns.style.display = "none";
        mainImg.style.display = "none";
        wedate.style.display = "none";

        // Show beautiful valentine card
        setTimeout(() => {
            document.getElementById('flowerContainer').style.display = 'flex';
            createContinuousHearts();
        }, 500);

    } else {
        alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
}

function createContinuousHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0';
        heart.style.zIndex = '10001';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatUp ${3 + Math.random()}s ease-out forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 400);
}

function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.bottom = '-50px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.opacity = '0';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `floatUp ${3 + Math.random() * 2}s ease-out forwards`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 50);
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
