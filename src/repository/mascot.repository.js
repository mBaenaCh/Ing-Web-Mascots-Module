const Mascot = require('../models/Mascot')

const saveMascotRepository = async mascot => {
    try {
        const newMascot = new Mascot(mascot);
        return await newMascot.save();
    } catch (error){
        console.log(error);
    }
};

const getMascotsRepository = async ()=>{
    try {
        return await Mascot.find();
    } catch (error) {
        console.log(error);
    }
};

const getMascotByIdRepository = async mascotId => {
    try {
        return await Mascot.findById(mascotId);
    } catch (error) {
        console.log(error);
    }
};

const updateMascotRepository = async (mascotId, mascot) => {
    try {
        return await Mascot.findByIdAndUpdate(mascotId, mascot, {
            new: true,
        });
    }catch (error) {
        console.log(error)
    }
};

const deleteMascotRepository = async mascotId => {
    try{
        return await Mascot.findByIdAndDelete(mascotId);
    } catch (error){ 
        console.log(error);
    }
};

module.exports = {saveMascotRepository, getMascotsRepository, getMascotByIdRepository, updateMascotRepository, deleteMascotRepository};