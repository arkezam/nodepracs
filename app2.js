const multiplica = require("./multiplicar")


multiplica(1).then((nombre) => console.log("nombre arch ",nombre,"creado" )).catch(e=>"todo mal"+e);