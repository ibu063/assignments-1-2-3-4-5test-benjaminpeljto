// ************ TASK DESCRIPTION ************

// Write a function "sumAll" using rest parameters that takes ANY number of arguments and returns their sum.



// TODO

function sumAll(...args){
    return args.reduce((sum, num) => sum + num, 0);
}




















// Below this comment any modification is prohibited. 
module.exports = sumAll;