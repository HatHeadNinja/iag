function readTextFile(file, callback){
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function(){
      if (rawFile.readyState === 4 && rawFile.status == "200"){
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function newStatement(){
  document.getElementById("statement").innerHTML = "Generating statement...";
  readTextFile('./data.json', function(text){
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const statements = JSON.parse(text);
    const delay = setTimeout((array) => Math.floor(Math.random() * (array.length)), 2000);
    const opening = statements.openings[delay(statements.openings)].quote;
    const closing = statements.closings[delay(statements.closings)].quote;
    document.getElementById("statement").innerHTML = opening + " " + closing;
  })
}
