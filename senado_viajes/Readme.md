# Viajes al Exterior y Viáticos Senadores

Viajes al exterior y los viáticos de los senadores desde el 2012 hasta el 2017 (último viaje registrado en el 31/03).
Los datos originales (en PDF) fueron obtenidos desde el [portal de senadores](http://www.senado.gov.ar/administrativo/viajes). Nuestro trabajo fue pasarlo a csvy tratar de estandarizarlo un poco.

## Datos

* **File**: viajes_2012.csv
* **md5sum**: f191f9ce97bd6d2c6c645d9b5e290cd7  viajes_2012.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:

<br />
 
* **File**: viajes_2013.csv
* **md5sum**: 8adaaf17072be57a6050515143a6c9e7  viajes_2013.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:

<br />

* **File**: viajes_2014.csv
* **md5sum**: 2aa2c99ff4d768da416e9d78f6e6abd8  viajes_2014.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:

<br />

* **File**: viajes_2015.csv
* **md5sum**: efa3401fde4f1a84bd3eaa31e83df239  viajes_2015.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:

<br />

* **File**: viajes_2016.csv
* **md5sum**: 290276ba4ec1dc7df8dc2468ee93a0b9  viajes_2016.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:

<br />

* **File**: viajes_2017.csv
* **md5sum**: ebc1c74c59258cd0cf243f65005ce10a  viajes_2017.csv
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**:


**Columnas**:

    Autoridad        Str   - Apellido y nombre del senador
    Expediente       Str   - 
    Destino          Str   - Destino del viaje
    Fecha_salida     Str   - Fecha de salida de viaje(1)
    Fecha_llegada    Str   - Fecha de regreso del viaje(1)
    Viaticos_dolar   Float - Monto en dolares del viaje
    Viaticos_pesos   Flaot - Monto en pesos del viaje 
    Viaticos_euro    Float - Monto en euro del viaje
    Motivo           Str   - Motivo del viaje
    Bloque           Str   - Bloque al que pertenece el senador


(1) Estas columnas todavía no estan totalmente estararizadas. En algunos CSV la fehca esta como *dia_del_mes[0-31]-mes_abreviado* y en otros esta como *dia_del_mes[0-31]/numero_del_mes[1-12]*
