import { commands } from "../../data/commands";

/**
 * The RunButtons (Run, Step forwards/backwards, Status, Reset) component
 * @module RunButtons 
 */

var m = require("mithril");

export default class RunButtons {

    breakpoints;
    currentLine

    createStatus() {
        let status = "unknown";
        if (this.currentLine === -1) status = "Noch nicht gestartet";
        else if (this.currentLine === commands.length) status = "Programm beendet";
        else if (this.currentLine < commands.length && this.currentLine >= 0)
            status = "Zeile " + (this.currentLine + 1);
        return "Status: " + status;
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.breakpoints = vnode.attrs.breakpoints;
        this.currentLine = vnode.attrs.currentLine;
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
                    <button class="button is-success control">Starte</button>
                    <button class="button is-success control">Schritt vorwärts</button>
                    <button class="button is-success control">Schritt zurück</button>
                    <button class="button is-static control is-expanded">
                        {this.createStatus()}
                    </button>
                    <p class="control">
                        <button class="button is-warning">Reset</button>
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