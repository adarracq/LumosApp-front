import AsyncStorage from "@react-native-async-storage/async-storage";
import Program from "../MODELS/Program";
import Daily from "../MODELS/Daily";
import Thematics from "./Thematics";
import Theme from "../MODELS/Theme";

export const functions = {
    getIconSource,
    getProgram,
    createProgram,
    updateProgram,
    deleteProgram
}

function getIconSource(name: string) {
    switch (name) {
        case 'exercices':
            return require('../ASSETS/icons/exercices.png');
        case 'diaries':
            return require('../ASSETS/icons/diaries.png');
        case 'daily':
            return require('../ASSETS/icons/daily.png');
        case 'bilan':
            return require('../ASSETS/icons/bilan.png');
        case 'profile':
            return require('../ASSETS/icons/profile.png');
    }
}

async function getProgram() {
    try {
        const jsonValue = await AsyncStorage.getItem('program');
        if (jsonValue !== null) {
            let program = JSON.parse(jsonValue);
            // si le programme n'est pas terminé
            if (program.currentDay < program.dailies.length) {
                return program;
            }
            // si le programme est terminé
            else {
                return createProgram(program.currentProgramIndice);
            }
        }
        // si le programme n'existe pas encore
        else {
            return createProgram();
        }
    }
    catch (error) {
        console.error(error);
    }
}

async function createProgram(currentProgramIndice: number = 0) {
    let dailies: Daily[] = [];
    Thematics.thematics.forEach((thematic, i) => {
        dailies.push(
            new Daily(
                i,
                new Theme(
                    thematic.title,
                    thematic.description,
                    thematic.idea
                ),
                thematic.mantras[currentProgramIndice],
                (thematic.questions || []).map((question) => {
                    return {
                        question: question,
                        answer: ''
                    }
                }),
                thematic.dayExercices[currentProgramIndice],
                thematic.nightExercices[currentProgramIndice]
            ));
    });

    const program = new Program(
        0,
        currentProgramIndice++,
        dailies
    );

    try {
        await AsyncStorage.setItem('program', JSON.stringify(program));
        return program;
    }
    catch (error) {
        console.error(error);
    }
}

function updateProgram(program: Program) {
    try {
        AsyncStorage.setItem('program', JSON.stringify(program));
    }
    catch (error) {
        console.error(error);
    }
}

function deleteProgram() {
    try {
        AsyncStorage.removeItem('program');
    }
    catch (error) {
        console.error(error);
    }
}
