const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,26,22];

const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const allAges = ages.concat(ages2).concat(ages3);

