import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-file-upload'

Given('que estou na tela de login', () => { 
  cy.viewport(375, 667)
  cy.visit('/');
})

When('preencho os campos de email e senha com as informações abaixo', (dataTable) => {  
  const data = dataTable.rowsHash()
  const email = data.email
  const password = data.password
  
  cy.get('#email').type(email)
  cy.get('#password').type(password)
})
And('clico em "Entrar"', () => {
    cy.contains('Entrar').click()
})
And('devo ver a mensagem "Boas-vindas à Lacrei Saúde!"', () => {
  cy.get('h1').should('have.text', "Boas-vindas à Lacrei Saúde!")
})
And('clico no ícone de perfil no canto superior direito', () => {
  cy.get('.sc-89af07af-4').click()
})
And('clico na opção "Editar Perfil"', () => {
  cy.get('.sc-2159912f-0 > :nth-child(1)').click()
})
And('devo ser redirecionado para a tela de edição de perfil', () => {
  cy.get('.actived > p').should('have.text', 'Informações pessoais')
})
And('clico em "Editar dados"', () => {  
  cy.get('#alternative-section > section > div.sc-1ae98e3e-2.kyFvVR > div > button').click()
})
And('posso editar os campos de dados com as informações abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const name = data.nome
  const lastName = data.sobrenome
  cy.get('#name').clear().type(name)
  cy.get('#lastName').clear().type(lastName)
})
And('clico em "Salvar"', () => {
  cy.get(':nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1').click()
 
})
Then('devo ver os campos alterados com as informações abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const name = data.nome
  const lastName = data.sobrenome
  
  cy.contains(name).should('be.visible')
  cy.contains(lastName).should('be.visible')
})
And('apago o conteúdo do campo "nome"', () => {
  cy.get('#name').clear()
 
})
Then('devo ver um erro visual: o campo de Nome deve ter uma borda vermelha', () => {
  cy.wait(1000)
  cy.get('.sc-3a6f1aef-3 > :nth-child(1) > .inputContainer')
   .should('have.css', 'border-color', 'rgb(188, 28, 28)')  
 
})
And('preencho o campo "sobrenome" com a informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const lastName = data.sobrenome
  cy.get('#lastName').clear().type(lastName)
 
})
And('preencho o campo "nome" com a informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const firstName = data.nome
  cy.get('#name').clear().type(firstName)
 
})
Then('devo ver uma mensagem de erro com as informações abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const erroMsg = data.msg
  
  cy.get('#alternative-section > section > aside')
   .should('have.text', erroMsg)  
 
})
And('clico na opção "Editar foto"', () => {
  cy.get('div.image-btns').click()
})
And('escolho a opção "Enviar foto"', () => {
  cy.get('.sc-4592690f-0 > label').click( {force: true} )
  
})
And('faço o upload da foto de perfil', () => {  
  cy.get('input[type="file"]').attachFile('assets/icon_perfil.png')
})
And('escrevo a descrição da foto conforme informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const msg = data.msg

  cy.get('#text').focus({ force: true }).clear({ force: true })   
  cy.get('#text').trigger('blur')
  
  cy.get('#text').type(msg)
})
Then('escrevo a descrição da foto conforme informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const msg = data.msg  
  
  cy.get('textarea').focused().clear( { force: true } )
  cy.get('#text').type(msg)
   
})
And('clico em "Salvar" nova foto de perfil', () => {
  cy.contains('Salvar').click()
 
})
Then('devo ver nova foto e descrição na tela conforme informação abaixo', (dataTable) => {
  const data = dataTable.rowsHash()
  const msg = data.msg
  cy.get('.sc-18bec826-3').should('contain.text', msg)
 
})