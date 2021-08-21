// let dimencion = 5;
// let matriz = [];
// for(let i=0; i<dimencion; i++){
//     matriz.push(new Array(dimencion).fill(undefined));
// }
// matriz[0][2]="J";
// console.log(matriz);

let D = 5;
let matriz = new Array(D).fill(null);

for(var i=0; i<matriz.length; i++) {
    matriz[i] = new Array(D).fill(null);
    for(var j=0; j<matriz[i].length; j++) {
        matriz[i][j] = new Array(D).fill(null);
        for(var r=0; r<matriz[i][j].length; r++) {
            matriz[i][j][r] = new Array(D).fill(null);
            for(var q=0; q<matriz[i][j][r].length; q++) {
                matriz[i][j][r][q] = new Array(D).fill(null);
            }
        }
    }
}
// let obj = {datos:matriz};
// Object.preventExtensions(obj);
// obj.datos[0][0][0][0][0] = "J";
// obj.datos[1][0][0][0][0] = "a";
// obj.datos[2][0][0][0][0] = "i";
// obj.datos[3][0][0][0][0] = "m";
// obj.datos[4][0][0][0][0] = "J";
// console.log(obj);


let obj = {
    suma : function(){
        return this.num1 + this.num2;
    }
}
let obj2 = Object.create(obj);//hereda el metodo de "obj"
obj2.num1 = 5;
obj2.num2 = 5;

console.log(obj2);
console.log(obj2.suma());