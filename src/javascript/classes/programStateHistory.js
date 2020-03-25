/**
 * This is the model for the ProgramStateHistory.
 * It keeps a history of the program states, navigates around it and can create new ones if needed
 */
export default class ProgramStateHistory {
    history;
    historyPosition;
    demo;

    constructor(demo) {
        this.demo = demo;
        this.historyPosition = 0;
        this.history = [demo.getStartProgramState()];
    }

    currentState() {
        return this.history[this.historyPosition];
    }

    nextState() {
        if (this.historyPosition === this.history.length-1) {
            this.history.push(this.demo.getNextProgramState(this.currentState()));
        }
        this.historyPosition++;
    }

    previousState() {
        this.historyPosition = Math.max(0, this.historyPosition-1);
    }

    reset() {
        this.historyPosition = 0;
    }
}