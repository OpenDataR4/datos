# Viajes al Exterior y Viáticos Senadores

Viajes al exterior y los viáticos de los senadores desde el 2012 hasta el 2017 (último viaje registrado en el 31/03).
Los datos originales (en PDF) fueron obtenidos desde el [portal de senadores](http://www.senado.gov.ar/administrativo/viajes). Nuestro trabajo fue pasarlo a csvy tratar de estandarizarlo un poco.

## Datos

* **File**: viajes_2012.csv
* **md5sum**: 12d320322f8a95daaafc51a1db2ae696  viajes_2012.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />
 
* **File**: viajes_2013.csv
* **md5sum**: d630ceac1cd31fb2ceed68899e9e2a50  viajes_2013.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2014.csv
* **md5sum**: 920ed92096fb7861a1987fbf21240827  viajes_2014.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2015.csv
* **md5sum**: 565c411e0dbdff43eb1f7913549ad487  viajes_2015.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2016.csv
* **md5sum**: e20ea58c65bc5d0fc487a558bbcd9d4f  viajes_2016.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2017.csv
* **md5sum**: 135a32839da23555a95c729fa80424a2  viajes_2017.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]


**Columnas**:

    Autoridad        Str   - Apellido y nombre del senador
    Expediente       Str   - Nombre del expediente
    Destino          Str   - Destino del viaje
    Fecha_salida     Str   - Fecha de salida de viaje
    Fecha_llegada    Str   - Fecha de regreso del viaje
    Viaticos_pesos   Flaot - Monto en pesos del viaje
    Viaticos_dolar   Float - Monto en dolares del viaje
    Viaticos_euro    Float - Monto en euro del viaje
    Motivo           Str   - Motivo del viaje
    Bloque           Str   - Bloque al que pertenece el senador (1)
    dolar_a_pesos    Float - Conversion del Viatico_dolar a pesos
                             utilizando el precio historico de ese día
			     provisto por el Banco Nación (2)
    euro_a_pesos     Float - Conversion del Viatico_euro a pesos
                             utilizando el precio historico de ese día
			     provisto por el Banco Nación (2)
    pesos_total      Float - Suma de los viaticos en pesos


(1) Los csv de los años 2013 y 2014 no poseen esta columna. Son bienvenidas las colaboraciones para completarlos!
(2) Los valores históricos fueron calculados a partir de los valores historicos del Banco Nación. Para esto se utilizó esta herramienta.


[1]: https://twitter.com/ucaomo
[2]: https://twitter.com/fnbellomo