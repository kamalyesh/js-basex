
class BXCBase {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

module.exports = Base = {
    eBase: {
        ZERO: new BXCBase('0',0),
        ONE: new BXCBase('1', 1),
        TWO:  new BXCBase('2', 2),
        THREE:  new BXCBase('3', 3),
        FOUR:  new BXCBase('4', 4),
        FIVE:  new BXCBase('5', 5),
        SIX:  new BXCBase('6', 6),
        SEVEN:  new BXCBase('7', 7),
        EIGHT:  new BXCBase('8', 8),
        NINE:  new BXCBase('9', 9),
        A:  new BXCBase('A', 10),
        B: new BXCBase('B', 11),
        C: new BXCBase('C', 12),
        D: new BXCBase('D', 13),
        E: new BXCBase('E', 14),
        F: new BXCBase('F', 15),
        G: new BXCBase('G', 16),
    },
    converter: {
        getBaseFromValue: (value) => {
            switch (value) {
                case 0: return Base.eBase.ZERO;
                case 1: return Base.eBase.ONE;
                case 2: return Base.eBase.TWO;
                case 3: return Base.eBase.THREE;
                case 4: return Base.eBase.FOUR;

                case 5: return Base.eBase.FIVE;
                case 6: return Base.eBase.SIX;
                case 7: return Base.eBase.SEVEN;
                case 8: return Base.eBase.EIGHT;
                case 9: return Base.eBase.NINE;

                default:
                case 10: return Base.eBase.A;
                case 11: return Base.eBase.B;
                case 12: return Base.eBase.C;
                case 13: return Base.eBase.D;
                case 14: return Base.eBase.E;

                case 15: return Base.eBase.F;
                case 16: return Base.eBase.G;
            }
        },
        getBaseFromTextChar: (textChar) => {
            switch (textChar) {
                case '0': return Base.eBase.ZERO;
                case '1': return Base.eBase.ONE;
                case '2': return Base.eBase.TWO;
                case '3': return Base.eBase.THREE;
                case '4': return Base.eBase.FOUR;

                case '5': return Base.eBase.FIVE;
                case '6': return Base.eBase.SIX;
                case '7': return Base.eBase.SEVEN;
                case '8': return Base.eBase.EIGHT;
                case '9': return Base.eBase.NINE;

                default:
                case '10': return Base.eBase.A;
                case '11': return Base.eBase.B;
                case '12': return Base.eBase.C;
                case '13': return Base.eBase.D;
                case '14': return Base.eBase.E;

                case '15': return Base.eBase.F;
                case '16': return Base.eBase.G;
            }
        },
    }
}