var lives = 0;
var long = 0;
var finalword = 0;
function start(){
    lives = 6;
    var doc = [ "anesthesiologist" , "dermatologist" , "gastroenterologists" , "internist", "nephrologist", "gynecologist", "osteopath", "ophthalmologist", "pediatrician", "urologist", "pulmonologist"];
    var random = ["busy", "curb", "convince", "group", "boorish", "whisper", "quixotic", "weary", "polite", "respect", "bite"];
    var animal = ["zebra", "bear", "squirrel", "seal", "mouse", "frog", "leopard", "squid", "spider", "horse", "pig"];
    var cowboy = ["spur", "howdy", "lasso", "boots", "saddle", "saloon", "stable", "hat", "winchester", "revolver", "rodeo" ];
    var house = ["bedroom", "toilet", "windex", "vinyl", "laundry", "toothbrush", "television", "couch", "fireplace", "screwdriver", "microwave"];
    var word = "test";
    var many = 0;
    var selected = document.getElementById("cat").value;
    var which = Math.floor((Math.random() * 10) + 1);
    if(selected == "doc"){
        word = doc[which];
        many = word.length;
    }else{
        if(selected == "random"){
            word = random[which];
            many = word.length;
        }else{
            if(selected == "animal"){
                word = animal[which];
                many = word.length;
            }else{
                if(selected == "house"){
                    word = house[which];
                    many = word.length;
                }else{
                    if(selected == "cowboy"){
                        word = cowboy[which];
                        many = word.length;
                    }
                }
            }
        }
    }
    letter();
    document.getElementById("count").innerHTML = "You have <span id='lives'></span> lives left.";
    document.getElementById("lives").innerHTML = lives;
    print(many);
    console.log(word);
    long = many;
    finalword = word;
    document.getElementById("open").innerHTML = "";
}
function letter(){
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var Where = document.getElementById("buttons");
    for(var i = 0; i < 26; i++){
        var makeBut = document.createElement("button");
        makeBut.setAttribute("id", "letter" + i);
        makeBut.setAttribute("value", letter[i]);
        makeBut.setAttribute("onClick", "play(this.id)");
        makeBut.setAttribute("class", "w3-circle");
        Where.appendChild(makeBut);
        document.getElementById("letter" + i).innerHTML = letter[i];
    }
}


function print(y){
    var spans = 0;
    for(var i = 0 ; i < y; i++){
        var create = document.createElement("span");
        document.getElementById("divy").appendChild(create);
        create.setAttribute("id", "span" + spans);
        document.getElementById("span" + spans).innerHTML = "_ ";
        spans++;
    }
    console.log(spans);
}

function play(x){
    document.getElementById(x).disabled = true;
    var resolve = finalword.split('');
    var letterThere = false;
    for(var i = 0; i < long; i++){
        var let = resolve[i];
        var buttonPress = document.getElementById(x).value;
        if(buttonPress == let){
            document.getElementById("span" + i).innerHTML = buttonPress;
            letterThere = true;
        }
    }
    if(letterThere == false){
        lives--;
        document.getElementById("lives").innerHTML = lives;
    }
    if(lives == 0){
        lose();
    }else{
        var countunder = 0;
        for(var j = 0; j < long; j++) {
            var let2 = document.getElementById("span" + j).innerHTML;
            console.log(let2);
            if(let2 == "_ "){
                countunder++;
            }
        }
        console.log(countunder);
        if(countunder == 0){
            win();
        }

    }
}

function lose(){
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("divy").innerHTML = "";
    document.getElementById("open").innerHTML = "<h1> Sorry but it seems you're fresh outta luck this time, but i'll let you try again </h1>" + "<h1> The word was: </h1>" + "<h1>" + finalword  + "</h1>" + "<br>" + "<button onClick='start()'>Try Again</button>" + "<select id=\"cat\">\n" +
        "        <option value=\"house\">Household Objects</option>\n" +
        "        <option value=\"cowboy\">Cowboy</option>\n" +
        "        <option value=\"doc\">Types of Doctors (Very Hard)</option>\n" +
        "        <option value=\"animal\">Animals (Very Easy)</option>\n" +
        "        <option value=\"random\">Random</option>\n" +
        "    </select>";
}

function win(){
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("divy").innerHTML = "";
    document.getElementById("open").innerHTML = "<h1> Darn it, you've bested me this time but i'll get ya next time </h1>" + "<h1> You correctly discovered the word: </h1>" + "<h1>" + finalword  + "</h1>" + "<br>" + "<button onClick='start()'>Play Again</button>" + "<select id=\"cat\">\n" +
        "        <option value=\"house\">Household Objects</option>\n" +
        "        <option value=\"cowboy\">Cowboy</option>\n" +
        "        <option value=\"doc\">Types of Doctors (Very Hard)</option>\n" +
        "        <option value=\"animal\">Animals (Very Easy)</option>\n" +
        "        <option value=\"random\">Random</option>\n" +
        "    </select>";
}

