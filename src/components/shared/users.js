import { connect } from 'react-redux';
import {getUsers} from '../../selectors/users';
import {fetchUsers} from '../../actions/users';

function Users({ data, requestUsers }) {
    return (
        <div>
            <button onClick={() => requestUsers()} className="btn btn-info">Fetch Users</button>
            <span style={{marginLeft: 20}}>{`Data: ${data.map(user => user.first_name).join(', ')}`}</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: getUsers(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestUsers: () => dispatch(fetchUsers())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
