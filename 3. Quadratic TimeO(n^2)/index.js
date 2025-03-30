function findPairs(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {  
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }

    for (let q = 0; q < arr.length; q++) {
        console.log('------', q);
        
    }
}

const number = [1,2,3,4,5]

findPairs(number)

//This gives O(n^2) for the nested loop and O(n) for the second loop. 
// This equals O(n^2 + n)
//O(n^2) is the dominant term as it takes more time and O(n) is the non-dominant term
//The resolution is O(n^2) as the non-dominant term is removed