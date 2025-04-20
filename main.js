// Kirish sahifasini yo‘qotish
window.addEventListener("load", function () {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.classList.add("opacity-0");
    setTimeout(() => splash.style.display = "none", 500);
  }, 2000); // 2 sekunddan so‘ng yo‘qoladi
});


window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  }, 2500);
});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

let isOpen = false;
menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  mobileMenu.classList.toggle('max-h-0');
  mobileMenu.classList.toggle('max-h-96');
});


// contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('contact.php', {
      method: 'POST',
      body: new FormData(form)
    }).then(res => {
      if (res.ok) {
        toast.classList.remove('hidden');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 4000);
        form.reset();
      } else {
        alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      }
    });
  });
});
