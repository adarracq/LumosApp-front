import React, { useEffect, useState } from 'react'
import DailyScreenNav from '../../NAVIGATION/DailyScreenNav'
import { functions } from '../../CONSTANTS/Functions'
import Program from '../../MODELS/Program';
import Daily from '../../MODELS/Daily';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DailiesContext } from '../../CONTEXTS/DailiesContext';

type RootStackNavigatorParamsList = {
    StartDay: undefined;
    Mantra: undefined;
    /*Mantra: {
        mantra: string;
    };*/
    DayExercice: undefined;
    Questions: undefined;
    Feelings: undefined;
    Diaries: undefined;
    NightExercice: undefined;
    Summary: undefined;
};

export default function DailyScreen() {
    const [program, setProgram] = useState<Program>();
    const [currentDaily, setCurrentDaily] = useState<Daily>();
    const nav = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

    const getProgram = async () => {
        let program = await functions.getProgram();
        setProgram(program);

        let _currentDaily = program.dailies[program.currentDay];
        setCurrentDaily(_currentDaily);
    }

    const goToDailyPage = () => {
        if (currentDaily!.advancement >= 0)
            nav.navigate('StartDay');
        if (currentDaily!.advancement > 0)
            nav.navigate('Mantra');
        /*if (currentDaily!.advancement > 0) {
            nav.navigate('Mantra', {
                mantra: currentDaily!.mantra,
            });
        }*/
        if (currentDaily!.advancement > 1)
            nav.navigate('DayExercice');
        if (currentDaily!.advancement > 2)
            nav.navigate('Questions');
        if (currentDaily!.advancement > 3)
            nav.navigate('Feelings');
        if (currentDaily!.advancement > 4)
            nav.navigate('Diaries');
        if (currentDaily!.advancement > 5)
            nav.navigate('NightExercice');
        if (currentDaily!.advancement > 6)
            nav.navigate('Summary');
    }

    useEffect(() => {
        if (currentDaily && program) {
            goToDailyPage();
            program.dailies[program.currentDay] = currentDaily;
            functions.updateProgram(program);
        }
    }, [currentDaily])


    useEffect(() => {
        //functions.deleteProgram();
        getProgram();
    }, [])


    return (
        <DailiesContext.Provider
            value={[currentDaily, setCurrentDaily]}>
            <DailyScreenNav />
        </DailiesContext.Provider>
    )
}