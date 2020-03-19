/**
 * The EditorView Route
 * @module EditorView 
 */

var m = require("mithril");
import Editor from "../components/editor";
import CompileExecute from "../components/editorView/compileExecute";
import SampleProgramsDropdownMenu from "../components/editorView/sampleProgramsDropdownMenu";
import SaveLoad from "../components/editorView/saveLoad"
import CommandTable from "../components/editorView/commandTable";
import CurrentProgram from "../classes/currentProgram";

export default class EditorView {

    program;

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit() {
        this.program = new CurrentProgram();
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <div class="columns has-margin-10">
                    <CompileExecute program={this.program} />
                    <SampleProgramsDropdownMenu program={this.program} />
                    <SaveLoad program={this.program} />
                    <div class="column is-3">
                        <div class="buttons is-right">
                            <button class="button is-info">Hilfe</button>
                            <button class="button is-info">Einstellungen</button>
                        </div>
                    </div>
                </div>
                <div class="columns has-margin-10 flex-grow">
                    <div class="column is-6">
                    <div class="parentheight has-border">
                            <Editor />
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="parentheight flexbox-vertical-container">
                            <CommandTable />
                            <div class="box flex-base-height-300">
                                <p>Systemnachrichten:</p>
                                {this.program.errorMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}