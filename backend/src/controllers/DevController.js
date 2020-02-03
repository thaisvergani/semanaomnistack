const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');
// index show store update destroy
module.exports = {
    async store(request, response){
        const {github_username, techs, latitude, longitude} = request.body;
        
        let dev = await Dev.findOne({github_username});

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            let { name = login, avatar_url, bio } = apiResponse.data;
        
            const techs_array = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techs_array, 
                location
            })    
        }
     
        return response.json(dev);

    },
    async index(request, response){
        const dev = await Dev.find();
        return response.json(dev);
    }
};