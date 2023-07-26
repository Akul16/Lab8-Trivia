import React, { useState, useEffect } from 'react';
import './Question.css';

const Question = () => {
    const [category, setCategory] = useState(null);
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=1&category=28&type=boolean');
                const data = await response.json();

                const { category, question, correct_answer } = data.results[0];
                setCategory(category);
                setQuestion(question);
                setAnswer(correct_answer);
            } catch (error) {
                console.error('Error fetching question:', error);
            }
        };

        fetchQuestion();
    }, []);

    const revealAns = () => {
        setRevealed(true);
    };

    return (
        <div className='container'>
            <div>Category: {category}</div>
            <h3>{question}</h3>
            <button type="button" onClick={revealAns}>Reveal Answer</button>
            {revealed && <div>Answer: {answer}</div>}
        </div>
    );
};

export default Question;
