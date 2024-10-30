const image_list = ['hangman_7.png', 'hangman_6.png', 'hangman_5.png', 'hangman_4.png', 'hangman_3.png', 'hangman_2.png', 'hangman_1.png'];//list of images

var fruit_list = ['apple', 'orange', 'mango', 'watermelon', 'cherry', 'banana', 'strawberry', 'dragon_fruit', 'blue_berry', 'grape', 'pineapple', 'lemon', 'peach', 'durian','kiwi'];//List of fruits
var fruit_topic = ['Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruit', 'Fruits', 'Fruits', 'Fruits','Fruits','Fruits'];//List of topics
var fruit_hint = ['The fruit is red', 'The fruit is named after a color', 'The fruit is commonly red and green', 'It is big and green', 'The fruit is red small and sweet', 'It is yellow and can be used to make delicious bread', 'A small red berry', 'Named after a mythical creature', 'Small either blue or purple and makes a great pie.', 'Very small and commonly red or green and makes a great soda or juice', 'The main reason America made Hawaii a state', 'Yellow and used to make a sour drink', 'Sweet with shades of orange and red while being somewhat hairy','Smelly and spiky','Brown and hairy outside and green inside'];//Hint for fruit generated

var super_hero_list = ['the_flash', 'iron_man', 'spider-man', 'batman', 'superman', 'captain_america', 'thor', 'green_lantern', 'wolverine', 'wonder_woman', 'black_widow', 'aquaman', 'green_arrow', 'hawkeye', 'daredevil', 'the_incredible_hulk','ant-man','supergirl','hellboy','black_panther'];//Super hero list
var super_hero_topic = ['DC Super Heros', 'Marvel Super Heros', 'Marvel Super Heros', 'DC Super Hero', 'DC Super Hero', 'Marvel Super Hero', 'Marvel Super Heros', 'DC Super Heros', 'Marvel Super Hero', 'DC Super Hero', 'Marvel Super Hero', 'DC Super Heros', 'DC Super Heros', 'Marvel Super Hero', 'Marvel Super Hero', 'Marvel Super Hero','Marvel Super Hero','DC Super Hero','Dark Horse Comics','Marvel Super Hero'];//Topic for super hero
var super_hero_hint = ['He is very fast', 'The tin man', 'Friendly neighborhood', 'I am the vengeance! I am the Night! I am ...', 'The Last Son of Krypton', 'I can do this all day', 'God of Thunder', 'In Brightest Day, In Blackest Night. No Evil Should Escape my Sight. Beware my powers!', 'Known for his adamantium claws and regenerative healing abilities', 'Princess of Themyscira', 'Named after a Spider with a red hour glass', 'Can talk to fish', 'You failed this city', 'Never misses a shot', 'The man without fear', 'While the character is green he was original gray', 'Shrinks to the size of an ...', 'The cousin of Superman','To be other than human does not necessarily mean to be less.','King of Wakanda'];//Hint for super hero generated

var school_subject_list = ['math', 'english', 'history', 'science', 'gym', 'art', 'music', 'drama', 'dance', 'health', 'algebra', 'physics','geometry'];
var school_subject_topic = ['School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject','School Subject'];
var school_subject_hint = ['Numbers', 'Writing', 'Past events', 'Experiments', 'Working Out', 'Bob Ross', 'Instruments', 'Acting', 'A mix between working out and music', 'Learning about the human body', 'Find x', 'An object in motion stays in motion','Study of shapes'];

var popular_brands_list = ['nike', 'apple', 'mircosoft', 'adidas', 'sony', 'disney', 'under_armour', 'universal','north_face','reebok','converse','coca_cola','pepsi'];
var popular_brands_topic = ['Shoe Brands', 'Tech Brands', 'Tech Brands', 'Shoe Brands', 'Tech Brands', 'Entertainment Brands', 'Clothing Brands', 'Entertainment Brands', 'Clothing Brands', 'Shoe Brands', 'Shoe Brands', 'Beverage Brands','Beverage Brands'];
var popular_brands_hint = ['Just Do It!', 'Think Different', 'We believe in what people make possible', 'Impossible Is Nothing', 'Make. Believe', 'The Happiest Place on Earth', '...Makes You Better', 'It\'s More Than Magic.It\'s Real', 'Never stop exploring', 'I Am What I Am', 'Shoes are Boring. Wear Sneakers', 'Taste the Feeling', 'That\'s What I Like'];

var cartoons_list = ['tom_and_jerry', 'teenage_mutant_ninja_turtles', 'spongebob_squarepants', 'gravity_falls', 'transformers', 'voltron', 'avatar_the_last_airbender', 'randy_cunningham_ninth_grade_ninja', 'flintstones', 'mickey_mouse_clubhouse', 'simpsons','phineas_and_ferb'];
var cartoons_topic = ['Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons', 'Cartoons','Cartoons'];
var cartoon_hint = ['Cat and mouse', '... In a Half Shell', 'Ohh Who lives in a Pineapple Under the Sea', 'Bill is watching', 'Autobots Roll Out', 'Land Team, form legs... Sea Team, form torso and arms... Air Team, form head!', 'Long ago, the four nations lived together in harmony', 'Come on, baby, drop some secret ninja knowledge on me', 'yabba dabba doo!', 'Meeska Mooska Mickey Mouse','Aye Carumba!','There\'s a hundred and four days to summer vacation...'];

var video_games = ['the_last_of_us', 'god_of_war', 'pokemon', 'super_mario', 'halo', 'zelda', 'call_of_duty', 'minecraft', 'fortnite', 'metal_gear', 'super_smash_bros', 'mario_kart', 'uncharted','ghost_of_tsushima'];
var video_games_topic = ['Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games', 'Video Games','Video Games'];
var video_games_hint = ['When your lost look towards the light. Believe in the Fireflies', 'Boyy!', 'Gotta Catch Them All', 'It\'s a me ...', 'I need a weapon', 'It is dangerous out there. Here take this.', 'Mason. The Numbers! It\'s the NUMBERS MASON!', 'I, Am STEVE', '#1 Victory Royale', 'Snake? Snake? SNAKE!?', 'A super clash of character', 'Blue Shell', 'Sic Parvis Magna','Honor Died on the beach'];

var movie_list = ['the_truman_show', 'whiplash', 'aliens', 'lord_of_the_rings', 'oppenheimer', 'scott_pilgrim_versus_the_world', 'star_wars', 'john_wick', 'moneyball','gladiator','real_steal','rocky','rambo(first_blood)','fast_and_the_furious'];
var movie_topic = ['Movies', 'Movies', 'Movie Franchise', 'Movie Franchise', 'Movies', 'Movies', 'Movie Franchise', 'Movie Franchise', 'Movies','Movies','Movies','Movie Franchise','Movie Franchise','Movie Franchise'];
var movie_hints = ['In case I don\'t see you. Good Afternoon, Good Evening, and Good Night', 'Are you RUSHING, Or ARE YOU DRAGGING?', 'No one can hear you scream in space', 'One ring to rule them all', 'Now I have become death', 'We are Sex-Bob-Omb, 1! 2! 3! 4!', 'It\'s a trap!', 'The Baba Yaga', 'I hate losing more than I want to win', 'Are you not Entertained!', 'Rocky but with robots', 'The true underdog story', 'I\'ve lived in a world of death', 'It don\'t matter if you win by an inch or a mile.Winning\'s winning'];

var hard_words = ['accommodate', 'knight', 'stress', 'blind', 'onomatopoeia', 'supercalifragilisticexpialidocious'];
var hard_topic = ['Difficult to spell', 'Single Vowel Words', 'Single Vowel Words', 'Single Vowel Words', 'Hard to spell', 'Extremely Difficult to Spell'];
var hard_hint = ['Provide lodging or sufficient space for.', 'A (answer) in shining armour', 'A state of worry or mental tension', 'The inability see', 'Referring to words that are similar to sounds or noises', 'Good or wonderful'];

var colored_list = ['black', 'red', 'blue', 'yellow', 'green', 'orange', 'purple', 'white'];
var colored_topic = ['Colors', 'Colors', 'Colors', 'Colors', 'Colors', 'Colors', 'Colors', 'Colors'];
var colored_hints = ['Absence of all colors', 'Primary color', 'Primary color', 'Primary color', 'Secondary color', 'Secondary color', 'Secondary color', 'Presence of all colors'];

var kitchen_list = ['knife', 'fork', 'spoon', 'stove', 'microwave', 'air_fryer', 'refrigerator'];
var kitchen_topic = ['Items found in the kitchen', 'Items found in the kitchen', 'Items found in the kitchen', 'Items found in the kitchen', 'Items found in the kitchen', 'Items found in the kitchen', 'Items found in the kitchen'];
var kitchen_hints = ['Sharp object used to cut food', 'Used to pick up solid food easily', 'Item used to pick liquid food easily', 'Used to cook food', 'Used to reheat food', 'Used to cook food in a healthy way', 'Used to keep food cold and fresh'];

var everyday_house_list = ['sofa', 'television', 'carpet', 'bed', 'dresser','fan'];
var everyday_house_topic = ['Found in living room', 'Found in living room', 'Found in house', 'Found in bedroom', 'Found in bedroom','Found in house'];
var everyday_house_hints = ['Used to relax and sit', 'Used to watch entertainment', 'A type of flooring', 'Used to lay down and sleep', 'Used to store clothes','Used to keep cool'];

const words_list = fruit_list.concat(super_hero_list, school_subject_list, popular_brands_list, cartoons_list, video_games, movie_list, hard_words, colored_list, kitchen_list, everyday_house_list);//Combines the list
const topic_list = fruit_topic.concat(super_hero_topic, school_subject_topic, popular_brands_topic, cartoons_topic, video_games_topic, movie_topic, hard_topic, colored_topic, kitchen_topic, everyday_house_topic);//Combines the topic list
const hint_list = fruit_hint.concat(super_hero_hint, school_subject_hint, popular_brands_hint, cartoon_hint, video_games_hint, movie_hints, hard_hint, colored_hints, kitchen_hints, everyday_house_hints);//Combines the hint list

var keys_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let words_generated = [];

var start_tries = 6;

var streak = 0;
var longest_streak = 0;

gameOn = false;

var hint_on = true;

function showHint() {
    if (num_tries <= (start_tries / 2) && hint_on) {
        document.getElementById("hint_display").innerHTML = (hint_list[num_gen]);
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
    num_gen = Math.floor(Math.random() * (words_list.length));//This right here generates a number between 0-and length of the list
    let word_used = false;
    if (words_generated.length === 0) {
        words_generated[0] = num_gen;
    }
    else {
        while (!word_used) {
            if (words_generated.indexOf(num_gen) != -1) {
                num_gen = Math.floor(Math.random() * (words_list.length));
            }
            else {
                word_used = true;
            }
        }
        words_generated[words_generated.length] = num_gen;
    }
    if (words_generated.length >= (words_list.length) / 2) {
        words_generated.splice(0, 1);
    }
    word = words_list[num_gen];//This pulls a word from the list using the number we generated.
    word.toLowerCase();
    word_array = word.split("");
    document.getElementById("topic").innerHTML = (topic_list[num_gen]);//Displays the topic at the span tag with the id topic
    console.log(word + ' ' + topic_list[num_gen] + ' ' + hint_list[num_gen] + ' ' + num_gen);
    console.log(words_list.length);
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
        else if (')' == word_array[id]) {
            const s = document.createElement("span");
            const text = document.createTextNode(")");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id++;
        }
        else if ('(' == word_array[id]) {
            const s = document.createElement("span");
            const text = document.createTextNode("(");
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
    showHint();
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
