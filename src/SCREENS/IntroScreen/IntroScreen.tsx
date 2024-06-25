import React, { useState } from 'react'
import Colors from '../../CONSTANTS/Colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import RenderItem from './components/RenderItem';
import LoginScreen from '../LoginScreen/LoginScreen';
import ButtonIcon from '../../COMPONENTS/ButtonIcon';

export default function IntroScreen() {

    const [isFinished, setIsFinished] = useState<boolean>(false);

    const onDone = () => {
        setIsFinished(true);
    };

    const renderItem = ({ item }: { item: typeof slides[number] }) => {
        return <RenderItem {...item} />;
    };

    const renderDoneButton = () => {
        return <ButtonIcon name="check" size={30} color={Colors.primary} />;
    };

    const RenderNextButton = () => {
        return <ButtonIcon name="arrowright" size={30} color={Colors.primary} />;
    };

    return (
        <>
            {isFinished ? (
                <AppIntroSlider
                    data={slides}
                    renderItem={renderItem}
                    onDone={onDone}
                    renderDoneButton={renderDoneButton}
                    renderNextButton={RenderNextButton}
                />
            ) : (
                <LoginScreen />
            )}
        </>
    )
}

const slides = [
    {
        key: 1,
        title: 'Un voyage vers le bonheur',
        text: 'Vous êtes sur le point de démarrer un voyage qui vous transformera. Un voyage vers une meilleure version de vous-même. Une vie plus épanouie et harmonieuse.',
        image: require('../../ASSETS/images/intro1.png'),
        backgroundColor: Colors.yellow,
    },
    {
        key: 2,
        title: 'Lumos sera votre guide',
        text: "Chaque jour, répondez à quelques questions pour cultiver la conscience de soi. Récitez un mantra qui vous inspire. Choisissez un exercice pour développer l'amour, la sagesse ou la créativité.",
        image: require('../../ASSETS/images/intro2.png'),
        backgroundColor: Colors.blue
    },
    {
        key: 3,
        title: 'Une progression',
        text: 'Chaque semaine et chaque mois, suivez vos progrès. Observez votre évolution. Soyez fier de vos réussites.',
        image: require('../../ASSETS/images/intro3.png'),
        backgroundColor: Colors.purple,
    },
    {
        key: 4,
        title: 'Votre jardin secret',
        text: ' Lumos est un jardin où vous cultivez votre bien-être. Un jardin où vous nourrissez votre âme. Un jardin où vous fleurissez.',
        image: require('../../ASSETS/images/intro4.png'),
        backgroundColor: Colors.green,
    },
    {
        key: 5,
        title: 'Maintenant',
        text: "Commencez votre voyage dès aujourd'hui.",
        image: require('../../ASSETS/images/intro5.png'),
        backgroundColor: Colors.orange,
    },
];