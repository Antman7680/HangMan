const image_list = ['hangman_7.png', 'hangman_6.png', 'hangman_5.png', 'hangman_4.png', 'hangman_3.png', 'hangman_2.png', 'hangman_1.png'];//list of images

let char_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

const start_tries = 6;

let wordList = [];

fetch('words.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text(); // Read the file as text
    })
    .then(data => {
        wordList = JSON.parse(data); // Parse the JSON data and assign to global variable
        console.log(wordList); // The array of objects is now available
    })
    .catch(error => console.error('Error loading file:', error));

console.log(wordList.toString());

let words_generated = [];

var streak = 0;
var longest_streak = 0;

var gameOn = false;

var hint_on = true;

function checkStreak() {
    if (streak >= longest_streak) {
        longest_streak = streak;
    }
}

function showHint(h) {
    if (num_tries <= (start_tries / 2) && hint_on) {
        document.getElementById("hint_display").innerHTML = (h);
    }
}

function uLikeHint() {
    if (hint_on) {
        hint_on = false;
    }
    else {
        hint_on = true;
    }
    if (hint_on) {
        document.getElementById("isHintOn").innerHTML = "On";
    }
    else {
        document.getElementById("isHintOn").innerHTML = "Off";
    }
    console.log(hint_on);
}

function showTopic() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("topic").innerHTML = (topic);
}

function genWord() {
    num_gen = Math.floor(Math.random() * (wordList.length));//This right here generates a number between 0-and length of the list
    let word_used = false;
    while (!word_used) {
        if (words_generated.indexOf(num_gen) !== -1) {
            num_gen = Math.floor(Math.random() * (wordList.length));
        } else {
            word_used = true;
        }
    }
    words_generated.push(num_gen);

    // Ensure we don't have too many used words
    if (words_generated.length >= (wordList.length) / 2) {
        words_generated.splice(0, 1);
    }

    // Accessing the word, hint, and topic
    let item = wordList[num_gen];
    word = item.word.toLowerCase(); // Ensure it's lowercase
    word_array = word.split(""); // Split the word into an array of characters
    topic = item.topic;
    hint = item.hint;
    number = item.number;

    console.log(word + " " + topic + " " + hint + " " + number);
}

function display_wordF() {
    var display_word = "";
    for (let i = 0; i < word_array.length; i++) {
        if (word_array[i] == "_") {
            display_word += " ";
        }
        else if (i == 0 || word_array[i - 1] == "_") {
            display_word += word_array[i].toUpperCase();
        }
        else {
            display_word += word_array[i].toLowerCase();
        }
    }
    console.log(display_word);
    return display_word;
}

function create_template(word_array) {
    document.getElementById("correct_guesses").innerHTML = "";
    let id = 0;

    for (let a = (word_array.length); a > 0; a--) {
        if ('_' == word_array[id]) {
            const s = document.createElement("span");
            const text = document.createTextNode("_");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('style', 'color:white');
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id++;
        }
        else if (char_list.indexOf(word_array[id])===-1) {
            const s = document.createElement("span");
            const text = document.createTextNode(word_array[id]);
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id++;
        }
        else {
            const s = document.createElement("span");
            const text = document.createTextNode(" _ ");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id++;
        }
    }
}

function display_game() {
    if (wordList.length === 0) {
        console.error("Word list is empty. Cannot start the game.");
        return; // Prevent starting the game if wordList is not populated
    }

    answer_list = [];
    keys_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    document.getElementById("guesses").innerHTML = "";
    document.getElementById("wrong_guesses").innerHTML = "";
    document.getElementById("hint_display").innerHTML = "";
    document.getElementById("lstreak").innerHTML = longest_streak;
    document.getElementById("cstreak").innerHTML = streak;

    gameOn = true;

    num_tries = start_tries;
    document.getElementById("attempts").innerHTML = ("" + num_tries);
    document.getElementById("display-img").src = (image_list[num_tries]);

    document.getElementById("display-img").setAttribute("style", "visibility:visible;");
    document.getElementById("start").setAttribute("style", "visibility:hidden;");
    document.getElementById("showHint").setAttribute("style", "visibility:hidden;");

    genWord();
    create_template(word_array);
    showTopic();
}

var body = document.getElementById("body");//Creates a var for the body
body.addEventListener("keyup", (e) => {//Creates an event listener that listens for when the user presses a key and it goes up
    key = e.key;
    if (key == 'Enter' || key == ' ') {
        if (!gameOn) {
            display_game();
        }
    }
    else if (gameOn) {
        spell_check(word_array, key.toLowerCase());//calls function when listener goes off
    }
});

function spell_check(wa, k) {//declares function with parameter key
    var correct_letter = false;
    if (keys_list.indexOf(k) != -1 && gameOn) {
        for (let i = 0; i < wa.length; i++) {
            if (k === wa[i].toLowerCase()) {
                document.getElementById(i).innerHTML = (k.toUpperCase());
                correct_letter = true;
            }
        }

        if (correct_letter == false && gameOn) {
            const s = document.createElement("span");
            const text = document.createTextNode(k.toUpperCase() + " ");
            s.appendChild(text);
            document.getElementById("wrong_guesses").appendChild(s).setAttribute('id', "wg" + num_tries);

            num_tries--;
            document.getElementById("attempts").innerHTML = ("" + num_tries);
        }
        keys_list.splice(keys_list.indexOf(k), 1);
    }
    document.getElementById("display-img").setAttribute('src', image_list[num_tries]);
    showHint(hint);
    ending_screen();
}

function ending_screen() {
    let index = 0;
    while (index < word_array.length && gameOn) {
        let answer = document.getElementById(index).innerHTML;
        answer_list[index] = answer.toLowerCase();
        index++;
    }
    if (num_tries == 0) {//if function
        document.getElementById("guesses").innerHTML = ("Sorry try again the word was " + display_wordF());//prints the word and to try again once the user runs out of attempts
        gameOn = false;
        streak = 0;
        document.getElementById("start").setAttribute("style", "visibility:visible;");
        document.getElementById("showHint").setAttribute("style", "visibility:visible;");
    }
    else if ((word_array.toString() === answer_list.toString())) {
        document.getElementById("correct_guesses").innerHTML = ('You got the word');
        document.getElementById("wrong_guesses").innerHTML = ('The word was ' + display_wordF());
        gameOn = false;
        streak++;
        document.getElementById("start").setAttribute("style", "visibility:visible;");
        document.getElementById("showHint").setAttribute("style", "visibility:visible;");
    }
    checkStreak();
}
