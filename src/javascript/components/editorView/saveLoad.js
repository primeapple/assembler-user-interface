/**
 * The SaveLoad component for the download and upload button
 * @module SaveLoad 
 */

var m = require("mithril");

export default class SaveLoad {

    /**
     * The current state of the program
     */
    currentProgram;

    /**
     * Reads a new file, sets the current program to this file
     * @param {file} file 
     */
    upload(file) {
        this.currentProgram.reset();
        var reader = new FileReader();
        reader.onload = (e => this.currentProgram.commands = e.target.result.split("\n"));
        reader.readAsText(file);
    }

    /**
     * Downloads the current program
     */
    download() {
        var a = document.createElement("a");
        var file = new Blob([this.currentProgram.toText()], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = this.currentProgram.name + ".json";
        a.click();  
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.currentProgram = vnode.attrs.program;
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="column is-3">
                <div class="field is-grouped">
                    <div tabindex="0" class="file is-info control" onclick={e=>this.download()} onkeypress={e=>this.download()}>
                        <a class="file-input" type="file"></a>
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-download"></i>
                        </span>
                        <span class="file-label">
                            Speichern
                        </span>
                        </span>
                    </div>
                    {/* the onkeypress simulates a click on the hidden input element, to make it aria conform :) */}
                    <div onkeypress={e=>e.target.childNodes[0].childNodes[0].click()} tabindex="0" class="file is-info control">
                        <label class="file-label">
                            <input tabindex="-1" class="file-input" type="file" onchange={e=>this.upload(e.target.files[0])} />
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </span>
                            <span class="file-label">
                                Laden
                            </span>
                            </span>
                        </label>
                    </div>
                </div>
        </div>
        );
    }
}
    