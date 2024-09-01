function loadContent(topic, element) {
  let content = "";
  let cssFile = "";
  switch (topic) {
    case "alphabet":
      content = `
      <h2>Marathi Alphabet (मराठी अक्षरे)</h2>
      <div class="alphabet-container">
          <div class="letter" data-sound="a">अ</div>
          <div class="letter">आ</div>
          <div class="letter">इ</div>
          <div class="letter">ई</div>
          <div class="letter">उ</div>
          <div class="letter">ऊ</div>
          <div class="letter">ए</div>
          <div class="letter">ऐ</div>
          <div class="letter">ओ</div>
          <div class="letter">औ</div>
          <div class="letter">अं</div>
          <div class="letter">अः</div>
      </div>
      <audio id="audio" preload="auto">
      <source id="audioSource" src="" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  `;
      cssFile = "styling/alphabet.css";
      break;
    case "numbers":
      content =
        "<h2>Numbers in Marathi</h2><p>Learn how to count in Marathi...</p>";
      cssFile = "numbers.css";
      break;
    case "words":
      content =
        "<h2>Basic Words</h2><p>Here are some basic Marathi words...</p>";
      cssFile = "words.css";
      break;
    case "phrases":
      content = "<h2>Common Phrases</h2><p>Learn common Marathi phrases...</p>";
      cssFile = "phrases.css";
      break;
    case "sentences":
      content =
        "<h2>Simple Sentences</h2><p>Practice simple Marathi sentences...</p>";
      cssFile = "sentences.css";
      break;
    default:
      content =
        "<h2>Welcome</h2><p>Select a topic from the sidebar to begin learning Marathi.</p>";
      cssFile = "default.css";
  }
  document.querySelector(".content").innerHTML = content;

  // Update the content-specific CSS file if applicable
  if (cssFile) {
    document.getElementById("dynamic-css").setAttribute("href", cssFile);
  } else {
    document.getElementById("dynamic-css").setAttribute("href", ""); // Reset if no additional CSS
  }

  var links = document.querySelectorAll(".sidebar a");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  element.classList.add("active");

  const audioElement = document.getElementById("audio");
  const audioSource = document.getElementById("audioSource");
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter) => {
    letter.addEventListener("click", () => {
      const soundFile = letter.getAttribute("data-sound");
      if (soundFile) {
        audioSource.src = `sounds/${soundFile}.mp3`; // Update with your audio file path
        console.log("Audio source set to:", audioSource.src);
        audioElement.load(); // Reload the audio element to ensure the new source is used
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        console.warn("No sound file specified for this letter.");
      }
    });
  });
}
