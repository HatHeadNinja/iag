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
  
  // disable Words button and display intialization message
  wordsBtn.disabled   = true;
  statement.innerHTML = 'Generating...';

  readJSONFile('./data/data.json', (text) => {
    const statements = JSON.parse(text);

    // select 2 random quotes and make sure they are not the same
    const randomIndex     = () => Math.floor(Math.random() * (statements.length));
    const openingQuote    = statements[randomIndex()].quote;
    const getClosingQuote = () => {
      // check there are at least 2 quotes to select from
      if (statements.length < 2) {
        return null;
      } else {
        const closingQuote  = statements[randomIndex()].quote;
        return (closingQuote != openingQuote) ? closingQuote : getClosingQuote();
      }
    }
    
    // display concatenated statement, re-enable words button, set focus to action button
    setTimeout(() => {
        statement.innerHTML = openingQuote + " " + getClosingQuote();
        wordsBtn.disabled   = false;
        document.getElementById("action").focus();
      }, 
      statement.innerHTML.length * 60 // millisecond delay for animation
    ); 
  });
};