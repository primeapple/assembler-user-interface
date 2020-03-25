/**
 * The ExecutionView Route
 * @module ExecutionView 
 */

var m = require("mithril");
import Editor from "../components/editor"
import RunButtons from "../components/executionView/runButtons";
import Registers from "../components/executionView/registers";
import Demo from "../classes/demo";
import ProgramStateHistory from "../classes/programStateHistory";

export default class ExecutionView {

    currentProgram;
    breakpoints;
    stateHistory;

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        // if the user navigates manually to this page and the program is not executable, redirect
        if (!vnode.attrs.program.isExecutable()) {
            m.route.set("/editor");
            return;
        }
        this.currentProgram = vnode.attrs.program;
        this.stateHistory = new ProgramStateHistory(new Demo(this.currentProgram))
        this.breakpoints = [];
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        if (this.currentProgram === undefined) return;
        return (
            <main class="flexbox-vertical-container parentheight">
                <RunButtons breakpoints={this.breakpoints} stateHistory={this.stateHistory}/>
                <div class="columns flex-grow">
                    <div class="column is-6">
                        <div class="parentheight has-border">
                            <Editor program={this.currentProgram} settings={{readOnly: true, styleActiveLine: false}} breakpoints={this.breakpoints} stateHistory={this.stateHistory}/>
                        </div>
                    </div>
                    <div class="column is-6">
                        <Registers stateHistory={this.stateHistory}/>
                    </div>
                </div>
            </main>
        );
    }
}