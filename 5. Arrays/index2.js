//string reversal
const reverse = (string) => string.split('').reverse().join('')

console.log(reverse('hello'))

//palindrome

const reverse2 = (str) => {
    const fresh = str.split('').reverse().join('')
     if (fresh === str) {
        console.log("This is a palindrome");
     } else {
        console.log("This is not a palindrome");
     }
}

console.log(reverse2("acca"));

const reverse3 = (string) => string.split('').reverse().join('') === string

console.log(reverse3("acca"));

//Integer reversal
const reverse4 = (number) => {
    const reversed = number.toString().split('').reverse().join('')
    return parseInt(reversed)
}

console.log(reverse4(1234));

//sentence capitalization

const capitalize = (str) => {
    return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase().word.slice(1)).join(' ')
}

console.log(capitalize("hello world"));