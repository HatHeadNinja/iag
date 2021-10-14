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
  
  // disable Words button and display intialization message
  const wordsBtn      = document.getElementById("words");
  const statement     = document.getElementById("statement");
  wordsBtn.disabled   = true;
  statement.innerHTML = 'Generating...';

  readJSONFile('./data/data.json', (text) => {
    
    // select 2 random quotes and make sure they are not the same
    // assumes at least 2 quotes available or else infinite loop
    // however user can always click the Action button (conversion)
    const statements      = JSON.parse(text);
    const randomIndex     = () => Math.floor(Math.random() * (statements.length));
    const openingQuote    = statements[randomIndex()].quote;
    const getClosingQuote = () => {
      const closingQuote  = statements[randomIndex()].quote;
      return (closingQuote != openingQuote) ? closingQuote : getClosingQuote();
    }
    
    // display concatenated statement, re-enable words button, set focus to Action button
    setTimeout(() => {
        statement.innerHTML = openingQuote + " " + getClosingQuote();
        wordsBtn.disabled   = false;
        document.getElementById("action").focus();
      }, 
      statement.innerHTML.length * 50; // millisecond delay for animation
    ) 
  })
}