module.exports = Base =  {
    eBase : {
        ZERO:{
            text:'0',
            value:0
        },
        ONE:{
            text:'1',
            value:1
        },
        TWO:{
            text:'2',
            value:2
        },
        THREE:{
            text:'3',
            value:3
        },
        FOUR:{
            text:'4',
            value:4
        },
        FIVE:{
            text:'5',
            value:5
        },
        SIX:{
            text:'6',
            value:6
        },
        SEVEN:{
            text:'7',
            value:7
        },
        EIGHT:{
            text:8,
            value:8
        },
        NINE:{
            text:'9',
            value:9
        },
        A:{
            text:'A',
            value:10
        },
        B:{
            text:'B',
            value:11
        },
        C:{
            text:'C',
            value:12
        },
        D:{
            text:'D',
            value:13
        },
        E:{
            text:'E',
            value:14
        },
        F:{
            text:'F',
            value:15
        },
        G:{
            text:'G',
            value:16
        },
    },
    converter:{
        getBaseFromValue:(value)=>{
            switch(value){
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
        getBaseFromTextChar:(textChar)=>{
            switch(textChar){
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