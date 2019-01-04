describe('Formulario de Login', () => {
	beforeEach(function() {
		cy.visit("/");
	  })
	it('Ingresando credenciales incorrectas', () => {
		const user = {
			email: 'wrong@email.com',
			password: 'wrong',
		};
		cy.login(user);
		// Verificar que aparezca el mensaje indicando el error.
		cy.contains('p', 'El usuario no esta registrado');
	});

	it('Ingresando credenciales correctas', () => {
		const user = {
			email: 'dori@test.com',
			password: 'dori',
		};
		cy.login(user);
		// Verificar que aparece Datos de reserva
		cy.contains('Datos de reserva');
	});
});