const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
  const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  const radius = Math.random() * 10 + 5;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const vx = Math.random() - 0.5;
  const vy = Math.random() - 0.5;;
  particles.push({ color, radius, x, y, vx, vy });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    
    particle.x += particle.vx;
    particle.y += particle.vy;

    
    if (particle.x < particle.radius || particle.x > canvas.width - particle.radius) {
      particle.vx *= -1;
    }
    if (particle.y < particle.radius || particle.y > canvas.height - particle.radius) {
      particle.vy *= -1;
    }

    
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
