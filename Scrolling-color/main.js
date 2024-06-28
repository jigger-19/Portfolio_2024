window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hue = (scrollPosition / (document.body.offsetHeight - window.innerHeight)) * 360;
    const backgroundColor = `hsl(${hue}, 50%, 50%)`;
    document.body.style.backgroundColor = backgroundColor;
  });