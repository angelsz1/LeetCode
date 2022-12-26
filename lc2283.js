const setUpAppareances = (list, nums) => {
    var numbers = []
    for (var i = 0; i < nums.length; i++) {
        numbers.push(nums[i])
    }

    numbers.sort((a, b) => { return a - b });

    var i = 1
    var curNum = numbers[0]
    var app = 1
    while (i < numbers.length) {
        if (curNum == numbers[i])
            app++;
        else {
            list.push({ 'num': curNum, 'app': app })
            curNum = numbers[i]
            app = 1
        }
        i++
    }
    list.push({ 'num': curNum, 'app': app }) // the last one is never different



    console.log(list)


}


const hasEqualDigitCount = (numsApp, nums) => {
    for (let i = 0; i < nums.length; i++) {
        var condition = (element) => element.num == i;
        var index = numsApp.findIndex(condition);
        console.log(index)
        var amount = 0
        if (index != -1)
            amount = numsApp[index].app;

        console.log("amount=", amount, ",nums[i]=", nums[i], ",i=", i)

        if (nums[i] != amount)
            return false;
    }

    return true;
}

function main() {
    const nums = "42101000"
    var numsApp = []



    setUpAppareances(numsApp, nums)

    console.log("El numero", nums,
        hasEqualDigitCount(numsApp, nums) ? "tiene" : "no tiene", "misma cantidad de apariciones que numero de digitos");
}


main()
