const arr=[1,2,3,4,5,6,7,8,9,10]

// find odd nums sum in array

const oddNums=(acc,num)=> num%2!==0?acc+num:acc
const result=arr.reduce(oddNums,0)
console.log(result)


// find odd index sum
const oddIndexSum=(acc,num,index)=> index%2!==0?acc+num:acc


const oddIndexSumResult=arr.reduce(oddIndexSum,0)
console.log(oddIndexSumResult)

// find biggest num in array
const biggestNUm=(acc,num) => num>acc?num:acc
console.log(arr.reduce(biggestNUm))

// get numbers divisble by 10 in array

const divisibleBy10=num=>num%10===0

console.log(arr.filter(divisibleBy10))

// increment by 1 if number index in array is even and decrement if num index in array is odd
const evenIncByOneOddDecByOne=(num,index)=>index%2==0?num+1:num-1

const evenIncByOneOddDecByOneResult= arr.map(evenIncByOneOddDecByOne)

console.log(evenIncByOneOddDecByOneResult)

// return an object with sum of odd num and even nums separately

const evenOddSumObj=(acc,cv)=>cv%2==0?{...acc,evenSum:acc.evenSum+cv}:{...acc,oddSum:acc.oddSum+cv}

const evenOddSumObjRes=arr.reduce(evenOddSumObj,{evenSum:0,oddSum:0})
console.log(evenOddSumObjRes)