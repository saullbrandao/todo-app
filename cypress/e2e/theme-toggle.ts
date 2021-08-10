describe('dark mode', () => {
  it('can change the theme between light and dark', () => {
    cy.visit('/')
    cy.get('html').not('.dark')
    cy.findByAltText('moon icon').click()
    cy.get('html').should('have.class', 'dark')
  })
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {}
