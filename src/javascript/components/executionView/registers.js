/**
 * The Registers component for the executionView
 * @module Registers 
 */

var m = require("mithril");

export default class Registers {

    registerLists;
    currentActiveTab;

    /**
     * Creates the tabs of the Registertables
     */
    createRegisterHeading() {
        return Object.keys(this.registerLists).map(name => 
            <li class={name === this.currentActiveTab ? "is-active" : ""} onclick={e=>this.currentActiveTab=name}><a>{name}</a></li>
        );
    }

    /**
     * Returns the Register Table
     */
    createRegisterTable() {
        // some register Lists, we dont want to shorten (Steuerleitungen), others we want
        let registerList = this.registerLists[this.currentActiveTab].showShortened ?
            this.registerLists[this.currentActiveTab].list.getShortenedRegisterList(3) :
            this.registerLists[this.currentActiveTab].list.getRegisterList();
        return registerList.map(register => {
            return (
                <tr>
                    <td>{register.nextHidden ? "..." : register.name}</td>
                    <td>{register.value}</td>
                </tr>
            );
        });
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.registerLists = vnode.attrs.registerLists;
        this.currentActiveTab = Object.keys(this.registerLists)[0];
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
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
