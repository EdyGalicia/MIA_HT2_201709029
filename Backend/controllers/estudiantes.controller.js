const BD = require('../config/oracleConnection');

exports.getUsuarios = async (req, res) => {
    try{
        let query = "SELECT * FROM USUARIO";
        let result = await BD.Open(query, [], false);
        let estudiantes = [];

        estudiantes = result.rows.map(user =>{
            let estudianteSchema = {
                "Nombre": user[0],
                "Email": user[1],
                "Password": user[2]
            }

            return estudianteSchema
        })
        res.json(estudiantes);
    }
    catch(error)
    {
        console.log("Error al realizar la consulta => ",error)
        res.json({})
    }
}

exports.addUsuario = async(req,res) => {
    try{
        const { nombre, email, password } = req.body
        
        const body = req.body
        const n = body.nombre
        const c = body.email
        const p = body.password
        
        console.log(n)
        console.log(c)
        console.log(p)
        let sql = `INSERT INTO USUARIO(nombreUsuario, emailUsuario, passUsuario) VALUES ('${n}','${c}','${p}')`
        await BD.Open(sql, [], true);

        res.json({"Info": "Estudiante creado exitosamente"})
    }
    catch(error){
        console.log("Error al crear el usuario => ",error)
        res.json({"mensaje": "Error al crear el usuario"})
    }
}

exports.login = async(req,res) => {
    try{
        const body = req.body
        const email = body.email
        const pass = body.password

        console.log(email)
        console.log(pass)

        let query = `SELECT * FROM USUARIO WHERE emailusuario='${email}' and passusuario='${pass}'`
        let result = await BD.Open(query, [], false);
        let estudiantes = [];

        estudiantes = result.rows.map(user =>{
            let estudianteSchema = {
                "Nombre": user[0],
                "Email": user[1],
                "Password": user[2]
            }

            return estudianteSchema
        })

        if (estudiantes.length == 1) {
            res.json({"auth": true})
        }else{
            res.json({"auth": false})
        }

    }
    catch(error){
        console.log("Error al loguear el usuario => ",error)
        res.json({"mensaje": "Error al loguear el usuario"})
    }
}