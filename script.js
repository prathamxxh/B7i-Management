const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {
  const video = card.querySelector("video");
  const playBtn = card.querySelector(".play-btn");
  const muteBtn = card.querySelector(".mute-btn");

  // Play / Pause
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // 🔊 MUTE / UNMUTE
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;

    // OPTIONAL: visual feedback (opacity change)
    muteBtn.style.opacity = video.muted ? "0.6" : "1";
  });

  // 🎬 AUTO PLAY ON HOVER (premium feel)
  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
  });
});
  


//Hero Section
/* TYPING EFFECT */
const text = "Make Content That Performs!";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70); // typing speed
  }
}

typeEffect();

/* NAVBAR SCROLL EFFECT */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* SCROLL ANIMATION FOR TITLE ONLY */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
});

