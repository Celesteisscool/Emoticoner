commandList = ["light", "dark", "help", "moredots", "background"];
helpList = ["tags", "help"];

r = document.querySelector(':root');

var emoticonElemList = {};

function headerEmoticon(input) {
    const emojis = [];
    emojis.push(":)", ":(", ">:(", ">:)", ":D", "D:");
    selected = Math.floor(Math.random() * 6);

    var emoji = emojis[selected];
    if (Math.random() < 0.02) { // 1/50 chance
        emoji = atob("OD09RA=="); // :P (its a secret)
    }
    if (input != null) {
        emoji = input;
        document.title = input;
    }
    document.getElementsByClassName("header")[0].children[0].innerText = "Emoticoner " + emoji;
}

function start() {
    headerEmoticon();
    emoticonCount = 0;
    setupAllEmojis();
    setupHelpText();
    setupHelpTags();
    resize();
    filterElements([]);
    lastSearch = ""
}

function addEmoticon(input, tags) {
    copyin = input
    input = input.replace(/\"/g, "&quot;")
    input = input.replace(/\'/g, "&apos;")
    copyin = input.replace(/\\/g, "&bsol;&bsol;")
    
    console.log(tags.toString().replace(",", ", "))
    hovertags = tags.toString().replace(",", ",&nbsp;")

    elem = "<button class=\"emoticon\" data-tags=" + tags + " title=" + hovertags + " onclick=\"copybutton(\'" + copyin + "\')\">" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
    emoticonElemList[input] = document.getElementById("content").lastChild;

    emoticonCount += 1;
}

function addHelp(input) {
    elem = "<button class=\"emoticon\" data-tags=help>" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
    emoticonElemList[input] = document.getElementById("content").lastChild;
}

function addTag(input) {
    elem = "<button class=\"emoticon\" data-tags=tags onclick=\"setSearch(\'" + input + "\', true, false)\">" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
    emoticonElemList[input] = document.getElementById("content").lastChild;
}

function addCommand(input) {
    elem = "<button class=\"emoticon\" data-tags=help onclick=\"setSearch(\'" + input + "\', false, true)\">" + input + "</button>"
    document.getElementById("content").insertAdjacentHTML("beforeend", elem);
    emoticonElemList[input] = document.getElementById("content").lastChild;
}


function setSearch(input, enter, clearb4) {
    if (input != "") {
        if (clearb4 == true) {
            document.getElementById("search").value = input
            runSearch()
        }
        document.getElementById("search").value = input
        if (enter == true) { runSearch() }
    }
}



function setupHelpTags() {
    for (var i = 0; i < tagList.length; i++) {
        addTag(tagList[i]);
    }
}

function setupHelpText() {
    addHelp("Type \"tags\" to get a list of tags");
    addHelp("Typing any tag will show all emojis with that tag");
    addHelp("Click on a Emoticon to copy it!");
    addHelp("If the header changes, it worked!");
    addHelp("Currently hosting " + emoticonCount.toString() + " Emoticons!")
    addHelp("Here are some bonus commands (enter them like a tag to use)");
    addCommand("light");
    addCommand("dark");
    addCommand("moredots");
    addCommand("background");
}

function copybutton(input) {
    if (input != "") {

        try {
            navigator.clipboard.writeText(input).then(
                () => {
                    console.log("Yay it worked! Yoinked " + input + " to the clipboard");
                },

            );
        }
        catch (e) {
            console.warn("Your browser is too old... :(");
            var copyElement = emoticonElemList[input];

            // Select the text field
            copyElement.select;

            // Copy the text inside the text field
            navigator.clipboard.writeText(copyElement.innerText);

            // Alert the copied text
            console.log("Copied the text the stupid way: " + copyElement.innerText);
        }
        headerEmoticon(input);
    }

}

function runSearch() {
    input = document.getElementById("search").value.toString();
    if (lastSearch != input) {
        input = input.split(' ');
        useableTags = [];
        for (var i = 0; i < input.length; i++) {
            input[i] = input[i].toLowerCase();
            if (tagList.includes(input[i]) || helpList.includes(input[i])) {
                useableTags.push(input[i]);
            }
            if (commandList.includes(input[i])) {
                runCommand(input[i]);
                break;
            }
        }
        // hidetheones();
        filterElements(useableTags);
    }
    lastSearch = input
}


function runCommand(input) {
    if (input == "light") { // Light mode
        r.style.setProperty("--text", "black");
        r.style.setProperty("--background", "white");
        r.style.setProperty("--active", "gray");
        r.style.setProperty("--sub", "black");
    }
    if (input == "dark") { // Dark mode
        r.style.setProperty("--text", "white");
        r.style.setProperty("--background", "black");
        r.style.setProperty("--active", "gray");
        r.style.setProperty("--sub", "white");
    }
    if (input == "help") {
        document.getElementById("help").style.display = "none";
    }
    if (input == "moredots") {
        createDots(10);
    }
    if (input == "background") {
        if (particles.length > 0) {
            while (particles.length > 0) {
                particles.pop()
            }
            document.getElementById("background").style.display = "none";
        }
        else {
            document.getElementById("background").style.display = "";
            createDots(100);
        }
    }
}

function resize() {
    size = window.innerWidth / window.innerHeight;
    if (size < 1) {
        zoom = 2;
    }
    if (size < 0.5) {
        zoom = 3;
    }
    if (size >= 1) {
        zoom = 1;
    }
    r.style.setProperty("--zoom", zoom)
}

window.addEventListener('resize', resize());

function filterElements(requiredTags) {
    document.querySelectorAll('[data-tags]').forEach(el => {
        const tags = el.dataset.tags.split(',').map(t => t.trim().toLowerCase());
        el.style.display = requiredTags.every(tag => tags.includes(tag.toLowerCase())) ? '' : 'none';
        if ((tags.includes("help") || tags.includes("tags")) && requiredTags.length == 0) {
            el.style.display = 'none';
        }
    });
}
