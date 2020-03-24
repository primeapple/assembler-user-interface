/**
 * The Registers component for the executionView
 * @module Registers 
 */

var m = require("mithril");

export default class Registers {

    registerLists;
    currentActiveTab;
    expandCurrentRegisterList;

    /**
     * Creates the tabs of the Registertables
     */
    createRegisterHeading() {
        return Object.keys(this.registerLists).map(name => 
            <li class={name === this.currentActiveTab ? "is-active" : ""} 
                onclick={e=> {
                this.currentActiveTab = name;
                this.expandCurrentRegisterList = this.registerLists[this.currentActiveTab].expand;}}
            >
                    <a>{name}</a>
            </li>
        );
    }

    /**
     * Returns the Register Table
     */
    createRegisterTable() {
        // some register Lists, we dont want to shorten (Steuerleitungen), others we want
        let registerList = this.expandCurrentRegisterList ?
            this.registerLists[this.currentActiveTab].list.getRegisterList() :
            this.registerLists[this.currentActiveTab].list.getShortenedRegisterList(3);
        console.log("registerList", registerList);
        console.log("expandCurrent", this.expandCurrentRegisterList);
        return registerList.map(register => {
            return (
                <tr>
                    <td onclick={e => {if (register.nextHidden) this.expandCurrentRegisterList = true}}>
                        {register.nextHidden ? 
                        (<span><i class="far fa-plus-square" /></span>) :
                        register.name}
                    </td>
                    <td onclick={e => this.registerLists[this.currentActiveTab].changeRepresentation()}>{register.value}</td>
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
        this.expandCurrentRegisterList = this.registerLists[this.currentActiveTab].expand;
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
