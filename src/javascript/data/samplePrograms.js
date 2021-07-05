/**
 * This is a collection of sample programs to be shown in the dropdown menu.
 * Later, when we have a backend, we should remove hardcoded errorMessages and programflows
 */
export const samplePrograms = [
    {
        name: "Schreibe 1 in R[1]",
        commands: [
            "# this is a sample program",
            "# it just writes a 1 in R[1]",
            "addi R[0] R[1] 1",
            "syscall",
            "# much wow"
        ],
        programFlow: [
            // startline
            {
                "Befehlszähler" : 2
            },
            {
                "Register": {"R[1]" : 1, "R[15]": 20},
                "Befehlszähler" : 3
            },
            // line out of bound --> finished
            {
                "Befehlszähler" : 5
            }
        ]
    },
    {
        name: "Berechne 3 x 3",
        commands: [
            "# this is a sample program",
            "# it computes 3x3 and writes the result in R[1]",
            "            add R[0] R[0] R[1] #init R[1] with 0",
            "            addi R[0] R[2] 3 #init R[2] with 3",
            "            addi R[0] R[3] 3 #init R[3] with 3",
            "startLoop:  subi R[2] R[2] 1",
            "            add R[1] R[3] R[1]",
            "            bneq R[2] R[0] startLoop",
            "end:        syscall"
        ],
        programFlow: [
            // startline
            {
                "Befehlszähler": 2
            },
            {
                "Register": {"R[0]" : 0},
                "Befehlszähler" : 3
            },
            {
                "Register": {"R[2]" : 3},
                "Befehlszähler" : 4
            },
            {
                "Register": {"R[3]" : 3},
                "Befehlszähler" : 5
            },
            {
                "Register": {"R[2]" : 2},
                "Befehlszähler" : 6
            },
            {
                "Register": {"R[1]" : 3},
                "Befehlszähler" : 7
            },
            {
                "Befehlszähler" : 5
            },
            {
                "Register": {"R[2]" : 1},
                "Befehlszähler" : 6
            },
            {
                "Register": {"R[1]" : 6},
                "Befehlszähler" : 7
            },
            {
                "Befehlszähler" : 5
            },
            {
                "Register": {"R[2]" : 0},
                "Befehlszähler" : 6
            },
            {
                "Register": {"R[1]" : 9},
                "Befehlszähler" : 7
            },
            {
                "Befehlszähler" : 8
            },
            // line out of bound --> finished
            {
                "Befehlszähler" : 9
            }
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