const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "Greetings pal, how it is going!",
  "Long time no see buddy",
  "Do you want to have a bat time kiddo"
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("voice is activated");
};

recognition.onresult = event => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

const readOutLoud = message => {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "";

  if (message.includes("hello there")) {
    const greetingText =
      greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = greetingText;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
