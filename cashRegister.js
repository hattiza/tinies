
/* 
Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first 
argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or
 if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it 
is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted 
in highest to lowest order, as the value of the change key.

Currency Unit	        Amount
Penny       	        $0.01 (PENNY)
Nickel	                $0.05 (NICKEL)
Dime	                $0.1 (DIME)
Quarter     	        $0.25 (QUARTER)
Dollar	                $1 (ONE)
Five Dollars	        $5 (FIVE)
Ten Dollars	            $10 (TEN)
Twenty Dollars	        $20 (TWENTY)
One-hundred Dollars	    $100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

function fetchType(moneyRequestedName, cashRegisterState) {
  for (let i = 0; i < cashRegisterState.length; i++) {
    let nameInCash = cashRegisterState[i][0];
    if (nameInCash === moneyRequestedName) {
      return cashRegisterState[i][1];
    }

  }
  return "NO SUCH MONIES";
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function isClosed(cashRegister, returnValues) {
  for (let i = 0; i < cashRegister.length; i++) {
    if (cashRegister[i][1] !== 0) {
      return false;
    }
  }

  // if true, swap values for some reason?? when closed change includes zeros
  for (let i = 0; i < returnValues.length; i++) {
    let returnedName = returnValues[i][0];
    for (let i = 0; i < cashRegister.length; i++) {
      if (cashRegister[i][0] === returnedName) {
        cashRegister[i][1] = returnValues[i][1];
      }
    }
  }
  return true;
}

function updateCashRegister(moneyType, cashRegister, amount) {
  // console.log(cashRegister, moneyType, amount);
  for (let i = 0; i < cashRegister.length; i++) {
    let nameInCash = cashRegister[i][0];
    if (nameInCash === moneyType) {
      cashRegister[i][1] = amount;
    }
  }
}



function checkCashRegister(price, cash, cid) {
  let dollars = cash - price;
  let moduloNotes = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  }

  let keys = Object.keys(moduloNotes);     // [ 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED' ] 
  let values = Object.values(moduloNotes); // [ 1, 5, 10, 20, 100 ]
  let returnValues = [];

  for (let i = keys.length - 1; i >= 0; i--) {
    let moneyType = keys[i];
    let moneyValue = values[i];

    // how mich of given type do I have, e.g: how many hundreds
    let inRegister = fetchType(moneyType, cid);
    // console.log(moneyType);

    // how many can I fill
    let canUse = Math.floor(dollars / moneyValue) * moneyValue;

    let returnNow = 0;

    while (canUse !== 0 && inRegister > 0) {
      dollars -= moneyValue;
      inRegister -= moneyValue;
      returnNow += moneyValue;
      if (isFloat(dollars)) { dollars = parseFloat(dollars.toFixed(2)); }
      if (isFloat(inRegister)) { inRegister = parseFloat(inRegister.toFixed(2)); }
      if (isFloat(returnNow)) { returnNow = parseFloat(returnNow.toFixed(2)); }

      canUse = Math.floor(dollars / moneyValue) * moneyValue;
    }

    if (returnNow > 0) {
      returnValues.push([moneyType, returnNow]);
    }
    updateCashRegister(moneyType, cid, inRegister)
  }

  if (dollars > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (isClosed(cid, returnValues)) {
    return { status: "CLOSED", change: cid }
  }

  return { status: "OPEN", change: returnValues }

}