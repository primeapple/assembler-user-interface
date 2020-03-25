/**
 * This is the model for the ProgramState, that contains information about the current state of the problem.
 * We save things like linenumber, registerlists, status of representation (binary, decimal, hexadec.)
 */
export default class ProgramState {

    /**
     * current status, one of statusEnum
     */
    currentStatus;
    /**
     * An Map where each key is the name of a Registerlist.
     * Each value is a RegisterList
     */
    registerLists;
    /**
     * The current value of the Befehlszähler,
     * is a pointer to the linenumber with the next command
     */
    nextCommandLine;

    /**
     * Enumeration of the statuses a program can have
     */
    statusEnum = {
        NOT_STARTED: 1,
        FINISHED: 2,
        RUNNING: 3,
    }

    constructor(registerListsObject, nextCommandLine, status=1) {
        this.currentStatus = status;
        this.registerLists = registerListsObject;
        this.nextCommandLine = nextCommandLine;
    }

    /**
     * Returns the next state, computed from this one.
     * @param {object} registerListsChangesObject (object)
     * @param {int} newNextCommandLine the next commandline (next Befehlszähler value)
     * @param {boolean} finished true if the program has finished
     */
    nextState(registerListsChangesObject, newNextCommandLine, finished) {
        let newStatus = finished ? this.statusEnum.FINISHED : this.statusEnum.RUNNING;
        let newRegisterLists = new Map();
        this.registerLists.forEach((rList, name, array) => {
            let copyRegList = rList.clone();
            copyRegList.setValues(registerListsChangesObject[name]);
            newRegisterLists.set(name, copyRegList);
        });
        return new ProgramState(newRegisterLists, newNextCommandLine, newStatus);
    }

    isNotStarted() {
        return this.currentStatus === this.statusEnum.NOT_STARTED;
    }

    isRunning() {
        return this.currentStatus === this.statusEnum.RUNNING;
    }

    isFinished() {
        return this.currentStatus === this.statusEnum.FINISHED; 
    }

    /**
     * Returns an array with all the names of the registerlists in order
     */
    getRegisterListNames() {
        return Array.from(this.registerLists.keys())
    }
    
    /**
     * Returns the registerlist with name
     * @param {string} name of the register list 
     */
    getRegisterList(name) {
        return this.registerLists.get(name);
    }

}