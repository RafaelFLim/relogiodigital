function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  updateClock(); // Update immediately
  setInterval(updateClock, 1000); // Update every second
  
  const themeToggle = document.getElementById('themeToggle');
  
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Modo Claro';
    } else {
      themeToggle.textContent = 'Modo Escuro';
    }
  });
  