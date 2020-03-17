var m = require("mithril")
var codeMirror = require("codemirror");
require("codemirror/addon/selection/active-line");

export default class Editor {

    getDefaultSettings() {
        return {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
        }
    }

    createCodeMirror(element, settings) {
        var cm = codeMirror.fromTextArea(element, 
            Object.assign({}, this.getDefaultSettings(), settings)
        );
    }

    oncreate(vnode) {
        this.createCodeMirror(vnode.dom, vnode.attrs.settings);
    }

    view(vnode) {
        return (
            <textarea>
            </textarea>
        )
    }
}