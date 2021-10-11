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
    const statements  = JSON.parse(text);

    // select 2 random quotes and make sure they are not the same
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const opening = statements[randomIndex(statements)].quote;
    const closing = (opening, statements) => {
      const endQuote = statements[randomIndex(statements)].quote;
      return (opening === endQuote) ? closing(opening, statements) : endQuote;
    }
    const randomStatement = opening + " " + closing(opening, statements);
    
    // display concatenated statement, re-enable button, set focus to action button
    setTimeout(() => {
        statement.innerHTML = randomStatement;
        wordsBtn.disabled   = false;
        document.getElementById("action").focus();
      }, 
      500 // millisecond delay for animation
    ); 
  });
};