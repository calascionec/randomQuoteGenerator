var quotes = {
  "George Lucas": "Don’t listen to your peers, don’t listen to the authority figures in your life  your parents  and don’t listen to the culture. Only listen to yourself. That’s where you’re going to find the truth.",
  "Oscar Wilde": "I can resist everything except temptation.",
  "Issac Asimov": "People who think they know everything are a great annoyance to those of us who do.",
  "Alice Rooevelt Longworth": "If you haven't got anyhting nice to say about anybody, come sit next to me.",
  "Oliver Herford": "A woman's mind is cleaner than a man's: She changes it more often.",
  "Elbert Hubbard": "Do not take life too seriously. You will never get out of it alive."
}
var randomQuote = function() {
  var result;
  var count = 0;
  for (var author in quotes) {
    if (Math.random() < 1/++count) {
      result = author;
    }
  }

  document.getElementById("quote-text").innerHTML = quotes[result];
  document.getElementById("quote-author").innerHTML = result;
};

randomQuote();
document.getElementById("change-quote").addEventListener("click", randomQuote);
