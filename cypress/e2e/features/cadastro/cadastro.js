import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker'
import { camposObrigatorios, validarMensagensDeErro } from './camposObrigatorios'


const createUser = () => {
    const email = faker.internet.email();
    const senha = "SenhaForte@2025";
    return {
        nome: faker.name.firstName(),
        sobreNome: faker.name.lastName(),
        email,
        confirmarEmail: email,
        senha,
        confirmarSenha: senha
    }
}
const user = createUser()

Given('que estou na página de cadastro', () => {
    cy.viewport(375, 667)
    cy.visit('/cadastro');
})
Then('devo ver a mensagem de erro conforme informação abaixo', (dataTable) => {   
    const data = dataTable.rowsHash();

    const campos = {
        nome: data.nome || 'Erro no nome',
        sobreNome: data.sobreNome || 'Erro no sobrenome',
        email: data.email || 'Erro no email',
        confirmarEmail: data.confirmarEmail || 'Erro no confirmar email',
        senha: data.senha || 'Erro na senha',
        confirmarSenha: data.confirmarSenha || 'Erro na confirmação da senha',
        termos: data.termos || 'Erro nos termos',
        idade: data.idade || 'Erro na idade'
    };

    Object.values(campos).forEach((mensagem) => {
        cy.contains(mensagem).should('be.visible');
    });
});

 When('preencho todos os campos obrigatórios conforme informação abaixo', (dataTable) => {
    const data = dataTable.rowsHash()
    
    const nome = data.nome === '<nome>' || !data.nome ? user.nome : data.nome;
    const sobreNome = data.sobreNome === '<sobreNome>' || !data.sobreNome ? user.sobreNome : data.sobreNome;
    const email = data.email === '<email>' || !data.email ? user.email : data.email;
    const confirmarEmail = data.confirmarEmail === '<email>' || !data.confirmarEmail ? user.confirmarEmail : data.confirmarEmail;
    const senha = data.senha === '<senha>' || !data.senha ? user.senha : data.senha;
    const confirmarSenha = data.confirmarSenha === '<senha>' || !data.confirmarSenha ? user.confirmarSenha : data.confirmarSenha;

    cy.get('#first_name').type(nome);
    cy.get('#last_name').type(sobreNome);
    cy.get('#email').type(email);
    cy.get('#email2').type(confirmarEmail);
    cy.get('#password1').type(senha);
    cy.get('#password2').type(confirmarSenha);
}) 

And('aceito os termos e condições', () => {
    cy.get(':nth-child(1) > label > .check-container > span').click()
})
And('confirmo que tenho 18 anos ou mais', () => {
    cy.get(':nth-child(2) > label > .check-container > span').click()
})
And('clico em "Cadastrar"', () => {
    cy.contains('Cadastrar').click({ force: true })
})
Then('devo ver a mensagem "Estamos quase lá..."', () => {
    cy.get('h2').should('have.text', 'Estamos quase lá...')
})

Then('devo ver a mensagem de erro conforme informação abaixo', (dataTable) => {   
    const data = dataTable.rowsHash()
    const firstName = data.nome
    const lastName = data.sobreNome
    const email = data.email
    const confirmEmail = data.confirmarEmail
    const password = data.senha
    const confirmPass = data.confirmarSenha
    const terms = data.termos
    const age = data.idade
    
    cy.contains(firstName).should('be.visible')
    cy.contains(lastName).should('be.visible')
    cy.contains(email).should('be.visible')
    cy.contains(confirmEmail).should('be.visible')
    cy.contains(password).should('be.visible')
    cy.contains(confirmPass).should('be.visible')
    cy.contains(terms).should('be.visible')
    cy.contains(age).should('be.visible')

})

Then('devo ver aviso que já existe o cadastro de email conforme informação abaixo', (dataTable) => {
    const data = dataTable.rowsHash();
    const duplicityMail = data.msg 
    cy.get('.iWwUyo').should('have.text', duplicityMail);
})
Then('devo ver a mensagem de erro de aceite dos termos conforme informação abaixo', (dataTable) => {    
    const data = dataTable.rowsHash();
    const errorTerm = data.msg
    cy.get('.sc-8f709adc-8 > .sc-7293ddf1-0').should('have.text', errorTerm);
})
Then('devo ver a mensagem de erro de aceite da idade conforme informação abaixo', (dataTable) => {    
    const data = dataTable.rowsHash();
    const errorAge = data.msg
    cy.get('.sc-8f709adc-8 > .sc-7293ddf1-0').should('have.text', errorAge);
})


 