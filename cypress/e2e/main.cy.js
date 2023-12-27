describe('Main', () => {
  it('passes', () => {
    const user=[
      {
        bank:'',
        dpid:'',
        password:'',
      },
    ]
    user.forEach((user)=>{

      cy.log(user)
      cy.visit('/')
      cy.get('body')
      cy.get('form[name="loginForm"]').should('exist').then((form)=>{
        cy.wrap(form).within(()=>{
          cy.get('[class="selection"]').type(`${user.bank}{enter}`) //bank name
          cy.get('[name="username"]').type(user.dpid) // dpid
          cy.get('[id="password"]').type(user.password)//password
          cy.get('button[type="submit"]').click()
         // cy.get('.header-menu__item--logout-desktop-view').click(); // Logout button
           
        })
        cy.get('li.nav-item').contains("My ASBA", {
          matchCase: false
        }).click();
        cy.get('[class="nav-item"]').contains("Application Report").click()
        //cy.wait(2000)
        for(let i=0;i<21;i++){
        cy.get('.company-list').then((report)=>{
          cy.wrap(report).eq(i).find('.btn-issue').click();
          cy.wait(1000)
          //save data
          cy.get('[tooltip="Company Name"]').invoke('text').as('ipoName');
          cy.get('[class="form-group"]').contains("Status").parent().parent().find('[class="input-group"]').invoke('text').as('ipoStatus');
           
      
          // Use alias to retrieve the values stored in the variables and write to the fixture
          cy.get('@ipoName').then((ipoName) => {
            // Log or use the IPO name as needed
            cy.log(`IPO Name: ${ipoName}`);
            cy.writeFile('cypress/fixtures/ipoData.txt', `IPO Name: ${ipoName.trim()}\n`, { flag: 'a+' }); // Append mode             
          });
      
          cy.get('@ipoStatus').then((ipoStatus) => {
            // Log or use the IPO status as needed
            cy.log(`IPO Status: ${ipoStatus}`);
             
            cy.writeFile('cypress/fixtures/ipoData.txt', `IPO Status: ${ipoStatus.trim()}\n`, { flag: 'a+' }); // Append mode            
          });
      
          cy.go("back")
          cy.get('[class="nav-item"]').contains("Application Report").click()

        })
      }
         


      })
    })
   
  })
})