describe('Todo List', () => {
  it('can add tasks using the form', () => {
    cy.visit('/')
    cy.findByPlaceholderText(/create a new/i).type('task 1')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByPlaceholderText(/create a new/i).type('task 2')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByPlaceholderText(/create a new/i).type('task 3')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByPlaceholderText(/create a new/i).type('task 4')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByPlaceholderText(/create a new/i).type('task 5')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByPlaceholderText(/create a new/i).type('task 6')
    cy.findByPlaceholderText(/create a new/i).type('{Enter}')
    cy.findByText('task 1')
    cy.findByText('task 2')
    cy.findByText('task 3')
    cy.findByText('task 4')
    cy.findByText('task 5')
    cy.findByText('task 6')
  })

  it('can remove a task', () => {
    cy.findAllByLabelText('delete task').last().click()
    cy.findAllByLabelText('delete task').last().click()
  })

  it('can check and uncheck tasks', () => {
    cy.findAllByRole('checkbox').last().click({ force: true })
    cy.findAllByRole('checkbox').last().click({ force: true })
    cy.findAllByRole('checkbox').last().click({ force: true })
  })

  it('can filter by all, active and completed tasks', () => {
    cy.findByRole('button', { name: /active/i }).click()
    cy.findByText('task 1')
    cy.findByText('task 2')
    cy.findByText('task 3')
    cy.findByText('task 4').should('not.exist')

    cy.findByRole('button', { name: /^completed$/i }).click()
    cy.findByText('task 4')
    cy.findByText('task 1').should('not.exist')
    cy.findByText('task 2').should('not.exist')
    cy.findByText('task 3').should('not.exist')

    cy.findByRole('button', { name: /all/i }).click()
    cy.findByText('task 1')
    cy.findByText('task 2')
    cy.findByText('task 3')
    cy.findByText('task 4')
  })

  it('can clear all completed tasks', () => {
    cy.findByRole('button', { name: /clear completed/i }).click()
    cy.findByText('task 1')
    cy.findByText('task 2')
    cy.findByText('task 3')
    cy.findByText('task 4').should('not.exist')
  })
})
