import Demo from "../../classes/demo";

/**
 * The RunButtons (Run, Step forwards/backwards, Status, Reset) component
 * @module RunButtons 
 */


var m = require("mithril");

export default class RunButtons {

    breakpoints;
    stateHistory;
    intervalId;

    /**
     * This function checks if the program is currently running and stops it if it was.
     * Returns true if the program was running, false otherwise
     */
    checkForIntervalId() {
        if (this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
            return true;
        }
        return false;
    }

    /**
     * Creates a status string, depending on the current status of the program
     */
    createStatusText() {
        let status;
        if (this.stateHistory.currentState().isFinished()) status = "Program beendet"
        else status = "Nächste Zeile: " + this.stateHistory.currentState().nextCommandLine;
        return "Status: " + status;
    }

    /**
     * Program runs one step forwards, goes to next state in stateHistory
     */
    runOneStepForwards() {
        this.stateHistory.nextState();
    }
    /**
     * Program runs one step backwards, goes to previous state in stateHistory
     */
    runOneStepBackwards() {
        this.stateHistory.previousState()
    }

    /**
     * Starts continous running of a program, until we reach breakpoint or we end the program.
     * If the program is already running, we stop it.
     */
    runUntilBreakpointOrEnd() {
        if (this.checkForIntervalId()) return;
        this.intervalId = setInterval(()=>{
            this.runOneStepForwards();
            if (this.stateHistory.currentState().isFinished() 
                || this.breakpoints.includes(this.stateHistory.currentState().nextCommandLine)) {
                    this.checkForIntervalId();
                }
            m.redraw();
        }, 1000);
    }

    /**
     * Resets the program. If it was running continously, we also stop it.
     */
    resetProgram() {
        this.checkForIntervalId();
        this.stateHistory.reset();
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.breakpoints = vnode.attrs.breakpoints;
        this.stateHistory = vnode.attrs.stateHistory;
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="columns">
            <div class="column is-6">
                <div class="field is-grouped">
                    <button class={"button control ".concat(this.intervalId === undefined ? "is-success" : "is-danger")}
                        onclick={e=>this.runUntilBreakpointOrEnd()} 
                        disabled={this.stateHistory.currentState().isFinished()}>
                        {this.intervalId === undefined ? "Start" : "Stop"}
                    </button>
                    <button class="button is-success control" onclick={e=>this.runOneStepForwards()} 
                        disabled={this.stateHistory.currentState().isFinished()}>Schritt vorwärts</button>
                    <button class="button is-success control" onclick={e=>this.runOneStepBackwards()}
                        disabled={this.stateHistory.currentState().isNotStarted()}>Schritt zurück</button>
                    <button class="button is-static control is-expanded">
                        {this.createStatusText()}
                    </button>
                    <p class="control">
                        <button class="button is-warning" onclick={e=>this.resetProgram()}
                            disabled={this.stateHistory.currentState().isNotStarted()}>Reset</button>
                    </p>
                </div>
            </div>
            <div class="column is-3"></div>
            <div class="column is-3">
                <m.route.Link selector="button" href="/editor" class="button parentwidth is-danger control is-expanded">
                    Zurück zum Editor
                </m.route.Link>
            </div>
        </div>
        );
    }
}