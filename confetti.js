document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('confetti-canvas');
    const confirmBtn = document.getElementById('confirm-btn');
  
    if (!canvas || !confirmBtn) return;
  
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: false
    });
  
    confirmBtn.addEventListener('click', () => {
      // Левая сторона — фиолетовые
      myConfetti({
        particleCount: 300,
        angle: 60,
        spread: 80,
        startVelocity: 40,
        ticks: 600,
        gravity: 0.8,
        origin: { x: 0, y: 0.5 },
        colors: ['#a020f0', '#b266ff']
      });
  
      // Правая сторона — фиолетовые
      myConfetti({
        particleCount: 300,
        angle: 120,
        spread: 80,
        startVelocity: 40,
        ticks: 600,
        gravity: 0.8,
        origin: { x: 1, y: 0.5 },
        colors: ['#a020f0', '#b266ff']
      });
    });
  });