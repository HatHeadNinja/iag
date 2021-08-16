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
  // intialize with user message
  let statement = 'Generating...'
  document.getElementById("statement").innerHTML = statement;
  
  readTextFile('./data/data.json', (text) => {
    // parse and generate statement
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const statements = JSON.parse(text);
    const opening = statements.openings[randomIndex(statements.openings)].quote;
    const closing = statements.closings[randomIndex(statements.closings)].quote;

    // animation timer delay and display concatenated statement
    setTimeout(() => {document.getElementById("statement").innerHTML = opening + ' ' + closing;}, 500);
    
  })

}
