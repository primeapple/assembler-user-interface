/**
 * The Editor component (uses Codemirror editor)
 * @module Editor
 */

var m = require("mithril")
var codeMirror = require("codemirror");
require("codemirror/addon/selection/active-line");

export default class Editor {

    currentProgram;
    settings;
    codemirror;

    /**
     * The default settings for the Editor
     */
    getDefaultSettings() {
        return {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            gutters: ["Codemirror-custom-breakpoint", "CodeMirror-linenumbers"],
        }
    }

    /**
     * Defines, what happens when a breakpoint was set
     * @param {Codemirror Instance} codemirror 
     * @param {integer} line The line where a breakpoint was set, counting from 0
     */
    handleBreakpoints(codemirror, line) {
        var info = codemirror.lineInfo(line);

        // TODO create elem with mithril
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
    createCodeMirror(element, breakpoints, readOnly) {
        let cm = codeMirror.fromTextArea(element, this.settings);
        if (breakpoints) {
            cm.on("gutterClick", this.handleBreakpoints);
        }
        if (!readOnly) {
            cm.on("change", (c, changeOb) => {
                if (!(changeOb.origin === "setValue")) {
                    this.currentProgram.setCommands(c.getValue());
                    m.redraw();
                }
            });
        }
        this.codemirror = cm;
    }

    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
        this.settings = Object.assign({}, this.getDefaultSettings(), vnode.attrs.settings);
    }

    /**
     * The oncreate function for mithril
     * @param {vnode} vnode 
     */
    oncreate(vnode) {
        this.createCodeMirror(vnode.dom, vnode.attrs.breakpoints, vnode.attrs.readOnly);
    }
    
    /**
     * The onupdate function for mithril
     * @param {vnode} vnode 
     */
    onupdate(vnode) {
        // on each DOM update by mithril, reset the codemirror value, in case it changed
        // (for example by choosing sample program or loading program)
        if (this.codemirror.getValue() !== this.currentProgram.toText()) {
            this.codemirror.setValue(this.currentProgram.toText());
        }
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <textarea>{this.currentProgram.toText()}</textarea>
        );
    }
}