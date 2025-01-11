# Relatório de Acessibilidade

## 1. Introdução

O teste de acessibilidade foi realizado na página inicial da aplicação **Lacrei Saúde** usando o **Lighthouse**, com o objetivo de avaliar a conformidade com as diretrizes **WCAG 2.1** e identificar possíveis melhorias para garantir acessibilidade universal.

## 2. Resultados Gerais

- **Pontuação Geral de Acessibilidade**: 100 (Excelente)
- **Itens Verificados Automaticamente**: Todos os itens essenciais foram validados com sucesso.
- **Itens para Verificação Manual**: itens recomendados para análise adicional.

## 3. Análise Detalhada

### Itens Automáticos Verificados:
Todos os requisitos automáticos foram atendidos.
- Controles interativos estão focáveis pelo teclado: ✅
- Elementos interativos indicam seu propósito e estado: ✅
- A página tem uma ordem lógica de tabulação: ✅
- A ordem visual segue a ordem do DOM: ✅
- O foco do usuário não fica preso em nenhuma região: ✅

## 5. Sugestões de Melhoria:
Foi observada uma possível melhoria relacionada ao ícone da ferramenta **vLibras**. O ícone, presente em todas as páginas do site, acompanha o movimento de rolagem da tela. Embora a funcionalidade seja útil para acessibilidade, ela pode acabar sobrepondo outros elementos da interface, como textos, botões ou imagens, prejudicando a experiência do usuário.

### Recomendação:
- Considerar uma solução para que o ícone do vLibras não sobreponha elementos importantes da página. Algumas sugestões incluem:
  - Fixar o ícone em uma posição específica que não interfira em outros componentes.
  - Ajustar o comportamento do ícone para que ele se mova somente quando necessário e não cubra informações essenciais.
  - Oferecer uma opção para o usuário ocultar o ícone, caso não queira utilizar o recurso.

Essa melhoria ajudaria a otimizar a usabilidade, principalmente para usuários que não estão interagindo com o vLibras, mas que podem se deparar com o ícone bloqueando parte do conteúdo.

## 4. Captura de Tela
![]()

## 5. Conclusão
Com base no relatório do **Lighthouse**, a aplicação apresentou uma excelente pontuação de acessibilidade.




