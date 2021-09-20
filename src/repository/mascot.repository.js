import Mascot from '../models/Mascot';

const Employee = require('../models/Mascot')

export const saveMascotRepository = async mascot => {
    try {
        const newMascot = new Mascot(mascot);
        return await newMascot.save();
    } catch (error){
        console.log(error);
    }
};

export const getMascotsRepository = async ()=>{
    try {
        return await Mascot.find();
    } catch (error) {
        console.log(error);
    }
};

export const getMascotByIdRepository = async mascotId => {
    try {
        return await Mascot.findById(mascotId);
    } catch (error) {
        console.log(error);
    }
};

export const updateMascotRepository = async (mascotId, mascot) => {
    try {
        return await Mascot.findByIdAndUpdate(mascotId, mascto, {
            new: true,
        });
    }catch (error) {
        console.log(error)
    }
};

export const deleteMascotRepository = async mascotId => {
    try{
        return await Mascot.findByIdAndDelete(mascotId);
    } catch (error){ 
        console.log(error);
    }
};