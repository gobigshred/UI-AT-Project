// Storing element selector queries in categorized objects
const elements = {
  emailAddressInput: '#user_email_address',
  userPasswordInput: '#user_password',
  signInButton: 'input',
  projectFeedPageTitle: '[data-testid="projects__main-page-title"]',
  newProjectButton: '//*[@id="main"]/div[3]/div/div[1]/div/div[2]/a',
  projectAddressInput: 'input[name="project_address"]',
  projectNameInput: 'input[name="name"]',
  projectStreetAddressInput: 'input[name="street_address_1"]',
  projectCityInput: 'input[name="city"]',
  projectStateInput: 'input[name="state"]',
  projectPostalCodeInput: 'input[name="postal_code"]',
  createProjectButton: 'button[type="submit"]',
  projectTitleHeading: '[data-testid="projects__title-heading"]',
  projectActionsMenuButton: '[data-testid="projects__actions__manage"]',
  deleteProjectButton: '[data-testid="projects__actions__delete-project-link"]',
  confirmDeleteButton: '[data-testid="confirmation-modal__accept"]',
  projectListItem: '[data-testid="projects__projects-list__project"]'
};

describe('CompanyCam Projects Tests', () => {
  it('Creates a new project in CompanyCam', () => {
    // Login (setup step)
    cy.visit('https://app.companycam.com/users/sign_in');
    cy.get(elements.emailAddressInput).type('cody.peck5@gmail.com');
    cy.get(elements.userPasswordInput).type('password123!');
    cy.get(elements.signInButton).contains('Sign In').click();

    // Assert Main Project Feed loads
    cy.get(elements.projectFeedPageTitle).should('be.visible');

    // Create a new project
    cy.xpath(elements.newProjectButton).click();
    cy.url().should('eq', 'https://app.companycam.com/projects/new')
    cy.get(elements.projectAddressInput).type('Pinnacle Bank Arena{enter}');
    cy.get(elements.projectNameInput).type('Pinnacle Bank Arena');
    cy.get(elements.projectStreetAddressInput).type('400 Pinnacle Arena Dr');
    cy.get(elements.projectCityInput).type('Lincoln');
    cy.get(elements.projectStateInput).type('Nebraska');
    cy.get(elements.projectPostalCodeInput).type('68508');
    cy.get(elements.createProjectButton).contains('Create Project').click();

    // Assert new project is created
    cy.get(elements.projectTitleHeading)
      .should('be.visible')
      .contains('Pinnacle Bank Arena');

    // Delete created project (cleanup step)
    cy.get(elements.projectActionsMenuButton).click();
    cy.get(elements.deleteProjectButton).click();
    cy.get(elements.confirmDeleteButton).click();
    cy.get(elements.projectFeedPageTitle).should('be.visible');
    cy.get(elements.projectListItem)
        .should('not.include.text', 'Pinnacle Bank Arena')
  });
});
