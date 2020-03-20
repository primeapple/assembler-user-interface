
/**
 * The CompileExecute Component (top left buttons, aka Compile, Execute)
 * @module CompileExecute 
 */

var m = require("mithril");

export default class CompileExecute {

    currentProgram;
    messageBox;

    /**
     * This functions checks if the program is executable.
     * Later here we have to send a request to the backend and then set the status
     */
    compile() {
        if (this.currentProgram.isExecutable()) {
            this.messageBox.message = "Erfolgreich übersetzt!\nProgramm kann ausgeführt werden."
        } else if (this.currentProgram.isNotExecutable()) {
            this.messageBox.message = "Übersetzungsfehler!\n" + this.currentProgram.errorMessage;
        } else if (this.currentProgram.isUnknown()) {
            this.messageBox.message = "Backend ist noch nicht implementiert.\nSelbst geschriebene Programme können noch nicht übersetzt werden.\nBitte verwende ein Beispielprogramm.";
        } else {
            console.error("Unbekannter Status in currentProgram.");
        }
    }

    // TODO:
    /**
     * Here we route to the ExecutionView and give the currentProgram as a parameter
     */
    execute() {

    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
        this.messageBox = vnode.attrs.messageBox;
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="column is-3">
                <div class="buttons">
                    <button class="button is-success" onclick={e => this.compile()}>Übersetzen</button>
                    <button class="button is-success" onclick={e => this.execute()} disabled={!this.currentProgram.isExecutable()}>Ausführen</button>
                </div>
            </div>
        );
    }
}
    