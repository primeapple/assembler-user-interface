/**
 * The ExecutionView Route
 * @module ExecutionView 
 */

var m = require("mithril");
import Editor from "../components/editor"
import RunButtons from "../components/executionView/RunButtons";

export default class ExecutionView {

    currentProgram;
    breakpoints;

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
        this.breakpoints = [];
        // if the user navigates manually to this page and the program is not executable, redirect
        if (!this.currentProgram.isExecutable()) {
            m.route.set("/editor");
        }
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <RunButtons breakpoints={this.breakpoints}/>
                <div class="columns flex-grow">
                    <div class="column is-6">
                        <div class="parentheight has-border">
                            <Editor program={this.currentProgram} settings={{readOnly: true, styleActiveLine: false}} breakpoints={this.breakpoints}/>
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