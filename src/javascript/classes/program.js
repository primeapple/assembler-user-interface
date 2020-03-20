/**
 * This is the model for the current programm, that is passed around in the webapp
 */
export default class Program {
    /**
     * The commands of the program, as array
     */
    commands;
    /**
     * is this program executable or not
     */
    isExecutable;
    /**
     * error message, if file is not executable, else ""
     */
    errorMessage;
    /**
     * name of the program, "unknown" if it has no name
     */
    name;

    constructor() {
        this.commands = [];
        this.isExecutable = false;
        this.errorMessage = "";
        this.name = "unknown";
    }

    /**
     * resets all properties in this class
     */
    reset() {
        this.constructor();
    }

    /**
     * returns commands as string, joined with "\n"
     */
    toText() {
        return this.commands.join("\n");
    }
}