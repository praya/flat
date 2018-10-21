function sleep (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function measure (test, data, repeat = 1) {
    const started = process.hrtime();

    for (let i = 1; i <= repeat; i++) {
        await test.action(data);
    }

    const [seconds, nanoseconds] = process.hrtime(started)
    const totalSeconds = (seconds * 1000000000 + nanoseconds) / 1000;

    return totalSeconds / repeat;
}

export default async function benchmark ({
    beforeIteration = () => void 0,
    afterIteration = () => void 0,
    tests = [],
    delay = 0,
    repeat = 1,
    iterations = Infinity,
}) {

    let iteration = 0;

    tests.forEach(test => test.stats = []);

    while (iterations - iteration) {
        const data = beforeIteration(iteration);

        for (const test of tests) {
            const ms =  await measure(test, data, repeat);

            test.stats.push({ iteration, ms });
        }

        await afterIteration(tests);

        iteration++;
        await sleep(delay);
    }

}
