import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Section } from '../Layout';
import { List, Item, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Section title="feedbackOptions">
            <h2>
                Please leave feedback
            </h2>

            <List>
                {options.map(option => {
                    return (
                        <Item key={nanoid()}>
                            <Button type="button" onClick={onLeaveFeedback}>{option}</Button>
                        </Item>
                )})}
            </List>
        </Section>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};