
/**
 * The CompileExecute Component (top left buttons, aka Compile, Execute)
 * @module CompileExecute 
 */

var m = require("mithril");

export default class CompileExecute {

    currentProgram;

    /**
     * This functions checks if the program is executable.
     * Later here we have to send a request to the backend and then set `this.program.isExecutable`
     * and `this.program.errorMessage`
     */
    compile() {
        this.currentProgram.isExecutable = true;
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
                    <button class="button is-success" onclick={e => this.execute()} disabled={!this.currentProgram.isExecutable}>Ausführen</button>
                </div>
            </div>
        );
    }
}
    