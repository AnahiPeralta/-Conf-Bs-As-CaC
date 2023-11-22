function calcularTotal() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;

    var precioBase = 200;
    var descuento = 0;

    switch (categoria) {
        case 'estudiante':
            descuento = 0.8;
            break;
        case 'trainee':
            descuento = 0.5;
            break;
        case 'junior':
            descuento = 0.15;
            break;
    }

    var total = cantidad * precioBase * (1 - descuento);

    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

function borrarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').value = 'estudiante'; 

    document.getElementById('total').textContent = '$ 0';
}

