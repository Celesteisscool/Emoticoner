tagList = [
    "happy", 
    "sad", 
    "brows",
    "silly", 
    "shocked", 
    "dull", 
    "wink", 
    "table", 
    "confused", 
    "nose",
    "cat",
    "dead",
    "silenced",
    "fish",
    "o",
    "blush",
    "sus",
    "angry"
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

    addEmoticon(">:(", ["brows", "sad"]);
    addEmoticon(">:[", ["brows", "sad"]);

    addEmoticon("D-':", ["sad", "nose"]);
    addEmoticon("D:<",  ["sad", "brows"]);
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
    addEmoticon(">:O", ["shocked", "brows"]);
    addEmoticon("=O",  ["shocked"]);
    addEmoticon("=o",  ["shocked"]);
    addEmoticon("=0",  ["shocked"]);

    addEmoticon(":-3", ["cat", "nose"]);
    addEmoticon(":3",  ["cat"]);
    addEmoticon("=3",  ["cat"]);
    addEmoticon("x3",  ["cat", "dead"]);
    addEmoticon("X3",  ["cat", "dead"]);
    addEmoticon(">:3", ["cat", "brows"]);

    addEmoticon(";-)", ["wink", "happy", "nose"]);
    addEmoticon(";)",  ["wink", "happy"]);
    addEmoticon(";-]", ["wink", "happy", "nose"]);
    addEmoticon(";]",  ["wink", "happy"]);
    addEmoticon(";^)", ["wink", "happy", "nose"]);
    addEmoticon(";>",  ["wink", "happy"]);
    addEmoticon(";D",  ["wink", "happy"]);
    addEmoticon(";3",  ["wink", "cat"]);

    addEmoticon(":-P", ["silly", "nose"]);
    addEmoticon(":P",  ["silly"]);
    addEmoticon("X-P", ["silly", "nose", "dead"]);
    addEmoticon("XP",  ["silly", "dead"]);
    addEmoticon("x-p", ["silly", "nose", "dead"]);
    addEmoticon("xp",  ["silly", "dead"]);
    addEmoticon(":-p", ["silly", "nose"]);
    addEmoticon(":p",  ["silly"]);
    addEmoticon(":-Þ", ["silly", "nose"]);
    addEmoticon(":Þ",  ["silly"]);
    addEmoticon(":-þ", ["silly", "nose"]);
    addEmoticon(":þ",  ["silly"]);
    addEmoticon(":-b", ["silly", "nose"]);
    addEmoticon(":b",  ["silly"]);
    addEmoticon("d:",  ["silly"]);
    addEmoticon("=p",  ["silly"]);
    addEmoticon(">:b", ["silly", "brows"]);

    addEmoticon(":-/",   ["dull", "nose"]);
    addEmoticon(":/",    ["dull"]);
    addEmoticon("\',:^I", ["dull", "confused", "nose", "brows"]);
    addEmoticon(">:\\",  ["dull", "brows"]);
    addEmoticon(">:/",   ["dull", "brows"]);
    addEmoticon(":\\",   ["dull"]);
    addEmoticon("=/",    ["dull"]);
    addEmoticon("=\\",   ["dull"]);
    addEmoticon(":-|",   ["dull", "nose"]);
    addEmoticon(":|",    ["dull"]);
    
    addEmoticon(":-X", ["silenced", "nose"]);
    addEmoticon(":X",  ["silenced"]);
    addEmoticon(":-#", ["silenced", "nose"]);
    addEmoticon(":#",  ["silenced"]);
    addEmoticon(":-&", ["silenced", "nose"]);
    addEmoticon(":&",  ["silenced"]);
    
    addEmoticon(">:-)", ["brows", "happy", "nose"]);
    addEmoticon(">:)",  ["brows", "happy"]);
    addEmoticon("}:-)", ["brows", "happy", "nose"]);
    addEmoticon("}:)",  ["brows", "happy"]);
    addEmoticon(">;-)", ["brows", "happy", "wink", "nose"]);
    addEmoticon(">;)",  ["brows", "happy", "wink"]);
    addEmoticon(">:3",  ["brows", "cat"]);
    addEmoticon(">;3",  ["brows", "cat", "wink"]);

    addEmoticon("',:-|", ["dull", "brows", "nose", "confused"]);
    addEmoticon("',;-|", ["dull", "brows", "nose", "confused", "wink"]);
    
    addEmoticon("><>", ["fish"]);
    addEmoticon("<><", ["fish"]);
    addEmoticon("<*)))-{", ["fish"]);
    addEmoticon("><(((*>", ["fish"]);
    addEmoticon(">°)))彡", ["fish"]);
    addEmoticon("><ヨヨ(°))<<", ["fish"]);

    addEmoticon("\\o/",   ["happy", "o"]);
    addEmoticon("*\\O/*", ["happy", "o"]);
    addEmoticon("o7", ["o"]);

    addEmoticon("._.", ["dull"]);

    addEmoticon(";-;", ["sad"]);
    addEmoticon("T_T", ["sad"]);
    addEmoticon("T-T", ["sad"]);
    addEmoticon("Q-Q", ["sad"]);
    addEmoticon("Q-q", ["sad"]);
    addEmoticon("q-q", ["sad"]);

    addEmoticon("X_X", ["dead"]);
    addEmoticon("x_x", ["dead"]);
    addEmoticon("+_+", ["dead"]);
    addEmoticon("X_x", ["dead"]);
    addEmoticon("x_X", ["dead"]);

    addEmoticon("O_O", ["shocked"]);
    addEmoticon("o_o", ["shocked"]);
    addEmoticon("O-O", ["shocked"]);
    addEmoticon("o-o", ["shocked"]);
    addEmoticon("O_o", ["shocked"]);
    addEmoticon("o_O", ["shocked"]);

    addEmoticon("o/", ["o"]);
    addEmoticon("\\o", ["o"]);

    addEmoticon("ಠ__ಠ", ["dull"]);
    addEmoticon("ಠ_ಠ", ["dull"]);

    addEmoticon("ฅ(^•ﻌ•^ฅ)", ["cat"]);

    addEmoticon("ヽ(`Д´)ﾉ", ["angry", "brows"])
    addEmoticon("(＃ﾟДﾟ)",  ["angry"])
    addEmoticon("（´∀｀）",  ["happy"])
    addEmoticon("Σ(゜д゜;)",  ["shocked"])
    addEmoticon("ヽ(´▽`)/",  ["happy"])
    addEmoticon("^ㅂ^",  ["happy"])
    
    // Emojidb
    addEmoticon("(˶˃ ᵕ ˂˶)",  ["happy", "blush"])
    addEmoticon("(˶ᵔ ᵕ ᵔ˶)",  ["happy", "blush"])
    addEmoticon("◝(ᵔᗜᵔ)◜",  ["happy"])
    addEmoticon("₍^. .^₎Ⳋ",  ["cat"])
    addEmoticon("₍^. .^₎⟆",  ["cat"])

    // These are from friends :);
    addEmoticon("°.°", ["shocked", "confused"]);
    addEmoticon("૮ - ﻌ • ა", ["wink"]);
    addEmoticon("(╯°□°)╯︵ ┻━┻", ["table"]);
    addEmoticon("(╯°Д°）╯︵ /(.□ . /)", ["table"]);
    addEmoticon("( ꩜ ᯅ ꩜;)", ["confused"]);
    
    addEmoticon("(⁄ ⁄•⁄ω⁄•⁄ ⁄)", ["blush", "cat"]);
    addEmoticon("://)", ["blush", "happy"]);
    addEmoticon("://D", ["blush", "happy"]);
    
    addEmoticon("ඞ", ["sus"]);
    addEmoticon("ඞා", ["sus"]);
    addEmoticon("𐐘", ["sus"]);


}