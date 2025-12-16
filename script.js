// Modern JavaScript Features
class LoveAnimation {
  constructor() {
    this.isPlaying = false;
    this.hearts = [];
    this.mouseParticles = [];
    this.init();
  }

  init() {
    this.setupMusicPlayer();
    this.setupFloatingHearts();
    this.setupScrollAnimations();
    this.setupMouseInteractions();
    this.setupIntersectionObserver();
    this.setupTypingEffect();
    this.setupTimeCounter();
  }

  // Modern Music Player with Visual Feedback
  setupMusicPlayer() {
    const musicBtn = document.getElementById("music-btn");
    const bgMusic = document.getElementById("bg-music");

    if (!musicBtn || !bgMusic) return;

    const icon = musicBtn.querySelector("i");

    musicBtn.addEventListener("click", () => {
      if (this.isPlaying) {
        bgMusic.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        musicBtn.style.animation = "none";
      } else {
        bgMusic
          .play()
          .catch((e) => console.log("Erro ao reproduzir áudio:", e));
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        musicBtn.style.animation = "pulse 2s infinite";
      }
      this.isPlaying = !this.isPlaying;
    });
  }

  // Enhanced Floating Hearts with Interactions
  setupFloatingHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    if (!heartsContainer) return;

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      heart.style.opacity = Math.random() * 0.5 + 0.3;
      heart.style.fontSize = Math.random() * 20 + 15 + "px";

      heartsContainer.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => {
        if (heart.parentNode) {
          heart.remove();
        }
      }, 5000);
    };

    // Create hearts at intervals
    setInterval(createHeart, 2000);
  }

  // Modern Scroll Animations
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    // Observe elements for scroll animations
    const elements = [
      ".fade-in",
      ".fade-in-up",
      ".fade-in-left",
      ".fade-in-right",
      ".gallery-item",
      ".reason-card",
    ];

    elements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(el);
      });
    });
  }

  // Modern Mouse Interactions with Particles
  setupMouseInteractions() {
    document.addEventListener("mousemove", (e) => {
      this.createMouseParticle(e.clientX, e.clientY);
    });

    document.addEventListener("click", (e) => {
      this.createClickEffect(e.clientX, e.clientY);
    });
  }

  createMouseParticle(x, y) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.backgroundColor = "rgba(255, 182, 193, 0.8)";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";
    particle.style.transition = "opacity 1s ease";

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.opacity = "0";
    }, 100);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, 1000);
  }

  createClickEffect(x, y) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤";
        heart.style.position = "fixed";
        heart.style.left = x + Math.random() * 40 - 20 + "px";
        heart.style.top = y + Math.random() * 40 - 20 + "px";
        heart.style.fontSize = "20px";
        heart.style.color = "var(--primary-color)";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.animation = "float-up 2s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
          if (heart.parentNode) {
            heart.remove();
          }
        }, 2000);
      }, i * 100);
    }
  }

  // Modern Intersection Observer for Advanced Animations
  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateLoveMessage(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".love-message").forEach((el) => {
      observer.observe(el);
    });
  }

  // Modern Typing Effect
  setupTypingEffect() {
    const elements = document.querySelectorAll("[data-typing]");
    elements.forEach((element) => {
      const text = element.getAttribute("data-typing");
      if (!text) return;

      let index = 0;
      element.textContent = "";

      const typeWriter = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      };

      setTimeout(typeWriter, 500);
    });
  }

  // Animate love messages with modern effects
  animateLoveMessage(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.3s ease";

    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 300);
  }

  // Modern Time Counter with Animation
  setupTimeCounter() {
    const startDate = new Date(2013, 11, 5); // 5 de dezembro de 2013 - Data que vocês se conheceram

    const updateCounter = () => {
      const now = new Date();
      const difference = now - startDate;

      if (difference < 0) return;

      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365);
      const remainingDays = totalDays % 365;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      // Animate counter updates
      this.animateCounterNumber("years", years);
      this.animateCounterNumber("days", remainingDays);
      this.animateCounterNumber("hours", hours);
      this.animateCounterNumber("minutes", minutes);
      this.animateCounterNumber("seconds", seconds);
    };

    setInterval(updateCounter, 1000);
    updateCounter(); // Initial call
  }

  // Animate counter numbers with smooth transition
  animateCounterNumber(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const oldValue = parseInt(element.textContent) || 0;
    if (oldValue === newValue) return;

    element.style.transform = "scale(1.2)";
    element.style.color = "var(--accent-color)";

    setTimeout(() => {
      element.textContent = newValue;
      element.style.transform = "scale(1)";
      element.style.color = "";
    }, 200);
  }
}

// Initialize modern animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LoveAnimation();
});
