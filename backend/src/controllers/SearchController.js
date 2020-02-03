const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(request, response){
        // buscar todos devs dentro de 10 km e filtrar por tecnologias
        const devs = await Dev.find();
        return response.json(devs);
    },

}