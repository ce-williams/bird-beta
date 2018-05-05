/*
This array contains information about various bird species. Within each array item, characteristics of each bird are listed as follows

["name", Do they display Orange Yellow or Red (t/f), beak type (1-5 code)]

[i][0] code: bird name as a string

[i][1] code: true or false.  1 = true. 2 = false
[i][2] code: beak type by number. 1 = finch, 2 = thin, 3 = hawk, 4 = long heavy, 5 = tiny

[i][3] code: streaking/spotting below by number. 1 = plain, 2 = spotted, 3 = streaked, 4 = all dark
[i][4] code: throat/chest pattern by number. 1 = pale, 2 = Dark band on lower throat or upper chest, 3 = all dark

[i][5] code: pattern on back by number. 1 = plain, 2 = streaked, 3 = solid blackish
[i][6] code: pattern on wings by number. 1 = Wing bars weak to absent, 2 = Conspicuous pale wing bar(s), 3 = Pale patch at primary bases

[i][7] code: pattern on face by number. 1 = plain, 2 = eye ring or "spectacles", 3 = Pale stripe over eye, 4 = Dark mask



*/


var birdsInfo = [
["Olive-sided Flycatcher", 2, 2, 1,	1, 1, 1, 1 ],

["Northern Shrike", 2, 3, 1, 1,	1, 3,	4 ],

["Blue Jay", 2, 2, 1, 2, 1, 2, 1 ],

["American Crow", 2, 4, 4, 3, 3, 1, 1 ],
["Common Raven", 2, 4 ],

["Purple Martin M", 2, 5 ],
["Purple Martin F", 2, 5 ],
["Tree Swallow", 2, 5 ],
["Northern Rough-winged Swallow", 2, 5 ],
["Bank Swallow", 2, 5 ],
["Black-capped Chickadee", 2, 5 ],

["Brown Creeper", 2, 2],
["House Wren", 2, 2 ],
["Winter Wren", 2, 2 ],
["Sedge Wren", 2, 2 ],
["Marsh Wren", 2, 2 ],
["Blue-gray Gnatcatcher", 2, 2 ],
["Veery", 2, 2 ],
["Gray-cheeked Thrush", 2, 2 ],
["Swainson's Thrush", 2, 2 ],
["Hermit Thrush", 2, 2 ],
["Wood Thrush", 2, 2 ],
["Brown Thrasher", 2, 2 ],
["European Starling", 2, 2 ],
["American Pipit", 2, 2 ],
["Tennessee Warbler breeding M", 2, 2 ],
["Blackpoll Warbler breeding M", 2, 2 ],
["Cerulean Warbler M", 2, 2 ],
["Black-and-white Warbler M", 2, 2 ],
["Black-and-white Warbler F", 2, 2 ],

["American Tree Sparrow", 2, 1],
["Chipping Sparrow", 2, 1],
["Clay-colored Sparrow", 2, 1],
["Field Sparrow", 2, 1 ],
["Vesper Sparrow", 2, 1 ],
["Lark Sparrow", 2, 1 ],
["Fox Sparrow", 2, 1 ],
["Song Sparrow", 2, 1 ],
["Lincoln's Sparrow", 2, 1 ],
["Swamp Sparrow", 2, 1 ],
["Harris's Sparrow", 2, 1 ],
["White-crowned Sparrow", 2, 1 ],
["Dark-eyed Junco M", 2, 1 ],
["Dark-eyed Junco F", 2, 1 ],
["Lapland Longspur breeding M", 2, 1 ],
["Lapland Longspur F, nonbreeding M", 2, 1 ],
["Snow Bunting breeding", 2, 1 ],
["Snow Bunting nonbreeding", 2, 1 ],
["Indigo Bunting M", 2, 1 ],
["Indigo Bunting F", 2, 1 ],
["Bobolink F, nonbreeding M", 2, 1 ],
["Red-winged Blackbird F", 2, 1 ],

["Rusty Blackbird breeding", 2, 2 ],
["Rusty Blackbird nonbreeding", 2, 2 ],
["Common Grackle", 2, 2 ],

["Brown-headed Cowbird M", 2, 1],
["Brown-headed Cowbird F", 2, 1 ],
["Purple Finch F", 2, 1 ],
["House Finch F", 2, 1 ],
["House Sparrow M", 2, 1 ],
["House Sparrow F", 2, 1 ],

["Eastern Wood-Pewee", 1, 2],
["Alder Flycatcher", 1, 2],
["Eastern Phoebe", 1, 2],
["Warbling Vireo", 1, 2],
["Red-eyed Vireo", 1, 2],
["Tennessee Warbler F, nonbreeding M", 1, 2],
["Yellow-rumped Warbler nonbreeding F", 1, 2],
["Pine Warbler nonbreeding F", 1, 2],
["Bay-breasted Warbler nonbreeding F", 1, 2],
["Blackpoll Warbler F, nonbreeding M", 1, 2],
["Cerulean Warbler F", 1, 2],
["Northern Waterthrush", 1, 2],

["Savannah Sparrow", 1, 1],
["White-throated Sparrow", 1, 1],
["Rose-breasted Grosbeak F", 1, 1],
["Dickcissel F", 1, 1],
["Bobolink breeding M", 1, 1],
["Pine Siskin", 1, 1],
["American Goldfinch nonbreeding F", 1, 1],

["Great Crested Flycatcher", 1, 2],
["Yellow-throated  Vireo", 1, 2],
["Blue-headed Vireo", 1, 2],
["Philadelphia Vireo", 1, 2],
["Horned Lark", 1, 2],
["Golden-crowned Kinglet F", 1, 2],
["Blue-winged Warbler", 1, 2],
["Golden-winged Warbler M", 1, 2],
["Golden-winged Warbler F", 1, 2],
["Yellow Warbler F", 1, 2],
["Magnolia Warbler breeding M", 1, 2],
["Magnolia Warbler breeding F", 1, 2],
["Magnolia Warbler nonbreeding", 1, 2],
["Cape May Warbler F", 1, 2],
["Yellow-rumped Warbler breeding M", 1, 2],
["Yellow-rumped Warbler nonbreeding M", 1, 2],
["Yellow-rumped Warbler breeding F", 1, 2],
["Black-throated Green Warbler M", 1, 2],
["Black-throated Green Warbler F", 1, 2],
["Pine Warbler breeding, nonbreeding M", 1, 2],
["Palm Warbler nonbreeding", 1, 2],
["American Redstart F", 1, 2],
["Connecticut Warbler M", 1, 2],
["Connecticut Warbler F", 1, 2],
["Mourning Warbler M", 1, 2],
["Mourning Warbler F", 1, 2],
["Common Yellowthroat M", 1, 2],
["Common Yellowthroat F", 1, 2],
["Wilson's Warbler M", 1, 2],
["Wilson's Warbler F", 1, 2],
["Canada Warbler M", 1, 2],
["Canada Warbler F", 1, 2],

["Scarlet Tanager F, nonbreeding M", 1, 1],
["Dickcissel M", 1, 1],

["Eastern Meadowlark", 1, 2],

["Yellow-headed Blackbird M", 1, 1],
["Yellow-headed Blackbird F", 1, 1],
["American Goldfinch breeding F, nonbreeding M", 1, 1],

["Eastern Kingbird", 1, 2],

["Cliff Swallow", 1, 5],
["Barn Swallow", 1, 5],

["White-breasted Nuthatch M", 1, 2],
["White-breasted Nuthatch F", 1, 2],
["Eastern Bluebird M", 1, 2],
["Eastern Bluebird F", 1, 2],
["American Robin", 1, 2],
["Gray Catbird", 1, 2],
["Chestnut-sided Warbler nonbreeding", 1, 2],

["Eastern Towhee M", 1, 1],
["Eastern Towhee F", 1, 1],

["Red-breasted Nuthatch", 1, 2],
["Ovenbird", 1, 2],
["Golden-crowned Kinglet M", 1, 2],
["Blackburnian Warbler M", 1, 2],
["Ruby-crowned Kinglet", 1, 2],
["Bohemian Waxwing", 1, 2],
["Nashville Warbler", 1, 2],
["Northern Parula", 1, 2],
["Yellow Warbler M", 1, 2],
["Chestnut-sided Warbler breeding M", 1, 2],
["Cape May Warbler M", 1, 2],
["Palm Warbler breeding", 1, 2],
["Cedar Waxwing", 1, 2],
["Orange-crowned Warbler", 1, 2],
["Chestnut-sided Warbler breeding F", 1, 2],
["Bay-breasted Warbler breeding M", 1, 2],
["Bay-breasted Warbler nonbreeding M", 1, 2],
["Bay-breasted Warbler breeding F", 1, 2],
["Blackburnian Warbler F", 1, 2],
["American Redstart M", 1, 2],
["Baltimore Oriole F", 1, 2],

["Scarlet Tanager breeding M", 1, 1],
["Northern Cardinal M", 1, 1],
["Northern Cardinal F", 1, 1],
["Rose-breasted Grosbeak M", 1, 1],
["Purple Finch M", 1, 1],
["House Finch M", 1, 1],
["Common Redpoll", 1, 1],
["Red-winged Blackbird M", 1, 1],

["Baltimore Oriole M", 1, 2],

["American Goldfinch breeding M", 1, 1]
];

/* 

The name possibleNumber for the following arrays indicates the qualities of the the previous number are present in the current array.

*/

var possibleOne = [ ];
var possibleTwo = [ ];
var possibleThree = [ ];
var possibleFour = [ ];
var possibleFive = [ ];
var possibleSix = [ ];
var possibleSeven = [ ];
var possibleTotal = [ ];

var oneValue
var questionOne
var questionOneAnswer
var responseOne

var twoValue
var questionTwo
var questionTwoAnswer
var responseTwo

var threeValue
var questionThree
var questionThreeAnswer
var responseThree

var fourValue
var questionFour
var questionFourAnswer
var responseFour


var fiveValue
var questionFive
var questionFiveAnswer
var responseFive


var sixValue
var questionSix
var questionSixAnswer
var responseSix

var sevenValue
var questionSeven
var questionSevenAnswer
var responseSeven

var name
var html


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

// question one 
var questionOne = prompt("Does the bird contain any orange, red, or yellow? answer 1. if yes, 2. if no.");
var questionOneAnswer = parseInt(questionOne);
if (questionOneAnswer > 0) {
  var oneValue = questionOneAnswer;
} else {
  var oneValue = "undefined";
}

// question two
var twoValue = 0;
var questionTwo = prompt("Is the beak type one of these possible options: 1. finch, 2. thin, 3. hawk, 4. long heavy, or 5. tiny?");
var questionTwoAnswer = parseInt(questionTwo);
if (questionTwoAnswer > 0) {
  var twoValue = questionTwoAnswer;
} else {
  var twoValue = "undefined";
}



for (var i = 0; i < birdsInfo.length; i += 1 ){
    responseOne = birdsInfo [i][1];
    responseTwo = birdsInfo [i][2];
    responseThree = birdsInfo [i][3];
    responseFour = birdsInfo [i][4];
    responseFive = birdsInfo [i][5];
    responseSix = birdsInfo [i][6];
    responseSeven = birdsInfo [i][7];
    
    possibleOne = birdsInfo [i][1];
    possibleTwo = birdsInfo [i][1][2];
    possibleThree = birdsInfo [i][1][2][3];
    possibleFour = birdsInfo [i][1][2][3][4];
    possibleFive = birdsInfo [i][1][2][3][4][5];
    possibleSix = birdsInfo [i][1][2][3][4][5][6];
    possibleSeven = birdsInfo [i][1][2][3][4][5][6][7];

    name = birdsInfo [i][0];
    if (responseOne == questionOneAnswer) {
        possibleOne = true;
    } if (responseTwo == questionTwoAnswer) {
        possibleTwo = true;
        if (responseThree == questionThreeAnswer) {
          possibleThree = true;
          if (responseFour == questionFourAnswer) {
            possibleFour == true;
            if (responseFive == questionFiveAnswer) {
              possibleFive == true;
              if (responseSix == questionSixAnswer) {
                possibleSix == true;
                if (responseSeven == questionSevenAnswer) {
                  possibleSeven == true;
                }
              }
            }
          }
        }
    }

    
    
    
}



html = "Based on your answers..."
html += '<h2>These are the possible birds: </h2>'; 
html += buildList( possibleOne );
print(html)