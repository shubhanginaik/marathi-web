function loadContent(topic, element) {
  let content = "";
  let cssFile = "";
  switch (topic) {
    case "vowels":
      content = `
      <h2>Marathi vowels (मराठी स्वर)</h2>
      <div class="vowels-container">
          <div class="letter" data-sound="a">अ</div>
          <div class="letter" data-sound="aa">आ</div>
          <div class="letter" data-sound="i">इ</div>
          <div class="letter"  data-sound="ii">ई</div>
          <div class="letter"  data-sound="u">उ</div>
          <div class="letter"  data-sound="uu">ऊ</div>
          <div class="letter"  data-sound="e">ए</div>
          <div class="letter"  data-sound="ai">ऐ</div>
          <div class="letter"  data-sound="o">ओ</div>
          <div class="letter"  data-sound="au">औ</div>
          <div class="letter"  data-sound="am">अं</div>
          <div class="letter"  data-sound="ah">अः</div>
      </div>
      <audio id="audio" preload="auto">
      <source id="audioSource" src="" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  `;
      cssFile = "styling/vowels.css";
      break;
    case "consonants":
      content = `
        <h2>Marathi Consonants(व्यंजन)</h2><p> Learn Marathi consonants...</p>
        `;
      cssFile = "styling/consonants.css";
      break;

    case "numbers":
      content = `
        <h2>Numbers in Marathi</h2>
        <div class="numbers-container">
        <div class="column">
            <div class="number">१</div>
            <div class="number">२</div>
            <div class="number">३</div>
            <div class="number">४</div>
            <div class="number">५</div>
            <div class="number">६</div>
            <div class="number">७</div>
            <div class="number">८</div>
            <div class="number">९</div>
            <div class="number">१०</div>
        </div>
        <div class="column">
            <div class="number">११</div>
            <div class="number">१२</div>
            <div class="number">१३</div>
            <div class="number">१४</div>
            <div class="number">१५</div>
            <div class="number">१६</div>
            <div class="number">१७</div>
            <div class="number">१८</div>
            <div class="number">१९</div>
            <div class="number">२०</div>
        </div>
        <div class="column">
            <div class="number">२१</div>
            <div class="number">२२</div>
            <div class="number">२३</div>
            <div class="number">२४</div>
            <div class="number">२५</div>
            <div class="number">२६</div>
            <div class="number">२७</div>
            <div class="number">२८</div>
            <div class="number">२९</div>
            <div class="number">३०</div>
        </div>
        <div class="column">
            <div class="number">३१</div>
            <div class="number">३२</div>
            <div class="number">३३</div>
            <div class="number">३४</div>
            <div class="number">३५</div>
            <div class="number">३६</div>
            <div class="number">३७</div>
            <div class="number">३८</div>
            <div class="number">३९</div>
            <div class="number">४०</div>
        </div>
        <div class="column">
            <div class="number">४१</div>
            <div class="number">४२</div>
            <div class="number">४३</div>
            <div class="number">४४</div>
            <div class="number">४५</div>
            <div class="number">४६</div>
            <div class="number">४७</div>
            <div class="number">४८</div>
            <div class="number">४९</div>
            <div class="number">५०</div>
        </div>
        `;
      cssFile = "styling/numbers.css";
      break;
    case "words":
      content =
        "<h2>Basic Words</h2><p>Here are some basic Marathi words...</p>";
      cssFile = "styling/words.css";
      break;
    case "phrases":
      content = "<h2>Common Phrases</h2><p>Learn common Marathi phrases...</p>";
      cssFile = "styling/phrases.css";
      break;
    case "sentences":
      content =
        "<h2>Simple Sentences</h2><p>Practice simple Marathi sentences...</p>";
      cssFile = "styling/sentences.css";
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
