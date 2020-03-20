/**
 * The SampleProgramsDropdownMenu component
 * @module SampleProgramsDropdownMenu 
 */

var m = require("mithril");
import {samplePrograms} from "../../models/samplePrograms";

export default class SampleProgramsDropdownMenu {
    
    currentProgram;
    dropdownEnabled = false;

    /**
     * returns ".is-active" CSS Class if dropdown is currently enabled
     */
    dropdownIsActiveCSSClass() {
        return this.dropdownEnabled ? " is-active" : "";
    }

    /**
     * Maps the sample programs to dropdown items
     */
    dropdownContent() {
        return samplePrograms.map(program => {
            return (
                <a class="dropdown-item" onclick={e=>this.handleDropdownClick(program)}>
                    {program.name}
                </a>
            );
        })
    }

    /**
     * Handles clicks on dropdown items, sets currentProgram to a clicked sample program
     * @param {SampleProgram} program a sample program
     */
    handleDropdownClick(program) {
        this.currentProgram.reset();
        this.currentProgram.commands = program.commands;
        this.currentProgram.name = program.name;
        if ("errorMessage" in program) {
            this.currentProgram.setStatusNotExecutable(program.errorMessage)
        } else {
            this.currentProgram.setStatusExecutable();
        }
        this.dropdownEnabled = false;
    }

    /**
     * Called, when the `onfocusout` event of the dropdown menu is triggered.
     * If the click was outside the dropdown menu, close it, else do nothing
     * @param {event} e 
     * @param {vnode} vnode 
     */
    checkFocus(e, vnode) {
        if (vnode.dom.contains(e.explicitOriginalTarget)) {
            return;
        } else {
            this.dropdownEnabled = false;
        }
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
                <div class={"parentwidth dropdown" + this.dropdownIsActiveCSSClass()}
                    onfocusout={e=>this.checkFocus(e, vnode)}>
                    <div class="dropdown-trigger parentwidth">
                        <button class="button parentwidth" aria-haspopup="true" aria-controls="dropdown-menu"
                            onclick={e=>this.dropdownEnabled = !this.dropdownEnabled}>
                            <span>{this.currentProgram.name === "unknown" ? "Beispielprogramme" : this.currentProgram.name}</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu parentwidth" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            {this.dropdownContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
