var array = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

function combineAndDecombine(elements, freq) {
    var list = [];
    for (var i = 0; i < elements.length; i++) {
        list.push({ 'element': elements[i], 'frequency': freq[i] });
    }

    list.sort((a, b) => {
        return a.frequency > b.frequency ? 1 : a.frequency == b.frequency ? a.element > b.element ? -1 : a.element == b.element ? 0 : 1 : -1;
    });


    for (var i = 0; i < list.length; i++) {
        elements[i] = list[i].element;
        freq[i] = list[i].frequency;
    }
}

const freqSort = (array) => {
    let elements = [];
    let freq = [];
    array.forEach(element => {
        if (!elements.includes(element))
            freq[elements.push(element) - 1] = 1;
        else
            freq[elements.indexOf(element)]++;
    });

    combineAndDecombine(elements, freq)

    let retArray = [];

    let index = 0;

    while (index < elements.length) {

        for (var j = 0; j < freq[index]; j++)
            retArray.push(elements[index]);
        index++;
    }

    return retArray;
};





console.log(freqSort(array));