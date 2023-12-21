describe('Main', () => {
  it('passes', () => {
    cy.visit('/')
     
    cy.get('form[name="loginForm"]').should('exist').then((form)=>{
      cy.wrap(form).within(()=>{
        cy.get('[class="selection"]').type('') //bank name
        cy.get('[name="username"]').type('') // dpid
        cy.get('[id="password"]').type('')//password
        cy.get('button[type="submit"]').click()
         
      })
    })
  })
})