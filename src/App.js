import React, { Component } from 'react';
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification'
import Statistics from './components/Statistics'



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
        }
    
    handleBtnClick = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return (good / this.countTotalFeedback()) * 100;
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = Number(this.countPositiveFeedbackPercentage().toFixed(0));
            return (
                <>
                    <Section title="Please leave feedback">
                    
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleBtnClick }
                    />

                        {this.countTotalFeedback() < 1 ? (
                            <Notification message="No feedback given" />
                        ) : (
                            <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                        />
                    )}

                    
                        </Section>
                </>
            );
        }
    }

export default App;