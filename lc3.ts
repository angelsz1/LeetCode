function lengthOfLongestSubstring(s: string): number {
    let index: number = 0;
    let longest: number = 0;

    while (index < s.length - longest) {
        let auxIndex = index + 1;
        let auxString: string = s[index];

        while (!auxString.includes(s[auxIndex]) && auxIndex < s.length) {
            auxString += s[auxIndex];
            auxIndex++;
        }

        if (auxString.length > longest)
            longest = auxString.length;

        index++;
    }


    return longest;
}



console.log(lengthOfLongestSubstring("buenas"));