import * as fs from 'fs';
import * as contrib from 'blessed-contrib';
import graph from './graph';
import benchmark from './benchmark';
import generateData from './data/generateData';
import flatUsingStack from './flat/flatUsingStack';
import flatUsingReversedStack from './flat/flatUsingReversedStack';
import flatUsingPath from './flat/flatUsingPath';
import flatUsingRecursion from './flat/flatUsingRecursion';


benchmark({
    repeat: 10,
    beforeIteration(iteration) {
        return generateData(1, 1, iteration * 50);
    },
    tests: [
        {
            name: 'ReSt',
            action(data) {
                flatUsingReversedStack(data);
            }
        },
        // {
        //     name: 'Stack',
        //     action(data) {
        //         flatUsingStack(data);
        //     }
        // },
        // {
        //     name: 'Rec',
        //     action(data) {
        //         flatUsingRecursion(data);
        //     }
        // },
        {
            name: 'Path',
            action(data) {
                flatUsingPath(data);
            }
        },
    ],
    afterIteration(tests) {
        const colors = ['blue', 'green', 'yellow', 'cyan', 'white', 'magenta', 'red'];
        const lines = tests.map((test, index) => createCoordinates(test, colors[index]));

        graph(lines);
    }
})


function createCoordinates({ stats, name }, line) {
    const x = stats.map(stat => `count=${stat.iteration * 50}`);
    const y = stats.map(stat => stat.ms);
    const lastTime = Math.ceil(stats[stats.length - 1].ms);

    return { title: `${name} ${lastTime}`, style: { line }, x, y };;
}
