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
  document.getElementById("statement").innerHTML = "Generating...";
  readTextFile('./data/data.json', function(text){
    // need to figure out where to put the animation delay.
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const statements = JSON.parse(text);
    const opening = statements.openings[randomIndex(statements.openings)].quote;
    const closing = statements.closings[randomIndex(statements.closings)].quote;
    document.getElementById("statement").innerHTML = opening + " " + closing;
  })
}
