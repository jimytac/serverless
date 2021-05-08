const axios = require("axios");

const mapPeople = {
    id: "id",
    name: "nombre",
    height: "alto",
    mass: "masa",
    hair_color: "colorCabello",
    skin_color: "colorPiel",
    eye_color: "colorOjo",
    birth_year: "anioCelebracion",
    gender: "genero",
    homeworld: "planetaHogar",
    films: "peliculas",
    species: "especies",
    vehicles: "vehiculos",
    starships: "navesEstelares",
    created: "fechaCreacion",
    edited: "fechaEdicion",
    url: "direccion",
};

const mapEspecie = {
    name: "nombre",
    classification: "clasificacion",
    designation: "designacion",
    average_height: "alturaPromedio",
    skin_colors: "colorPiel",
    hair_colors: "colorPelo",
    eye_colors: "colrOjo",
    average_lifespan: "average_lifespan",
    homeworld: "planetaHogar",
    language: "idioma",
    people: "personas",
    films: "peliculas",
    created: "fechaCreacion",
    edited: "fechaEdicion",
    url: "direccion",
};

const transformer = ({ map, source }) => {
    const result = {};

    Object.entries(map).forEach((entry) => {
        const [key, value] = entry;

        result[value] = source[key];
    });

    return result;
};

async function getEspecie(lst, especies = {}) {
    if (!lst.length) {
        return especies;
    }

    const [item] = lst.splice(0, 1);

    const especie = await axios({
        method: "get",
        url: item.especies[0],
    }).then((response) => response.data);

    especies[item.id] = especie;

    return getEspecie(lst, especies);
}

function getPeople(event, context, callback) {
    let coreLst = null;
    axios({
            method: "get",
            url: "https://swapi.py4e.com/api/people?format=json",
        })
        .then((response) => {
            coreLst = response.data.results.map((res, i) =>
                transformer({ map: mapPeople, source: {...res, id: i } })
            );

            return getEspecie([...coreLst]);
        })
        .then((especies) => {
            coreLst = coreLst.map((x) => {
                const especie = especies[x.id];
                delete x.id;

                return {
                    ...x,
                    especie: transformer({
                        map: mapEspecie,
                        source: especie,
                    }),
                };
            });

            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    data: coreLst,
                }),
            });
        })
        .catch((err) => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    error: err.message,
                }),
            });
        });
}

exports.people = getPeople;