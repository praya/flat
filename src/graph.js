import * as blessed from 'blessed';
import * as contrib from 'blessed-contrib';

const screen = blessed.screen();
const line = contrib.line({
    style: {
        line: "yellow",
        text: "green",
        baseline: "black"
    },
    xLabelPadding: 3,
    showLegend: true,
    xPadding: 5,
    label: 'Title'
});



export default function graph (data) {

    screen.append(line);
    line.setData(data);
    
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
        return process.exit(0);
    });
    
    screen.render();
}