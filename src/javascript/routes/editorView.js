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
import Program from "../classes/program";

export default class EditorView {

    /**
     * the current Program, of class Program
     */
    currentProgram;
    /**
     * the message box, defines the content of the message box
     */
    messageBox = {
        header : "Systemnachrichten:",
        message : null,
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit() {
        this.currentProgram = new Program();
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <div class="columns has-margin-10">
                    <CompileExecute program={this.currentProgram} messageBox={this.messageBox}/>
                    <SampleProgramsDropdownMenu program={this.currentProgram} />
                    <SaveLoad program={this.currentProgram} />
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
                            <Editor program={this.currentProgram}/>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="parentheight flexbox-vertical-container linebreak">
                            <CommandTable />
                            <div class="box flex-base-height-200 is-scrollable">
                                <p class="has-text-weight-medium">{this.messageBox.header}</p>
                                <br />
                                {this.messageBox.message}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}