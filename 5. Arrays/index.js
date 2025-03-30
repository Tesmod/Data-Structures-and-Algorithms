class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    get(i){
        return this.data[i]
    }

    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('2')
myNewArray.pop()
// console.log(myNewArray.get('0'))
console.log(myNewArray);