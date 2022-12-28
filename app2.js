const multiplica = require("./multiplicar")


multiplica(14).then((numbre) => console.log("nombre arch ",numbre,"creado" )).catch(e=>"todo mal"+e);