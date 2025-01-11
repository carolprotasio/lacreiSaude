import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que estou na tela de login', () => { 
  cy.viewport(375, 667)
  cy.visit('/')
});

When('preencho os campos de email e senha com as informações abaixo', (dataTable) => {  
  const data = dataTable.rowsHash()
  const email = data.email
  const password = data.password
  
  cy.get('#email').type(email)
  cy.get('#password').type(password)
});

And('clico em "Entrar"', () => {
    cy.contains('Entrar').click()
})
And('devo ver a mensagem "Boas-vindas à Lacrei Saúde!"', () => {
  cy.get('h1').should('have.text', "Boas-vindas à Lacrei Saúde!")
})
And('preencho o campo de busca com a informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const name = data.nome
  cy.get('#search').type(name)
})
And('clico em "Pesquisar"', () => {
  cy.get('#main-content > form > div.search-button-box > div > button').click()
})
And('clico na primeira profissional que "Atende Convênio"', () => {
  cy.get('div:nth-child(1) > div > div.box-info-professional > h1').click()
})
And('clico em "Exibir contato"', () => {
  cy.get('div.button-box > a > div > button').click()
})
And('preencho os campos de celular com as informações abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const mobile = data.celular;
  cy.get('#cellphone').type(mobile)
})
And('clico em "Enviar código"', () => {
  cy.contains('Enviar código').click( {force: true} )
})
Then('devo ver a mensagem "Enviamos o código por SMS."', () => {
  cy.get('.wasSent').should('have.text', 'Enviamos o código por SMS.')
})
Then('devo ver a mensagem "Não encontramos o que você procura."', () => {
  cy.get('#main-content > div.sc-a06ee582-2.gPQFaf > h3').should('have.text', 'Não encontramos o que você procura.')
})
Then('devo ser redirecionado para a tela de todos os profissionais cadastrados', () => {
  cy.get('#main-section > h1').should('exist')
})
And('devo ser redirecionado para a tela de resultado da pesquisa do profissional', (dataTable) => { 
  const data = dataTable.rowsHash()
  const name = data.nome;
  cy.get('.name-professional').should('contain',name)
})
And('clico no nome do profissional "Lauro Teste" para obter mais informações', () => {  
  cy.get('.name-professional').click()
})
And('clico em "Exibir contato" na opção de Teleconsulta', () => {  
  cy.wait(1000)
  cy.get('#__next > div > div > div.sc-6988b51-0.cXJcjA > div:nth-child(2) > div.button-box > a > div > button').click()
})
And('devo ser redirecionado para a tela de contatar profissional', () => { 
  cy.wait(1000) 
  cy.get('#main-section > div.container-professional-contact > h1').should('have.text', 'Contatar Profissional')
})
And('preencho o campo de celular com numero errado conforme informação abaixo', (dataTable) => { 
  const data = dataTable.rowsHash()
  const mobile = data.celular;
  cy.get('#cellphone').type(mobile)
})
Then('erro visual: o campo de celular deve ter uma borda vermelha', () => {
  cy.wait(1000)
  cy.get('div.inputContainer.error').should('have.css', 'border-color', 'rgb(188, 28, 28)')
})
