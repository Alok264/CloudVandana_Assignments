// Reverse each word in a given string
// Input: "Welcome to this Javascript Guide!"
// Output: "emocleW ot siht tpircsavaJ !ediuG"

/**
 * @param {*} str 
 * @returns {string}
 * @description Reverse each word in a given string
 */
function reverseEachWord(str) {
    var words = str.split(' ');
    var result = [];
    for (var i = 0; i < words.length; i++) {
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(' ');
    }
console.log(reverseEachWord('Welcome to this Javascript Guide!'));


function reverseSort(arr)
{
    return arr.sort((a, b)=>(b-a));
}
console.log(reverseSort([1, 3, 2, 5, 4]));