let slideIndex = 0;
    document.querySelector("#viewServicesButton").addEventListener("click", function() {
        // "Қызметтер" бөліміне жылжу
        document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
    });
    const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 50) {
            section.classList.add('visible');
        }
    });
});
document.querySelectorAll('.dropdown').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const menu = item.querySelector('.dropdown-menu');
    if (menu) menu.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    const menu = item.querySelector('.dropdown-menu');
    if (menu) menu.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // "home" бөліміне сілтеме жасау
  const home = document.getElementById("home");

  home.addEventListener("click", function(event) {
    event.preventDefault();  // Әдепкі әрекетті болдырмау (сілтемені басқанда бет жаңартылмайды)
    
    // Бастапқы бетке өту
    window.location.href = "index.html"; // немесе басқа URL жазуға болады
  });
});

// Жасырылған ақпаратты көрсету/жасыру үшін функция
function toggleInfo(doctorId) {
    var infoDiv = document.getElementById('doctor-info-' + doctorId);
    
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block'; // Ақпаратты көрсету
    } else {
        infoDiv.style.display = 'none'; // Ақпаратты жасыру
    }
}

document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Форма жіберілмейді, оның орнына пікір қосылады

  // Форма мәндерін алу
  const name = document.getElementById('name').value.trim();
  const rating = document.getElementById('rating').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    alert('Барлық өрістерді толтырыңыз!');
    return;
  }

  function addFeedback() {
    const feedbackText = document.getElementById('feedbackText').value.trim();
    const rating = document.getElementById('rating').value;
    const name = document.getElementById('name').value.trim();

    if (feedbackText && name) {
        // Жаңа пікір құру
        const feedbackList = document.getElementById('feedbackList');
        const newFeedback = document.createElement('div');
        newFeedback.classList.add('feedback-item');
        newFeedback.innerHTML = `
            <p>"${feedbackText}"</p>
            <p>${rating}</p>
            <p>— ${name}</p>
        `;

        // Пікірлер тізіміне қосу
        feedbackList.appendChild(newFeedback);

        // Форманы тазалау
        document.getElementById('feedbackForm').reset();

        alert('Пікіріңіз сақталды!');
    } else {
        alert('Барлық өрістерді толтырыңыз!');
    }
}


