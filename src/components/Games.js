import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from "react-redux";
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';
import {smallImage} from "../util";
import {popUp} from "../animations"

const Game  = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    //Load Detail Handler

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    };
    return(
        <StyledGame varient={popUp} initial="hidden" animate="show" LayoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name}/>
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        height: 40vh;
        width: 100%;
        object-fit: cover;
    }
`;

export default Game;