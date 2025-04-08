function setupAllEmojis() {
    addEmoticon(":)", ["happy"]);
    addEmoticon("c:", ["happy"]);
    addEmoticon(":D", ["happy"]);
    
    addEmoticon(">:)", ["evil"]);
    addEmoticon("c:<", ["evil"]);
    addEmoticon(">:(", ["evil", "sad"]);
    addEmoticon(">:c", ["evil", "sad"]);

    addEmoticon(":(", ["sad"]);
    addEmoticon(":c", ["sad"]);

    addEmoticon(":P",  ["silly"]);
    addEmoticon(">:P", ["silly", "evil"]);
    addEmoticon("xP",  ["silly"]);

    addEmoticon("<( o - o )>", "chicken");

    addEmoticon("o.o", ["shocked"]);
    addEmoticon("o.O", ["shocked"]);
    addEmoticon("0-0", ["shocked"]);
    addEmoticon("D:",  ["shocked", "sad"]);

    addEmoticon("._.", ["dull"]);
    addEmoticon(".-.", ["dull"]);
    addEmoticon(":|",  ["dull"]);
    addEmoticon(":/",  ["dull"]);

    addEmoticon(";P", ["wink", "silly"]);
    addEmoticon(";)", ["wink", "happy"]);
    addEmoticon(";D", ["wink", "happy"]);

    addEmoticon("(╯°□°)╯︵ ┻━┻", ["table"]);
    addEmoticon("(╯°Д°）╯︵ /(.□ . /)", ["table"]);
}