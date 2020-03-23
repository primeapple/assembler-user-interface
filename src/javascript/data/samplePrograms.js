/**
 * This is a collection of sample programs to be shown in the dropdown menu.
 * Later, when we have a backend, we should remove hardcode errorMessages
 */
export const samplePrograms = [
    {
        name: "Schreibe 1 in R[1]",
        commands: [
            "# this is a sample program",
            "# it just writes a 1 in R[1]",
            "addi r0 r1 1",
            "# much wow"
        ]
    },
    {
        // TODO: Schreibe das Programm hin
        name: "Berechne 3 x 3",
        commands: [
            "# this is a sample program",
            "# it just writes a 1 in R[1]",
            "addi r0 r1 1",
            "# much wow"
        ]
    },
    {
        name: "Nicht ausführbares Programm #1",
        commands: [
            "# this program is not executable",
            "addi r0 r1 r2",
        ],
        errorMessage: "Der Befehl \"addi R[i] R[j] R[k]\" in Zeile 2 existiert nicht.\nMeintest du \"addi R[i] R[j] k\" oder \"add R[i] R[j] R[k]\"?"
    },
    {
        name: "Nicht ausführbares Programm #2",
        commands: [
            "# this program is not executable",
            "addi r0 r1 1",
            "mult r0 r1 r1",
        ],
        errorMessage: "Der Befehl \"mult R[i] R[j] R[k]\" in Zeile 3 existiert nicht.\nKein ähnlicher Befehl gefunden"
    }
]