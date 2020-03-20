import EditorView from './routes/editorView.js'
import ExecutionView from './components/executionView.js'

var m = require ("mithril");


m.route(document.body, "/editor", {
    "/editor": {view: () => <EditorView />},
    "/execute": {view: () => <ExecutionView />}
});