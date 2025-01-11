Feature: Cadastro de pessoa usuária
    Como uma pessoa usuária
    Quero me registrar no sistema
    Para acessar os serviços disponíveis.

    Scenario: CT-001 => Cadastro com sucesso
        Given que estou na página de cadastro
        When preencho todos os campos obrigatórios conforme informação abaixo
            | nome           | <nome>      |
            | sobreNome      | <sobreNome> |
            | email          | <email>     |
            | confirmarEmail | <email>     |
            | senha          | <senha>     |
            | confirmarSenha | <senha>     |
        And aceito os termos e condições
        And confirmo que tenho 18 anos ou mais
        And clico em "Cadastrar"
        Then devo ver a mensagem "Estamos quase lá..."

    Scenario: CT-002 => Cadastro sem preencher nenhum campo obrigatório
        Given que estou na página de cadastro
        When clico em "Cadastrar"
        Then devo ver a mensagem de erro conforme informação abaixo
            | nome           | O nome é obrigatório.                 |
            | sobreNome      | O sobrenome é obrigatório.            |
            | email          | O e-mail é obrigatório.               |
            | confirmarEmail | O e-mail é obrigatório.               |
            | senha          | A senha é obrigatória.                |
            | confirmarSenha | A confirmação da senha é obrigatória. |
            | termos         | Você deve aceitar os termos.          |
            | idade          | Você deve ter 18 anos ou mais.        |

    Scenario: CT-003 => Cadastro com e-mail já registrado
        Given que estou na página de cadastro
        When preencho todos os campos obrigatórios conforme informação abaixo
            | nome           | Duplicado                |
            | sobreNome      | Lacrei                   |
            | email          | desafio_lacrei@uorak.com |
            | confirmarEmail | desafio_lacrei@uorak.com |
            | senha          | Duplicado@25             |
            | confirmarSenha | Duplicado@25             |
        And aceito os termos e condições
        And confirmo que tenho 18 anos ou mais
        And clico em "Cadastrar"
        Then devo ver aviso que já existe o cadastro de email conforme informação abaixo
            | msg | Já existe um usuário cadastrado com este endereço de e-mail. |

    Scenario: CT-004 => Cadastro sem aceitar os termos e condições
        Given que estou na página de cadastro
        When preencho todos os campos obrigatórios conforme informação abaixo
            | nome           | <nome>      |
            | sobreNome      | <sobreNome> |
            | email          | <email>     |
            | confirmarEmail | <email>     |
            | senha          | <senha>     |
            | confirmarSenha | <senha>     |
        And confirmo que tenho 18 anos ou mais
        And clico em "Cadastrar"
        Then devo ver a mensagem de erro de aceite dos termos conforme informação abaixo
            | msg | Você deve aceitar os termos. |
   
    Scenario: CT-005 => Cadastro sem confirmar que tem 18 anos ou mais
        Given que estou na página de cadastro
        When preencho todos os campos obrigatórios conforme informação abaixo
            | nome           | <nome>      |
            | sobreNome      | <sobreNome> |
            | email          | <email>     |
            | confirmarEmail | <email>     |
            | senha          | <senha>     |
            | confirmarSenha | <senha>     |
        And aceito os termos e condições
        And clico em "Cadastrar"
        Then devo ver a mensagem de erro de aceite da idade conforme informação abaixo
            | msg | Você deve ter 18 anos ou mais. |

   


