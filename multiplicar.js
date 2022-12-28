const fn = require("fs");
const colors = require("colors")

const multiplica = async(base) =>{
salida =""
for (let i = 0; i < base; i++) {
    const resultado = base * i;
    
    console.log(`el resultado de  ${colors.green(base)} x  ${colors.red(i)} =  ${resultado}\n`)
    salida +=  `el resultado de  ${base} x  ${i} =  ${resultado}\n` ;

} 
    const nombrea = await base
 return fn.writeFileSync(`tabla-de-${base}.txt`,salida)

}

module.exports = 
    multiplica
