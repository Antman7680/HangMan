const image_list = ['hangman_7.png', 'hangman_6.png', 'hangman_5.png', 'hangman_4.png', 'hangman_3.png', 'hangman_2.png', 'hangman_1.png'];//list of images

var fruit_list=['apple','orange','mango','watermelon','cherry'];//List of fruits
var fruit_topic=['Fruit','Fruit','Fruit','Fruit','Fruit'];//List of topics
var fruit_hint=['The fruit is red','The fruit is named after a color','The fruit is commonly red and green','It is big and green','The fruit is red small and sweet'];//Hint for fruit generated

var super_hero_list=['the_flash','iron_man','spider-man','batman','superman'];//Super hero list
var super_hero_topic=['DC Super Heros','Marvel Super Heros','Marvel Super Heros','DC Super Hero','DC Super Hero'];//Topic for super hero
var super_hero_hint=['He is very fast','I am ...','Friendly neighborhood','I am the vengeance! I am the Night! I am ...','The Last Son of Krypton'];//Hint for super hero generated

var school_subject_list=['math','english','history','science','gym'];
var school_subject_topic=['School Subject', 'School Subject', 'School Subject', 'School Subject', 'School Subject'];
var school_subject_hint=['Numbers','Writing','Past events','Experiments','Working Out'];

const words_list = fruit_list.concat(super_hero_list, school_subject_list);//Combines the list
const topic_list = fruit_topic.concat(super_hero_topic, school_subject_topic);//Combines the topic list
const hint_list = fruit_hint.concat(super_hero_hint, school_subject_hint);//Combines the hint list

function showHint(){
    document.getElementById("hint_display").innerHTML=(hint_list[num_gen]);
}

function create_template(word_array){
    document.getElementById("correct_guesses").innerHTML="";
    let id=0;
    for(let a=(word_array.length); a>0; a--){
        if('_'==word_array[id]){
            const s = document.createElement("span");
            const text = document.createTextNode("_");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('style','color:white');
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id+=1
        }
        else if('-'==word_array[id]){
            const s = document.createElement("span");
            const text = document.createTextNode("-");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id', id);
            id+=1
        }
        else{
            const s = document.createElement("span");
            const text = document.createTextNode(" _ ");
            s.appendChild(text);
            document.getElementById("correct_guesses").appendChild(s).setAttribute('id',id);
            id+=1
        }
    }
}

function display_game(){
    answer_list = [];
    keys_list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    display_word = "";

    document.getElementById("guesses").innerHTML = "";
    document.getElementById("wrong_guesses").innerHTML = "";
    document.getElementById("hint_display").innerHTML = "";
    document.getElementById("topic").innerHTML ="";

    gameOn = true;

    num_tries = 6;
    document.getElementById("attempts").innerHTML = ("" + num_tries);
    document.getElementById("display-img").src = (image_list[num_tries]);

    document.getElementById("display-img").setAttribute("style","visibility:visible;");
    document.getElementById("start").setAttribute("style", "visibility:hidden;");

    num_gen = Math.floor(Math.random()*(words_list.length));//This right here generates a number between 0-and length of the list
    word = words_list[num_gen];//This pulls a word from the list using the number we generated.
    word_array=word.split("");
    console.log(word);
    create_template(word_array);

    for (let i = 0; i < word_array.length; i++) {
        if (word_array[i] == "_") {
            display_word +=" ";
        }
        else {
            display_word +=word_array[i];
        }
    }

    document.getElementById("topic").innerHTML=(topic_list[num_gen]);//Displays the topic at the span tag with the id topic
}

var body = document.getElementById("body");//Creates a var for the body
    body.addEventListener("keyup", (e) => {//Creates an event listener that listens for when the user presses a key and it goes up
        key = e.key;
        if(key=='Enter'||key==' '){
            console.log("You pressed enter");
        }
        spell_check(word_array,key.toLowerCase());//calls function when listener goes off
    })

function spell_check(wa,k){//declares function with parameter key
    let index = 0;
    if (num_tries <= (6/2)) {
        showHint();
    }
    for(let i=0; i<keys_list.length;i++){
        if(k==keys_list[i]){
            let correct_letter = false;
            while(index<wa.length&&gameOn){
                if(k == wa[index]){
                    document.getElementById(index).innerHTML=(k.toUpperCase());
                    correct_letter=true;
                }
                index++;
            }
            if (correct_letter == true && gameOn){
                keys_list.splice(keys_list.indexOf(k), 1);
            }
            else if (correct_letter == false && gameOn){
                const s = document.createElement("span");
                const text = document.createTextNode(k.toUpperCase()+" ");
                s.appendChild(text);
                document.getElementById("wrong_guesses").appendChild(s).setAttribute('id', "wg"+num_tries);

                num_tries-=1;
                document.getElementById("attempts").innerHTML = ("" + num_tries);
                keys_list.splice(keys_list.indexOf(k), 1);
            }
            document.getElementById("display-img").setAttribute('src',image_list[num_tries]);
        }
    }
    ending_screen();
}

function ending_screen(){
    let index=0;
    while (index< word_array.length&&gameOn) {
        let answer = document.getElementById(index).innerHTML;
        answer_list[index] = answer.toLowerCase();
        index++;
    }
    if(num_tries==0){//if function
        document.getElementById("guesses").innerHTML = ("Sorry try again the word was " + display_word.toUpperCase());//prints the word and to try again once the user runs out of attempts
        document.getElementById("start").setAttribute("style", "visibility:visible;");
        gameOn=false;
    }
    if ((word_array.toString() === answer_list.toString())) {
        document.getElementById("start").setAttribute("style", "visibility:visible;");
        document.getElementById("correct_guesses").innerHTML = ('You got the word');
        document.getElementById("wrong_guesses").innerHTML = ('The word was ' + display_word.toUpperCase());
        gameOn = false;
    }
    console.log(answer_list.toString());
}
