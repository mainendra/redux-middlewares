import { connect } from 'react-redux';
import {getTimerState} from '../../selectors/timer';
import {startTimer} from '../../actions/timer';

function Timer({ state, startTimer }) {
    return (
        <div>
            <button onClick={() => startTimer()} className="btn btn-secondary">Start Timer</button>
            <span style={{marginLeft: 20}}>{`State: ${state}`}</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: getTimerState(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => dispatch(startTimer())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);
