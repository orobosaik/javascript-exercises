const caesar = function(str,num) {
    const numbers = {
        1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 18: "r", 19: "s", 20: "t", 21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z"
    }
    const letters = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }

    let splittedStr = str.split("")
    let newString = [];

    for (const i of splittedStr) {
        const letter = i.toLowerCase()
        let newLetter = '';

        //Ignore non-letters and push to the newString variable
        if (!(letter in letters)) {
            newString.push(i)

        } else {
            //Shift the letter(i) by the specified number(num)
            const lValue = letters[letter];

            if (lValue + num < 1) {
                result = (lValue + num) % 26 + 26;
            } else {
                result = (lValue + num) % 26;
            }
            newLetter = numbers[result]

            //Compare initial letter to keep capitalization
            if (i === i.toLowerCase()) {
                newLetter = newLetter.toLowerCase()
            } else if (i === i.toUpperCase()) {
                newLetter = newLetter.toUpperCase()
            }
            newString.push(newLetter);
        }
    }
    return newString.join("")

};

// Do not edit below this line
module.exports = caesar;
