// document.getElementById('confirm-btn').addEventListener('click', () => {
//     const duration = 1 * 1000;
//     const animationEnd = Date.now() + duration;
//     const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
  
//     function randomInRange(min, max) {
//       return Math.random() * (max - min) + min;
//     }
  
//     const interval = setInterval(function() {
//       const timeLeft = animationEnd - Date.now();
  
//       if (timeLeft <= 0) {
//         return clearInterval(interval);
//       }
  
//       // левый край
//       confetti(Object.assign({}, defaults, {
//         origin: { x: 0, y: Math.random() },
//         particleCount: 2
//       }));
  
//       // правый край
//       confetti(Object.assign({}, defaults, {
//         origin: { x: 1, y: Math.random() },
//         particleCount: 2
//       }));
//     }, 100);
//   });