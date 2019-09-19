function htmlEscape(text) {
    return text.replace( /[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;"
        }
    })
}

console.log(htmlEscape("<div id=\"content2\" style=\"height:150px;line-height:150px;text-align:center; color: #fff;background-color:blueviolet;font-size:80px;\">debounceOne</div>"))
