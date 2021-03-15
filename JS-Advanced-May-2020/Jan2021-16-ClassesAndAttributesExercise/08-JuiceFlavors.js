function solve(input) {
    let data = {};
    let bottles = new Map();

    for (const line of input) {
        let items = line.split(" => ");
        let juice = items[0];
        let quantity = Number(items[1]);

        if (!data.hasOwnProperty(juice)) {
            data[juice] = 0;
        }

        data[juice] += quantity;

        if (data[juice] >= 1000) {
            let bottlesCount = Math.floor(data[juice] / 1000);

            if (bottles.get(juice)) {
                bottles.set(juice, bottlesCount + bottles.get(juice));
            } else {
                bottles.set(juice, bottlesCount);
            }
        }

        data[juice] = data[juice] % 1000;
    }

    console.log([...bottles]
        .map(b => `${b[0]} => ${b[1]}`)
        .join("\n"));
}
