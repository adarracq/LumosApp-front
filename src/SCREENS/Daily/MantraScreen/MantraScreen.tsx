import React, { useContext } from 'react';
import PageContainer from '../../../COMPONENTS/PageContainer';
import AdviceText from '../../../COMPONENTS/TextAdvice';
import Subtitlelighted from '../../../COMPONENTS/SubtitleLighted';
import TitleMain from '../../../COMPONENTS/TitleMain';
import TimerButton from './components/TimerButton';
import { DailiesContext } from '../../../CONTEXTS/DailiesContext';


export default function MantraScreen() {
    const [currentDaily, setCurrentDaily] = useContext(DailiesContext);

    const onPress = () => {
        if (!currentDaily) return;
        setCurrentDaily({ ...currentDaily, advancement: 2 });
    }

    return (
        <PageContainer>
            <TitleMain title='Votre Mantra du jour' />
            <Subtitlelighted text={currentDaily?.mantra} />
            <AdviceText text={"Répétez vous plusieurs fois ce mantra en le ressentant profondément.\n\nVisualisez les effets positifs que le mantra aura sur votre vie.\n\nMéditez sur le mantra pour en intérioriser le message."} />
            <TimerButton
                time={5}
                onPress={onPress}
            />
        </PageContainer>
    );
}
