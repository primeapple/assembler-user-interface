/**
 * The Editor component (uses Codemirror editor)
 * @module Editor
 */

var m = require("mithril")
var codeMirror = require("codemirror");
require("codemirror/addon/selection/active-line");

export default class Editor {

    /**
     * The default settings for the Editor
     */
    getDefaultSettings() {
        return {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
        }
    }

    /**
     * Defines, what happens when a breakpoint was set
     * @param {Codemirror Instance} codemirror 
     * @param {integer} line The line where a breakpoint was set, counting from 0
     */
    handleBreakpoints(codemirror, line) {
        var info = codemirror.lineInfo(line);

        function breakPointElemeent(hasBreakpoint) {
            if (hasBreakpoint) return null;
            else {
                var elem = document.createElement("div");
                elem.classList.add("Codemirror-custom-breakpoint")
                elem.innerHTML = "●";
                return elem;
            }
        }

        codemirror.setGutterMarker(line, "Codemirror-custom-breakpoint", breakPointElemeent(info.gutterMarkers));
    }

    /**
     * Creates codemirror
     * @param {dom-element} element The dom Element (has to be Textarea) for codemirror to use
     * @param {object} settings The settings (in addition to the default settings) for codemirror to use
     * @param {boolean} breakpoints True, if we support breakpoints, false if not
     */
    createCodeMirror(element, settings, breakpoints) {
        let finalSettings = Object.assign({}, this.getDefaultSettings(), settings);
        finalSettings.gutters = ["Codemirror-custom-breakpoint", "CodeMirror-linenumbers"];
        var cm = codeMirror.fromTextArea(element, finalSettings);
        if (breakpoints) {
            cm.on("gutterClick", this.handleBreakpoints);
        }
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oncreate(vnode) {
        this.createCodeMirror(vnode.dom, vnode.attrs.settings, vnode.attrs.breakpoints);
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <textarea>
            </textarea>
        )
    }
}