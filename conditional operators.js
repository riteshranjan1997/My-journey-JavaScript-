function checkNumber(a)
{
    if (a==5)
    {
        return "true"
    }
    return "false"
}

console.log(checkNumber(5))

/*
== it is a equal operator which checks equals irespective of data type
=== strict equal operator which checks equals respective of data type
*/
// != , !== these are not equals operators

// > greterthan, < lessthan, >= graterthan equalto, <= lessthan equalto, operators

// && and operator, || or operator


// if else 
function testElse(val)
{
    var result = "";
    if (val > 5) 
    {
        result = "Bigger than 5";
    }
    else
    {
        result = "5 or Smaller";
    }
    return result;
}

// else if 

function testElseIf(val)
{
    if (val > 10) 
    {
        return "Grater than 10";
        result = "Bigger than 5";
    }
    else
    {
        result = "5 or Smaller";
    }
    return result;
}

// logical order in if else ststement

function orderMyLogic(val)
{
    if (val < 5)
    {
        return "less than 5";
    }
    else if (val < 10)
    {
        return "less than 10";
    }
    else
    {
        return "Grater than or equal to 10";
    }
}

console.log(orderMyLogic(3));

/* it is inportant to note that order is very inportant becaues
in java script if the first ststement becomes true it donot check the 
other stetements afterwords */

// Switch conditional operators

function caseSwitch(val)
{
    var answerv = "";
    switch(val)
    {
        case 1:
            answer ="alpha";
            break;
        case 2:
            anser = "bita";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseSwitch(4));

// in switch case we add default option if any of the case is not satisfied

function isLess(a, b)
{
    return a < b;
}

console.log(isless(20, 15));

// all the conditional operators return boolean value i.e true/false

var count = 0

function cc(card)
{
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet ="hold"
    if (count > 0)
    {
        holdbet = "bet"
    }


    return count + " " + holebet;
}

cc(2); cc("K"); cc(7); cc("K"); cc("A");
console.log(cc(4))