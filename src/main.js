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
  const wordsBtn = document.getElementById("words");
  const statement = document.getElementById("statement");
  
  // disable button, intialization message
  wordsBtn.disabled = true;
  statement.innerHTML = 'Generating...';

  readJSONFile('./data/data.json', (text) => {
    // parse data source and randomly select quotes
    const statements = JSON.parse(text);
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    
    // delay timer for animation, display concatenated statement and enable button
    setTimeout(() => {
        statement.innerHTML = statements.openings[randomIndex(statements.openings)].quote
                            + ' ' 
                            + statements.closings[randomIndex(statements.closings)].quote;
        wordsBtn.disabled = false;
      }, 500);
  });
};