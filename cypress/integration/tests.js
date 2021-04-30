/// <reference types='Cypress'/>

const URL = '192.168.0.133:8080';
const ELEMENTOS_PAGINA = '5';

context('casa de cambio', () => {
    before(() => {
        cy.visit(URL);
    });

    it('tests', () => {
        cy.get('.row').should('have.length', ELEMENTOS_PAGINA);
    });
});