# Tweets 24M

![Grafo 2x1](grafo_2x1_mala_calidad.png?raw=true "Title")

## Datos Crudos

* **File**: tweets_2x1.tar.bz2  
* **md5sum**: 3d56011064c70fa5a1e47e7d3a0aecfb  tweets_2x1.tar.bz2 
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]
* **Descripción**: Csv con los tweets con los hastag **#noal2x1**, **#2x1agenocida**, **#SresJuecesNuncaMas**, **#2x1AGenocidas**, **#NuncaMas**, **#NoAl2x1ALosGenocidas**, **#10MNuncaMas** durante el día 24/4/2017.
Los datos fueron adquiridos con el script [Streaming_twitter](https://github.com/OpenDataR4/herramientas/tree/master/Streaming_twitter).


**Columnas**:


    timestamp_ms:      Int  - Fecha en seg del tweet.
    id:                Int  - Id del usuario.
    user:              Str  - Nombre del usuario (Nombre de la cuenta).
    following:         Int  - Cantidad de following de ese usuario.
    follower:          Int  - Cantidad de follower de ese usuario.
    location:          Str  - Locatidad desde donde se lo realizo. No todos los usuarios tienen esto habilidatos, por lo que hay varios nan
    time_zone:         Str  - Time zone
    tweet_id:          Int  - Id del tweet
    is_retweet:        Bool - True si es un retweet
    mentions_id:       List - Lista con todos los id de los usuarios mencionados en el tweet.
    mentions_username: List - Lista con todos los nombre de los usuarios mencionados en el tweet.
    hashtags:          List - Lista con todos los hashtags utilizados en el tweet.
    tweet:             Str  - Tweet
    tweets_count:      Int  - Cantidad de veces que fue retwetiado ese tweet dentro del csv.




## Datos Procesados (FALTA)

* **File**: 
* **md5sum**:
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]
* **Descripción**: Los nodos con algunas propiedades calculadas. Para los que tienen grado => 7 se le calculo el grado de modularidad. 

**Columnas**:

    id:                 int   - id dentro del grafo (no es el de tweeter), son los "Source" y "Target" en stream_nuncamas_Edges.csv
    label:              str   - Nombre del usuario (Nombre de la cuenta).
    indegree:           int   - Numero de coneccines entrantes que tiene el nodo. 
    outdegree:          int   - Numero de conecciones salientes que tiene el nodo.
    degree:             int   - Numero de conecciones totales que tiene el nodo.
    weighted indegree:  float - Suma de todos los pesos de los link entrantes que tiene el nodo.
    weighted outdegree: float - Suma de todos los pesos de los link salientes que tiene el nodo.
    weighted degree:    float - Suma de todos los pesos de los link que tiene el nodo.
    modularity_class:   int   -  Clase (o comunidad) a la que pertenece el nodo. Solo se calculo para los que tienen grado => 7. 

* **File**: 
* **md5sum**:  
* **Licencia**: [**CC-by SA 4.0 International**](https://creativecommons.org/licenses/by/4.0/)
* **Autores**: [Lucas Bellomo][1] - [Franco Bellomo][2]
* **Descripción**: Los link de stream_nuncamas_nodes.csv. Son links direccionales. 

**Columnas**:

    Source: int   - Nodo de origen del link. (No el id de twiter, sino el de stream_nuncamas_nodes.csv)
    Target: int   - Nodo de destino del link. (No el id de twiter, sino el de stream_nuncamas_nodes.csv)
    weight: float - Peso del nodo.



[1]: https://twitter.com/ucaomo
[2]: https://twitter.com/fnbellomo
