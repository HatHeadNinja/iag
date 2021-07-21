function readTextFile(file, callback) {
  const rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET", file, true)
  rawFile.onreadystatechange = function(){
      if (rawFile.readyState === 4 && rawFile.status == "200"){
          callback(rawFile.responseText)
      }
  }
  rawFile.send(null);
}

function newStatement() {
  document.getElementById("statement").innerHTML = "Generating statement..."
  readTextFile('./data.json', function(text) {
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    const data = JSON.parse(text)
    const opening = data.openings[randomIndex(data.openings)].quote
    const closing = data.closings[randomIndex(data.closings)].quote
    document.getElementById("statement").innerHTML = opening + " " + closing;
  });
}
