// Nama Ferdy Febriyanto
// 1941720007
// Kelompok 04

describe('Insert Name with numbers', () => {
    it('Visits saucedemo', () => {
        //masuk ke alamat web sauce demo
        cy.visit('https://www.saucedemo.com/')
            //akses ke class username
        cy.get('#user-name.input_error.form_input')
            //menulis username
            .type('standard_user')
            //akses ke class password
        cy.get('#password.input_error.form_input')
            //menulis password
            .type('secret_sauce')
            //klik tombol login
        cy.contains('Login').click()
            //klik tombol cart
        cy.get('.shopping_cart_link').click()
            //klik tombol checkout
        cy.contains('Checkout').click()
            //akses class first name
        cy.get('#first-name.input_error.form_input')
            //menulis pada first name
            .type('123')
            //akses ke class last name
        cy.get('#last-name.input_error.form_input')
            //menulis pada last name
            .type('123')
            //akses class zip code
        cy.get('#postal-code.input_error.form_input')
            //menulis pada class zip code
            .type('65141')
            //klik tombol continue
        cy.contains('Continue').click()
    })
})