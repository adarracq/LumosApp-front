import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { DailiesContext } from '../../../CONTEXTS/DailiesContext';
import PageContainer from '../../../COMPONENTS/PageContainer';


export default function QuestionsScreen() {

    const [currentDaily, setCurrentDaily] = useContext(DailiesContext);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showQuestion, setShowQuestion] = useState(false);

    const onFinish = () => {
        if (!currentDaily) return;
        setCurrentDaily({ ...currentDaily, advancement: 4 });
    }

    return (
        <PageContainer>
            <Text>QuestionsScreen</Text>
        </PageContainer>
    );
}
