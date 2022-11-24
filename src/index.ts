// // basic types
// let number: number = 777
// let company: string = 'Rivas Web'
// let isPublished: boolean = true;
// let x: any = 'Hello'

// // array of number types
// let ids: number[] = [1, 2, 3]
// let arr: any[] = [1, 'RR']

// // tuple
// let person: [number, string, boolean] = [2, 'Ricky', true]

// // tuple array
// let employee: [number, string][]

// employee = [
//     [1, 'Ricky'],
//     [2, 'Two'],
//     [3, 'Three'],
// ]

// // union => variable can have optional types
// let id: string | number

// id = '2'

// // Enum 
// enum Direction1 {
//     Up = 7,
//     Down,
//     Left,
//     Right
// }

// enum Direction2 {
//     Up = 'Up',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right'
// }

// // Object
// // define the types for User
// type User = {
//     id: number,
//     name: string
// }

// const user: User = {
//     id: 1,
//     name: 'Ricky'
// }

// // type assertion
// let cid: any = 1
// // let customerId = <number>cid
// // or
// let customerId = cid as number

// // functions

// // x, y and return value be a number type
// function addNum(x:number, y:number): number {
//     return x + y
// }

// // void
// function log(message: string | number): void {
//     console.log(message)
// }

// // interfaces => prefer for objects
// interface UserInterface {
//    readonly id: number,
//     name: string,
//     // optional
//     age?: number
// }

// const user1: UserInterface = {
//     id: 1,
//     name: 'Rivas',
// }

// // interface => funcs
// interface MathFunc {
//     (x: number, y: number): number 
// }

// const add: MathFunc = (x: number, y: number): number => x + y
// const sub: MathFunc = (x: number, y: number): number => x - y

// // generics => resuable components
// function getArray<T>(items: T[]): T[] {
//     return new Array().concat(items)
// }

// let numArray = getArray<number>([1,2,3])
// let strArray = getArray<string>(['R', 'A'])

// strArray.push('hello')


const generateBtn = document.querySelector('#genBtn') as HTMLButtonElement
const outputs = document.querySelectorAll('.ball')
const pastNumsOutput = document.querySelector('.past-nums ul') as HTMLDataListElement
const body = document.querySelector('body') as HTMLBodyElement


const toggleStatus = (): void => {
    outputs.forEach(ball => {
        ball.classList.toggle('active')
    })
}


const changeBgColor = (nums: number[]): void => {
    let str: string = ''
    nums.forEach(num => {
        str = str + `${num}`
    })

    const color1: string = `#` + str.substring(0, 6)
    const color2: string = `#` + str.substring(str.length, str.length - 6)

    body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`
}

const addToPastNumsArr = (nums: number[]): void => {
    let str: string = ''
    
    nums.forEach(num => {
        str = str + `${num},`
    })

    str = str.substring(0, str.length - 2)
    const listItem = document.createElement('li')
    listItem.textContent = str;
    pastNumsOutput.append(listItem)

}

const generateNum = (): number => Math.floor(Math.random() * 70 + 1)

const updateDom = (nums: number[]): void => {
    for (let i = 0; i < nums.length; i++){
        outputs[i].firstElementChild!.textContent = `${nums[i]}`
    }
}

const generateNums = (): void => {
    generateBtn.disabled = true;

    if (outputs[0].classList.contains('active')) {
        outputs.forEach(ball => {
            ball.classList.remove('active')
            ball.firstElementChild!.textContent = ''
        })
    }

    setTimeout(() => {
        const arrOfNums: number[] = [];

        for (let i = 0; i < outputs.length; i++){
            const randonNum: number = generateNum()
            arrOfNums.push(randonNum)
        }

        updateDom(arrOfNums)
        toggleStatus()

        setTimeout(() => {
            generateBtn.disabled = false;
            addToPastNumsArr(arrOfNums)
            changeBgColor(arrOfNums)
        }, 1000)

    }, 2000)

}

generateBtn.addEventListener('click', generateNums)