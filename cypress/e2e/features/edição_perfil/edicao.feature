Feature: Edição de perfil da pessoa usuária
    Como uma pessoa usuária cadastrada
    Quero poder editar meu perfil
    Para poder alterar os meu dados cadastrados.

    Scenario: CT-001 => Editar Nome e Sobrenome da pessoa usuária
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And clico no ícone de perfil no canto superior direito
        And clico na opção "Editar Perfil"
        And devo ser redirecionado para a tela de edição de perfil
        And clico em "Editar dados"
        And posso editar os campos de dados com as informações abaixo
            | nome      | Test     |
            | sobrenome | in orbit |
        And clico em "Salvar"
        Then devo ver os campos alterados com as informações abaixo
            | nome      | Test     |
            | sobrenome | in orbit |


    Scenario: CT-002 => Editar perfil com nome de pessoa usuária no campo vazio
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And clico no ícone de perfil no canto superior direito
        And clico na opção "Editar Perfil"
        And clico em "Editar dados"
        And apago o conteúdo do campo "nome"
        And clico em "Salvar"
        Then devo ver um erro visual: o campo de Nome deve ter uma borda vermelha

    Scenario: CT-003 => Editar sobrenome contendo apenas números
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And clico no ícone de perfil no canto superior direito
        And clico na opção "Editar Perfil"
        And clico em "Editar dados"
        And preencho o campo "sobrenome" com a informação abaixo
            | sobrenome | 123456 |
        And clico em "Salvar"
        Then devo ver uma mensagem de erro com as informações abaixo
            | msg | Nome e sobrenome devem conter apenas letras e espaços. |
    
    Scenario: CT-004 => Editar nome com caracteres especiais
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And clico no ícone de perfil no canto superior direito
        And clico na opção "Editar Perfil"
        And clico em "Editar dados"
        And preencho o campo "nome" com a informação abaixo
            | nome | João@123! |
        And clico em "Salvar"
        Then devo ver uma mensagem de erro com as informações abaixo
            | msg | Nome e sobrenome devem conter apenas letras e espaços. |


    Scenario: CT-005 => Editar foto do perfil
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And clico no ícone de perfil no canto superior direito
        And clico na opção "Editar Perfil"
        And clico na opção "Editar foto"
        And escolho a opção "Enviar foto"
        And faço o upload da foto de perfil
        And escrevo a descrição da foto conforme informação abaixo
            | msg | Foto nova de perfil |
        And clico em "Salvar" nova foto de perfil
        Then devo ver nova foto e descrição na tela conforme informação abaixo
            | msg | Foto nova de perfil |







