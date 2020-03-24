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
        // if the user navigates manually to this page and the program is not executable, redirect
        if (!vnode.attrs.program.isExecutable()) {
            m.route.set("/editor");
        }
        this.currentProgram = vnode.attrs.program;
        this.currentLine = -1;
        this.breakpoints = [];
        // create RegisterList for instruktions
        let instruktions = this.currentProgram.commands.map((command, index) => {return {name: "Instruktion["+index+"]", value: command}});
        this.registerLists = {
            "Register": {
                list: RegisterList.fromFixedNameAndSize("Register", 16),
                expand: false
            },
            "Ein/-Ausgabereg.": {
                list: new RegisterList(
                    RegisterList.fromFixedNameAndSize("Input", 4).getRegisterList()
                    .concat(RegisterList.fromFixedNameAndSize("Output", 4).getRegisterList())),
                expand: false
            },
            "Befehlszähler": {
                list: new RegisterList([{name: "Befehlszähler", value: 0}]),
                expand: true
            },
            "Massenspeicher": {
                list: RegisterList.fromFixedNameAndSize("Speicher", 1024),
                expand: false
            },
            "Instruktionsspeicher": {
                list: new RegisterList(instruktions),
                expand: true
            },
            "Steuerleitungen": {
                list: new RegisterList([
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
                    ]),
                expand: true
            },
        }
    
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <RunButtons breakpoints={this.breakpoints} currentLine={this.currentLine}/>
                <div class="columns flex-grow">
                    <div class="column is-6">
                        <div class="parentheight has-border">
                            <Editor program={this.currentProgram} currentLine={this.currentLine} settings={{readOnly: true, styleActiveLine: false}} breakpoints={this.breakpoints} executingStarted={false}/>
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