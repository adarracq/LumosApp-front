import React, { useContext } from 'react';
import PageContainer from '../../../COMPONENTS/PageContainer';
import TitleMain from '../../../COMPONENTS/TitleMain';
import TextAdvice from '../../../COMPONENTS/TextAdvice';
import Button from '../../../COMPONENTS/Button';
import Colors from '../../../CONSTANTS/Colors';
import TextButton from '../../../COMPONENTS/TextButton';
import ButtonIcon from '../../../COMPONENTS/ButtonIcon';
import { Text } from 'react-native';
import { DailiesContext } from '../../../CONTEXTS/DailiesContext';

export default function StartDayScreen() {

    const [currentDaily, setCurrentDaily] = useContext(DailiesContext);

    const onPress = () => {
        if (!currentDaily) return;
        setCurrentDaily({ ...currentDaily, advancement: 1 });
    }

    return (
        <PageContainer>
            <TitleMain title="Bienvenue !" />
            <TextAdvice text="Pour commencer votre journée, appuyez sur le bouton ci-dessous." />
            <Button
                color={Colors.lightGreen}
                onPress={onPress}
                isEnabled={true}
            >
                <Text style={{ width: 40 }}></Text>
                <TextButton text="Commencer" color={Colors.white} />
                <ButtonIcon name="play" size={30} color={Colors.lightGreen} />
            </Button>
        </PageContainer>
    );
}
