describe('My First Test', () => {
   it('Creates a new project in CompanyCam', () => {

    // Login
    cy.visit('https://app.companycam.com/users/sign_in')
    cy.get('#user_email_address')
        .type('cody.peck5@gmail.com')
    cy.get('#user_password')
        .type('password123!')
    cy.get('input').contains('Sign In').click()

    // Confirm Main Project Feed loads
    cy.get('[data-testid="projects__main-page-title"]').should('be.visible')

    // Create a new project
    cy.xpath('//*[@id="main"]/div[3]/div/div[1]/div/div[2]/a').click()
    cy.get('input[name="project_address"]').type('Pinnacle Bank Arena{enter}')
    cy.get('input[name="name"]').type('Pinnacle Bank Arena')
    cy.get('input[name="street_address_1"]').type('400 Pinnacle Arena Dr')
    cy.get('input[name="city"]').type('Lincoln')
    cy.get('input[name="state"]').type('Nebraska')
    cy.get('input[name="postal_code"]').type('68508')
    cy.get('button[type="submit"]').contains('Create Project').click()

    // Confirm new project is created
    cy.get('[data-testid="projects__title-heading"]').should('be.visible')
    // ^ Figure out how to assert that text matches
  })
})