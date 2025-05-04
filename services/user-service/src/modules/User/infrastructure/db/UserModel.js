const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombreCompleto: {
        primerNombre: { type: String, required: true },
        segundoNombre: { type: String, default: '' },
        apellidoPaterno: { type: String, required: true },
        apellidoMaterno: { type: String, default: '' }
    },
    documenta: {
        tipodocumento: {type: String, required: true},
        numero : {type:String, required:true}
    },
    cuentaId: {type:String, required:true, unique:true},
    numtel: {type:Number, required:true, unique:true},
    sexo: {type: String, enum:['H', 'M']},
    sucursalId: {type: String, required: true}
    
}, {
    timestamps: true
})