/**
 * This is the model for the registerList, that is passed around in the ExecutionView.
 */
export default class RegisterList {

    /**
     * This an array of the registers of the Registerlist, with elements like {name: registername, val: number of this register, visible: boolean, shall we show this element or show ...?]
     */
    registers;

    /**
     * The current representation of the numbers (binary, decimal, hexadeciaml)
     */
    numberRepresentation;


    /**
     * Enumeration of the numberRepresentation a register can have
     */
    numberRepresentationEnum = {
        DECIMAL : 1,
        BINARY : 2,
        HEXADECIMAL: 3,
    }

    constructor(registers) {
        this.registers = registers.map(r => Object.assign({}, r, {visible: true}));
        this.numberRepresentation = this.numberRepresentationEnum.DECIMAL;
    }
    
    /**
     * Creates a RegisterList with sample registers, filled with 0
     * @param {string} name Text before register number, for example "Speicher" will later get you "Speicher[i]"
     * @param {int} size Number of registers to create
     */
    static fromFixedNameAndSize(name, size) {
        let registers = new Array(size);
        for (let index = 0; index < size; index++) {
            let key = name+"["+index+"]";
            registers[index] = {name: key, value: 0, visible: true};
        };
        return new RegisterList(registers);
    }

    /**
     * Changes the representation to the next representation in numberRepresentationEnum
     */
    changeRepresentation() {
        this.numberRepresentation = (this.numberRepresentation + 1) % Object.keys(this.numberRepresentationEnum).length;
    }

    /**
     * Returns a copy of this.registers in the representation of this.representation
     * For negative numbers in Hexa and Binary, we choose the two's complement representation
     * If you don't want that, remove the ">>> 0" operator
     */
    getRegistersInCurrentRepresentation() {
        switch (this.numberRepresentation) {
            case this.numberRepresentationEnum.DECIMAL:
                // returns copy
                return JSON.parse(JSON.stringify(this.registers));
            case this.numberRepresentationEnum.BINARY:
                // changes number to binary, for negative we return two's complement
                return this.registers.map(reg => Object.assign({}, reg, {value: (reg.value >>> 0).toString(2)}));
            case this.numberRepresentationEnum.HEXADECIMAL:
                // changes number to hexadecimal, for negative we return two's complement
                return this.registers.map(reg => Object.assign({}, reg, {value: (reg.value >>> 0).toString(16)}));
            default:
                console.log("Unknown Number status");
                break;
        }
    }
    
    /**
     * Returns the RegisterList
     */
    getRegisterList() {
        return this.getRegistersInCurrentRepresentation();
    }

    // TODO: Does this actually work?
    /**
     * Returns the RegisterList, with changed visible attributes.
     * @param {int} hideAfterNumberOfConsecutiveZeros After this amount of consecutive zeros we will set `visible` to `false` until a number different from 0 appears
     */
    getShortenedRegisterList(hideAfterNumberOfConsecutiveZeros) {
        let numberOfConsecutiveZeros = 0;
        let shortenedRegisterList = [];
        let registerList = this.getRegisterList();
       
        for (let index = 0; index < registerList.length; index++) {
            // copy the current register
            let reg = registerList[index];
            let nextReg = registerList[index+1];
            if (reg.value === 0) numberOfConsecutiveZeros++;
            else numberOfConsecutiveZeros = 0;
            // always insert the unchanged register at the end of the table
            if (index===registerList.length-1 || numberOfConsecutiveZeros <= hideAfterNumberOfConsecutiveZeros || nextReg.value !== 0) {
                shortenedRegisterList.push(reg);
            } else {
                reg.visible = false;
                shortenedRegisterList.push(reg);
                continue;
            }
        }
        return shortenedRegisterList;
    }
}