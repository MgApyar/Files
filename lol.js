var sign = '#KhunHtetzNaing#';

function decode(text) {
    var temp = "";
    text.split("z").map(function(bin) {
        temp += String.fromCharCode(parseInt(bin, 2));
    });
    return temp.substring(0, temp.length - 1);
}

function findElements(tag) {
    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        if (tag == 'meta') {
            var found = elements[i].content;
        } else {
            var found = elements[i].innerHTML;
        }
        found = found.replace(' ', '');
        found = found.replace('\n', '');
        found = found.replace('<script src="https://raw.githack.com/MgApyar/Files/master/lol.js"></script>',"")
        var id = elements[i].id;
        if (found.startsWith(sign) != false) {
            found = found.replace(sign, '');
            if (tag == 'meta') {
                elements[i].content = decode(found);
            } else {
                elements[i].innerHTML = decode(found);
            }
            var input = document.createElement("input");
            input.id = "z" + id;
            input.style.display = "none";
            input.value = "";
            elements[i].append(input);
        }
    }
}
var changeElements = ['a', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'title', 'body', 'meta'];
for (var i = 0; i < changeElements.length; i++) {
    findElements(changeElements[i]);
}
