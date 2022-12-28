const fn = require("fs");
const colors = require("colors")

const multiplica = async(base) =>{
salida =""
for (let i = 0; i < base; i++) {
    const resultado = base * i;
    
    console.log(`el resultado de  ${colors.green(base)} x  ${colors.red(i)} =  ${resultado}\n`)
    salida +=  `el resultado de  ${base} x  ${i} =  ${resultado}\n` ;

} 
    fn.writeFileSync(`./salida/tabla-de-${base}.txt`,salida)
 return  `tabla-de-${base}.txt`

}

module.exports = 
    multiplica
