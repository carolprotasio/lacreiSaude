# Projeto Lacrei Saúde - Desafio de Quality Assurance

## Sobre

Este repositório documenta a execução do Desafio de Quality Assurance proposto pela Lacrei Saúde. 
O objetivo é avaliar habilidades em testes manuais e automatizados, documentação e análise crítica de sistemas, garantindo a qualidade e a confiabilidade da plataforma Lacrei Saúde.

## Ferramentas Utilizadas

- **Cucumber**: Framework para escrita de testes em linguagem Gherkin
- **Cypress**: Ferramenta de automação de testes end-to-end.
- **JMeter**: Aplicação para testes de desempenho e carga em serviços web.
- **Faker**: Biblioteca para geração de dados fictícios utilizados nos testes.
- **Notion**: Plataforma para organização e documentação do planejamento e execução dos testes.
- **GitHub Actions**: Serviço de integração contínua para automação de fluxos de trabalho, incluindo a execução de testes.
- **Node.js**: Ambiente de execução JavaScript utilizado no desenvolvimento e execução dos testes.
- **JavaScript**: Linguagem de programação utilizada na implementação dos testes automatizados.

## 🔎 Cenários e Casos de Teste
Cada cenário foi dividido em etapas específicas, abrangendo cenários funcionais e exploratórios. 
**Para cada cenário, foi desenvolvido 5 casos de teste**, executados manualmente e automatizados para maximizar a cobertura e garantir a detecção de inconsistências ou falhas.

 - Todos os casos de teste foram escritos utilizando a linguagem Gherkin, que permite a descrição clara e concisa dos comportamentos esperados, facilitando a comunicação entre as partes interessadas e a automação dos testes. A estrutura dos testes seguiu o padrão:

```gherkin
Given que [contexto inicial]
When [ação executada]
Then [resultado esperado]
```

### 🧪**Cenário: Cadastro da pessoa usuária:**

* CT-001 => Cadastro com sucesso
* CT-002 => Cadastro sem preencher nenhum campo obrigatório
* CT-003 => Cadastro com e-mail já registrado
* CT-004 => Cadastro sem aceitar os termos e condições
* CT-005 => Cadastro sem confirmar que tem 18 anos ou mais
  
- Documentação Notion: [**🔍 Casos de testes: Cadastro da pessoa usuária**](https://www.notion.so/Casos-de-testes-Cadastro-da-pessoa-usu-ria-177b6a6099cc805ebfe4c2d3939952f7?pvs=21)
* Resultado cypress
 <img src="https://github.com/carolprotasio/lacreiSaude/blob/main/cypress/fixtures/assets/cy_cadastro_feature.png" alt="Teste Cypress" width="700"/>  


### 🧪**Cenário: Buscar por uma pessoa profissional**:

   * CT-001 => Busca e contatar um profissional da saúde
   * CT-002 => Busca de um profissional inexistente
   * CT-003 => Busca por todos os profissionais cadastrado
   * CT-004 => Tentar contatar profissional com numero de celular errado
   * CT-005 => Contatar profissional e não enviar numero de celular

   - Documentação Notion: [**🔍 Casos de testes:** Busca e contatar um profissional da saúde](https://www.notion.so/Casos-de-testes-Busca-e-contatar-um-profissional-da-sa-de-177b6a6099cc807c832ef7f1188d802e?pvs=21)
     
   * Resultado cypress
 <img src="https://github.com/carolprotasio/lacreiSaude/blob/main/cypress/fixtures/assets/cy_buscar_feature.png" alt="Teste Cypress" width="700"/>  

### 🧪**Cenário: Edição de perfil da pessoa usuária:**

  * CT-001 => Editar Nome e Sobrenome da pessoa usuária
  * CT-002 => Editar perfil com nome de pessoa usuária no campo vazio
  * CT-003 => Editar sobrenome contendo apenas números
  * CT-004 => Editar nome com caracteres especiais
  * CT-005 => Editar foto do perfil

  - [**🔍 Casos de testes: Edição de perfil da pessoa usuária**](https://www.notion.so/Casos-de-testes-Edi-o-de-perfil-da-pessoa-usu-ria-177b6a6099cc8049ad63eafeba020696?pvs=21)

  * Resultado cypress
 <img src="https://github.com/carolprotasio/lacreiSaude/blob/main/cypress/fixtures/assets/cy_edicao_feature.png" alt="Teste Cypress" width="700"/>  

### 🧪**Cenário: Esquecer senha e resetar:**

[**🔍** Casos de testes: **Esquecer senha e resetar**](https://www.notion.so/Casos-de-testes-Esquecer-senha-e-resetar-177b6a6099cc8096b9fce478aab37a2b?pvs=21)
* Resultado cypress
 <img src="https://github.com/carolprotasio/lacreiSaude/blob/main/cypress/fixtures/assets/cy_esquecer_feature.png" alt="Teste Cypress" width="700"/>  


## GitHub Actions

O projeto utiliza o GitHub Actions para automação dos testes. A cada commit, os testes automatizados são executados, garantindo que novas alterações não quebrem funcionalidades existentes. O fluxo de trabalho está definido no arquivo `.github/workflows/test.yml`.

## Relatórios

Os relatórios detalhados de cada tipo de teste estão disponíveis nos respectivos diretórios dentro do repositório:

- **Testes Não Funcionais**:
  - [Relatório de Desempenho](testsnon-functional/performance/README.md)
  - [Relatório de Acessibilidade](testsnon-functional/accessibility/README.md)
  - [Relatório de Responsividade](testsnon-functional/responsiveness/README.md)

## Instalação e Execução dos Testes

1. **Pré-requisitos**:
   - Node.js instalado.
   - Cypress instalado globalmente ou via npm.

2. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/carolprotasio/lacreiSaude.git
   ```
3. **Instalar Dependências**:
    ```bash
   npm install
   ```
4. **Execução dos testes**:
   * modo headless:
   ```bash
   npm run test
   ```
  * modo interativo:
   ```bash
    npx cypress open
   ```
## Relatórios

[💡Sugestões de Melhorias ](https://www.notion.so/Sugest-es-de-Melhorias-175b6a6099cc807285ddd9b7e4a5d16e?pvs=21) 

[🐞 Relatório de Bugs](https://www.notion.so/Relat-rio-de-Bugs-175b6a6099cc80699c4ccb61f087dfe3?pvs=21) 

[📱Relatório de Responsividade](https://github.com/carolprotasio/lacreiSaude/tree/main/tests-non-functional/responsividade) 

[📈 Teste de Desempenho](https://github.com/carolprotasio/lacreiSaude/tree/main/tests-non-functional/desempenho)



## Conclusão
Através deste projeto, foram aplicadas práticas de Quality Assurance para assegurar a qualidade das principais funcionalidades da plataforma Lacrei Saúde. 
Os testes manuais e automatizados, juntamente com a documentação detalhada nesse repositório e na ferramenta Notion - [Desafio Lacrei](https://carol-protasio.notion.site/Desafio-T-cnico-Lacrei-Sa-de-174b6a6099cc803db274ef32ca7d3691)





    
