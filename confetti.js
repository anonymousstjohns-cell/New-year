
const confettiCount = 150;
const confettiContainer = document.createElement('div');
confettiContainer.style.position = 'fixed';
confettiContainer.style.top = '0';
confettiContainer.style.left = '0';
confettiContainer.style.width = '100%';
confettiContainer.style.height = '100%';
confettiContainer.style.pointerEvents = 'none';
document.body.appendChild(confettiContainer);

for (let i = 0; i < confettiCount; i++) {
  const confetti = document.createElement('div');
  confetti.style.position = 'absolute';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
  confetti.style.top = `${Math.random() * 100}%`;
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random()*360}deg)`;
  confettiContainer.appendChild(confetti);

  const fall = () => {
    let top = parseFloat(confetti.style.top);
    top += 1 + Math.random() * 3;
    if (top > 100) top = -10;
    confetti.style.top = top + '%';
    requestAnimationFrame(fall);
  };
  fall();
}
