Feature: Esquecer e redifinir senha
    Como uma pessoa usuária que esqueceu sua senha
    Quero poder recuperar minha senha via e-mail
    Para poder acessar novamente minha conta.

    Scenario: CT-001 => Esquecer senha e solicitar redefinição de pessoa cadastrada
        Given que estou na tela de login
        When clico em "Esqueci minha senha"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | desafio_lacrei@uorak.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"


    Scenario: CT-002 => Esquecer senha e solicitar Reenvio do link
        Given que estou na tela de login
        When clico em "Esqueci minha senha"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | desafio_lacrei@uorak.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"
        And clico em "Reenviar"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | desafio_lacrei@uorak.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"

    Scenario: CT-003 => Esquecer senha de e-mail cadastrado
         Given que estou na tela de login
        When clico em "Esqueci minha senha"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | desafio_lacrei@uorak.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"

    Scenario: CT-004 => Esquecer senha de e-mail não cadastrado
        Given que estou na tela de login
        When clico em "Esqueci minha senha"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | naocadastrado@ops.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"


    Scenario: CT-005 => Esquecer senha e voltar a tela de login
        Given que estou na tela de login
        When clico em "Esqueci minha senha"
        And devo ser redirecionado para a tela de "Redefinir senha"
        And preencho o campo de e-mail com as informações abaixo
            | email | desafio_lacrei@uorak.com |
        And clico em "Enviar Link de Recuperação"
        And devo ser redirecionado para a tela de confirmação de envio
        Then devo ver a mensagem "Verifique seu e-mail para redefinir sua senha"
        Then clico em "Voltar para a tela inicial"


