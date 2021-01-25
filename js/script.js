document.addEventListener("DOMContentLoaded", function() {
  
  submitButton.addEventListener("click", uniqueText)


  function uniqueText(e) {
    e.preventDefault()

    console.log('clicked')
    let textInput = document.getElementById("textInput").value
    
    // lowercase all text for easy comparability
    let lowercase = textInput.toLowerCase();
    // remove any puncuation from input
    let replace = lowercase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    // split string to compare
    let splitStr = replace.split(" ")
  
    let output = [];
    let finalOutput = {};
    
    // take split up string and compare one word to other words. If match, then add one to total for display
    for(i = 0; i < splitStr.length; i++) {
        let total = 1;
        let currentWord = splitStr[i];
  
      for (j = i+1; j < splitStr.length; j++) {
        if (splitStr[i] == splitStr[j]) {
          total++
        }
      }
      output.push([currentWord, total])
    }
  
    // get key value pair of output results, then filter out multiples of each word through hasOwnProperty and key
      // if true (different keys) then don't remove
      // if false (has the same key as another, then remove extra)
    for (const [key, value] of output) {
      return output.filter(function(text) {
        if(finalOutput.hasOwnProperty(text[0])) {
          false
        } else {
          finalOutput[text[0]] = true
          let node = document.createElement('LI');
          let textNode = document.createTextNode(text[0] + " = " + text[1])
          node.appendChild(textNode);
          document.getElementById('showResults').appendChild(node);
        } 
      });
    }
  }
})


