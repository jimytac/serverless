const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

function createVehiculo(event, context, callback) {
    const data = JSON.parse(event.body);
    if (!data) {
        console.error("Validación fallida");
        callback(null, {
            statusCode: 400,
            headers: { "Content-Type": "text/plain" },
            body: "No se pudo crear el vehiculo.",
        });
        return;
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            cargo_capacity: data.cargo_capacity,
            consumables: data.consumables,
            cost_in_credits: data.cost_in_credits,
            created: data.cost_in_credits,
            crew: data.crew,
            edited: data.edited,
            length: data.length,
            manufacturer: data.manufacturer,
            max_atmosphering_speed: data.max_atmosphering_speed,
            model: data.model,
            name: data.name,
            passengers: data.passengers,
            pilots: data.pilots,
            films: data.films,
            url: data.url,
            vehicle_class: data.vehicle_class,
        },
    };

    dynamoDb.put(params, (error) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { "Content-Type": "text/plain" },
                body: "No se pudo crear el vehiculo.",
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
}

exports.vehiculo = createVehiculo;