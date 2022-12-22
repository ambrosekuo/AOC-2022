function isSubset(elfPair) {
    const [elf1, elf2] = elfPair.split(",");
    const [elf1Start, elf1End] = elf1.split("-");
    const [elf2Start, elf2End] = elf2.split("-");

    // Only subset if either lower1 <= lower2 and higher1 >= higher2

    return (+elf1Start <= +elf2Start && +elf1End >= +elf2End) ||
        (+elf2Start <= +elf1Start && +elf2End >= +elf1End);
}

function isOverlap(number1, start2, end2) {
    return (number1 >= start2 && number1 <= end2);
}

function isPairOverLap(elfPair) {
    const [elf1, elf2] = elfPair.split(",");
    const [elf1Start, elf1End] = elf1.split("-").map(a => +a);
    const [elf2Start, elf2End] = elf2.split("-").map(a => +a);

    // Overlap if start or end is between the other start or end
    return isOverlap(elf1Start, elf2Start, elf2End) ||
        isOverlap(elf1End, elf2Start, elf2End) ||
        isOverlap(elf2Start, elf1Start, elf1End) ||
        isOverlap(elf2End, elf1Start, elf1End)
}

function day4(elfPairs) {
    return elfPairs.reduce((acc, elfPair) => acc + (isSubset(elfPair) ? 1 : 0), 0)
}

function day4Bonus(elfPairs) {
    return elfPairs.reduce((acc, elfPair) => acc + (isPairOverLap(elfPair) ? 1 : 0), 0)
}


module.exports = {
    day4,
    day4Bonus
}