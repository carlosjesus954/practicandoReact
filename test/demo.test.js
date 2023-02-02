
describe('Pruebas en jest', () => { 
    test('Esta prueba no debe de fallar', () =>{
        // 1. Inicializacion
        const mensaje = "Hola mundo";
        // 2.Estimulo
        const mensaje2 = mensaje.trim();
        // 3.Observar el comportamiento
        // expect(mensaje).toBe(mensaje2);
        expect(mensaje).toBe(mensaje2)
    })
 })
