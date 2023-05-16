
const sumar = function(a,b){
    if(a === 0 && b=== 0){
        return "ingrese numeros distintos de cero"
    
    }if(isNaN(a) ||  isNaN(b)){
        return "Uno o ambos valores ingresados no pertenecen a un tipo numerico"
   }
   const res = a + b
   return res; 

}

const restar = function(a,b){
    if(a === 0 && b=== 0){
        return "ingrese numeros distintos de cero"
    
    }if(isNaN(a) ||  isNaN(b)){
        return "Uno o ambos valores ingresados no pertenecen a un tipo numerico"
    }
    const res = a-b
    return res;
}

const mutltiplicar = function(a,b){
    if(a === 0 && b=== 0){
        return "ingrese numeros distintos de cero"
    
    }if(isNaN(a) ||  isNaN(b)){
        return "Uno de o ambos valores ingresados no pertenecen a un tipo numerico"
    }
    const res = a*b
    return res;
}
const dividir = function(a,b){
    if(a === 0 || b=== 0){
        return "No se puede dividir por CERO, ingrese numeros distintos de CERO!!!"
    
    }if(isNaN(a) ||  isNaN(b)){
        return "Uno o ambos ingresados numericos no pertenecen a un tipo numerico"
    }
    const res = a/b
    return res;
}
const potencia = function(base,exponente){
    if(base === 0){
        return "el numero de la base debe ser distinto de cero"
    
    }if(isNaN(base ) ||  isNaN(exponente)){
        return "Uno o ambos valores ingresados no pertenecen a un tipo numerico"
    }
    if(base != 0 && exponente === 0){
        const res = 1
        return res
    }
    const res = base**exponente;
    return res;
   
}
const raiz = function(radicando, indice){
    if(radicando < 0 && indice != 0 ){
        return "La razi no tiene solucion ya que su radicando es negativo"
    }
    if(radicando === 0 && indice === 0){
        return "La raiz no se puede resolver, ingrese numeros distintos de cero!!!!"
    }
    if(radicando == 0 && indice != 0){
        const res = 0
        return res
    }if(isNaN(radicando) ||  isNaN(indice)){
        return "Uno o ambos valores ingresados no pertenecen a un tipo numerico"
    }
    if(indice != 2){
        return "Solo se resuelven reaices cuadradas!!!"
    }
    
    return radicando**(1/indice);
}
const modulo = function(num,mod){
    if(num === 0 && mod=== 0){
        return "ingrese numeros distintos de cero"
    
    }if(isNaN(num) ||  isNaN(mod)){
        return "Uno o ambos valores ingresados no pertenecen a un tipo numerico"
   }
   const res = num % mod
   return res; 
}
module.exports =  {
    sumar,
    restar,
    mutltiplicar,
    dividir,
    potencia,
    raiz,
    modulo,
}

