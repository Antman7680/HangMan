const image_list = ['hangman_7.png', 'hangman_6.png', 'hangman_5.png', 'hangman_4.png', 'hangman_3.png', 'hangman_2.png', 'hangman_1.png'];//list of images

const words = [{ word: "apple", topic: "Fruit", hint: "Typically red but also can be found as yellow or green", number: 1 }, { word: "orange", topic: "Fruit", hint: "Shares the name with the color", number: 2 }, { word: "mango", topic: "Fruit", hint: "A sweet fruit found in more tropical environments and mostly red and green", number: 3 }, { word: "watermelon", topic: "Fruit", hint: "A big round fruit that has green skin", number: 4 }, { word: "cherry", topic: "Fruit", hint: "Small, red, and very sweet", number: 5 }, { word: "banana", topic: "Fruit", hint: "Long and doesn\'t have skin instead has a peel", number: 6 }, { word: "strawberry", topic: "Fruit", hint: "Small, red, sweet, and has green leafs", number: 7 }, { word: "dragon_fruit", topic: "Fruit", hint: "It is named after a mythical creature", number: 8 }, { word: "blue_berry", topic: "Fruit", hint: "Small, sweet, and the first word is a color", number: 9 }, { word: "grape", topic: "Fruit", hint: "Small, sweet, and can be found as red or green", number: 10 }, { word: "pineapple", topic: "Fruit", hint: "A yellow fruit whose center is non-edible and can determine if ripe by if the leafs can be pulled out with ease", number: 11 }, { word: "lemon", topic: "Fruit", hint: "Yellow and while has many uses great for a sour making a sour drink", number: 12 }, { word: "peach", topic: "Fruit", hint: "Typical found in shades of red and yellow while being hairy", number: 13 }, { word: "durian", topic: "Fruit", hint: "Spiky and most say it has an unpleasant smell", number: 14 }, { word: "kiwi", topic: "Fruit", hint: "Brown hairy skin and green inside", number: 15 }, { word: "the_flash", topic: "DC Super Hero", hint: "I'm the fastest man alive", number: 16 }, { word: "iron_man", topic: "Marvel Super Hero", hint: "Genius, billionaire, playboy, philanthropist.", number: 17 }, { word: "spider-man", topic: "Marvel Super Hero", hint: "Your friendly neighborhood ...", number: 18 }, { word: "batman", topic: "DC Super Hero", hint: "I am the vengeance! I am the Night! I am ...", number: 19 }, { word: "superman", topic: "DC Super Hero", hint: "The last son of krypyon", number: 20 }, { word: "captain_america", topic: "Marvel Super Hero", hint: "I can do this all day", number: 21 }, { word: "thor", topic: "Marvel Super Hero", hint: "God of Thunder", number: 22 }, { word: "green_lantern", topic: "DC Super Hero", hint: "In brightest day. In blackest night. No evil shall escape my sight. Beware my powers! ...", number: 23 }, { word: "wolverine", topic: "Marvel Super Hero", hint: "I\'m the best at what I do, but what I do isn\'t very nice", number: 24 }, { word: "wonder_woman", topic: "DC Super Hero", hint: "Princess of Themyscira", number: 25 }, { word: "black_widow", topic: "Marvel Super Hero", hint: "Named after a spider", number: 26 }, { word: "aquaman", topic: "DC Super Hero", hint: "King of Atlantis", number: 27 }, { word: "green_arrow", topic: "DC Super Hero", hint: "You have failed this city", number: 28 }, { word: "hawkeye", topic: "Marvel Super Hero", hint: "Never misses a shot", number: 29 }, { word: "daredevil", topic: "Marvel Super Hero", hint: "The man without fear", number: 30 }, { word: "the_incredible_hulk", topic: "Marvel Super Hero", hint: "... Smash", number: 31 }, { word: "ant-man", topic: "Marvel Super Hero", hint: "Shrinks down to the size of an ...", number: 32 }, { word: "supergirl", topic: "DC Super Hero", hint: "Girl of Steal", number: 33 }, { word: "black_panther", topic: "Marvel Super Hero", hint: "King of Wakanda", number: 34 }, { word: "Math", topic: "School Subject", hint: "Numbers", number: 35 }, { word: "English", topic: "School Subject", hint: "Writing and reading", number: 36 }, { word: "History", topic: "School Subject", hint: "The study of past events", number: 37 }, { word: "Science", topic: "School Subject", hint: "Experiments", number: 38 }, { word: "Gym", topic: "School Subject", hint: "Working out", number: 39 }, { word: "Art", topic: "School Subject", hint: "Drawing", number: 40 }, { word: "Music", topic: "School Subject", hint: "... Theory", number: 41 }, { word: "Drama", topic: "School Subject", hint: "Acting", number: 42 }, { word: "Dance", topic: "School Subject", hint: "Expressive Movement", number: 43 }, { word: "Health", topic: "School Subject", hint: "The study of the body", number: 44 }, { word: "nike", topic: "Shoe Brand", hint: "Just Do It", number: 45 }, { word: "adidas", topic: "Shoe Brand", hint: "Impossible Is Nothing", number: 46 }, { word: "reebok", topic: "Shoe Brand", hint: "I Am What I Am", number: 47 }, { word: "converse", topic: "Shoe Brand", hint: "Shoes are Boring. Wear Sneakers", number: 48 }, { word: "new_balance", topic: "Show Brand", hint: "Fearlessly Independent Since 1906", number: 49 }, { word: "samsung", topic: "Tech Brand", hint: "Do What You Can\’t", number: 50 }, { word: "apple", topic: "Tech Brand", hint: "Think Different", number: 51 }, { word: "mircosoft", topic: "Tech Brand", hint: "We believe in what people make possible", number: 52 }, { word: "sony", topic: "Tech Brand", hint: "Make. Believe", number: 53 }, { word: "paramount", topic: "Entertainment Brands", hint: "Popular is ...", number: 54 }, { word: "warner_bros", topic: "Entertainment Brands", hint: "The stuff dreams are made of", number: 55 }, { word: "universal", topic: "Entertainment Brands", hint: "It\'s More Than Magic.It\'s Real", number: 56 }, { word: "disney", topic: "Entertainment Brands", hint: "The Happiest Place on Earth", number: 57 }, { word: "old_navy", topic: "Clothing Brand", hint: "We are change", number: 58 }, { word: "levis", topic: "Clothing Brand", hint: "Quality never goes out of style", number: 59 }, { word: "north_face", topic: "Clothing Brand", hint: "Never stop exploring", number: 60 }, { word: "under_armour", topic: "Clothing Brands", hint: "... Makes you better", number: 61 }, { word: "gatorage", topic: "Beverage Brand", hint: "Is it in you?", number: 62 }, { word: "pepsi", topic: "Beverage Brand", hint: "That\'s What I Like", number: 63 }, { word: "coca-cola", topic: "Beverage Brand", hint: "Taste the feeling", number: 64 }, { word: "tom_and_jerry", topic: "Cartoons", hint: "Cat cases mouse", number: 65 }, { word: "teenage_mutant_ninja_turtles", topic: "Cartoons", hint: "Turtles in a half shell", number: 66 }, { word: "spongebob_squarepants", topic: "Cartoons", hint: "Ohh Who lives in a Pineapple Under the Sea", number: 67 }, { word: "gravity_falls", topic: "Cartoons", hint: "Just South of Strange. Just North of Normal. Just East of Eerie.", number: 68 }, { word: "transformers", topic: "Cartoons", hint: "Autobots roll out", number: 69 }, { word: "voltron", topic: "Cartoons", hint: "Land Team, form legs... Sea Team, form torso and arms... Air Team, form head!", number: 70 }, { word: "avatar_the_last_airbender", topic: "Cartoons", hint: "Long ago, the four nations lived together in harmony", number: 71 }, { word: "randy_cunningham_ninth_grade_ninja", topic: "Cartoons", hint: "Come on, baby, drop some secret ninja knowledge on me", number: 72 }, { word: "flintstones", topic: "Cartoons", hint: "Yabba Dabba Doo!", number: 73 }, { word: "mickey_mouse_clubhouse", topic: "Cartoons", hint: "Meeska Mooska Mickey Mouse", number: 74 }, { word: "simpsons", topic: "Cartoons", hint: "Aye Carumba!", number: 75 }, { word: "phineas_and_ferb", topic: "Cartoons", hint: "There\'s a hundred and four days to summer vacation...", number: 76 }, { word: "the_last_of_us", topic: "Video Games", hint: "When you are lost in the dark, look towards the light. Believe in the fireflies", number: 77 }, { word: "god_of_war", topic: "Video Games", hint: "Boyy!", number: 78 }, { word: "pokemin", topic: "Video Game", hint: "Gotta Catch Them All", number: 79 }, { word: "super_mario", topic: "Video Game", hint: "It\'s a me ...", number: 80 }, { word: "halo", topic: "Video Game", hint: "Permission to give the Covenant their bomb back sir?", number: 81 }, { word: "zelda", topic: "Video Games", hint: "It is dangerous out there. Here take this.", number: 82 }, { word: "call_of_duty", topic: "Video Game", hint: "History Is Written By The Victor. ", number: 83 }, { word: "minecraft", topic: "Video Game", hint: "I, am STEVE", number: 84 }, { word: "fornite", topic: "Video Game", hint: "#1 Victory Royale", number: 85 }, { word: "metal_gear", topic: "Video Game", hint: "Snake? Snake? SNAKE!?", number: 86 }, { word: "super_smash_bros", topic: "Video Game", hint: "A super clash between video games", number: 87 }, { word: "mario_kart", topic: "Video Game", hint: "Blue Shell", number: 88 }, { word: "uncharted", topic: "Video Game", hint: "Sic Parvis Magna", number: 89 }, { word: "ghost_of_tsushima", topic: "Video Game", hint: "Honor died on the beach", number: 90 }, { word: "the_truman_show", topic: "Movie", hint: "In case I don\'t see you. Good Afternoon, Good Evening, and Good Night", number: 91 }, { word: "whiplash", topic: "Movie", hint: "Are you RUSHING, Or ARE YOU DRAGGING?", number: 92 }, { word: "aliens", topic: "Movie Franchise", hint: "No one can hear you scream in space", number: 93 }, { word: "lord_of_the_rings", topic: "Movie Franchise", hint: "One Ring to rule them all.", number: 94 }, { word: "oppenheimer", topic: "Movie", hint: "Now I have become death. Destory of worlds", number: 95 }, { word: "scott_pilgrim_versus_the_world", topic: "Movie", hint: "We are Sex-Bob-Omb", number: 96 }, { word: "star_wars", topic: "Movie Franchise", hint: "Not as clumsy or random as a blaster; an elegant weapon for a more civilized age", number: 97 }, { word: "john_wick", topic: "Movie Franchise", hint: "'The Baba Yaga'", number: 98 }, { word: "moneyball", topic: "Moive", hint: "The problem we're trying to solve is that there are rich teams and there are poor teams. Then there's fifty feet of crap, and then there's us. It's an unfair game.", number: 99 }, { word: "gladiator", topic: "Movie", hint: "Are you not Entertained!", number: 100 }, { word: "real_steal", topic: "Movie", hint: "The People's Champion? Sounds pretty good to me.", number: 101 }, { word: "rocky", topic: "Movie Franchise", hint: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That's how winning is done", number: 102 }, { word: "rambo(first_blood)", topic: "Movie Franchise", hint: "I\'ve lived in a world of death", number: 103 }, { word: "fast_and_the_furious", topic: "Movie Franchise", hint: "It don\'t matter if you win by an inch or a mile.Winning\'s winning", number: 104 }, { word: "good_will_hunting", topic: "Movie", hint: "Son of a [gun] he stole my line", number: 105 }, { word: "accommodate", topic: "Diffcult to spell", hint: "Provide lodging or sufficient space for", number: 106 }, { word: "knight", topic: "Single Vowel Words", hint: "A (answer) in shining armour", number: 107 }, { word: "stress", topic: "Single Vowel Words", hint: "A state of worry or mental tension", number: 108 }, { word: "blind", topic: "Single Vowel Words", hint: "The inability see", number: 109 }, { word: "onomatopoeia", topic: "Diffcult to spell", hint: "Referring to words that are similar to sounds or noises", number: 110 }, { word: "black", topic: "Color", hint: "Absence of all colors", number: 111 }, { word: "red", topic: "Color", hint: "Primary Color", number: 112 }, { word: "blue", topic: "Color", hint: "Primary Color", number: 113 }, { word: "yellow", topic: "Color", hint: "Primary Color", number: 114 }, { word: "green", topic: "Color", hint: "Secondary Color", number: 115 }, { word: "purple", topic: "Color", hint: "Secondary Color", number: 116 }, { word: "orange", topic: "Color", hint: "Secondary Color", number: 117 }, { word: "white", topic: "Color", hint: "Presence of all colors", number: 118 }];


var keys_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

let words_generated = [];

var start_tries=6;

var streak = 0;
var longest_streak = 0;

var gameOn = false;

var hint_on = true;

function showHint(h) {
    if (num_tries <= (start_tries/ 2) && hint_on) {
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

function checkStreak() {
    if (streak >= longest_streak) {
        longest_streak = streak;
    }
}

function genWord() {
    num_gen = Math.floor(Math.random() * (words.length));//This right here generates a number between 0-and length of the list
    let word_used = false;
    if (words_generated.length === 0) {
        words_generated[0] = num_gen;
    }
    else {
        while (!word_used) {
            if (words_generated.indexOf(num_gen) != -1) {
                num_gen = Math.floor(Math.random() * (words.length));
            }
            else {
                word_used = true;
            }
        }
        words_generated[words_generated.length] = num_gen;
    }
    if (words_generated.length >= (words.length) / 2) {
        words_generated.splice(0, 1);
    }
    word = words[num_gen].word;//This pulls a word from the list using the number we generated.
    word.toLowerCase();
    word_array = word.split("");
    topic = words[num_gen].topic;
    hint = words[num_gen].hint;
    document.getElementById("topic").innerHTML = (topic);//Displays the topic at the span tag with the id topic
    console.log(words[num_gen].word + " " + words[num_gen].topic + " " + words[num_gen].hint + " " + words[num_gen].number);
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
        else if (':' == word_array[id]) {
            const s = document.createElement("span");
            const text = document.createTextNode(":");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id++;
        }
        else if ('-' == word_array[id]) {
            const s = document.createElement("span");
            const text = document.createTextNode("-");
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
    answer_list = [];
    keys_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    document.getElementById("guesses").innerHTML = "";
    document.getElementById("wrong_guesses").innerHTML = "";
    document.getElementById("hint_display").innerHTML = "";
    document.getElementById("topic").innerHTML = "";
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
}

var body = document.getElementById("body");//Creates a var for the body
body.addEventListener("keyup", (e) => {//Creates an event listener that listens for when the user presses a key and it goes up
    key = e.key;
    if (key == 'Enter' || key == ' ') {
        if (!gameOn) {
            display_game();
        }
    }
    else if(gameOn){
        spell_check(word_array, key.toLowerCase());//calls function when listener goes off
    }
});

function spell_check(wa, k) {//declares function with parameter key
    var correct_letter = false;
    if (keys_list.indexOf(k)!=-1&&gameOn){
        for (let i=0;i<wa.length;i++){
            if (k===wa[i].toLowerCase()) {
                document.getElementById(i).innerHTML = (k.toUpperCase());
                correct_letter = true;
            }
        }

        if (correct_letter == false && gameOn){
            const s = document.createElement("span");
            const text = document.createTextNode(k.toUpperCase() + " ");
            s.appendChild(text);
            document.getElementById("wrong_guesses").appendChild(s).setAttribute('id', "wg" + num_tries);

            num_tries --;
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
