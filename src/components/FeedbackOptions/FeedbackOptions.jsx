import PropTypes from 'prop-types';
import { Section } from '../Layout';
import { List, Item, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <Section title="feedbackOptions">
            <h2>
                Please leave feedback
            </h2>

            <List>
                <Item>
                    <Button type="button" onClick={onLeaveFeedback}>Good</Button>
                </Item>
                <Item>
                    <Button type="button" onClick={onLeaveFeedback}>Neutral</Button>
                </Item>
                <Item>
                    <Button type="button" onClick={onLeaveFeedback}>Bad</Button>
                </Item>
            </List>
        </Section>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};