function getValueFromLetter(letter) {
    // in question: a = 1, A = 27
    //  a charCodeAt is 97, A is 65 just use that as the mapping.
    if (letter.charCodeAt() >= 97) {
        return 1 + (letter.charCodeAt() - "a".charCodeAt());
    } else {
        return 27 + (letter.charCodeAt() - "A".charCodeAt());
    }
}

function getMatchingLetter(word) {
    const word1 = word.slice(0, word.length / 2);
    const word2 = word.slice(word.length / 2);

    let set1 = new Set(word1);
    let set2 = new Set(word2);

    return Array.from(set1).find(letter => set2.has(letter));
}

function getMatchingLetterBonus(elfGroup) {
    const [word1, word2, word3] = elfGroup;

    let set1 = new Set(word1);
    let set2 = new Set(word2);
    let set3 = new Set(word3);

    return Array.from(set1).find(letter => set2.has(letter) && set3.has(letter));
}

// guaranteed that 1 matching letter per question
function day3(bags) {
    return bags.reduce((acc, word) => acc + getValueFromLetter(getMatchingLetter(word)), 0);
}

function day3Bonus(elvesBags) {
    const elfGroups = elvesBags.reduce((acc, elfBag) => {
        let currentGroup = acc[acc.length - 1];
        if (currentGroup && currentGroup.length >= 3) {
            acc.push([elfBag]);
        } else {
            acc[acc.length - 1].push(elfBag);
        }
        return acc;
    }, [[]]);

    return elfGroups.reduce((acc, elfGroup) => acc + getValueFromLetter(getMatchingLetterBonus(elfGroup)), 0);
}

module.exports = {
    day3,
    day3Bonus
}