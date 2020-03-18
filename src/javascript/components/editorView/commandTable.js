/**
 * The CommandTable component in the EditorView
 * @module CommandTable
 */


var m = require("mithril");
import {commandModel} from './models/commandModel.js';

export default class CommandTable {

    /**
     * The current content of the searchbar
     */
    searchText = "";

    /**
     * Returns a tablerow with each command and it's description inside.
     * Highlights found search strings.
     */
    showCommands() {
        return commandModel.filter((command) => {
                return command.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
                command.description.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
            }).map(command => {
                return (
                    <tr>
                        <td class="has-text-weight-medium">{this.highlightSearchText(command.name)}</td>
                        <td>{this.highlightSearchText(command.description)}</td>
                    </tr>
                );
            });
    }


    /**
     * Returns a text with highlightings for all substrings that are caseinsensitive to the search text
     * @param {string} text The text to search on
     */
    highlightSearchText(text) {
        if (this.searchText === "") return text;
        let splittedText = text.split(new RegExp(this.searchText.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'), "i"));
        // put the searchText in between all elements in splittedText
        return [...splittedText].map((elem, index) => (index<splittedText.length-1) ? 
                [elem, <span class="has-background-success">{this.searchText}</span>] : [elem])
                .flat();
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="parentheight flex-grow panel flexbox-vertical-container has-background-grey-lighter">
                <input class="has-margin-10" type="text" placeholder="Suche nach Befehlen" oninput={(ev) => this.searchText=ev.target.value}></input>
                <div class="is-scrollable has-margin-10 flex-grow">
                    <table class="table is-striped">
                        <tbody>
                            {this.showCommands()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}