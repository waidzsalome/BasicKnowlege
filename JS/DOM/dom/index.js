loadStyleString = (css) => {
    let style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css))
    } catch (ex) {
        style.stylesheet.cssText = css;
    }
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
};

const css = "body{background-color:pink}";
loadStyleString(css);

loadTableString = () => {
  let table = document.createElement("table");
  table.border = 1;
  table.width = "100%";
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  tbody.insertRow(0);
  tbody.rows[0].insertCell(0);
  tbody.rows[0].cells[0].appendChild(document.createTextNode("cell 1,1"));
  tbody.rows[0].insertCell(1);
  tbody.rows[0].cells[1].appendChild(document.createTextNode("cell 2,1"));

  tbody.insertRow(1);
  tbody.rows[1].insertCell(0);
  tbody.rows[1].cells[0].appendChild(document.createTextNode("cell 1,2"));
  tbody.rows[1].insertCell(1);
  tbody.rows[1].cells[1].appendChild(document.createTextNode("cell 2,2"));

  document.body.appendChild(table)
};
loadTableString();
