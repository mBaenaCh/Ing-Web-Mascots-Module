const mascotRepository = require('../repository/mascot.repository');
const EmptyFieldsException = require('../exceptions/emptyFieldsException');

const createMascotService = async mascot =>{

    const { name, breed, size, age, vaccinePlan, attendance, owner_id } = mascot
    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === '' || owner_id === '')
        throw new EmptyFieldsException('La información de la mascota debe estar completa, no deje campos vacios')
    
    const createdMascot = await mascotRepository.saveMascotRepository(mascot);
    console.log(createdMascot)
    return createdMascot;
};

const getMascotsService = async () => {
    return await mascotRepository.getMascotsRepository();
};

const getMascotService = async mascotId => {
    return await mascotRepository.getMascotByIdRepository(mascotId);
};

const updateMascotService = async (mascotId, mascot) => {

    const { name, breed, size, age, vaccinePlan, attendance, owner_id } = mascot;
    if (name === '' || breed === '' || size === '' || age === '' || vaccinePlan === '' || attendance === '' || owner_id === '')
        throw new EmptyFieldsException('La información de la mascota debe estar completa, no deje campos vacios');

    return mascotRepository.updateMascotRepository(mascotId, mascot);
};

const deleteMascotService = async mascotId => {
    return await mascotRepository.deleteMascotRepository(mascotId);
};

module.exports = {createMascotService, getMascotsService, getMascotService, updateMascotService, deleteMascotService};