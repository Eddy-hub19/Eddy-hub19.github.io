const typeWriter = document.getElementById('typewriter-text');
const text = 'TO BE CONTINUED';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);