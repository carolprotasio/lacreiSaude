import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que estou na tela de login', () => { 
  cy.viewport(375, 667)
  cy.visit('/')
})
And('preencho os campos de email e senha com as informações abaixo', (dataTable) => {  
  const data = dataTable.rowsHash()
  const email = data.email   
  cy.get('#email').type(email) 
});

When('clico em "Esqueci minha senha"', () => {
  cy.contains('Esqueci minha senha').click() 
})
And('devo ser redirecionado para a tela de "Redefinir senha"', () => {
  cy.wait(1000)
 cy.get('h2').should('have.text', 'Redefinir senha')
})
And('preencho o campo de e-mail com as informações abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const email = data.email  
  cy.get('#email').type(email)
})
And('clico em "Enviar Link de Recuperação"', () => {
  cy.get('.kWXVUj > .sc-b3674f5-1').click()
})
And('devo ser redirecionado para a tela de confirmação de envio', () => {
  cy.url().should('include', '/redefinicao-de-senha/verificar-email/')
})
Then('devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"', () => {
  cy.get('h2').should('have.text', 'Verifique seu e-mail para redefinir a senha')
})
And('clico em "Reenviar"', () => {
  cy.get('#__next > div > section > div > div.presentation > p:nth-child(4) > a').click()
})
Then('clico em "Voltar para a tela inicial"', () => {
  cy.contains('Voltar para a tela inicial').click()
})
