const groceries = ['apple', 'celery', 'cabbage', 'lettuce', 'flour', 'cheese']

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log( `Found ${item} at index ${i}.`)
        }
    }

    // for (let j = 0; j < groceries.length; j++) {
    //     if (groceries[j] === item){
    //         console.log( `Found ${item} at index ${i}.`)
    //     }
        
    // }
}

searchForItem('cheese')