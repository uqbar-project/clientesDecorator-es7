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
        target.comprar = (monto) => {
            if (monto > montoMaximo) {
                throw new Error("No debe comprar por mas de " + montoMaximo)
            }
            target.cliente.comprar(monto)
    	}
    }
}

@safeShop(1000)
class ClienteSafeShopDeco {
	constructor(cliente) {
		this.cliente = cliente
	}
}

export { Cliente, ClienteSafeShopDeco }

var comprarOld = dario.comprar

dario.comprar = (monto) => { 
    if (monto > 1000) 
        throw "No puede comprar por más de 1000" 
    comprarOld(monto).bind(this)
}