/// <reference types='Cypress'/>

const URL = '192.168.0.133:8080';
const ELEMENTOS_PAGINA = '5';
const ELEMENTOS_DROPDOWN = '32'

context('casa de cambio', () => {
    before(() => {
        cy.visit(URL);
    });

    it('verifica elementos', () => {
        cy.get('.row').should('have.length', ELEMENTOS_PAGINA);

        cy.get('h1').should('have.text', 'Casa de cambio');

        cy.get('#bases').find('option').should('have.length', ELEMENTOS_DROPDOWN);

        cy.get('#bases').find('option').then(options => {
            const actual = [...options].map(o => o.value)
            expect(actual).to.deep.eq(['GBP', 'HKD', 'IDR', 'ILS', 'DKK', 'INR', 'CHF', 'MXN', 'CZK', 'SGD',
                                        'THB', 'HRK', 'MYR', 'NOK', 'CNY', 'BGN', 'PHP', 'SEK', 'PLN', 'ZAR',
                                        'CAD', 'ISK', 'BRL', 'RON', 'NZD', 'TRY', 'JPY', 'RUB', 'KRW', 'USD',
                                        'HUF', 'AUD'
                                    ]);
            
          });
    });

    it('asegura seleccion de fecha', () => {
        cy.contains('Buscar').click();
        cy.get('#fecha').should('have.class', 'borde-rojo');
    });
});