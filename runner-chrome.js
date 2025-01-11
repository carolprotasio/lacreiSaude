const cypress = require('cypress');

cypress.run({
  browser: 'chrome',
  config: {
    baseUrl: 'https://paciente-staging.lacreisaude.com.br/', // substitua pela URL do seu aplicativo, se necessário
  },
}).then((result) => {
  console.log(result);
  if (result.totalFailed > 0) {
    process.exit(1); // Se os testes falharem, a execução do CI também falha
  }
});
