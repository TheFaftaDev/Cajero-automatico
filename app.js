let cuentaSeleccionada = null;

let cuentas = [
  {
    id: 1,
    nombre: "Persona 1",
    saldo: 500,
    password: 1234
  },
  {
    id: 2,
    nombre: "Persona 2",
    saldo: 800,
    password: 1512
  },
  {
    id: 3,
    nombre: "Persona 3",
    saldo: 200,
    password: 1215
  }
];

function ingresarContrasena(seleccion) {
  cuentaSeleccionada = cuentas.find(cuenta => cuenta.id === seleccion);

  let passwordIngresado = parseInt(prompt("Ingresa tu contraseña:"));

  if (cuentaSeleccionada) {
    if (passwordIngresado === cuentaSeleccionada.password) {
      mostrarOpciones();
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo");
    }
  } else {
    alert("Selecciona una cuenta válida");
  }
}

function mostrarOpciones() {
  document.getElementById('operaciones').style.display = 'block';
}

function consultarSaldo() {
  alert(`Tu saldo actual es: $${cuentaSeleccionada.saldo}`);
}

function ingresarMonto() {
  let montoIngresado = parseInt(prompt("Ingresa el monto a depositar:"));
  const saldoMinimo = 10;
  if (!isNaN(montoIngresado) && montoIngresado > 0) {
    cuentaSeleccionada.saldo += montoIngresado;
    alert(`Has depositado $${montoIngresado}. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}`);
  } else {
    alert("Monto inválido");
  }
}

function retirarMonto() {
  let montoRetirar = parseInt(prompt("Ingresa el monto a retirar:"));
  const saldoMinimo = 10;

  if (!isNaN(montoRetirar) && montoRetirar > 0) {
    if (cuentaSeleccionada.saldo - montoRetirar >= saldoMinimo) {
      cuentaSeleccionada.saldo -= montoRetirar;
      alert(`Has retirado $${montoRetirar}. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}`);
    } else {
      alert(`No puedes retirar esa cantidad. Debes dejar al menos $${saldoMinimo} en la cuenta.`);
    }
  } else {
    alert("Monto inválido");
  }
}
