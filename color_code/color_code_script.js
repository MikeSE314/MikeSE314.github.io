function populate() {
    var jsonString = '{"questions": ['
        + '{"num": 1,"q": ".","answers": ["opinionated","nurturing","inventive","outgoing"]},'
        + '{"num": 2,"q": ".","answers": ["power-oriented","perfectionist","indecisive","self-centered"]},'
        + '{"num": 3,"q": ".","answers": ["dominant","sympathetic","tolerant","enthusiastic"]},'
        + '{"num": 4,"q": ".","answers": ["self-serving","suspicious","unsure","naive"]},'
        + '{"num": 5,"q": ".","answers": ["decisive","loyal","contented","playful"]},'
        + '{"num": 6,"q": ".","answers": ["arrogant","worry-prone","silently stubborn","flighty"]},'
        + '{"num": 7,"q": ".","answers": ["assertive","reliable","kind","sociable"]},'
        + '{"num": 8,"q": ".","answers": ["bossy","self-critical","reluctant","a teaser"]},'
        + '{"num": 9,"q": ".","answers": ["action-oriented","analytical","easygoing","carefree"]},'
        + '{"num": 10,"q": ".","answers": ["critical of others","overly sensitive","shy","obnoxious"]},'
        + '{"num": 11,"q": ".","answers": ["determined","detail-conscious","a good listener","a party person"]},'
        + '{"num": 12,"q": ".","answers": ["demanding","unforgiving","unmotivated","vain"]},'
        + '{"num": 13,"q": ".","answers": ["responsible","idealistic","considerate","happy"]},'
        + '{"num": 14,"q": ".","answers": ["impatient","moody","passive","impulsive"]},'
        + '{"num": 15,"q": ".","answers": ["strong-willed","respectful","patient","fun-loving"]},'
        + '{"num": 16,"q": ".","answers": ["argumentative","unrealistic","directionless","an interrupter"]},'
        + '{"num": 17,"q": ".","answers": ["independent","dependable","even-tempered","trusting"]},'
        + '{"num": 18,"q": ".","answers": ["aggressive","frequently depressed","ambivalent","forgetful"]},'
        + '{"num": 19,"q": ".","answers": ["powerful","deliberate","gentle","optimistic"]},'
        + '{"num": 20,"q": ".","answers": ["insensitive","judgmental","boring","undisciplined"]},'
        + '{"num": 21,"q": ".","answers": ["logical","emotional","agreeable","popular"]},'
        + '{"num": 22,"q": ".","answers": ["always right","guilt-prone","unenthusiastic","uncommitted"]},'
        + '{"num": 23,"q": ".","answers": ["pragmatic","well-behaved","accepting","spontaneous"]},'
        + '{"num": 24,"q": ".","answers": ["merciless","thoughtful","uninvolved","a show-off"]},'
        + '{"num": 25,"q": ".","answers": ["task-oriented","sincere","diplomatic","lively"]},'
        + '{"num": 26,"q": ".","answers": ["tactless","hard to please","lazy","loud"]},'
        + '{"num": 27,"q": ".","answers": ["direct","creative","adaptable","a performer"]},'
        + '{"num": 28,"q": ".","answers": ["calculating","self-righteous","self-deprecating","disorganized"]},'
        + '{"num": 29,"q": ".","answers": ["confident","disciplined","pleasant","charismatic"]},'
        + '{"num": 30,"q": ".","answers": ["intimidating","careful","unproductive","afraid to face facts"]},'
        + '{"num": 31,"q": ". If I applied for a job, a prospective employer would most likely hire me because I am:","answers": ["Driven, direct, and delegating.","Deliberate, accurate, and reliable.","Patient, adaptable, and tactful.","Fun-loving, spirited, and casual."]},'
        + '{"num": 32,"q": ". When involved in an intimate relationship, if I feel threatened by my partner, I:","answers": ["Fight back with facts and anger.","Cry, feel hurt, and plan revenge.","Become quiet, withdrawn, and often hold anger unitl I blow up over some minor issue later.","Distance myself and avoid further conflict."]},'
        + '{"num": 33,"q": ". For me, life is most meaningful when it:","answers": ["Is task-oriented and productive.","Is filled with people and purpose.","Is free of pressure and stress.","Allows me to be playful, lighthearted, and optimistic."]},'
        + '{"num": 34,"q": ". As a child, I was:","answers": ["Stubborn, bright, and/or aggressive.","Well-behaved, caring, and/or depressed.","Quiet, easygoing, and/or shy.","Too talkative, happy, and/or playful."]},'
        + '{"num": 35,"q": ". As an adult, I am:","answers": ["Opinionated, determined, and/or bossy.","Responsible, honest, and/or unforgiving.","Accepting, contented, and/or unmotivated.","Charismatic, positive, and/or obnoxious."]},'
        + '{"num": 36,"q": ". As a parent, I am:","answers": ["Demanding, quick-tempered, and/or uncompromising.","Concerned, sensitive, and/or critical.","Permissive, easily persuaded, and/or often overwhelmed.","Playful, casual, and/or irresponsible."]},'
        + '{"num": 37,"q": ". In an argument with a friend, I am most likely to be:","answers": ["Verbally stubborn about facts.","Concerned about others\' feelings and principles.","Silently stubborn, uncomfortable, and/or confused.","Loud, uncomfortable, and/or compromising."]},'
        + '{"num": 38,"q": ". If my friend was in trouble, I would be:","answers": ["Protective, resourceful, and recommend solutions.","Concerned, empathetic, and loyal—regardless of the problem.","Supportive, patient, and a good listener.","Nonjudgemental, optimistic, and downplaying the seriousness of the situation."]},'
        + '{"num": 39,"q": ". When making decisions, I am:","answers": ["Assertive, articulate, and logical.","Deliberate, precise, and cautious.","Indecisive, timid, and reluctant.","Impulsive, uncommitted, and inconsistent."]},'
        + '{"num": 40,"q": ". When I fail, I feel:","answers": ["Silently self-critical, et verbally stubborn and defensive.","Guilty, self-critical, and vulnerable to depression—I dwell on it.","Unsettled and fearful, but I keep it to myself.","Embarrassed and nervous—seeking to escape the situation."]},'
        + '{"num": 41,"q": ". If someone crosses me:","answers": ["I am angered, and cunningly plan ways to get even quickly.","I feel deeply hurt and find it almost impossible to forgive completely. Generally, getting even is not enough.","I am silently hurt and plan to get even and/or completely avoid the other person.","I want to avoid confrontation, consider the situation not important enough to bother with, and/or seek other friends."]},'
        + '{"num": 42,"q": ". Work is:","answers": ["A most productive way to spend one\'s time.","A healthy activity, which should be done right if it\'s to be done at all. Work should be done before one plays.","A positive activity as long as it is something I enjoy and don\'t feel pressured to accomplish.","A necessary evil, much less inviting than play."]},'
        + '{"num": 43,"q": ". In social situations, I am most often:","answers": ["Feared by others.","Admired by others.","Protected by others.","Envied by others."]},'
        + '{"num": 44,"q": ". In a relationship, I am most concerned with being:","answers": ["Approved of and right.","Understood, appreciated, and intimate.","Respected, tolerant, and peaceful.","Praised, having fun, and feeling free."]},'
        + '{"num": 45,"q": ". To feel alive and positive, I seek:","answers": ["Adventure, leadership, and lots of action.","Security, creativity, and purpose.","Acceptance and safety.","Excitement, playful productivity, and the company of others."]}]}';
    var questions = JSON.parse(jsonString);
    var parentDiv = document.getElementById("parentDiv");
    for (var i = 0; i < questions.questions.length; i++) {
        var values = ["red", "blue", "white", "yellow"];
        var nums = [0, 1, 2, 3];
        var shuffled = shuffle(nums);

        var newDiv = document.createElement("div");
        newDiv.id = "q_" + (i + 1).toString();
        newDiv.className = i < 30 ? "short" : "long";

        var newHead = document.createElement("h4");
        newHead.innerHTML = (i + 1).toString() + questions.questions[i].q;
        newDiv.appendChild(newHead);

        for (j = 0; j < 4; j++) {
            var newInput = document.createElement("input");
            newInput.name = "q" + i.toString();
            newInput.id = "q_" + i.toString() + "_" + shuffled[j].toString();
            newInput.setAttribute("type", "radio");
            newInput.setAttribute("value", values[shuffled[j]]);
            newDiv.appendChild(newInput);
            newDiv.innerHTML += questions.questions[i].answers[shuffled[j]] + "<br>";
        }
        parentDiv.appendChild(newDiv);
    }

}

function shuffle(orderedList) {
    var newList = [];
    while (orderedList.length > 0) {
        var rando = Math.floor(Math.random() * orderedList.length);
        var randoElement = orderedList[rando];
        orderedList.splice(rando, 1);
        newList.push(randoElement);
    }
    return newList;
}

function calc() {
    var colorTotals = [0, 0, 0, 0];
    var printString = "";
    var formElements = document.forms['firstForm'].elements;
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].checked) {
            if (formElements[i].value == 'red') {
                colorTotals[0]++;
            }
            else if (formElements[i].value == 'blue') {
                colorTotals[1]++;
            }
            else if (formElements[i].value == 'white') {
                colorTotals[2]++;
            }
            else if (formElements[i].value == 'yellow') {
                colorTotals[3]++;
            }
        }
    }
    console.log("Results:\nRed: " + colorTotals[0].toString() + "\nBlue: " + colorTotals[1].toString() + "\nWhite: " + colorTotals[2].toString() + "\nYellow: " + colorTotals[3].toString());
    var red = document.getElementById("redScore");
    var blue = document.getElementById("blueScore");
    var white = document.getElementById("whiteScore");
    var yellow = document.getElementById("yellowScore");
    // var scoreParent = scoreDiv.parentNode;

    red.innerHTML = "RED: " + colorTotals[0].toString();
    blue.innerHTML = "BLUE: " + colorTotals[1].toString();
    white.innerHTML = "WHITE: " + colorTotals[2].toString();
    yellow.innerHTML = "YELLOW: " + colorTotals[3].toString();

}
