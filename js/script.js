/*
Se reutilizo código escrito por Jorge Rubiano para la materia EP03
*/
window.onload = function()
{
    //Para los rangos...
    datos = {
        galones  : 0,
        litros : 3.7854,
        grados : 0,
        fracion1 : 9/5,
        fracion2 : 5/9,
        kelvinVal : 273.15,
        peso : 72,
        numerador1 : 0,
        denominador1 :0,
        numerador2 : 0,
        denominador2 :0
    };
    /*
    ------------------------------------------------------------------------
    Parte 01: Conversión de galones a litros...
    ------------------------------------------------------------------------
    */
    //Para el slider de entero...
    nom_div("entero").addEventListener('change', function(event)
    {
        datos.galones = nom_div("valEntero").innerHTML = Number(this.value);
        galonesLitros();
    });

    //Función que realizará la conversión...
    var galonesLitros = function()
    {
        var galones = String(datos.galones);
        var lts    = String(datos.litros);
        var resultado = galones*lts;
        resultado = resultado.toFixed(4);
        var resul = galones + " * " + lts;
        console.log(resul + " = " + resultado);
        var resultadofinal = resultado;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resLitros").innerHTML = resultadofinal + " Litros";
    };
    /*
    ------------------------------------------------------------------------
    Parte 02: Conversión de grados centígrados a fahrenheit...
    ------------------------------------------------------------------------
    */
    //Para el slider de grados...
    nom_div("grados").addEventListener('change', function(event)
    {
        datos.grados = nom_div("valGrados").innerHTML = Number(this.value);
        centigradosFahrenheit();
    });

    //Función que realizará la conversión...
    var centigradosFahrenheit = function()
    {
        var grados = String(datos.grados);
        var fracion1    = String(datos.fracion1);
        var resultadoFahrenheit = grados*fracion1+32;
        resultadoFahrenheit = resultadoFahrenheit.toFixed(2);
        var resulF = grados + " * 9/5 " + " + " + 32;
        console.log(resulF + " = " + resultadoFahrenheit);
        var resultadofinalF = resultadoFahrenheit;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resF").innerHTML = resultadofinalF + " &deg;F";
    };
     /*
    ------------------------------------------------------------------------
    Parte 02: Conversión de grados fahrenheit a centígrados...
    ------------------------------------------------------------------------
    */
    //Para el slider de grados...
    nom_div("fahr").addEventListener('change', function(event)
    {
        datos.grados = nom_div("valF").innerHTML = Number(this.value);
        fahrenheitCentigrados();
    });

    //Función que realizará la conversión...
    var fahrenheitCentigrados = function()
    {
        var grados = String(datos.grados);
        var fracion2    = String(datos.fracion2);
        var resultadoCentigrados = (grados-32)*fracion2;
        resultadoCentigrados = resultadoCentigrados.toFixed(2);
        var resulF = "("+grados + " - 32) " + " * 5/9";
        console.log(resulF + " = " + resultadoCentigrados);
        var resultadofinalC = resultadoCentigrados;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resGrados").innerHTML = resultadofinalC + " &deg;C";
    };
    /*
    ------------------------------------------------------------------------
    Parte 02: Conversión de grados centigrados a kelvin...
    ------------------------------------------------------------------------
    */
    //Para el slider de grados...
    nom_div("Gr").addEventListener('change', function(event)
    {
        datos.grados = nom_div("valG").innerHTML = Number(this.value);
        centigradosKelvin();
    });

    //Función que realizará la conversión...
    var centigradosKelvin = function()
    {
        var k = datos.grados;
        var kv = datos.kelvinVal;
        var resultadosKelvin = k + kv;
        console.log(k+ " + " + kv + " = " +resultadosKelvin);
        var resultadofinalK = resultadosKelvin;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resKelvin").innerHTML = resultadofinalK + " &deg;K";
    };
    /*
    ------------------------------------------------------------------------
    Parte 02: Conversión de grados kelvin a centigrados...
    ------------------------------------------------------------------------
    */
    //Para el slider de grados...
    nom_div("kel").addEventListener('change', function(event)
    {
        datos.grados = nom_div("valK").innerHTML = Number(this.value);
        kelvinCentigrados();
    });

    //Función que realizará la conversión...
    var kelvinCentigrados = function()
    {
        var k = datos.grados;
        var kv = datos.kelvinVal;
        var resultadosCenti = k - kv;
        resultadosCenti = resultadosCenti.toFixed(2);
        console.log(k+ " - " + kv + " = " +resultadosCenti);
        var resultadofinalK = resultadosCenti;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resCelsius").innerHTML = resultadofinalK + " &deg;C";
    };
    /*
    ------------------------------------------------------------------------
    Parte 03: Mi peso en la luna...
    ------------------------------------------------------------------------
    */
    //Para el slider de grados...
    if(nom_div("miPeso").value){
        nom_div("resPeso").innerHTML = datos.peso*0.17 + " Kg";
        nom_div("miPeso").addEventListener('change', function(event)
        {
            datos.peso = nom_div("valPeso").innerHTML = Number(this.value);
            miPesoLunar();
        });
    }

    //Función que realizará la conversión...
    var miPesoLunar = function()
    {
        var peso = datos.peso;
        var resultadoPeso = peso*0.17;
        resultadoPeso = resultadoPeso.toFixed(2);
        console.log(peso + " * 0.17 " + " = " +resultadoPeso);
        var resultadofinalPeso = resultadoPeso;
        //Imprime la respuesta en la vista (HTML)...
        nom_div("resPeso").innerHTML = resultadofinalPeso + " Kg";
    };
    /*
    ------------------------------------------------------------------------
    Parte 03: Calculadora de fracionarios
    ------------------------------------------------------------------------
    */
    //Para el slider de los fraccionarios...
    nom_div("numerador1").addEventListener('change', function(event)
    {
        datos.numerador1 = nom_div("valNumerador1").innerHTML = Number(this.value);
    });
    nom_div("denominador1").addEventListener('change', function(event)
    {
        datos.denominador1 = nom_div("valDenominador1").innerHTML = Number(this.value);
    });
    nom_div("numerador2").addEventListener('change', function(event)
    {
        datos.numerador2 = nom_div("valNumerador2").innerHTML = Number(this.value);
    });
    nom_div("denominador2").addEventListener('change', function(event)
    {
        datos.denominador2 = nom_div("valDenominador2").innerHTML = Number(this.value);
    });         
    //Suma
    nom_input("suma").addEventListener('mouseover', function(event)
    {
        nom_input("signo").innerHTML = "+";
        sumaFraccionarios();
    }); 

    //Función que realizará la Suma...
    var sumaFraccionarios = function()
    {
        if(datos.numerador1 && datos.numerador2 && datos.denominador1 && datos.denominador2){
            var numerador1 = datos.numerador1;
            var denominador1 = datos.denominador1;
            var numerador2 = datos.numerador2;
            var denominador2 = datos.denominador2;
            var resultadoSuma = (numerador1*denominador2 + numerador2*denominador1) + " / " + denominador1*denominador2;
            var resltConsole = "(("+numerador1 + "*" +denominador2 + ")+(" + numerador2 + "*" +denominador1+"))" + " / " + denominador1 + "*" +denominador2;
            console.log(resltConsole + " = " + resultadoSuma);
            var resultadofinalSuma = resultadoSuma;
            nom_div("resFraccionario").innerHTML = simplificaFraccionario(resultadofinalSuma);
        }else{
            nom_div("resFraccionario").innerHTML = "No deben haber valores en cero.";
        }
    };

    //Resta
    nom_input("resta").addEventListener('mouseover', function(event)
    {
        nom_input("signo").innerHTML = "-";
        restaFraccionarios();
    }); 

    //Función que realizará la Resta...
    var restaFraccionarios = function()
    {
        if(datos.numerador1 && datos.numerador2 && datos.denominador1 && datos.denominador2){
            var numerador1 = datos.numerador1;
            var denominador1 = datos.denominador1;
            var numerador2 = datos.numerador2;
            var denominador2 = datos.denominador2;
            var resultadoResta = (numerador1*denominador2 - numerador2*denominador1) + " / " + denominador1*denominador2;
            var resltConsole = "(("+numerador1 + "*" +denominador2 + ")-(" + numerador2 + "*" +denominador1+"))" + " / " + denominador1 + "*" +denominador2;
            console.log(resltConsole + " = " + resultadoResta);
            var resultadofinalResta = resultadoResta;
            nom_div("resFraccionario").innerHTML = simplificaFraccionario(resultadofinalResta);
        }else{
            nom_div("resFraccionario").innerHTML = "No deben haber valores en cero.";
        }
    };
    //Multiplicación
    nom_input("multiplicacion").addEventListener('mouseover', function(event)
    {
        nom_input("signo").innerHTML = "*";
        multiplicacionFraccionarios();
    }); 

    //Función que realizará la Multiplicación...
    var multiplicacionFraccionarios = function()
    {
        if(datos.numerador1 && datos.numerador2 && datos.denominador1 && datos.denominador2){
            var numerador1 = datos.numerador1;
            var denominador1 = datos.denominador1;
            var numerador2 = datos.numerador2;
            var denominador2 = datos.denominador2;
            var resultadoMultiplicacion = (numerador1*numerador2) + " / " + denominador1*denominador2;
            var resltConsole = "("+numerador1 + "*" + numerador2 + ") / (" +denominador1 + "*" +denominador2 + ")";
            console.log(resltConsole + " = " + resultadoMultiplicacion);
            var resultadofinalMultiplicacion = resultadoMultiplicacion;
            nom_div("resFraccionario").innerHTML = simplificaFraccionario(resultadofinalMultiplicacion);
        }else{
            nom_div("resFraccionario").innerHTML = "No deben haber valores en cero.";
        }
    };
    //División
    nom_input("division").addEventListener('mouseover', function(event)
    {
        nom_input("signo").innerHTML = "/";
        divisionFraccionarios();
    }); 

    //Función que realizará la División...
    var divisionFraccionarios = function()
    {
        if(datos.numerador1 && datos.numerador2 && datos.denominador1 && datos.denominador2){
            var numerador1 = datos.numerador1;
            var denominador1 = datos.denominador1;
            var numerador2 = datos.numerador2;
            var denominador2 = datos.denominador2;
            var resultadoDivision = (numerador1*denominador2) + " / " + numerador2*denominador1;
            var resltConsole = "("+numerador1 + "*" +denominador2 + ") / (" + numerador2 + "*" +denominador1+")";
            console.log(resltConsole + " = " + resultadoDivision);
            var resultadofinalDivision = resultadoDivision;
            nom_div("resFraccionario").innerHTML = simplificaFraccionario(resultadofinalDivision);
        }else{
            nom_div("resFraccionario").innerHTML = "Ningun valor en cero.";
        }
    };

    //Simplicar fraccionarios, utilizando el máximo común divisor...
    var simplificaFraccionario = function(val)
    {
        var parteVal = val.split("/");
        var numerador = Number(parteVal[0]);
        var denominador = Number(parteVal[1]);
        var maximoComunDivisor = function(a, b)
        {
            return b ? maximoComunDivisor(b, a%b) : a;
        };
        maximoComunDivisor = maximoComunDivisor(numerador,denominador);
        numerador /= maximoComunDivisor;
        denominador /= maximoComunDivisor;
        var respuesta = numerador + "/" + denominador;
        if(denominador === 1)
        {
            respuesta = numerador;
        }
        return respuesta;
    };

    //Accederá los elementos de HTML...
    function nom_div(div)
    {
        return document.getElementById(div);
    }
    function nom_input(inp)
    {
        return document.getElementById(inp);
    }
};
