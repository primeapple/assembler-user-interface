/**
 * The EditorView component
 * @module EditorView 
 */

var m = require("mithril");
import Editor from './editor.js'
import CommandTable from './editorView/commandTable';

export default class EditorView {

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <main class="flexbox-vertical-container parentheight">
                <div class="columns">
                    <div class="column is-3">
                        <div class="buttons">
                            <button class="button is-info">Speichern</button>
                            <button class="button is-info">Laden</button>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="dropdown">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Beispielprogramme</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>
                            {/* TODO: add sample Programs */}
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        Sample program 1
                                    </a>
                                    <a class="dropdown-item">
                                        Sample program 2
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        Sample program 3
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        Sample program 4
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="buttons is-right">
                            <button class="button is-success">Übersetzen</button>
                            <button class="button is-success" disabled>Ausführen</button>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="buttons is-right">
                            <button class="button is-info">Hilfe</button>
                            <button class="button is-info">Einstellungen</button>
                        </div>
                    </div>
                </div>
                <div class="columns flex-grow">
                    <div class="column is-9">
                    <div class="parentheight has-border">
                            <Editor />
                        </div>
                    </div>
                    <div class="column is-3">
                        <CommandTable />
                        <div class="box flex-base-height-300">
                            <p>Systemnachrichten</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}