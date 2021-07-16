function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function newStatement () {
  readTextFile('data.json)', function(text){
    let data = JSON.parse(text);
    document.getElementById("statement").innerHTML = data;
    console.log(data);
  });
  //document.getElementById("statement").innerHTML = "statement";
}

newStatement();
