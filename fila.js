export function criarFila(tamanho = 10){
    return [...new Array(tamanho)]
}

export function inserirFila(fila, item) {
    if (fila.indexOf(undefined) !== -1){
        fila[fila.indexOf(undefined)] = item
    }
    console.log('item inserido')
}

export function retirarItem(fila) {
    for (let i = 0; i < i.length; i++) {
        fila[i] = fila[i - 1]
        
    }
    console.log('Item retirado da fila')
}

export function esvaziarFila(fila,item) {
    if (!fila || !Array.isArray(fila)) {
        console.error("erro: fila invalida");
        return;

    }
    for (let i = 0; i < fila.length; i++) {
        if(fila[0] !== undefined){

        }
                
    }
}


export function tamanhoFila(fila) {
    let emptySpaces = 0
    let usedSpaces = 0
    let size = fila.length
    let subQueue = []
    
    for (let i = 0; i < fila.length; i++) {
        if (fila[i] === undefined) {
            emptySpaces++;
        }
        else{
            usedSpaces++;
            subQueue[usedSpaces -1] = fila[i]
        }
        
    }

    console.log(tamanhoFila)
}