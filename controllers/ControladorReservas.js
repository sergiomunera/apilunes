export class ControladorReservas{

    constructor(){}
    registrarReserva(peticion, respuesta){
        try{   

            //1. Esculcar los datos que quieren usar para el registro
            let datosReservaRegistrar = peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos":"aca van los datos que se guardaron"
            }) 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado" + error
            })
        }
    }
    buscarReserva(peticion, respuesta){
        try{
            // 1. Intentar buscar los datos en BD
            // 2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos":"aca van los datos que se buscaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de busquedad" + error
            })
        }
    }
    buscarReservaPorId(peticion, respuesta){
        try{
            // 1.Esculcar los parametros de la peticion
            let idReservaBuscar = peticion.params.id
            // 2.Validar el dato
            // 3.Intento buscar el dato en BD
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad",
                "datos":"aca van los datos que se buscaron"
            })

        }catch(error){
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busquedad" + error
            })
        }
    }
    modificarReserva(peticion, respuesta){
        try{
            // 1.Traigo el id a editar de la peticion
            let idReservaModificar = peticion.params.id
            let datosReservaModificar = peticion.body
            // 2.Validar los datos
            // 3.Buscar y modificar en BD
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos":"aca van los datos que se editaron"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion" + error
            })
        }
    }
    borrarReserva(peticion, respuesta){
        try{
            // 1.Traigo el id a eliminar
            let idReservaBorrar = peticion.params.id
            // 2.Validar datos
            // 3.Intento borrar la habitacion en BD
            // 4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de borrado"
            })
        }
    }
}