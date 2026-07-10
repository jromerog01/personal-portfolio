let words = ["Ciencias de la Computación", "Ingeniería de Software", "Desarrollo Backend"];
let i = 0;
let timer;
const el = document.getElementById('typewriter-text');

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      el.innerHTML += word.shift();
    } else {
      timer = setTimeout(deletingEffect, 2000);
      return false;
    };
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      el.innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      timer = setTimeout(typingEffect, 500);
      return false;
    };
    timer = setTimeout(loopDeleting, 50);
  };
  loopDeleting();
};

function restartTypewriter(newWords) {
  clearTimeout(timer);
  words = newWords;
  i = 0;
  el.innerHTML = "";
  typingEffect();
}

// Initialize by clearing the initial text and starting the effect
timer = setTimeout(() => {
    el.innerHTML = "";
    typingEffect();
}, 1500); // Wait a bit before starting the animation
