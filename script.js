let jokes = [
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "What do you get from a pampered cow? Spoiled milk.",
  "Why don’t oysters share their pearls? Because they’re shellfish!",
  "What did one wall say to the other? I’ll meet you at the corner.",
  "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why was the math book sad? Because it had too many problems.",
  "Why do elephants never use computers? They’re afraid of the mouse!",
  "Why don’t seagulls fly over the bay? Because then they’d be bagels!",
  "How do you make a tissue dance? Put a little boogey in it!",
  "What do you get when you cross a snowman and a shark? Frostbite.",
  "What do you call an alligator in a vest? An investigator!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why did the computer go to the doctor? It had a virus!",
  "What do you call a lazy kangaroo? A pouch potato.",
  "Why don’t ghosts go on vacation? They prefer to haunt places.",
  "Why did the man put his money in the freezer? He wanted cold hard cash!"
];

const randomJokes = () => {
   return console.log(jokes[Math.floor(Math.random() * jokes.length)]);
   
}

randomJokes()
