Feature: Busca e contatar um profissional da saúde
    Como uma pessoa usuária cadastrada
    Quero poder buscar um profissional de saúde
    Para acessar os serviços disponíveis.

    Scenario: CT-001 => Busca e contatar um profissional da saúde
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And preencho o campo de busca com a informação abaixo
            | nome | Maria Clara |
        And clico em "Pesquisar"
        And clico na primeira profissional que "Atende Convênio"
        And clico em "Exibir contato"
        And preencho os campos de celular com as informações abaixo
            | celular | 11961007525 |
        And clico em "Enviar código"
        Then devo ver a mensagem "Enviamos o código por SMS."

    Scenario: CT-002 => Busca de um profissional inexistente
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And preencho o campo de busca com a informação abaixo
            | nome | João inexistente |
        And clico em "Pesquisar"
        Then devo ver a mensagem "Não encontramos o que você procura."

    Scenario: CT-003 => Busca por todos os profissionais cadastrado
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And clico em "Pesquisar"
        Then devo ser redirecionado para a tela de todos os profissionais cadastrados

    Scenario: CT-004 => Tentar contatar profissional com numero de celular errado
        Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And preencho o campo de busca com a informação abaixo
            | nome | Lauro Teste |
        And clico em "Pesquisar"
        And devo ser redirecionado para a tela de resultado da pesquisa do profissional
            | nome | Lauro Teste |
        And clico no nome do profissional "Lauro Teste" para obter mais informações
        And clico em "Exibir contato" na opção de Teleconsulta
        And devo ser redirecionado para a tela de contatar profissional
        And preencho o campo de celular com numero errado conforme informação abaixo
            | celular | 111111111 |
        And clico em "Enviar código"
        Then erro visual: o campo de celular deve ter uma borda vermelha

    Scenario: CT-005 => Contatar profissional e não enviar numero de celular
          Given que estou na tela de login
        When preencho os campos de email e senha com as informações abaixo
            | email    | desafio_lacrei@uorak.com |
            | password | Voluntaria@25            |
        And clico em "Entrar"
        And devo ver a mensagem "Boas-vindas à Lacrei Saúde!"
        And preencho o campo de busca com a informação abaixo
            | nome | Maria Clara |
        And clico em "Pesquisar"
        And clico na primeira profissional que "Atende Convênio"
        And clico em "Exibir contato"       
        And clico em "Enviar código"
        Then erro visual: o campo de celular deve ter uma borda vermelha

