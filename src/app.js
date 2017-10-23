const rainDrops = (value) => {
    // set a variable to a string
    let result = "";
    //value must be positive
    if(value === 0) {
        return 0
    }
    if (value < 0) {
        return 'Argument must be a positive integer'
    }

    if (value == undefined) {
        return "Function requires an argument"
    }
    //check if the variable is divisible by 3 anf if true store the string 'pling' into result
    if(value % 3 === 0) {
        result += "Pling";
    }
    //check if the variable is divisible by 5 and if true store the string 'plang' into result
    if(value % 5 === 0) {
        result += "Plang"
    }
    //check if the variable is divisible by 5 and if true store the string 'plong' into result
    if (value % 7 == 0) {
        result += "Plong"
    }
    // for value not affected by this condition, return the value as a string
    if (result === "") {
        result += value.toString()
        
    }
    return result
}

export default rainDrops;
