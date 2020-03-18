import EditorView from './components/editorView.js'
import ExecutionView from './components/executionView.js'

var m = require ("mithril");


m.mount(document.body, {view: () => <EditorView />});