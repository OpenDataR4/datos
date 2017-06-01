# Viajes al Exterior y Viáticos Senadores

Viajes al exterior y los viáticos de los senadores desde el 2012 hasta el 2017 (último viaje registrado en el 31/03). Los datos originales suministrados por el [portal del Senado Nacional](http://www.senado.gov.ar/administrativo/viajes) están en formato PDF e incompletos lo cual no permite o dificulta su análisis. Creemos que todas las instituciones públicas deben de suministrar sus datos en un formato abierto, estandarizado, completos, licenciados y con la metadata necesaria para que grupos de investigaciones, periodistas, activistas y ciudadanos de a pie puedan realizar análisis de los mismos, fomentando un Estado de transparencia.


## Datos

* **File**: viajes_2012.csv
* **md5sum**: 6f8fd55ce0a39acd8c19b0d2576255b5  viajes_2012.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />
 
* **File**: viajes_2013.csv
* **md5sum**: 53571a751859482fa088c1b74db27428  viajes_2013.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2014.csv
* **md5sum**: 35964ff0a78ceaf373a32230a46bbc75  viajes_2014.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2015.csv
* **md5sum**: 6d300cb7ed79980ff2fd1953d05213f5  viajes_2015.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2016.csv
* **md5sum**: 42c8c5ba687ac4d5f42b35c2d4160258  viajes_2016.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes_2017.csv
* **md5sum**: 1d05e78561ef0c7fa8c217d75d2ef821  viajes_2017.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]

<br />

* **File**: viajes.csv
* **md5sum**: 0fa05c74ace45c03085599126232cd6c  viajes.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]


**Columnas**:

    Autoridad             Str   - Apellido y nombre del senador
    Expediente            Str   - Nombre del expediente
    Destino               Str   - Destino del viaje
    Fecha_salida          Str   - Fecha de salida de viaje
    Fecha_llegada         Str   - Fecha de regreso del viaje
    Viaticos_pesos        Flaot - Monto del viático en pesos
    Viaticos_dolar        Float - Monto del viático en dolares
    Viaticos_euro         Float - Monto del viñatico en euro
    Motivo                Str   - Motivo del viaje
    Bloque                Str   - Bloque al que pertenece en el senador
    Viaticos_Total_Pesos  Float - Conversion del total del viatico en la
                                  diferentes monedas a pesos utilizando el
                                  precio historico de ese día
                                  provisto por el Banco Nación (1)
    Viaticos_Total_Dolar  Float - Conversion del total del viatico en la
                                  diferentes monedas a dolares utilizando el
                                  precio historico de ese día
                                  provisto por el Banco Nación (1)

(1) Los valores históricos fueron calculados a partir de los valores historicos del Banco Nación. En los Jupyter nobook se detalla el proceso.


[1]: https://twitter.com/ucaomo
[2]: https://twitter.com/fnbellomo