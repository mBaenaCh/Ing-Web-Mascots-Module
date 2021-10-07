const mascotRepository = require('../repository/mascot.repository');
const EmptyFieldsException = require('../exceptions/emptyFieldsException');
const config = require('../../config');
const axios = require('axios');

const createMascotService = async mascot =>{

    const { name, breed, size, age, vaccinePlan, attendance, owners } = mascot
    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === '' || owners.length === 0)
        throw new EmptyFieldsException('La información de la mascota debe estar completa, no deje campos vacios')
    
    const createdMascot = await mascotRepository.saveMascotRepository(mascot);
    
    owners.forEach(async owner_id => {
        const res = await axios.put(config.OWNERS_MODULE, {
                owner_id: owner_id,
                pet_id: createdMascot._id
        });
    });

    return createdMascot;
};

const getMascotsService = async () => {
    return await mascotRepository.getMascotsRepository();
};

const getMascotService = async mascotId => {
    return await mascotRepository.getMascotByIdRepository(mascotId);
};

const updateMascotService = async (mascotId, mascot) => {

    const { name, breed, size, age, vaccinePlan, attendance } = mascot;
    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === '')
        throw new EmptyFieldsException('La información de la mascota debe estar completa, no deje campos vacios');

    return mascotRepository.updateMascotRepository(mascotId, mascot);
};

const deleteMascotService = async mascotId => {
    return await mascotRepository.deleteMascotRepository(mascotId);
};

module.exports = {createMascotService, getMascotsService, getMascotService, updateMascotService, deleteMascotService};