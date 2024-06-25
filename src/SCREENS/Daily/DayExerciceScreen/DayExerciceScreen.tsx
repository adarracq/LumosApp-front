import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { DailiesContext } from '../../../CONTEXTS/DailiesContext';
import PageContainer from '../../../COMPONENTS/PageContainer';
import TitleMain from '../../../COMPONENTS/TitleMain';
import SubtitleLighted from '../../../COMPONENTS/SubtitleLighted';
import TextAdvice from '../../../COMPONENTS/TextAdvice';


export default function DayExerciceScreen() {

    const [currentDaily, setCurrentDaily] = useContext(DailiesContext);

    const onPress = () => {
        if (!currentDaily) return;
        setCurrentDaily({ ...currentDaily, advancement: 3 });
    }

    useEffect(() => {
        console.log(currentDaily.dayExercice);
    }, [currentDaily]);

    return currentDaily && (
        <PageContainer>
            <TitleMain title="Exercice du jour" />
            <SubtitleLighted text={currentDaily.dayExercice.title} />
            <TextAdvice text={currentDaily.dayExercice.objective} />
            {
                currentDaily.dayExercice.steps.map((step: string, index: number) => (
                    <Text key={index}>{step}</Text>
                ))
            }
        </PageContainer>
    );
}
