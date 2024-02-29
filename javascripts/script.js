const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageBtn = document.getElementById('check-message-btn');

const isSpam = (msg) => {
  return denyList.some(regex => {
    if(regex.test(msg)){
      console.log(msg.match(regex)); // for testing
    }
    return regex.test(msg);
  });
};

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:\s|^)fr[3e][e3] m[o0]n[3e]y(?:\s|$)/i;
const stockRegex = /(?:\s|^)[s5][t7][o0][([{]k [a@4]l[e3]r[t7](?:\s|$)/i;
const dearRegex = /(?:\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

const denyList = [
  helpRegex,
  dollarRegex,
  freeRegex,
  stockRegex,
  dearRegex,
];

function checkUserInput(){
  if(messageInput.value === ""){
    alert("Please enter the message.");
    return;
  }
  result.textContent = isSpam(messageInput.value) 
    ? "Oh no! This looks like a spam message." 
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
}

checkMessageBtn.addEventListener("click", checkUserInput);

messageInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    checkUserInput();
  }
});