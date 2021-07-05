/**
 * The Demo Class.
 * This class is for demonstration purposes. It later has to be replaced with actual content.
 * @module Demo 
 */

import {samplePrograms} from "../data/samplePrograms";
import RegisterList from "./registerList";
import ProgramState from "./programState";
export default class Demo {

    program;
    sampleProgramFlow;

    /**
     * Creates a new Demo
     * @param {Program} program Program to get the fitting program from the samplePrograms
     */
    constructor(program) {
        this.program = program;
        // the `map` is to copy the array
        this.sampleProgramFlow = samplePrograms.filter(p => p.name === program.name)[0].programFlow
            .map(object => Object.assign({}, object));
    }

    /**
     * Creates a start program state
     */
    getStartProgramState() {
        let registerLists = new Map();
        registerLists.set("Register", RegisterList.fromFixedNameAndSize("R", 16));
        
        let io = [0,1,2,3].map(v=>["I["+v+"]", 0]).concat([0,1,2,3].map(v=>["O["+v+"]", 0]));
        registerLists.set("Ein/-Ausgabereg.", new RegisterList(new Map(io)));
        
        registerLists.set("Massenspeicher", RegisterList.fromFixedNameAndSize("Speicher", 1024));
        
        let instructions = this.program.commands.map((command, index) => ["Instruktion["+index+"]", command]);
        registerLists.set("Instruktionsspeicher", new RegisterList(new Map(instructions)));

        let steuerleitungen = ["aluOp",
            "loadE",
            "negativ?",
            "null?",
            "opCode",
            "overflow?",
            "selData",
            "selDest",
            "selJmp",
            "selJmp2",
            "selRD",
            "selRegData",
            "wE",
            "wEReg"];
        registerLists.set("Steuerleitungen", new RegisterList(new Map(steuerleitungen.map(v=>[v,0]))));

        return new ProgramState(registerLists, this.sampleProgramFlow.shift()["Befehlszähler"]);
    }

    /**
     * Creates the next programState, given the current Program State (and later maybe a Program)
     * @param {ProgramState} programState 
     */
    getNextProgramState(programState) {
        let stateUpdates = this.sampleProgramFlow.shift();
        let nextLine = stateUpdates["Befehlszähler"];
        delete stateUpdates["Befehlszähler"];
        return programState.nextState(stateUpdates, nextLine, this.sampleProgramFlow.length === 0);
    }

    /**
     * Returns the sample Programs from `src/javascript/data/samplePrograms.js`
     */
    static getSamplePrograms() {
        return samplePrograms;
    }

}