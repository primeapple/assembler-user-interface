var m = require("mithril");

export default class EditorView {

    view(vnode) {
        return (
            <main>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <div class="columns">
                            <div class="column">
                                <div class="buttons">
                                    <button class="button is-primary">Speichern</button>
                                    <button class="button is-primary">Laden</button>
                                </div>
                            </div>
                            <div class="column">
                                <span>Current status: </span>
                                <span>Something</span>
                            </div>
                            <div class="column">
                                <div class="buttons is-right">
                                    <button class="button is-success">Übersetzen</button>
                                    <button class="button is-success" disabled>Ausführen</button>
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <textarea class="textarea" placeholder="Your Code"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="buttons is-right">
                            <button class="button is-info">Hilfe</button>
                            <button class="button is-info">Einstellungen</button>
                        </div>
                        <div class="content">
                            <p class="control">
                                <input class="input" type="text" placeholder="Suche nach Befehlen"></input>
                            </p>
                            <table class="table is-striped is-50-height is-block">
                                <tbody>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                    <tr>
                                        <td>Befehl 1</td>
                                        <td>Dieser Befehl macht ganz verückte sachen. Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.Dieser Befehl macht ganz verückte sachen.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="box is-30-height">
                            <p>Systemnachrichten</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}