import React from 'react';
import {connect} from 'react-redux';
import {getDog} from '../actions';

const Dog = props => {

    const fetchDog = e => {
        e.preventDefault();
        props.getDog();
    };
    

    return (
        <div>
            <h1>Random Dog Photo</h1>
            {props.isFetching && <p>Fetching Your Dog Photo</p>}
            <div>
                <img src={props.dog}/>
            </div>
            {props.error && <p>{props.error}</p>}
            <button onClick={fetchDog}>Fetch Dog</button>
        </div>
    )
}

const mapStateToProps = state => ({
    dog: state.dog,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, {getDog})(Dog);