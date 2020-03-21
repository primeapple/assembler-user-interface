import EditorView from './routes/editorView.js'
import ExecutionView from './components/executionView.js'
import Program from './classes/program.js';

var m = require ("mithril");


var program = new Program()

/**
 * Mithrils Routing
 */
m.route(document.body, "/editor", {
    "/editor": {view: () => <EditorView program={program} />},
    "/execution": {view: () => <ExecutionView program={program} />},
});