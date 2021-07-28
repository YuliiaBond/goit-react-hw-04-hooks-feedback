import React, { useState, useEffect } from 'react';
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification'
import Statistics from './components/Statistics'


export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
	const [positive, setPositive] = useState(0);

    const handleBtnClick = event => {
        const { name } = event.target;

        switch (name) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            
            default:
                return;
        }
    };
    
    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);

    useEffect(() => {
        setPositive(((good / total) * 100).toFixed(0));
    }, [good, total]);


    return (
        <> 
            <Section title="Please leave feedback">
                    
            <FeedbackOptions
                onLeaveFeedback={handleBtnClick}
            />

            {total < 1 ? (
            <Notification message="No feedback given" />
            ) : (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positive}
                />
            )}
            
            </Section>
        </>
    );
};

// class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//         }
    
//     handleBtnClick = event => {
//         const { name } = event.target;
//         this.setState(prevState => ({
//             [name]: prevState[name] + 1,
//         }));
//     };
    
//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     };
    
//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         return (good / this.countTotalFeedback()) * 100;
//     };
    
//     render() {
//         const { good, neutral, bad } = this.state;
//         const total = this.countTotalFeedback();
//         const positivePercentage = Number(this.countPositiveFeedbackPercentage().toFixed(0));
//             return (
//                 <>
//                     <Section title="Please leave feedback">
                    
//                     <FeedbackOptions
//                         options={this.state}
//                         onLeaveFeedback={this.handleBtnClick }
//                     />

//                         {this.countTotalFeedback() < 1 ? (
//                             <Notification message="No feedback given" />
//                         ) : (
//                             <Statistics
//                         good={good}
//                         neutral={neutral}
//                         bad={bad}
//                         total={total}
//                         positivePercentage={positivePercentage}
//                         />
//                     )}

                    
//                         </Section>
//                 </>
//             );
//         }
//     }

// export default App;