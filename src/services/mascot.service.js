const mascotRepository = require('../repository/mascot.repository');

const createMascotService = async mascot =>{

    const { name, breed, size, age, vaccinePlan, attendance } = mascot

    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === ''){
        console.log("La informacion de la mascota debe estar completa, no deje campos vacios");
    }

    const createdMascot = await mascotRepository.saveMascotRepository(mascot);
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
    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === ''){
        console.log("La informacion de la mascota debe estar completa, no deje campos vacios");
    }

    return mascotRepository.updateMascotRepository(mascotId, mascot);
};

const deleteMascotService = async mascotId => {
    return await mascotRepository.deleteMascotRepository(mascotId);
};

module.exports = {createMascotService, getMascotsService, getMascotService, updateMascotService, deleteMascotService};