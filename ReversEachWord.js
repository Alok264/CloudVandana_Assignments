// Reverse each word in a given string
// Input: "This is a sunny day"
// Output: "sihT si a ynnus yad"

/**
 * @param {*} str 
 * @returns {string}
 * @description Reverse each word in a given string
 */
function reverseEachWord(str) {
    var words = str.split(' ');
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var reversedWord = '';
        for (var j = word.length - 1; j >= 0; j--) {
            reversedWord += word.charAt(j);
        }
        result.push(reversedWord);
    }
    return result.join(' ');
    }
console.log(reverseEachWord('This is a sunny day'));
