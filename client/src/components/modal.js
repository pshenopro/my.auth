import React from "react";
import {connect, useDispatch} from "react-redux";
import {fetchPost, modalHandler} from "../redux/actions";

const Modal = ({syncPost, name}) => {
    const dispatch = useDispatch();


    return (
        <div className={'modal-wrapper'}>
            <div id="modal1" className="modal open">
                <div className="modal-content">
                    <p>PERSONAL NAME</p>
                    <h4>{name}</h4>
                </div>
                <div className="modal-footer">
                    <span onClick={()=> dispatch(modalHandler())} className="modal-close waves-effect waves-green btn-flat">Agree</span>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        syncPost: state.posts.modal,
        name: state.posts.name
    }
};

const mapDispatchToProps = {
    modalHandler,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
