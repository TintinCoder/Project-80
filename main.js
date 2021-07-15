// Adding The Variables
var namesOfPeople = [];
function show() {
    var guestNames = document.getElementById('guestName').value;
    namesOfPeople.push(guestNames);
    document.getElementById('names').innerHTML = namesOfPeople;
    console.log(namesOfPeople);
}
function showList() {
    var lineBreak = namesOfPeople.join("<br>");
    console.log(lineBreak);
    document.getElementById('showLineBreak').innerHTML = lineBreak;
}
function sorted() {
    namesOfPeople.sort();
    var lineBreak2 = namesOfPeople.join("<br>");
    document.getElementById('names-without-comma').innerHTML = lineBreak2;
}
function search() {
    var s = document.getElementById("search").value;
    var found = 0;
    var j;
    for (j = 0; j <namesOfPeople.length; j++) {
        if (s==namesOfPeople[j]) {
            found = found+1;
        }
    }
    document.getElementById('searchName').innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}