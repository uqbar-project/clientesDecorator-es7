class Cliente {
    constructor() {
        this.deuda = 0
        this.puntos = 0
    }

    pagarVencimiento(monto) {
        this.deuda = this.deuda - monto
    }

    agregarPuntos(unosPuntos) {
        this.puntos = this.puntos + unosPuntos
    }

    getDeuda() {
        return this.deuda
    }

    getPuntos() {
        return this.puntos
    }

    comprar(monto) {
        this.deuda = this.deuda + monto
    }

}

function safeShop(montoMaximo) {
    return (target) => {
        target.montoMaximo = montoMaximo
        target.prototype.comprar = function(monto) {
            if (monto > montoMaximo) {
                throw new Error("No debe comprar por mas de " + montoMaximo)
            }
            this.cliente.comprar(monto)
        }
    }
}

@safeShop(1000)
class ClienteSafeShopDeco {
    constructor(cliente) {
        this.cliente = cliente
    }

    get deuda() {
        return this.cliente.deuda
    }
}

export { Cliente, ClienteSafeShopDeco }
