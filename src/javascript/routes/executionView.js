/**
 * The ExecutionView Route
 * @module ExecutionView 
 */

var m = require("mithril");
import Editor from "../components/editor"
import RunButtons from "../components/executionView/runButtons";
import Registers from "../components/executionView/registers";
import RegisterList from "../classes/registerList";

export default class ExecutionView {

    currentProgram;
    breakpoints;

    registerLists;

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
        this.breakpoints = [];
        // if the user navigates manually to this page and the program is not executable, redirect
        if (!this.currentProgram.isExecutable()) {
            m.route.set("/editor");
        }
        this.registerLists = {
            "Register": RegisterList.fromFixedNameAndSize("Register", 16),
            "Ein/-Ausgabereg.": new RegisterList(
                RegisterList.fromFixedNameAndSize("Input", 4).getRegisterList()
                .concat(RegisterList.fromFixedNameAndSize("Output", 4).getRegisterList())),
            "Massenspeicher": RegisterList.fromFixedNameAndSize("Speicher", 1024),
            // TODO: current Program length
            "Instruktionsspeicher": RegisterList.fromFixedNameAndSize("Instruktion", 10),
            "Steuerleitungen": new RegisterList([
                {name: "aluOp", value: 0},
                {name: "loadE", value: 0},
                {name: "negativ?", value: 0},
                {name: "null?", value: 0},
                {name: "opCode", value: 0},
                {name: "overflow?", value: 0},
                {name: "selData", value: 0},
                {name: "selDest", value: 0},
                {name: "selJmp", value: 0},
                {name: "selJmp2", value: 0},
                {name: "selRD", value: 0},
                {name: "selRegData", value: 0},
                {name: "wE", value: 0},
                {name: "wEReg", value: 0}
            ])
        }
    
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <RunButtons breakpoints={this.breakpoints}/>
                <div class="columns flex-grow">
                    <div class="column is-6">
                        <div class="parentheight has-border">
                            <Editor program={this.currentProgram} settings={{readOnly: true, styleActiveLine: false}} breakpoints={this.breakpoints}/>
                        </div>
                    </div>
                    <div class="column is-6">
                        <Registers registerLists={this.registerLists}/>
                    </div>
                </div>
            </main>
        );
    }
}