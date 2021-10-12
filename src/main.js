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
  const statement = document.getElementById("statement");
  const wordsBtn  = document.getElementById("words");
  
  // disable button and display intialization message
  wordsBtn.disabled   = true;
  statement.innerHTML = 'Generating...';

  readJSONFile('./data/data.json', (text) => {
    const statements = JSON.parse(text);

    // select 2 random quotes and make sure they are not the same
    const randomIndex     = () => Math.floor(Math.random() * (statements.length));
    const openingQuote    = statements[randomIndex()].quote;
    const getClosingQuote = (openingQuote) => {
      const closingQuote  = statements[randomIndex()].quote;
      return (closingQuote != openingQuote) ? closingQuote : getClosingQuote(openingQuote);
    }
    
    // display concatenated statement, re-enable words button, set focus to action button
    setTimeout(() => {
        statement.innerHTML = openingQuote + " " + getClosingQuote(openingQuote);
        wordsBtn.disabled   = false;
        document.getElementById("action").focus();
      }, 
      500 // millisecond delay for animation
    ); 
  });
};