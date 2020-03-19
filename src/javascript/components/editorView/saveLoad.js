/**
 * The SaveLoad component for the download and upload button
 * @module SaveLoad 
 */

var m = require("mithril");

export default class SaveLoad {

    /**
     * The current state of the program
     */
    program;

    /**
     * Reads a new file, sets the current program to this file
     * @param {file} file 
     */
    upload(file) {
        this.program.reset();
        var reader = new FileReader();
        reader.onload = (e => this.program.commands = e.target.result.split("\n"));
        reader.readAsText(file);
        console.log(this.program);
    }

    /**
     * Downloads the current program
     */
    download() {
        var a = document.createElement("a");
        var file = new Blob([this.program.toText()], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = this.program.name + ".json";
        a.click();  
    }

    /**
     * The oninit function for mithril
     * @param {vnode} vnode 
     */
    oninit(vnode) {
        this.program = vnode.attrs.program;
    }

    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="column is-3">
                <div class="field is-grouped">
                    <div class="file is-info control" onclick={e=>this.download()}>
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
                    <div class="file is-info control">
                        <label class="file-label">
                            <input class="file-input" type="file" onchange={e=>this.upload(e.target.files[0]
)}></input>
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
    