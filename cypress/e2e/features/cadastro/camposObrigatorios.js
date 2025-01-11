// Arquivo de utilitário para campos obrigatórios
export const camposObrigatorios = {
    nome: 'O nome é obrigatório.',
    sobreNome: 'O sobrenome é obrigatório.',
    email: 'O e-mail é obrigatório.',
    confirmarEmail: 'O e-mail é obrigatório.',
    senha: 'A senha é obrigatória.',
    confirmarSenha: 'A confirmação da senha é obrigatória.',
    termos: 'Você deve aceitar os termos.',
    idade: 'Você deve ter 18 anos ou mais.'
};

// Função para validar as mensagens de erro
export const validarMensagensDeErro = () => {
    Object.values(camposObrigatorios).forEach(mensagem => {
        cy.contains(mensagem).should('be.visible');
    });
};
