// Too much uncessary work to read these creates from txt... lol
const _startCrates = [
    [], // just to reference index the easiest
    ["D", "T", "W", "N", "L"],
    ["H", "P", "C"],
    ["J", "M", "G", "D", "N", "H", "P", "W"],
    ["L", "Q", "T", "N", "S", "W", "C"],
    ["N", "C", "H", "P"],
    ["B", "Q", "W", "M", "D", "N", "H", "T"],
    ["L", "S", "G", "J", "R", "B", "M"],
    ["T", "R", "B", "V", "G", "W", "N", "Z"],
    ["L", "P", "N", "D", "G", "W"]
]

// In hindsight, pop should take the top one off, but too lazy to retype it, so just reversing lmao
const startCrates = _startCrates.map(arr => arr.reverse());

function moveCrate(crates, start, end) {
    const crate = crates[start].pop();
    crates[end].push(crate);
}

function moveCrates(crates, amount, start, end) {
    // this way of popping and unpopping twice, makes it so order is the same
    let cratesPopped = [];
    for (let i = 0; i < amount; i++) {
        cratesPopped.push(crates[start].pop());
    }
    while (cratesPopped.length) {
        const crate = cratesPopped.pop();
        crates[end].push(crate);
    }
}

function moveInstruction(crates, instruction) {
    //format is "move 6 from 6 to 5"
    //lazy way to extract it
    let matcher = / ([^ ]*)/g;
    const [moveAmount, start, end] = instruction.match(matcher).map(a => +a).filter(a => !!a);
    for (let i = 0; i < moveAmount; i++) {
        moveCrate(crates, start, end);
    }
}

function moveInstructionBonus(crates, instruction) {
    //format is "move 6 from 6 to 5"
    //lazy way to extract it
    let matcher = / ([^ ]*)/g;
    const [moveAmount, start, end] = instruction.match(matcher).map(a => +a).filter(a => !!a);
    moveCrates(crates, moveAmount, start, end);
}

function day5(instructions) {
    let startingCrate = startCrates;
    instructions.forEach((instruction) => moveInstruction(startingCrate, instruction));
    return startingCrate.reduce((acc, crates) => crates.length > 0 ? acc + crates[crates.length - 1] : acc, "")
}

function day5Bonus(instructions) {
    let startingCrate = startCrates;
    instructions.forEach((instruction) => moveInstructionBonus(startingCrate, instruction));
    console.log(startingCrate)
    return startingCrate.reduce((acc, crates) => crates.length > 0 ? acc + crates[crates.length - 1] : acc, "")
}


module.exports = {
    day5,
    day5Bonus
}