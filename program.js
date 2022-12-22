const fs = require('fs');
const { day3, day3Bonus } = require('./day3/day3');
const { day4, day4Bonus } = require('./day4/day4');
const { day5, day5Bonus } = require('./day5/day5');

const [day, bonus] = process.argv.slice(2);

fs.readFile(`./day${day}/input${bonus ? "Bonus" : ""}.txt`, 'utf8', (err, data) => {
    let input = data.split("\n");
    switch (day) {
        case "3": {
            if (bonus) {
                console.log(day3Bonus(input));
            } else {
                console.log(day3(input));
            }
        }
        case "4": {
            if (bonus) {
                console.log(day4Bonus(input))

            } else {
                console.log(day4(input));
            }
        }
        case "5": {
            if (bonus) {
                console.log(day5Bonus(input))

            } else {
                console.log(day5(input));
            }
        }
    }
});