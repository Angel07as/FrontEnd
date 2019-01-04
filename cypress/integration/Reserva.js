describe('Formulario Reserva', () => {
  it('Ingresando credenciales correctas', () => {
	cy.visit("/");
	const user = {
		email: 'dori@test.com',
		password: 'dori',
	};
	cy.login(user);
});
	it('Ingresando credenciales correctas', () => {
		const proveedor = {
			cif: 'B60907397',
			concepto: 'pantalla',
			presupuesto: 12000,
		};
		cy.reserva(proveedor);
		// Verificar que aparezca el mensaje indicando el error.
		cy.contains('p', 'Se ha realizado la reserva de forma correcta');
	});
});