function midiOctave(octArr) {
    let myArr = [];
    for (var i = 0; i < octArr.length; i++) {
        myArr.push(octArr[i] + 12);
    }
    console.log(myArr);
}

function myFunc() {
    alert("You Clicked me");
}

//console.log(midiOctave([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]));
// return [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]