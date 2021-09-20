function readJSONFile(file, callback){
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4 && rawFile.status == "200"){
        callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

function newStatement(){
  // intialization message
  document.getElementById("statement").innerHTML = 'Generating...';
  
  readJSONFile('./data/data.json', (text) => {
    // parse data source and randomly select quotes
    const statements = JSON.parse(text);
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const opening = statements.openings[randomIndex(statements.openings)].quote;
    const closing = statements.closings[randomIndex(statements.closings)].quote;

    // delay timer for animation and display concatenated statement
    setTimeout(() => {document.getElementById("statement").innerHTML = opening + ' ' + closing;}, 500);
  });
}
