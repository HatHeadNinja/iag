function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function newStatement (file) {
  readTextFile(file, function(text){
    const data = JSON.parse(text);
    document.getElementById("statement").innerHTML = data.quote + " - " + data.attribution;
  });
}
