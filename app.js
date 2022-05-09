function midiOctave(octArr) {
    let myArr = [];
    for (var i = 0; i < octArr.length; i++) {
        myArr.push(octArr[i] + 12);
    }
    console.log(myArr);
}

let myArr = [[36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59], [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83], [84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]]


function myFunc() {
    alert("You Clicked me");
}

function increment() {
    document.getElementById('midiChannelSelect').stepUp();
}

function decrement() {
    document.getElementById('midiChannelSelect').stepDown();
}

//console.log(midiOctave([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]));
// return [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
console.log(myArr[0][0]) // return 36
console.log(myArr[1][0]) // return 48
console.table(myArr) // return table showing all arrays