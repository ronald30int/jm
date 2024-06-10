document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Validar CPF e número do benefício
    const cpf = formData.get('cpf');
    const numeroBeneficio = formData.get('numeroBeneficio');

    if (!/^\d{11}$/.test(cpf)) {
        alert('CPF deve conter 11 dígitos.');
        return;
    }

    if (!/^\d{10}$/.test(numeroBeneficio)) {
        alert('Número do Benefício deve conter 10 dígitos.');
        return;
    }

    // Enviar dados para o e-mail
    fetch('https://formsubmit.co/ajax/equipe@gmail.com', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            alert('Houve um erro ao enviar o formulário. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o formulário. Tente novamente.');
    });
});
