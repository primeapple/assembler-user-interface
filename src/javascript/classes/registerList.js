/**
 * This is the model for a list of Registers of one type (eg. "Steuerleitungen")
 */
export default class RegisterList {

    /**
     * This a Map of the registers of the Registerlist, with elements like {registername : content of this register}
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
        DECIMAL : 0,
        BINARY : 1,
        HEXADECIMAL: 2,
    }

    /**
     * Creates new Register from array of objects
     * @param {Map} registers A Map, keys are the names of the register (string), values are the values (int/string of the registers
     */
    constructor(registers, numberRepresentation = 0) {
        this.registers = registers;
        this.numberRepresentation = numberRepresentation;
    }
    
    /**
     * Creates a RegisterList with sample registers, filled with 0
     * @param {string} name Text before register number, for example "Speicher" will later get you "Speicher[i]"
     * @param {int} size Number of registers to create
     */
    static fromFixedNameAndSize(name, size) {
        let registers = new Map();
        for (let index = 0; index < size; index++) {
            registers.set(name+"["+index+"]", 0);
        };
        return new RegisterList(registers);
    }

    /**
     * Returns a copy of this RegisterList
     */
    clone() {
        return new RegisterList(new Map(this.registers), this.status);
    }

    /**
     * Sets new values for this registers
     * @param {object} newValuesObject object with new values for the registers, like {R[2]: 4, R[6]: 3}
     */
    setValues(newValuesObject) {
        for (const key in newValuesObject) {
            if (newValuesObject.hasOwnProperty(key)) {
                this.registers.set(key, newValuesObject[key]);
            }
        }
    }

    /**
     * Changes the representation to the next representation in numberRepresentationEnum
     */
    changeRepresentation() {
        this.numberRepresentation = (this.numberRepresentation + 1) % Object.keys(this.numberRepresentationEnum).length;
    }

    /**
     * Returns a copy of this.registers in the representation of this.representation, numbers will be converted to Strings.
     * For negative numbers in Hexa and Binary, we choose the two's complement representation
     * If you don't want that, remove the ">>> 0" operator
     */
    getRegistersMapInCurrentRepresentation() {
        let copyReg = new Map();
        switch (this.numberRepresentation) {
            case this.numberRepresentationEnum.DECIMAL:
                for (const [k,v] of this.registers) copyReg.set(k,v.toString())
                break;
            case this.numberRepresentationEnum.BINARY:
                // changes number to binary, for negative we return two's complement
                for (const [k,v] of this.registers) copyReg.set(k, (v.constructor === String) ? v : (v >>> 0).toString(2));
                break;
            case this.numberRepresentationEnum.HEXADECIMAL:
                // changes number to hexadecimal, for negative we return two's complement
                for (const [k,v] of this.registers) copyReg.set(k, (v.constructor === String) ? v : (v >>> 0).toString(16));
                break;
            default:
                throw "Unknown Number Representation Type";
            }
        return copyReg;
    }
    
    /**
     * Returns the RegisterList in the following way: {k1: v1, k2: v2, ...} becomes [{name: k1, value: v1, hidden: false}, {name: k1, value: v1, hidden: false}, ...]
     */
    getRegisterArray() {
        return Array.from(this.getRegistersMapInCurrentRepresentation(), ([k,v]) => {return {name: k, value: v, nextHidden: false}});
    }

    // TODO: This does some weird stuff... Maybe we should reimplement it. However, for the prototype its fine
    /**
     * Returns a potential shortened RegisterArray.
     * @param {int} hideAfterNumberOfConsecutiveZeros After this amount of consecutive elements with `value`=0 we will set the next element `nextHidden` to `true`.
     * Now we delete all following elements with `value`=0 until an element with `value`!=0 appears
     */
    getShortenedRegisterArray(hideAfterNumberOfConsecutiveZeros) {
        let numberOfConsecutiveZeros = 0;
        let shortenedRegisterList = [];
        let registerList = this.getRegisterArray();
       
        for (let index = 0; index < registerList.length; index++) {
            let reg = registerList[index];
            let nextReg = registerList[index+1];
            if (reg.value === "0") numberOfConsecutiveZeros++;
            else numberOfConsecutiveZeros = 0;
            // always insert the unchanged register at the end of the table
            if (index===registerList.length-1 || numberOfConsecutiveZeros <= hideAfterNumberOfConsecutiveZeros || nextReg.value !== "0") {
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