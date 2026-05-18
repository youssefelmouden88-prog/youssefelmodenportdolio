
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Merci pour votre message. Le formulaire est prêt pour être connecté avec un service backend.');
      contactForm.reset();
    });








    