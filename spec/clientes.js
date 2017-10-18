import { Cliente, ClienteSafeShopDeco } from "../src/clientes"

describe('clientes', () => {

    let manuel
    let manuelSafeShop

    beforeEach(() => {
        manuel = new Cliente()
        manuelSafeShop = new ClienteSafeShopDeco(manuel)
    })

    it('manuel compra ok', () => {
        manuel.comprar(2000)
        expect(2000).toBe(manuel.deuda)
    })

    it('manuel con safe shop compra ok por menos del monto maximo', () => {
        manuelSafeShop.comprar(500)
        expect(500).toBe(manuelSafeShop.deuda)
    })

    it('manuel compra ok', () => {
        expect(() => manuelSafeShop.comprar(2000)).toThrow(new Error("No debe comprar por mas de 1000"))
    })

})
