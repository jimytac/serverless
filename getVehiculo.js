const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: process.env.DYNAMODB_TABLE,
};

function getVehiculo(event, context, callback) {
    dynamoDb.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { "Content-Type": "text/plain" },
                body: "No se pudieron recuperar los vehiculos",
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);
    });
}

exports.vehiculo = getVehiculo;