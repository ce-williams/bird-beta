var questions = [
    ["Does the bird contain any orange, red, or yellow?"],
    ["Is the beak type one of these possible options: finch, thin, hawk, long heavy, or tiny?"]
];
var birdsInfo = [
    ["Bird name", true, 1]
    
];


var numberPossibleBirds = 0;
var question;
var answer;
var response;
var html;
var possibleBirds = [];
var notPossibleBirds = [];




function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

function buildList (arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}


for (var i = 0; i < questions.length; i += 1) {
    question = questions [i][0];
    answer = birdsInfo [i][1];
    response = prompt(question);
    response = parseInt(response);
    if (response === answer) {
        numberPossibleBirds += 1;
        possibleBirds.push(birdsInfo [0]);
            
    } 
    else {
        notPossibleBirds.push(birdsInfo [0]);
    }
}

html =  numberPossibleBirds + " of possible birds"
html += '<h2>These are possible: </h2>'; 
html += buildList( possibleBirds );
html += '<h2>These are incorrect: </h2>';
html += buildList( notPossibleBirds );
print(html)
