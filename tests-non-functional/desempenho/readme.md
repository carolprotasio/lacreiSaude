# Teste de Desempenho

### Configuração do Cenário

- **Endpoint testado**: `https://lacrei-api-staging.lacreisaude.com.br/v1/lacreiid/auth/login/`
- **Método HTTP**: POST
- **Body**:

    ```json
    {
      "email": "desafio_lacrei@uorak.com",
      "password": "Voluntaria@25"
    }
    ```

- **Configuração do Teste**:
    - Usuários simultâneos: **25**
    - Ramp-up: **2 segundos**
    - Duração do teste: **18 segundos**

### Métricas Coletadas

- **Tempo médio de resposta**: 3920 ms
- **Tempo de conexão**: 61 ms
- **Tamanho médio da resposta**: 899 bytes
- **Código de resposta**: `200 OK` (todas as requisições bem-sucedidas)
- **Taxa de transações por segundo**:
    - Pico de aproximadamente **10 transações por segundo**.

### Conclusões

- **Estabilidade**: O sistema manteve estabilidade durante o teste, sem falhas ou erros em nenhuma das 25 requisições simultâneas.
- **Tempo de Resposta**: O tempo médio de resposta de **3920 ms** para a operação de login está dentro de um intervalo aceitável, mas pode ser melhorado para oferecer uma experiência mais fluida para os usuários.
- **Gargalos**: Não foram identificados gargalos evidentes com o volume de 25 usuários simultâneos no endpoint testado. Contudo, testes com uma carga maior podem revelar limitações.

### **Captura de Tela**
![Imagem de captura](#)
