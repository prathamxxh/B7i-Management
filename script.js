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

  // Mute / Unmute
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
  });

  // UI sync
  video.addEventListener("play", () => {
    playBtn.style.display = "none";
  });

  video.addEventListener("pause", () => {
    playBtn.style.display = "block";
  });
});
