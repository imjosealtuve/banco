let datosJson;
        fetch('resumen.json')
        .then(response => response.json())
        .then((data) => {
            datosJson = data;
            let txtNombre = document.getElementById('nombre');
            txtNombre.textContent = datosJson.titular;
            let txtNombre2 = document.getElementById('ahorros');
            txtNombre2.textContent = datosJson.nro_cuenta;
            let txtNombre4 = document.getElementById('usd');
            txtNombre4.textContent = datosJson.saldo[0].monto;
            let txtNombre5 = document.getElementById('eur');
            txtNombre5.textContent = datosJson.saldo[1].monto;
            let txtNombre6 = document.getElementById('cbu');
            txtNombre6.textContent = datosJson.nro_banco;
            let txtNombre7 = document.getElementById('abierta');
            txtNombre7.textContent = datosJson.abierto;
        })
        .catch(
            function(){
                alert('Error');
            }
        )
