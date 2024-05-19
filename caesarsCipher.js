// only capital letters

function rot13(string) {
    let cypherRotation = 13;
    let rollOverAt = 90;
    let startAlphabetAt = 65;

    let encrypted = "";

    for (let i = 0; i < string.length; i++) {
        let currentNum = string.charCodeAt(i);
        // skip if not between range
        if (currentNum < startAlphabetAt || currentNum > rollOverAt) {
            encrypted += string[i];
        } else {
            let newNum = currentNum + cypherRotation;
            if (newNum > rollOverAt) {
                // A is at 65, so going from 90 to 65 is 90 - roll 1 == 65 + 1
                newNum = (newNum % 90) + startAlphabetAt - 1;
            }
            let newChar = String.fromCharCode(newNum);
            encrypted += newChar;
        }
    }

    return encrypted;
}

rot13("SERR PBQRPNZC") === "FREE CODE CAMP";
rot13("SERR CVMMN!") === "FREE PIZZA!";
rot13("SERR YBIR?") === "FREE LOVE?";
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";
