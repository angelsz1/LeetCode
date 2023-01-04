function detectCapitalUse(word: string): boolean {
    //its always ok if its 1 character long
    if (word.length == 1)
        return true;


    let probAllCap: boolean = false;


    if (isCapital(word[0])) { //set up flag
        if (isCapital(word[1]))
            probAllCap = true;
    }



    if (probAllCap) { //check if all are cap, otherwise false
        for (let i = 2; i < word.length; i++) {
            if (!isCapital(word[i]))
                return false;
        }
    }
    else { //check if none is cap, otherwise false
        for (let i = 2; i < word.length; i++) {
            if (isCapital(word[i]))
                return false;

        }
    }

    return true;
};

var isCapital = (char: string) => {
    return char >= 'A' && char <= 'Z';
}

console.log(detectCapitalUse("FlaG"))



