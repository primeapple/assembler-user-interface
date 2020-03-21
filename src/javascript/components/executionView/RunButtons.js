/**
 * The RunButtons (Run, Step forwards/backwards/, Status, Reset) component
 * @module RunButtons 
 */

var m = require("mithril");

export default class RunButtons {

    breakpoints;

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.breakpoints = vnode.attrs.breakpoints;
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
                    <button class="button is-success control">Run All</button>
                    <button class="button is-success control">Step Forwards</button>
                    <button class="button is-success control">Step Backwards</button>
                    <button class="button is-static control is-expanded">
                        Momentaner Status: Zeile 
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