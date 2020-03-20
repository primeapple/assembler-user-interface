/**
 * The ExecutionView component
 * @module ExecutionView 
 */

var m = require("mithril");
import Editor from "./editor"

export default class ExecutionView {

    /**
     * The additional codemirror settings for the ExecutionView
     * @param {vnode} vnode 
     */
    getCodemirrorSettings() {
        return {
            readOnly: true,
        }
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        let settings = {
            set1: true,
            set2: false,
        }
        return (
            <main class="flexbox-vertical-container parentheight">
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
                        <div class="field is-grouped">
                        <button class="button is-danger control is-expanded">
                        Zurück zum Editor
                        </button>
                        </div>
                    </div>
                </div>
                <div class="columns flex-grow">
                    <div class="column is-6">
                        <div class="parentheight has-border">
                            <Editor settings={this.getCodemirrorSettings()} breakpoints/>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="parentheight flexbox-vertical-container flex-grow panel has-background-lightgrey">
                            <p class="panel-heading">
                                <div class="tabs">
                                    <ul>
                                        <li class="is-active"><a>Register</a></li>
                                        <li><a>Ein-/Ausgabereg.</a></li>
                                        <li><a>Massenspeicher</a></li>
                                        <li><a>Instruktionsspeicher</a></li>
                                        <li><a>Steuerleitungen</a></li>
                                    </ul>
                                </div>
                            </p>
                            <div class="is-scrollable flex-grow">
                                <table class="table is-striped parentwidth">
                                    <tbody>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                        <tr>
                                            <td>Register 1</td>
                                            <td>X30bC</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}