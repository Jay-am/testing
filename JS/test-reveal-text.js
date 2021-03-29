let data = [
  { "pos": 10000, "text": "" },
  { "pos": 9938, "text": "i" },
  { "pos": 9875, "text": "i ❤️" },
  { "pos": 9813, "text": "i ❤️ you" },
  { "pos": 9750, "text": "i ❤️ you <span class='emphasis'>very</span>" },
  {
    "pos": 9375,
    "text": "i <span class='heart'>❤️</span> you <span class='emphasis'>very much.</span>"
  },
  { "pos": 9250, "text": "i ❤️ you very much." },
  { "pos": 9000, "text": "i ❤️ you very" },
  { "pos": 8750, "text": "i ❤️ you" },
  { "pos": 8500, "text": "i ❤️" },
  { "pos": 8250, "text": "i" },
  { "pos": 8000, "text": "" },
  { "pos": 7938, "text": "You" },
  { "pos": 7875, "text": "You are" },
  { "pos": 7813, "text": "You are the" },
  { "pos": 7750, "text": "You are the <span class='red'>best</span>" },
  { "pos": 7688, "text": "You are the <span class='red'>best</span> person" },
  {
    "pos": 7625,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis'>in</span>"
  },
  {
    "pos": 7563,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis'>in the</span>"
  },
  {
    "pos": 7500,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis'>in the whole</span>"
  },
  {
    "pos": 6875,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis'>in the whole universe.</span>"
  },
  {
    "pos": 6750,
    "text": "You are the <span class='red'>best</span> person in the whole universe."
  },
  {
    "pos": 6500,
    "text": "You are the <span class='red'>best</span> person in the whole"
  },
  {
    "pos": 6250,
    "text": "You are the <span class='red'>best</span> person in the"
  },
  {
    "pos": 6000,
    "text": "You are the <span class='red'>best</span> person in"
  },
  { "pos": 5500, "text": "You are the <span class='red'>best</span> person" },
  {
    "pos": 5375,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis strike'>in</span>"
  },
  {
    "pos": 5250,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis strike'>in the</span>"
  },
  {
    "pos": 5125,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis strike'>in the whole</span>"
  },
  {
    "pos": 4750,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis strike'>in the whole world.</span>"
  },
  {
    "pos": 4125,
    "text": "You are the <span class='red'>best</span> person <span class='emphasis'>in the whole world.</span>"
  },
  {
    "pos": 4000,
    "text": "You are the <span class='red'>best</span> person in the whole world."
  },
  {
    "pos": 3750,
    "text": "You are the <span class='red'>best</span> person in the whole"
  },
  {
    "pos": 3500,
    "text": "You are the <span class='red'>best</span> person in the"
  },
  {
    "pos": 3250,
    "text": "You are the <span class='red'>best</span> person in"
  },
  { "pos": 350, "text": "You are the <span class='red'>best</span> person" },
  { "pos": 300, "text": "You are the <span class='red'>best</span>" },
  { "pos": 250, "text": "You are the" },
  { "pos": 200, "text": "You are" },
  { "pos": 150, "text": "You" },
  { "pos": 100, "text": "dear person," },
  { "pos": 25, "text": "dear" },
  { "pos": 0, "text": "" }
]

let parsedData = data.reduce((obj, item) => {
    return {
      ...obj,
      [item['pos']]: item,
    }
  }, {}),
    posArray = Object.keys(parsedData).sort((a, b) => b - a),
    currentPos = window.pageYOffset

window.addEventListener('scroll', () => {
	let { pageYOffset } = window,
      ele = document.querySelector("#main"),
      bg = document.querySelector(".page"),
      newPos = posArray.find(e => e <= pageYOffset)
  
  if (currentPos !== newPos) {
    ele.innerHTML = parsedData[newPos].text
    bg.style.backgroundImage = parsedData[newPos].bg || "initial"
    currentPos = newPos
  }
});