tagList = [
    "happy", 
    "sad", 
    "angry", 
    "silly", 
    "shocked", 
    "dull", 
    "wink", 
    "table", 
    "confused", 
    "nose",
    "cat",
    "dead"
];

function setupAllEmojis() {
    // WIKIPEDIA EMOTICONS (https://en.wikipedia.org/wiki/List_of_emoticons);
    addEmoticon(":-)", ["happy", "nose"]);
    addEmoticon(":)",  ["happy"]);
    addEmoticon(":-]", ["happy", "nose"]);
    addEmoticon(":]",  ["happy"]);
    addEmoticon(":->", ["happy", "nose"]);
    addEmoticon(":>",  ["happy"]);
    addEmoticon("8-)", ["happy", "nose"]);
    addEmoticon("8)",  ["happy"]);
    addEmoticon(":-}", ["happy", "nose"]);
    addEmoticon(":}",  ["happy"]);
    addEmoticon(":^)", ["happy", "nose"]);
    addEmoticon("=]",  ["happy"]);
    addEmoticon("=)",  ["happy"]);

    addEmoticon(":-D", ["happy", "nose"]);
    addEmoticon(":D",  ["happy"]);
    addEmoticon("8-D", ["happy", "nose"]);
    addEmoticon("8D",  ["happy"]);
    addEmoticon("=D",  ["happy"]);
    addEmoticon("=3",  ["happy", "cat"]);
    addEmoticon("B^D", ["happy", "nose"]);
    addEmoticon("c:",  ["happy"]);
    addEmoticon("C:",  ["happy"]);

    addEmoticon("x-D", ["happy", "nose", "dead"]);
    addEmoticon("xD",  ["happy", "dead"]);
    addEmoticon("X-D", ["happy", "nose", "dead"]);
    addEmoticon("XD",  ["happy", "dead"]);

    addEmoticon(":-))", ["happy", "nose"]);
    addEmoticon(":))" , ["happy"]);

    addEmoticon(":-(",  ["sad", "nose"]);
    addEmoticon(":(",   ["sad"]);
    addEmoticon(":-c",  ["sad", "nose"]);
    addEmoticon(":c",   ["sad"]);
    addEmoticon(":-<",  ["sad", "nose"]);
    addEmoticon(":<",   ["sad"]);
    addEmoticon(":-[",  ["sad", "nose"]);
    addEmoticon(":[",   ["sad"]);
    addEmoticon(":-||", ["sad", "nose"]);
    addEmoticon(":{",   ["sad"]);
    addEmoticon(":@",   ["sad"]);
    addEmoticon(":(",   ["sad"]);
    addEmoticon(";(",   ["sad", "wink"]);
    
    addEmoticon(":'-(", ["sad, nose"]);
    addEmoticon(":'(",  ["sad, nose"]);
    addEmoticon(":=(",  ["sad, nose"]);

    addEmoticon(":'-)", ["happy", "nose"]);
    addEmoticon(":')",  ["happy", "nose"]);
    addEmoticon(":\"D", ["happy", "nose"]);

    addEmoticon(">:(", ["angry, sad"]);
    addEmoticon(">:[", ["angry, sad"]);

    addEmoticon("D-':", ["sad", "nose"]);
    addEmoticon("D:<",  ["sad", "angry"]);
    addEmoticon("D:",   ["sad"]);
    addEmoticon("D8",   ["sad"]);
    addEmoticon("D;",   ["sad", "wink"]);
    addEmoticon("D=",   ["sad"]);
    addEmoticon("DX",   ["sad", "dead"]);

    addEmoticon(":-O", ["shocked", "nose"]);
    addEmoticon(":O",  ["shocked"]);
    addEmoticon(":-o", ["shocked", "nose"]);
    addEmoticon(":o",  ["shocked"]);
    addEmoticon(":-0", ["shocked", "nose"]);
    addEmoticon(":0",  ["shocked"]);
    addEmoticon("8-0", ["shocked", "nose"]);
    addEmoticon(">:O", ["shocked", "angry"]);
    addEmoticon("=O",  ["shocked"]);
    addEmoticon("=o",  ["shocked"]);
    addEmoticon("=0",  ["shocked"]);

    // These are from friends :)
    addEmoticon("°.°", ["shocked"]);
    addEmoticon("૮ - ﻌ • ა", ["wink"]);
    addEmoticon("(╯°□°)╯︵ ┻━┻", ["table"]);
    addEmoticon("(╯°Д°）╯︵ /(.□ . /)", ["table"]);
    addEmoticon("( ꩜ ᯅ ꩜;)", ["confused"]);
}