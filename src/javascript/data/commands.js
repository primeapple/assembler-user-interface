/**
 * This is the overview of all the commands available in pHILOS
 */
export const commands = [
    {
        name: "ldd R[i] R[j] k",
        description: "lädt den Inhalt der durch R[i]+k adressierten Hauptspeicherzelle nach R[j]"
    },
    {
        name: "sto R[i] R[j] k",
        description: "speichert den Inhalt von R[j] in die durch R[i]+k addressierten Hauptspeicherzelle"
    },
    {
        name: "shl R[i] R[j] R[k]",
        description: "Linksshift auf dem Inhalt von R[i] um den in R[j] spezifizierten Wert, Ergebnis nach R[k]"
    },
    {
        name: "shr R[i] R[j] R[k]",
        description: "Logischer Rechtsshift auf dem Inhalt von R[i] um den in R[j] spezifizierten Wert, Ergebnis nach R[k]"
    },
    {
        name: "rol R[i] R[j] R[k]",
        description: "Linksrotation auf dem Inhalt von R[i] um den in R[j] spezifizierten Wert, Ergebnis nach R[k]"
    },
    {
        name: "ror R[i] R[j] R[k]",
        description: "Rechtsrotation auf dem Inhalt von R[i] um den in R[j] spezifizierten Wert, Ergebnis nach R[k]"
    },
    {
        name: "sub R[i] R[j] R[k]",
        description: "subtrahiert von dem Inhalt aus R[i] den Inhalt aus R[j] und speichert das Ergebnis in R[k]"
    },
    {
        name: "add R[i] R[j] R[k]",
        description: "addiert den Inhalt aus R[i] und den Inhalt aus R[j] und speichert das Ergebnis in R[k]"
    },
    {
        name: "shli R[i] R[j] k",
        description: "Linksshift auf dem Inhalt von R[i] um den Wert k, Ergebnis nach R[j]"
    },
    {
        name: "shri R[i] R[j] k",
        description: "Logischer Rechtsshift auf dem Inhalt von R[i] um den Wert k, Ergebnis nach R[j]"
    },
    {
        name: "roli R[i] R[j] k",
        description: "Linksrotation auf dem Inhalt von R[i] um den Wert k, Ergebnis nach R[j]"
    },
    {
        name: "rori R[i] R[j] k",
        description: "Rechtsrotation auf dem Inhalt von R[i] um den Wert k, Ergebnis nach R[j]"
    },
    {
        name: "subi R[i] R[j] k",
        description: "subtrahiert von dem Inhalt aus R[i] die Konstante k und speichert das Ergebnis in R[j]"
    },
    {
        name: "addi R[i] R[j] k",
        description: "addiert den Inhalt aus R[i] und die Konstante k und speichert das Ergebnis in R[j]"
    },
    {
        name: "or R[i] R[j] R[k]",
        description: "bitweise Disjunktion auf den Inhalten von R[i] und R[j], Ergebnis nach R[k]"
    },
    {
        name: "and R[i] R[j] R[k]",
        description: "bitweise Konjunktion auf den Inhalten von R[i] und R[j], Ergebnis nach R[k]"
    },
    {
        name: "xor R[i] R[j] R[k]",
        description: "bitweises Exklusiv-Oder auf den Inhalten von R[i] und R[j], Ergebnis nach R[k]"
    },
    {
        name: "xnor R[i] R[j] R[k]",
        description: "bitweise Äquivalenz auf den Inhalten von R[i] und R[j], Ergebnis nach R[k]"
    },
    {
        name: "jmp k",
        description: "absoluter Sprung zu dem an Adresse k gespeicherten Maschinenbefehl durchgeführt"
    },
    {
        name: "beq R[i] R[j] k",
        description: "erhöht den Wert des Befehlszählers um k, wenn die Inhalte von R[i] und R[j] gleich sind"
    },
    {
        name: "bneq R[i] R[j] k",
        description: "erhöht den Wert des Befehlszählers um k, wenn die Inhalte von R[i] und R[j] nicht gleich sind"
    },
    {
        name: "bgt R[i] R[j] k",
        description: "erhöht den Wert des Befehlszählers um k, wenn der Inhalt von R[i] größer als der Inhalt von R[j] ist"
    },
    {
        name: "bo k",
        description: "erhöht den Wert des Befehlszählers um k, wenn im zuvor durchgeführten Befehl ein Überlauf aufgetreten ist"
    },
    {
        name: "ldpc R[i]",
        description: "lädt in R[i] den aktuellen Wert des Befehlszählers"
    },
    {
        name: "stpc R[i]",
        description: "speichert in den Befehlszähler den Inhalt aus R[i]"
    },
];