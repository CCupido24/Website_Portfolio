document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('.nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle navigation
    document.querySelector('.nav-toggler').addEventListener('click', function() {
      document.querySelector('.aside').classList.toggle('open');
      document.querySelector('.main-content').classList.toggle('open');
    });
  
    // Form validation
    document.getElementById('send-message').addEventListener('click', function(e) {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let subject = document.getElementById('subject').value;
      let message = document.getElementById('message').value;
  
      if(name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill all fields');
      } else {
        alert('Message sent successfully!');
      }
    });
  });