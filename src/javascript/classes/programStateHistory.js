/**
 * The ProgramStateHistory Class
 * This is the model for the ProgramStateHistory.
 * It keeps a history of the program states, navigates around it and can create new ones if needed
 * @module ProgramStateHistory
 */
export default class ProgramStateHistory {
    history;
    historyPosition;
    demo;

    /**
     * Crates new ProgramStateHistory
     * @param {Demo} demo A Demo object, needed to create new States
     */
    constructor(demo) {
        this.demo = demo;
        this.historyPosition = 0;
        this.history = [demo.getStartProgramState()];
    }

    /**
     * Returns the current state
     */
    currentState() {
        return this.history[this.historyPosition];
    }

    /**
     * Creates the next state, if we are in history, use the next one, if we are on top of the history create next one from Demo/Backend
     */
    nextState() {
        if (this.historyPosition === this.history.length-1) {
            this.history.push(this.demo.getNextProgramState(this.currentState()));
        }
        this.historyPosition++;
    }

    /**
     * Returns the previous state
     */
    previousState() {
        this.historyPosition = Math.max(0, this.historyPosition-1);
    }

    /**
     * Resets the current state to the start state. Saves all created States, so we don't have to create them again.
     */
    reset() {
        this.historyPosition = 0;
    }
}