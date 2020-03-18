
var m = require("mithril");
import {commandModel} from './models/commandModel.js';

export default class CommandTable {
    
    showCommands() {
        let result = commandModel.map((command) => {
            return (
                <tr>
                    <td>{command.name}</td>
                    <td>{command.description}</td>
                </tr>
            );
        });
        console.log(result);
        return result;
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="parentheight flex-grow panel flexbox-vertical-container has-background-lightgrey">
                <input type="text" placeholder="Suche nach Befehlen"></input>
                <div class="is-scrollable flex-grow">
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