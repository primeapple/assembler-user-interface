/**
 * The Editor component (uses Codemirror editor)
 * @module Editor
 */

var m = require("mithril")
var codeMirror = require("codemirror");
require("codemirror/addon/selection/active-line");

export default class Editor {

    currentProgram;
    /**
     * Settings given as attribute
     */
    settings;
    /**
     * The active codemirror session
     */
    codemirror;
    /**
     * The statehistory of the program
     */
    stateHistory;

    /**
     * The default settings for the Editor
     */
    getDefaultSettings() {
        return {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            firstLineNumber: 0,
            gutters: ["Codemirror-custom-breakpoint", "CodeMirror-linenumbers"],
        }
    }

    /**
     * This marks a line and unmarks all other lines
     * @param {int} linenumber number of the line to mark
     */
    markLine(linenumber) {
        this.codemirror.markText({line: linenumber, ch: 0},
            {line: linenumber, ch: this.currentProgram.commands[linenumber].length},
            {className: "has-background-warning"}
        );
    }

    /**
     * This umarks all currently marked lines
     */
    unmarkLines() {
        this.codemirror.getAllMarks().forEach(m => m.clear());
    }

    /**
     * Defines, what happens when a breakpoint was set
     * @param {Codemirror Instance} codemirror 
     * @param {integer} line The line where a breakpoint was set, counting from 0
     * @param {array} breakpoints A reference to this.breakpoints
     */
    handleBreakpoints(codemirror, line, breakpoints) {
        var info = codemirror.lineInfo(line);

        // TODO create elem with mithril
        function breakPointElement(hasBreakpoint, breakpoints) {
            if (hasBreakpoint) {
                breakpoints.splice(breakpoints.indexOf(line), 1);
                return null;
            }
            else {
                breakpoints.push(line);
                var elem = document.createElement("div");
                elem.classList.add("Codemirror-custom-breakpoint")
                elem.innerHTML = "●";
                return elem;
            }
        }
        codemirror.setGutterMarker(line, "Codemirror-custom-breakpoint", breakPointElement(info.gutterMarkers, breakpoints));
    }

    /**
     * Creates codemirror, adds functions (breakpoints, updating, etc.) to it, according to the state of this class.
     * @param {dom-element} element The dom Element (has to be Textarea) for codemirror to use
     * @param {boolean} readOnly If false, we add a function to Codemirror, so it updates with the current program
     */
    createCodeMirror(element, readOnly) {
        let cm = codeMirror.fromTextArea(element, this.settings);
        if (this.breakpoints !== undefined) {
            cm.on("gutterClick", (c,l) => this.handleBreakpoints(c, l, this.breakpoints));
        }
        if (!readOnly) {
            cm.on("change", (c, changeOb) => {
                if (!(changeOb.origin === "setValue")) {
                    this.currentProgram.setCommands(c.getValue());
                    m.redraw();
                }
            });
        }
        cm.setOption("extraKeys", {
            Esc: function(c) {
                c.display.input.blur()
            }
          });
        this.codemirror = cm;
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
        this.breakpoints = vnode.attrs.breakpoints;
        this.stateHistory = vnode.attrs.stateHistory;
        this.settings = Object.assign({}, this.getDefaultSettings(), vnode.attrs.settings);
    }

    /**
     * The oncreate function for mithril
     * @param {vnode} vnode 
     */
    oncreate(vnode) {
        this.createCodeMirror(vnode.dom, vnode.attrs.readOnly);
        if (this.stateHistory !== undefined) this.markLine(this.stateHistory.currentState().nextCommandLine);
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
        if (this.stateHistory !== undefined) {
            this.unmarkLines();
            if (!this.stateHistory.currentState().isFinished()) {
                this.markLine(this.stateHistory.currentState().nextCommandLine);
            }
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