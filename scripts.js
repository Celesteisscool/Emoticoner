tagList = ["happy", "sad", "chicken", "evil", "silly", "shocked", "dull", "wink", "table"];
alliasReplacement = [["flip", "table"], ["joyful", "happy"], ["thebigsad", "sad"]];
alliasList = ["flip", "joyful", "thebigsad"];
helpList = ["tags",  "help"];
commandList = ["light",  "dark"];

r = document.querySelector(':root');


function headerEmoticon(input) {
    const emojis = [];
    emojis.push(":)", ":(", ">:(", ">:)", ":D", "D:");
    selected = Math.floor(Math.random() * 6);
    
    var emoji = emojis[selected];
    if (input != null) {
        emoji = input;
    }
    document.getElementsByClassName("header")[0].children[0].innerText = "Emoticoner " + emoji;
}

function start() {
    headerEmoticon();
    setupAllEmojis();
    setupTags();
    setupHelp();
}

function addEmoticon(input, tags) {
    elem = "<button class=\"emoticon " + tags + "\" onclick=\"copybutton(\'" + input + "\')\">" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
}

function addHelp(input, tags) {
    elem = "<button class=\"emoticon " + tags + "\" onclick=\"copybutton(\'\')\">" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
}

function setupTags() {
    for (var i = 0; i < tagList.length; i++) {
        addHelp(tagList[i], "tags");
    }
 
}

function setupHelp() {
    addHelp("Type \"tags\" to get a list of tags", "help");
    addHelp("Typing any tag will show all emojis with that tag", "help");
    addHelp("Click on a Emoticon to copy it!", "help");
    addHelp("If the header changes, it worked!", "help");
    addHelp("Here are some bonus commands (enter them like a tag to use)", "help");
    addHelp("light", "help");
    addHelp("dark", "help");
}

function getRidOfHelpText() {
    document.getElementById("help").style.display = "none";
}

function copybutton(input) {
    if (input != "") {
        navigator.clipboard.writeText(input).then(
            () => {
              console.log("Yay it worked! Yoinked " + input + " to the clipboard");
            },
            () => {
                console.warn("Your browser is too old... :(");
            }, 
        );
        document.title = input;
        headerEmoticon(input);
    }

}

function search() {
    input = document.getElementById("search").value.toString();
    input = input.split(' ');
    useableTags = [];
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].toLowerCase();
        if (tagList.includes(input[i]) || helpList.includes(input[i]) || alliasList.includes(input[i])) {
            useableTags.push(input[i]);
        }
        if (commandList.includes(input[i])) {
            runCommand(input[i]);
            break;
        }
    }
    hidetheones();

}


function runCommand(input) {
    if (input == commandList[0]) { // Light mode
        r.style.setProperty("--text", "black");
        r.style.setProperty("--background", "white");
        r.style.setProperty("--active", "gray");
        r.style.setProperty("--sub", "black");
    }
    if (input == commandList[1]) { // Dark mode
        r.style.setProperty("--text", "white");
        r.style.setProperty("--background", "black");
        r.style.setProperty("--active", "gray");
        r.style.setProperty("--sub", "lightgray");
    }

    console.log(input);
}

function hidetheones() {
    if (useableTags.length != 0) {
        for (var i = 0; i < tagList.length; i++) {
            if (useableTags.includes(tagList[i])) {
                r.style.setProperty("--"+ tagList[i], "flex");
            } else {
                r.style.setProperty("--"+ tagList[i], "none");
            }
        }

        for (var i = 0; i < alliasReplacement.length; i++) {
            if (useableTags.includes(alliasReplacement[i][0])) {
                r.style.setProperty("--"+ alliasReplacement[i][1], "flex");
            }
        }

        for (var i = 0; i < helpList.length; i++) {
            if (useableTags.includes(helpList[i])) {
                r.style.setProperty("--"+ helpList[i], "flex");
                getRidOfHelpText();
            } else {
                r.style.setProperty("--"+ helpList[i], "none");
            }
        }
    } else {
        for (var i = 0; i < tagList.length; i++) {
            r.style.setProperty("--"+ tagList[i], "flex")
        }
        for (var i = 0; i < helpList.length; i++) {
            r.style.setProperty("--"+ helpList[i], "none")
        }
    }
}


window.addEventListener('resize', function(event) {
    size = window.innerWidth / window.innerHeight;
    if (size < 1 ) {
        zoom = 2;
    } 
    if (size < 0.5) {
        zoom = 3;
    }
    if (size >= 1) {
        zoom = 1;
    }
    console.log(zoom);
    r.style.setProperty("--zoom", zoom )
});