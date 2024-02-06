// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const noun1chosen = document.querySelector("#choosenNoun1");
const verbchosen = document.querySelector("#choosenVerb");
const adjectivechosen = document.querySelector("#choosenAdjective");
const noun2chosen = document.querySelector("#choosenNoun2");
const settingchosen = document.querySelector("#choosenSetting");
const student = document.querySelector("#studentId");


// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const story = document.querySelector("#story");
const random = document.querySelector("#random");

// Variables for pre-defined arrays
const nouns1 = ["dog", "cat", "tree", "house", "car", "book", "computer", "phone", "lake", "mountain"];
const verbs = ["run", "jump", "swim", "fly", "read", "write", "sing", "dance", "think", "sleep"];
const adjectives = ["beautiful", "fast", "slow", "warm", "cold", "bright", "dark", "colorful", "loud", "quiet"];
const nouns2 = ["bird", "fish", "river", "star", "flower", "forest", "cloud", "beach", "sun", "moon"];
const settings = ["forest", "desert", "mountain", "city", "village", "ocean", "space", "castle", "school", "island"];

// Variables for count to grab array elements
var noun1count = 0;
var verbcount = 0;
var adjectivecount = 0;
var noun2count = 0;
var settingcount = 0;

var wordsBuilding = [];
var wordIndex = 0;
var interval = null;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1chosen.innerHTML = nouns1[noun1count];
    // if-else to change count setting
    noun1count = (noun1count + 1) % nouns1.length;
    student.textContent = "Grayson Zetic - 1217611";
}

function verb_on_click() {
    verbchosen.innerHTML = verbs[verbcount];
    verbcount = (verbcount + 1) % verbs.length;
}

function adjective_on_click() {
    adjectivechosen.innerHTML = adjectives[adjectivecount];
    adjectivecount = (adjectivecount + 1) % adjectives.length;
}

function noun2_on_click() {
    noun2chosen.innerHTML = nouns2[noun2count];
    noun2count = (noun2count + 1) % nouns2.length;
}

function setting_on_click() {
    settingchosen.innerHTML = settings[settingcount];
    settingcount = (settingcount + 1) % settings.length;
}

function playback_on_click() {
    story.innerHTML = `Once upon a time, a ${noun1chosen.innerHTML} decided to ${verbchosen.innerHTML} in a ${settingchosen.innerHTML}. It was very ${adjectivechosen.innerHTML}, and there was a ${noun2chosen.innerHTML} watching from afar.`;
}

function random_on_click() {
    noun1chosen.innerHTML = nouns1[Math.floor(Math.random() * nouns1.length)];
    verbchosen.innerHTML = verbs[Math.floor(Math.random() * verbs.length)];
    adjectivechosen.innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];
    noun2chosen.innerHTML = nouns2[Math.floor(Math.random() * nouns2.length)];
    settingchosen.innerHTML = settings[Math.floor(Math.random() * settings.length)];
    wordsBuilding[story] = `Once upon a time, a ${noun1chosen.innerHTML} decided to ${verbchosen.innerHTML} in a ${settingchosen.innerHTML}. It was very ${adjectivechosen.innerHTML}, and there was a ${noun2chosen.innerHTML} watching from afar.`;
    buildWord();
}
function buildWord() {
    wordIndex = 0;
    clearInterval(interval);
    story.innerHTML = "";
    interval = setInterval(s, 10);    
}
function s(){
    story.textContent += wordsBuilding[story][wordIndex++];
    if (wordIndex == wordsBuilding[story].length) {
        wordIndex = 0;
        clearInterval(interval);
    } 
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
