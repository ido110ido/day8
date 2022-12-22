//EX1
//1
function trimiingEges(arr){
    arr.pop()
    arr.shift()
    return arr
}
console.log(trimiingEges([1,2,3,4]));

//2
function addingToEgesString(arry =[]){
    arry.unshift('first')
    arry.push('last')
    return arry
}
console.log(addingToEgesString(['1','2']));

//3
function isFiveHere(arry =[]){
    return arry.includes(5)
}
console.log(isFiveHere([1,2,3,4,5,6,7]));

//4
function combine(arry1 =[],arry2 = []){
    return arry1.concat(arry2)
}
//5
function isNumHere(arry =[],num){
    return arry.includes(num)
}
//6
function isSrtingHere(arry =[],s){
    return arry.indexOf(s)
}
console.log(isSrtingHere(['a','b','c','d'],'b'));
//7
function reversArry(arry =[]){
    return arry.reverse()
}
//8
function reversArryIfInLength(arry =[]){
    if (arry.length >= 5 && arry.length <= 10) {
        return arry.reverse();
    }
        return arry;
}

console.log(reversArryIfInLength([1,2,3,4,5,6]));
//9
function reversArryLength(arry =[],num){
    if(arry.includes(num)){
        arry.shift()
        return arry.reverse()
    }
    return arry;
}
//10
function cloun(arry =[]){
    let newArry = [...arry]
    return newArry
}
//11
function first(arry =[],num){
    if(num === undefined){
        return arry.shift()
    }
    if(num < 0){
        num = 0
    }
       return arry.slice(0,num)
}

console.log(first([1,2,3,4,5,6,7,8]));
//12
function last(arry =[],num){
    if(num === undefined){
        return arry.pop()
    }
    if(num < 0){
        return []
    }
       return arry.slice(-num)
}
console.log(last([1,2,3,4,5,6,7,8,6]));
//13
function isEgesEqual(arry = []){
    if(arry.length === 1){
        return true
    }
    return arry.shift() === arry.pop()
}
console.log(isEgesEqual([1]));
//14
function numOfNumInEgesEqual(arry = []){
    if(arry.length === 1){
        return 0
    }
    if(arry.shift() === arry.pop()){
        return arry.length;
    }
    return false
}
console.log(numOfNumInEgesEqual([1,2,1]));

//Ex2

let wierdArry = ['Inception','Spiderman','tuesday']
let wierderArry = ['Green','Saturday','Friday','Wednsday']
let movies = []
let colors = []
let weekends = []
wierderArry.reverse()
wierdArry = wierdArry.concat(wierderArry)

verible = wierdArry.indexOf('Inception')
movies.push(wierdArry.splice(verible,1).pop())

verible = wierdArry.indexOf('Spiderman')
movies.push(wierdArry.splice(verible,1).pop())

wierdArry.unshift('Monday')
wierdArry.push('Thursday')

verible = wierdArry.indexOf('Green')
colors.push(wierdArry.splice(verible,1).pop())

wierdArry.unshift('Sunday')

verible = wierdArry.indexOf('Saturday')
weekends.push(wierdArry.splice(verible,1).pop())

verible = wierdArry.indexOf('Sunday')
weekends.push(wierdArry.splice(verible,1).pop())

console.log(wierdArry);
console.log(movies);
console.log(colors);
console.log(weekends);

//EX3
//1
let practiceFile =[]
practiceFile.push(42)
console.log(practiceFile);
practiceFile.push('hello')
console.log(practiceFile);
practiceFile.push([false,-4.6,'87'])
console.log(practiceFile);

//2
let  cargoHold =  ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
//2.1
cargoHold[cargoHold.indexOf('slinky')] = 'space tether'
//2.2
console.log(cargoHold.pop());
console.log(cargoHold);

// 2.3
console.log(cargoHold.shift()); 
console.log(cargoHold);

// 2.4
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold); 

// 2.5
console.log(`The cargo hold contains: ${cargoHold}. It has a total of ${cargoHold.length} items.`); 

//3.1
cargoHold.splice(3,0,'keys')
console.log(cargoHold);
//3.2
verible = wierdArry.indexOf('instruction manual')
cargoHold.splice(verible,1)
console.log(cargoHold);
//3.3
cargoHold.splice(2,3,'cat','fob','sring cheese')
console.log(cargoHold);

//4.1
let = holdCabinet1 = ['duct tape', 'gum',3.14,false,6.022e23]
let = holdCabinet2 = ['orange drink', 'nerf toys','camera',42,'parsnip']
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

//4.2
console.log(holdCabinet1.slice(2,4));
console.log(holdCabinet1);

//4.3
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());

//5.1
str = 'In space, no one can hear you code.'
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));

//5.2
arr = ['B', 'n', 'n', 5]
console.log(arr.join());
console.log(arr.join(' '));
console.log(arr.join(""));

//6.1
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]
let table = []
table.push(element1)
table.push(element2)
table.push(element26)
//6.3
console.log(table);
console.log(table[1][1]);
console.log(table[1]);


//EX4
//1
let numbers1 = [1,2,3,4,5]
//2
let numbers2 = numbers1 
//3
numbers1.push(6)
//4
console.log(numbers1);
console.log(numbers2);
//5.1
numbers1 = [1,2,3,4,5]
//5.2
let numbers3 = numbers1.slice()
//5.3
numbers1.push(6)
//5.4

console.log(numbers1);
console.log(numbers3);