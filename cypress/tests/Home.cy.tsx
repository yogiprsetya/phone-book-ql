describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the contact list title', () => {
    cy.contains('h1', 'Contact List').should('be.visible');
  });

  it('should display a list of contacts', () => {
    cy.get('[data-testid="contact-card"]').should('have.length.greaterThan', 0);
  });

  it('should allow searching for contacts', () => {
    cy.get('[data-testid="search-input"]').type('John');
    cy.get('[data-testid="contact-card"]').should('have.length', 1);
  });

  it('should allow pagination through the contact list', () => {
    cy.get('[data-testid="pagination-next"]').click();
    cy.get('[data-testid="pagination-prev"]').should('be.visible');
  });
});
