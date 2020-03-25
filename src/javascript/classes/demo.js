/**
 * This class is for demonstration purposes. It later has to be replaced with actual content.
 */

import {samplePrograms} from "../data/samplePrograms";
import RegisterList from "./registerList";
import ProgramState from "./programState";
export default class Demo {

    program;
    sampleProgramFlow;

    constructor(program) {
        this.program = program;
        this.sampleProgramFlow = samplePrograms.filter(p => p.name === program.name)[0].programFlow;
    }

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

    getNextProgramState(programState) {
        let stateUpdates = this.sampleProgramFlow.shift();
        let nextLine = stateUpdates["Befehlszähler"];
        delete stateUpdates["Befehlszähler"];
        return programState.nextState(stateUpdates, nextLine, this.sampleProgramFlow.length === 0);
    }

    static getSamplePrograms() {
        return samplePrograms;
    }

}