function validarSalarios(salarios){
    
    if(salarios === 0){
        return 'El campo no puede estar vacio';
    }
    if(!/^\d*$/.test(salarios)){
        return 'El numero no puede tener decimales';
    } 
return salarios;
}