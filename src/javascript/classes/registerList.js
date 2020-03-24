/**
 * This is the model for the registerList, that is passed around in the ExecutionView.
 */
export default class RegisterList {

    /**
     * This an array of the registers of the Registerlist, with elements like {name: registername, val: number of this register}
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

    /**
     * Creates new Register from array of objects
     * @param {array} registers An array consisting of objects like {name: string, value: number}, the names of the objects have to be unique
     */
    constructor(registers) {
        // test for unique names
        let registersUniqueNames = registers.map(r=>r.name).filter((v, i, a) => a.indexOf(v) === i);
        if (registers.length !== registersUniqueNames.length) throw("ERROR: Register names have to be uniqe");

        this.registers = registers.map(r => Object.assign({}, r));
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
            registers[index] = {name: key, value: 0};
        };
        return new RegisterList(registers);
    }

    /**
     * Sets the value of register with name `key` to `value`
     * @param {string} key Identifier of the register, like "Register[0]"
     * @param {int/string} value Value of the register
     */
    setValue(key, value) {
        this.registers.filter(r => r.name === key)[0].value = value;
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
     * Returns the RegisterList, adds property `nextHidden`:false to each element
     */
    getRegisterList() {
        return this.getRegistersInCurrentRepresentation().map(r => Object.assign({}, r, {nextHidden: false}));
    }

    // TODO: Does this actually work?
    /**
     * Returns a potential shortened RegisterList.
     * @param {int} hideAfterNumberOfConsecutiveZeros After this amount of consecutive elements with `value`=0 we will set the next element `nextHidden` to `true`.
     * Now we delete all following elements with `value`=0 until an element with `value`!=0 appears
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
            } else if (numberOfConsecutiveZeros === hideAfterNumberOfConsecutiveZeros+1) {
                reg.nextHidden = true;
                shortenedRegisterList.push(reg);
                continue;
            } else {
                continue;
            }
        }
        return shortenedRegisterList;
    }
}