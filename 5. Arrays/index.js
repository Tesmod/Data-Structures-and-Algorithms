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

    shift(){
        const firstElement = this.data[0]

        for (let i = 0; i < i.length; i++) {
            this.data[i] = this.data[i + 1]
        }

        
        delete this.data[this.length - 1]
        this.length--
        return firstElement
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('2')
myNewArray.push('2')
// myNewArray.pop()
myNewArray.shift()
// console.log(myNewArray.get('0'))
console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);