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
  let statement = 'Generating...'
  document.getElementById("statement").innerHTML = statement;
  // need to figure out where to put the animation delay.
  // get start time
  const startTime = Date.now();
  readTextFile('./data/data.json', function(text){
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const statements = JSON.parse(text);
    const opening = statements.openings[randomIndex(statements.openings)].quote;
    const closing = statements.closings[randomIndex(statements.closings)].quote;
    statement = opening + " " + closing;
    document.getElementById("statement").innerHTML = statement;
  })
  // end delay
  // -- compare start time to current time, if difference < 2 seconds, delay for difference
}
