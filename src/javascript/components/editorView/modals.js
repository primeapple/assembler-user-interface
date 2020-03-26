/**
 * The CompileExecute component (help and settings)
 * @module Modals 
 */

var m = require("mithril");

export default class Modals {

    showSettings = false;
    showHelp = false;

    helpModal() {
        return (
            <div class={"modal" + (this.showHelp ? " is-active" : "")}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Hilfe</p>
                    </header>
                    <section class="modal-card-body">
                        <div class="content">
                            <h2>Editor-Ansicht</h2>
                            <p>Die Editor-Ansicht (dort, wo du auf den Hilfe Button geklickt hast) bietet dir die Möglichkeit dein Programm zu bearbeiten. Außerdem kannst du mit klicken auf "Übersetzen" auf Syntaxfehler testen. Bist du der Meinung,dein Programm funktioniert, wechsle mit "Ausführen" in die Ausführungs-Ansicht.</p>

                            <h2>Ausführungs-Ansicht</h2>
                            <p>In dieser Ansicht kannst du dein Program ausführen und debuggen. Setze Breakpoints mit klicken auf die Zeilennummer. Experimentiere in den verschiedenen Registeransichten (ein Klick auf Zahlen wechselt die Zahlendarstellungen, ein Klick auf die Registernamen weitet die Ansicht aus).</p> 
                            <h2>Navigation</h2>
                            <p>Du kannst in der ganzen Anwendung nur mit "Tab", "Shift"+"Tab" und "Enter" navigieren. Probiere es aus! Tipp: Wenn der Focus auf dem Register liegt, tippe "Esc" um weitertabben zu können.</p>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button onclick={e=>this.showHelp=false} class="button">Zurück</button>
                    </footer>
                </div>
                <button onclick={e=>this.showHelp=false} class="modal-close is-large" aria-label="close"></button>
            </div>
        );
    }

    settingsModal() {
        return (
            <div class={"modal" + (this.showSettings ? " is-active" : "")}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Einstellungen</p>
                    </header>
                    <section class="modal-card-body">
                        <div class="content">
                            <p>Hier könnten später die Einstellungen stehen. Beispielsweise könnte man ein alternatives Backend, eine neue Befehlsliste, die Unterprogrammerweiterung oder auch den Zeitabstand zwischen zwei Ausführungsschritten in der Ausführungs-Ansicht</p>

                            <p>Weiterhin könnte man den Editor konfigurieren. Eventuell hat jemand Lust auf ein hübsches Dark-Theme?</p>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button onclick={e=>this.showSettings=false} class="button">Zurück</button>
                    </footer>
                </div>
                <button onclick={e=>this.showSettings=false} class="modal-close is-large" aria-label="close"></button>
            </div>
        );
    }
    /**
     * The view function for mithril
     * @param {vnode} vnode 
     */
    view(vnode) {
        return (
            <div class="column is-3">
                <div class="buttons is-right">
                    <button class="button is-info" onclick={e=>this.showHelp=true}>Hilfe</button>
                    <button class="button is-info" onclick={e=>this.showSettings=true}>Einstellungen</button>
                </div>
                {this.helpModal()}
                {this.settingsModal()}
            </div>
        );
    }
}
