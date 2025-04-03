tagList = ["happy", "sad", "chicken", "evil", "silly", "shocked", "dull", "wink"];
helpList = ["tags",  "help"];

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


function setupAllEmojis() {
    addEmoticon(":)", "happy");
    addEmoticon("c:", "happy");
    addEmoticon(":D", "happy");

    
    addEmoticon(">:)", "evil");
    addEmoticon("c:<", "evil");
    addEmoticon(">:(", "evil");
    addEmoticon(">:c", "evil");

    addEmoticon(":(", "sad");
    addEmoticon(":c", "sad");


    addEmoticon(":P", "silly");
    addEmoticon(">:P", "silly");
    addEmoticon("xP", "silly");

    addEmoticon("<( o - o )>", "chicken");

    addEmoticon("o.o", "shocked");
    addEmoticon("o.O", "shocked");
    addEmoticon("0-0", "shocked");
    addEmoticon("D:", "shocked");


    addEmoticon("._.", "dull");
    addEmoticon(".-.", "dull");
    addEmoticon(":|", "dull");
    addEmoticon(":/", "dull");

    addEmoticon(";P", "wink");
    addEmoticon(";)", "wink");
    addEmoticon(";D", "wink");

}

function setupTags() {
    for (var i = 0; i < tagList.length; i++) {
        addHelp(tagList[i], "tags");
    }
 
}

function setupHelp() {
    addHelp("Type \"tags\" to get a list of tags", "help");
    addHelp("Typing any tag will show all emojis with that tag", "help");
    addHelp("Click on a Emoticon to copy it!", "help")
    addHelp("If the header changes, it worked!", "help")

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
        if (tagList.includes(input[i]) || helpList.includes(input[i])) {
            useableTags.push(input[i]);
        }
    }
    hidetheones();

}

function hidetheones() {
    var r = document.querySelector(':root'); // Get the root element
    if (useableTags.length != 0) {
        for (var i = 0; i < tagList.length; i++) {
            if (useableTags.includes(tagList[i])) {
                r.style.setProperty("--"+ tagList[i], "flex");
            } else {
                r.style.setProperty("--"+ tagList[i], "none");
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