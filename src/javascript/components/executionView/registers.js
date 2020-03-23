/**
 * The Registers component for the executionView
 * @module Registers 
 */

var m = require("mithril");

export default class Registers {

    registerLists;
    currentActiveTab;

    createRegisterHeading() {
        return Object.keys(this.registerLists).map(name => 
            <li class={name === this.currentActiveTab ? "is-active" : ""} onclick={e=>this.currentActiveTab=name}><a>{name}</a></li>
        );
    }

    createRegisterTable() {
        return this.registerLists[this.currentActiveTab].getShortenedRegisterList(4)
            .filter(r => r.visible)
            .map(register => {
                return (
                    <tr>
                        <td>{register.name}</td>
                        <td>{register.value}</td>
                    </tr>
                );
        });
    }


    oninit(vnode) {
        this.registerLists = vnode.attrs.registerLists;
        this.currentActiveTab = Object.keys(this.registerLists)[0];
    }

    view(vnode) {
        return (
            <div class="parentheight flexbox-vertical-container flex-grow panel has-background-lightgrey">
                <p class="panel-heading">
                    <div class="tabs">
                        <ul>
                            {this.createRegisterHeading()}
                        </ul>
                    </div>
                </p>
                <div class="has-margin-10 is-scrollable flex-grow">
                    <table class="table is-striped parentwidth">
                        <tbody>
                            {this.createRegisterTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
