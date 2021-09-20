const mascotService = require('../services/mascot.service');

const createMascot = async (req, res) => {
    try {
        const mascot = req.body;
        const createdMascot = await mascotService.createMascotService(mascot);
        return res.status(201).json(createdMascot);
    } catch(error){
        console.log(error);
        return res.status(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

const getMascots = async (_, res) => {
    try {
        const mascots = await mascotService.getMascotsService();
        return res.status(200).json(mascots);
    } catch(error){
        console.log(error);
        return res.status(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

const getMascotById = async (req, res) => {
    try {
        const { mascotId } = req.params;
        const mascot = await mascotService.getMascotService(mascotId);
        return res.status(200).json(mascot);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

const updateMascotById = async (req, res) => {
    try {
        const { mascotId } = req.params;
        const mascot = req.body;
        const updatedMascot = await mascotService.updateMascotService(mascotId, mascot);
        return res.status(200).json(updatedMascot);
    } catch(error){
        console.log(error);
        return res.status(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

const deleteMascotById = async (req,res) => {
    try {
        const {mascotId} = req.params;
        await mascotService.deleteMascotService(mascotId);
        return res.status(200).json({message: 'La mascota ha sido eliminada'});
    } catch(error){
        console.log(error);
        return res.statu(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

module.exports = { createMascot, getMascots, getMascotById, updateMascotById, deleteMascotById}