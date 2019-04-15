function generateData1(days, mismatches) {
    let indexes = [];

    let moneyC = [];
    let moneyA = [];

    let arrayC = [];
    let arrayA = [];

    let array = [];

    // for each day...
    for (let i = 0; i < days; i++) {
        // push i to the indexes array
        indexes.push(i);

        // generate a random amount between 30 and 100 
        charged = Math.floor(Math.random() * (100 - 30)) + 30;

        // push that amount to both money arrays
        moneyC.push(charged);
        moneyA.push(charged);
    };

    // for each mismatch...
    for (let i = 0; i < mismatches; i++) {

        // pick a random index
        let index = Math.floor(Math.random() * indexes.length);

        // remove it from index array (to avoid picking the same one again)
        index = indexes.splice(index, 1);

        // get a random difference between 20 and the amount corresponding to that index
        let difference = Math.floor(Math.random() * (moneyA[index] - 20)) + 20;
        
        // deduct that difference from the amount corresponding to 
        moneyA[index] -= difference;
    };

    // for each day, push the following to each array
    for (let i = 0; i < days; i++) {
        arrayC.push(`C ${i + 1} ${moneyC[i]}`);
        arrayA.push(`A ${i + 1} ${moneyA[i]}`);
    }

    // join the arrays and push them to the larger array
    array.push(arrayC.join(' '));
    array.push(arrayA.join(' '));

    // join the array to generate a string
    data = array.join(' ');

    console.log(data);
    return data;
};



function generateData2(days, mismatches) {
    let indexes = [];

    let moneyC = [];
    let moneyA = [];

    let array = [];

    // same as before, but bigger random numbers (between 50 and 500)
    for (let i = 0; i < days; i++) {
        indexes.push(i);
        charged = Math.floor(Math.random() * (500 - 50)) + 50;
        moneyC.push(charged);
        moneyA.push(charged);
    };

    // same as before, except...
    for (let i = 0; i < mismatches; i++) {
        let index = Math.floor(Math.random() * indexes.length);
        index = indexes.splice(index, 1);
        difference = Math.floor(Math.random() * (moneyA[index] - 40)) + 40;

        // pick randomly between 1 and -1
        factor = Math.round(Math.random()) * 2 - 1;

        // the difference might be added or subtracted
        moneyA[index] += difference * factor;
    };

    for (let i = 0; i < days; i++) {
        array.push(`C ${i + 1} ${moneyC[i]}`);
        array.push(`A ${i + 1} ${moneyA[i]}`);
    };

    data = array.join(' ');

    console.log(data);
    return data;
};



function generateData3(days, mismatches) {
    let indexes = [];

    let moneyC = [];
    let moneyA = [];

    let array = [];

    // same as before, but bigger random numbers (between 500 and 5000)
    for (let i = 0; i < days; i++) {
        indexes.push(i);
        charged = Math.floor(Math.random() * (5000 - 500)) + 500;
        moneyC.push(charged);
        moneyA.push(charged);
    };

    for (let i = 0; i < mismatches; i++) {
        let index = Math.floor(Math.random() * indexes.length);
        index = indexes.splice(index, 1);
        difference = Math.floor(Math.random() * (moneyA[index] - 400)) + 400;
        factor = Math.round(Math.random()) * 2 - 1;
        moneyA[index] += difference * factor;
    };

    for (let i = 0; i < days; i++) {
        array.push(`C ${i + 1} ${moneyC[i]}`);
        array.push(`A ${i + 1} ${moneyA[i]}`);
    }

    // shuffle the array by looping through from end to beginning...
    for (let i = array.length - 1; i > 0; i--) {

        // pick a random index smaller than or equal to the current index
        let j = Math.ceil(Math.random() * (i));

        // swap the items
        [array[i], array[j]] = [array[j], array[i]];
    };

    data = array.join(' ');

    console.log(data);
    return data;
};


generateData1(3, 0);
generateData1(3, 1);
generateData1(4, 2);
generateData1(4, 4);
generateData1(5, 2);
generateData1(5, 0);
generateData1(8, 3);
generateData1(8, 6);
generateData1(9, 0);
generateData1(10, 1);

generateData2(3, 2);
generateData2(3, 1);
generateData2(4, 1);
generateData2(4, 0);
generateData2(10, 2);
generateData2(10, 4);
generateData2(20, 15);
generateData2(20, 3);
generateData2(50, 0);
generateData2(50, 11);

generateData3(3, 1);
generateData3(3, 0);
generateData3(4, 0);
generateData3(4, 2);
generateData3(50, 14);
generateData3(50, 4);
generateData3(100, 99);
generateData3(100, 50);
generateData3(200, 13);
generateData3(200, 88);