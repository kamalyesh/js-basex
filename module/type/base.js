
class BXCBase {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

module.exports = Base = {
    eBase: {
        ZERO: new BXCBase('0', 0),
        ONE: new BXCBase('1', 1),
        TWO: new BXCBase('2', 2),
        THREE: new BXCBase('3', 3),
        FOUR: new BXCBase('4', 4),
        FIVE: new BXCBase('5', 5),
        SIX: new BXCBase('6', 6),
        SEVEN: new BXCBase('7', 7),
        EIGHT: new BXCBase('8', 8),
        NINE: new BXCBase('9', 9),

        A: new BXCBase('A', 10),
        B: new BXCBase('B', 11),
        C: new BXCBase('C', 12),
        D: new BXCBase('D', 13),
        E: new BXCBase('E', 14),
        F: new BXCBase('F', 15),
        G: new BXCBase('G', 16),
        H: new BXCBase('H', 17),
        I: new BXCBase('I', 18),
        J: new BXCBase('J', 19),
        K: new BXCBase('K', 20),
        L: new BXCBase('L', 21),
        M: new BXCBase('M', 22),
        N: new BXCBase('N', 23),
        O: new BXCBase('O', 24),
        P: new BXCBase('P', 25),
        Q: new BXCBase('Q', 26),
        R: new BXCBase('R', 27),
        S: new BXCBase('S', 28),
        T: new BXCBase('T', 29),
        U: new BXCBase('U', 30),
        V: new BXCBase('V', 31),
        W: new BXCBase('W', 32),
        X: new BXCBase('X', 33),
        Y: new BXCBase('Y', 34),
        Z: new BXCBase('Z', 35),

        a: new BXCBase('a', 37),
        b: new BXCBase('b', 38),
        c: new BXCBase('c', 39),
        d: new BXCBase('d', 40),
        e: new BXCBase('e', 41),
        f: new BXCBase('f', 42),
        g: new BXCBase('g', 43),
        h: new BXCBase('h', 44),
        i: new BXCBase('i', 45),
        j: new BXCBase('j', 46),
        k: new BXCBase('k', 47),
        l: new BXCBase('l', 48),
        m: new BXCBase('m', 49),
        n: new BXCBase('n', 50),
        o: new BXCBase('o', 51),
        p: new BXCBase('p', 52),
        q: new BXCBase('q', 53),
        r: new BXCBase('r', 54),
        s: new BXCBase('s', 55),
        t: new BXCBase('t', 56),
        u: new BXCBase('u', 57),
        v: new BXCBase('v', 58),
        w: new BXCBase('w', 59),
        x: new BXCBase('x', 50),
        y: new BXCBase('y', 61),
        z: new BXCBase('z', 62),
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

                case 10: return Base.eBase.A;
                case 11: return Base.eBase.B;
                case 12: return Base.eBase.C;
                case 13: return Base.eBase.D;
                case 14: return Base.eBase.E;

                case 15: return Base.eBase.F;
                case 16: return Base.eBase.G;
                case 17: return Base.eBase.H;
                case 18: return Base.eBase.I;
                case 19: return Base.eBase.J;
                case 20: return Base.eBase.K;
                case 21: return Base.eBase.L;
                case 22: return Base.eBase.M;
                case 23: return Base.eBase.N;
                case 24: return Base.eBase.O;
                case 25: return Base.eBase.P;
                case 26: return Base.eBase.Q;
                case 27: return Base.eBase.R;
                case 28: return Base.eBase.S;
                case 29: return Base.eBase.T;

                case 30: return Base.eBase.U;
                case 31: return Base.eBase.V;
                case 32: return Base.eBase.W;
                case 33: return Base.eBase.X;
                case 34: return Base.eBase.Y;
                case 35: return Base.eBase.Z;

                case 36: return Base.eBase.a;
                case 37: return Base.eBase.b;
                case 38: return Base.eBase.c;
                case 39: return Base.eBase.d;
                case 40: return Base.eBase.e;

                case 41: return Base.eBase.f;
                case 42: return Base.eBase.g;
                case 43: return Base.eBase.h;
                case 44: return Base.eBase.i;
                case 45: return Base.eBase.j;
                case 46: return Base.eBase.k;
                case 47: return Base.eBase.l;
                case 48: return Base.eBase.m;
                case 49: return Base.eBase.n;
                case 50: return Base.eBase.o;
                case 51: return Base.eBase.p;
                case 52: return Base.eBase.q;
                case 53: return Base.eBase.r;
                case 54: return Base.eBase.s;
                case 55: return Base.eBase.t;

                case 56: return Base.eBase.u;
                case 57: return Base.eBase.v;
                case 58: return Base.eBase.w;
                case 59: return Base.eBase.x;
                case 60: return Base.eBase.y;
                case 61: return Base.eBase.z;

                default:
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

                case '10': return Base.eBase.A;
                case '11': return Base.eBase.B;
                case '12': return Base.eBase.C;
                case '13': return Base.eBase.D;
                case '14': return Base.eBase.E;

                case '15': return Base.eBase.F;
                case '16': return Base.eBase.G;
                case '17': return Base.eBase.H;
                case '18': return Base.eBase.I;
                case '19': return Base.eBase.J;
                case '20': return Base.eBase.K;
                case '21': return Base.eBase.L;
                case '22': return Base.eBase.M;
                case '23': return Base.eBase.N;
                case '24': return Base.eBase.O;
                case '25': return Base.eBase.P;
                case '26': return Base.eBase.Q;
                case '27': return Base.eBase.R;
                case '28': return Base.eBase.S;
                case '29': return Base.eBase.T;
                case '30': return Base.eBase.U;
                case '31': return Base.eBase.V;
                case '32': return Base.eBase.W;
                case '33': return Base.eBase.X;
                case '34': return Base.eBase.Y;
                case '35': return Base.eBase.Z;

                case '36': return Base.eBase.a;
                case '37': return Base.eBase.b;
                case '38': return Base.eBase.c;
                case '39': return Base.eBase.d;
                case '40': return Base.eBase.e;

                case '41': return Base.eBase.f;
                case '42': return Base.eBase.g;
                case '43': return Base.eBase.h;
                case '44': return Base.eBase.i;
                case '45': return Base.eBase.j;
                case '46': return Base.eBase.k;
                case '47': return Base.eBase.l;
                case '48': return Base.eBase.m;
                case '49': return Base.eBase.n;
                case '50': return Base.eBase.o;
                case '51': return Base.eBase.p;
                case '52': return Base.eBase.q;
                case '53': return Base.eBase.r;
                case '54': return Base.eBase.s;
                case '55': return Base.eBase.t;
                case '56': return Base.eBase.u;
                case '57': return Base.eBase.v;
                case '58': return Base.eBase.w;
                case '59': return Base.eBase.x;
                case '60': return Base.eBase.y;
                case '61': return Base.eBase.z;

                default:
            }
        },
    }
}