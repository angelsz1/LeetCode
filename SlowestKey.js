const releaseTimes = [9, 29, 49, 50];
const keysPressed = "cbcd";

var slowestKey = (releaseTimes, keysPressed) => {
    let keyTimes = [];
    for (var i = 0; i < releaseTimes.length; i++) {
        if (i == 0)
            keyTimes[i] = releaseTimes[i];
        else
            keyTimes[i] = releaseTimes[i] - releaseTimes[i - 1];
    }

    return combine(keyTimes, keysPressed);


}

function combine(keyTimes, keysPressed) {
    var list = [];
    for (var i = 0; i < keyTimes.length; i++) {
        list.push({ 'keyTime': keyTimes[i], 'keyPressed': keysPressed[i] });
    }

    list.sort((a, b) => {
        return a.keyTime < b.keyTime ? 1 : a.keyTime == b.keyTime ? a.keyPressed < b.keyPressed ? 1 : -1 : -1;
    });

    console.log(list);

    return list[0].keyPressed;
}

console.log(slowestKey(releaseTimes, keysPressed));