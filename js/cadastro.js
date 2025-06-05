document.addEventListener('DOMContentLoaded', function() {
    // Máscaras para os campos
    const telefone = document.getElementById('telefone');
    const cpf = document.getElementById('cpf');
    const cep = document.getElementById('cep');
    
    // Máscara para telefone
    if (telefone) {
        telefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 5) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    // Máscara para CPF
    if (cpf) {
        cpf.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 9) {
                value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/^(\d{3})(\d{0,3})/, '$1.$2');
            }
            
            e.target.value = value;
        });
    }
    
    // Máscara para CEP
    if (cep) {
        cep.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 8) {
                value = value.substring(0, 8);
            }
            
            if (value.length > 5) {
                value = value.replace(/^(\d{5})(\d{0,3})/, '$1-$2');
            }
            
            e.target.value = value;
            
            // Consulta CEP quando tiver 9 caracteres (incluindo o hífen)
            if (value.length === 9) {
                consultarCEP(value);
            }
        });
    }
    
    // Função para consultar CEP
    function consultarCEP(cep) {
        // Remove caracteres não numéricos
        cep = cep.replace(/\D/g, '');
        
        // Verifica se o CEP tem 8 dígitos
        if (cep.length !== 8) {
            return;
        }
        
        // Faz a requisição para a API ViaCEP
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    // Preenche os campos com os dados retornados
                    document.getElementById('endereco').value = data.logradouro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                    document.getElementById('estado').value = data.uf || '';
                }
            })
            .catch(error => {
                console.error('Erro ao consultar CEP:', error);
            });
    }
    
    // Validação do formulário
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            let isValid = true;
            const requiredFields = formCadastro.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Validação de e-mail
            const email = document.getElementById('email');
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                isValid = false;
                email.classList.add('is-invalid');
            }
            
            if (isValid) {
                // Aqui você pode adicionar o código para enviar os dados do formulário
                // Por exemplo, usando fetch para enviar para um servidor
                
                // Exemplo de envio (descomente e ajuste conforme necessário):
                /*
                const formData = new FormData(formCadastro);
                
                fetch('sua-api-de-cadastro', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    alert('Cadastro realizado com sucesso!');
                    formCadastro.reset();
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
                });
                */
                
                // Por enquanto, apenas mostra uma mensagem de sucesso
                alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
                formCadastro.reset();
                
                // Redireciona para a página inicial após 2 segundos
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }
    
    // Adiciona classe de validação ao sair do campo
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('is-invalid');
            } else if (this.type === 'email' && this.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
            }
        });
    });
});
