import { connect } from 'react-redux';
import {getIntervalCount} from "../../selectors/interval";
import {startInterval} from '../../actions/interval';

function Interval({ count, startTimer }) {
    return (
        <div>
            <button onClick={() => startTimer()} className="btn btn-primary">Start Interval Timer</button>
            <span style={{marginLeft: 20}}>{`Count: ${count}`}</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: getIntervalCount(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => dispatch(startInterval())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interval);
