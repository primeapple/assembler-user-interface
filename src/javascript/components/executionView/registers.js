/**
 * The Registers component for the executionView
 * @module Registers 
 */

var m = require("mithril");

export default class Registers {

    stateHistory;
    currentActiveTab;
    expandedLists;

    /**
     * Creates the tabs of the Registertables
     */
    createRegisterHeading() {
        return this.stateHistory.currentState().getRegisterListNames().map(name => 
            <li class={name === this.currentActiveTab ? "is-active" : ""} 
                onclick={e=>this.currentActiveTab = name}>
                    <a>{name}</a>
            </li>
        );
    }

    /**
     * Returns the Register Table
     */
    createRegisterTable() {
        // some register Lists, we dont want to shorten (Steuerleitungen), others we want
        let registerList = this.expandedLists[this.currentActiveTab] ?
            this.stateHistory.currentState().getRegisterList(this.currentActiveTab).getRegisterArray() :
            this.stateHistory.currentState().getRegisterList(this.currentActiveTab).getShortenedRegisterArray(3);
        console.log(this.stateHistory)
        console.log(registerList)
        return registerList.map(register => {
            return (
                <tr>
                    <td onclick={e => this.expandedLists[this.currentActiveTab] = !this.expandedLists[this.currentActiveTab]}>
                        {register.nextHidden ? 
                        (<span><i class="far fa-plus-square" /></span>) :
                        register.name}
                    </td>
                    <td onclick={e => this.stateHistory.currentState().getRegisterList(this.currentActiveTab).changeRepresentation()}>{register.value}</td>
                </tr>
            );
        });
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.stateHistory = vnode.attrs.stateHistory;
        this.currentActiveTab = this.stateHistory.currentState().getRegisterListNames()[0];
        this.expandedLists = this.stateHistory.currentState().getRegisterListNames().reduce(((result, item) => {result[item] = false; return result}), {});
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
