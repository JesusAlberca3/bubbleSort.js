/**

 * 1. Iniciar un Ciclo FOR hasta la longitud del arreglo menos uno (i)
 * 2. Anidar un ciclo FOR hasta la longitud del arreglo menos uno (j)
 * 3. Definir un condicional del arreglo en posicion [j+1] menor que el arreglo en la posicion [j]
 * 4. Declarar un auxiliar con el valor del arreglo en la posicion [j]
 * 5. Dar el valor de Arreglo posicion (j) igual a arreglo en posicion (j+1)
 * 6. Dar el valor de arreglo en posicion (j+1) el valor de auxiliar
 * 7. Retornar arreglo
 * 
 * bubbleSort(array)
 * input: An Array A[0...n-1] of orderable elements
 * output: An array A[0..n-1] of sorted elements
 * FOR i <- 0 TO n-2 DO:
 *  FOR j <- 0 TO n-2 DO
 *      IF A[j+1] < A[j]:
 *          aux <- A[j]
 *          A[j] <- A[j+1]
 *          A[j+1] <- aux

 */

function bubbleSort (array){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j+1] < array[j]) {
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
            
        }
    }
    return array;
}

const arr = [6,23,1,5,9,10,11,8];

console.log(bubbleSort(arr))
