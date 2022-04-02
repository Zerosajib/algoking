// countdown 
function countdown(i) {
    console.log(i)
    if (i <= 0) { // base case 
        return;
    }
    else { countdown(i - 1) } // recursive case 
}
countdown(3)

//greet 
function greet2(name) {
    console.log(`How are you, ${name}!`)
}

function bye(name) {
    console.log(`Ok bye, ${name}!`)
}

function greet(name) {
    console.log(`hello, ${name}!`)
    greet2(name)
    console.log("say bye!")
    bye(name)
}
greet("sajib")

// factorial function 
function fact(x) {
    if (x === 1) {
        return 1;
    }
    else {
        return x * fact(x - 1) // a recursive call 
    }
}
console.log(fact(8))
