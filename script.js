// Pixel-perfect CV interactivity
function showContactAlert() {
  alert('Contact: chzeshanaa@gmail.com | +92 3434053211');
}

document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.getElementById('contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', showContactAlert);
  }
});
