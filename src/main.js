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
  const wordsBtn  = document.getElementById("words");
  const statement = document.getElementById("statement");
  
  // disable button and display intialization message
  wordsBtn.disabled   = true;
  statement.innerHTML = 'Generating...';

  readJSONFile('./data/data.json', (text) => {
    const statements  = JSON.parse(text);
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    
    // display concatenated statement and re-enable button
    setTimeout(() => {
        statement.innerHTML = statements.openings[randomIndex(statements.openings)].quote
                              + ' ' 
                              + statements.closings[randomIndex(statements.closings)].quote;
        wordsBtn.disabled   = false;
      }, 
      500 // millisecond delay for animation
    ); 
  });
};