/**
 * This is the model for the current programm, that is passed around in the webapp
 */
export default class Program {
    /**
     * The commands of the program, as array
     */
    commands;
    /**
     * error message, only if status is NOT_EXECUTABLE, else ""
     */
    errorMessage;
    /**
     * name of the program, "unknown" if it has no name
     */
    name;
    /**
     * the current status of the program, has to be one of this.statusEnome
     */
    status;

    /**
     * Enumeration of the status a program can have
     */
    statusEnum = {
        UNKNOWN : 1,
        EXECUTABLE : 2,
        NOT_EXECUTABLE: 3,
    }

    constructor() {
        this.commands = [];
        this.errorMessage = "";
        this.name = "unknown";
        this.status = this.statusEnum.UNKNOWN;
    }

    /**
     * resets all properties in this class
     */
    reset() {
        this.constructor();
    }
    
    /**
     * Sets the status of this program to EXECUTABLE
     */
    setStatusExecutable() {
        this.status = this.statusEnum.EXECUTABLE;
    }

    /**
     * Sets the status of this program to NOT_EXECUTABLE
     * @param {string} errorMessage The error Message
     */
    setStatusNotExecutable(errorMessage) {
        this.status = this.statusEnum.NOT_EXECUTABLE;
        this.errorMessage = errorMessage;
    }

    /**
     * Returns true if the status of this program is EXECUTABLE
     */
    isExecutable() {
        return this.statusEnum.EXECUTABLE === this.status;
    }

    /**
     * Returns true if the status of this program is NOT_EXECUTABLE
     */
    isNotExecutable() {
        return this.statusEnum.NOT_EXECUTABLE === this.status;
    }

    /**
     * Returns true if the status of this program is UNKNOWN
     */
    isUnknown() {
        return this.statusEnum.UNKNOWN === this.status;
    }

    /**
     * returns commands as string, joined with "\n"
     */
    toText() {
        return this.commands.join("\n");
    }
}