const Mascot = require('../models/Mascot');
const DatabaseException = require('../exceptions/databaseException');

const saveMascotRepository = async mascot => {
    try {
        const newMascot = new Mascot(mascot);
        return await newMascot.save();
    } catch (error){
        throw new DatabaseException('Lo sentimos, ha ocurrido algun problema con la base de datos');
    }
};

const getMascotsRepository = async ()=>{
    try {
        return await Mascot.find();
    } catch (error) {
        throw new DatabaseException('Lo sentimos, ha ocurrido algun problema con la base de datos');
    }
};

const getMascotByIdRepository = async mascotId => {
    try {
        return await Mascot.findById(mascotId);
    } catch (error) {
        throw new DatabaseException('Lo sentimos, ha ocurrido algun problema con la base de datos');
    }
};

const updateMascotRepository = async (mascotId, mascot) => {
    try {
        return await Mascot.findByIdAndUpdate(mascotId, mascot, {
                new: true,
        });
        
    }catch (error) {
        console.log(error);
        throw new DatabaseException('Lo sentimos, ha ocurrido algun problema con la base de datos');
    }
};

const deleteMascotRepository = async mascotId => {
    try{
        return await Mascot.findByIdAndDelete(mascotId);
    } catch (error){ 
        throw new DatabaseException('Lo sentimos, ha ocurrido algun problema con la base de datos');
    }
};

module.exports = {saveMascotRepository, getMascotsRepository, getMascotByIdRepository, updateMascotRepository, deleteMascotRepository};