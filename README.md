# SERVERLESS

## ENDPOINT QUE CONSUME LOS PERSONAJES DEL API STARWARS Y LO TRADUCE AL ESPAÑOL, AL MISMO TIEMPO IMPORTA LOS TIPOS DE ESPECIES Y MUESTRA LA DATA

### LINK DEL ENDPOINT (GET)

`https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/people`

### CONSUMIR EL ENDPOINT DIRECTAMENTE

`curl -X GET https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/people`

## ENDPOINT QUE CREAR UN VEHICULO EN DYNAMODB

### LINK DEL ENDPOINT (POST)

`https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo`

### JSON QUE SE PASA PARA CREAR EL VEHICULO

```
{
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "url": "https://swapi.py4e.com/api/vehicles/4/",
    "vehicle_class": "wheeled"
}
```

### CONSUMIR EL ENDPOINT DIRECTAMENTE

`curl -H "Content-Type: application/json" -X POST -d '{ "cargo_capacity": "50000", "consumables": "2 months", "cost_in_credits": "150000", "created": "2014-12-10T15:36:25.724000Z", "crew": "46", "edited": "2014-12-10T15:36:25.724000Z", "length": "36.8", "manufacturer": "Corellia Mining Corporation", "max_atmosphering_speed": "30", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30", "pilots": [], "films": [ "https://swapi.py4e.com/api/films/1/" ], "url": "https://swapi.py4e.com/api/vehicles/4/", "vehicle_class": "wheeled" }' https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo`

## ENDPOINT QUE LISTA LOS VEHICULOS EN DYNAMODB

### LINK DEL ENDPOINT (GET)

`https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo`

### CONSUMIR EL ENDPOINT DIRECTAMENTE

`curl -X GET https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo`

## ENDPOINT QUE ELIMNA UN VEHICULO EN DYNAMODB SEGUN EL ID

### LINK DEL ENDPOINT (DELETE)

`https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo/{id}`

### CONSUMIR EL ENDPOINT DIRECTAMENTE

`curl -X DELETE https://sg4ltqsr1i.execute-api.us-east-1.amazonaws.com/reto/vehiculo/19d5b770-afb5-11eb-ba1b-91b3c54829ac`
