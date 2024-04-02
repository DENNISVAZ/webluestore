const text = document.getElementById('text');
const words = ['weblue', 'aguardem'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function animateText() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        text.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    } else {
        text.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    }

    if (letterIndex === currentWord.length + 1) {
        isDeleting = true;
    }

    if (letterIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 50 : 500; // Ajuste a velocidade aqui
    setTimeout(animateText, speed);
}

animateText();

const url = window.location.href;

if (url.includes("perfumedoil150")) {
  window.location.href = "https://webluestore.com.br/";
}

