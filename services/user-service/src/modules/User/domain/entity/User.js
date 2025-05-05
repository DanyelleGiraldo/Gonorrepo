class User {
    constructor({nombreCompleto},{documento}, cuentaId, numtel,){
        this.nombreCompleto = {
            primerNombre: nombreCompleto.primerNombre || '',
            segundoNombre: nombreCompleto.segundoNombre || '',
            apellidoPaterno: nombreCompleto.apellidoPaterno || '',
            apellidoMaterno: nombreCompleto.apellidoMaterno || ''
        }
        this.documento= {
            tipodocumento: documento.tipodocumento,
            numero: documento.numero
        };
        this.cuentaId= cuentaId;
        this.numtel = numtel;
        this.edad= edad;
        this.sexo= sexo;
        this.sucursalId= sucursalId;
        this.fotoperfil = fotoperfil;
    }
}