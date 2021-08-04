import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SamplePic from '../assets/images/greenctg.jpg';
import PText from '../components/PText'

const ProjectItemsStyled = styled.div`
width: 400px;

    img{
        width: 380px;
        height: 400px;
        object-fit: cover;
        border-radius: 12px;
    }
    
    a{
        background-color: var(--deep-dark);
        border-radius: 12px;
    }
`;

export default function ProjectItems({ptoImg=SamplePic, proTitle="تست", proText="تست", id}) {
    return (
        <ProjectItemsStyled className="d-flex flex-column align-items-center">
            <img src={ptoImg} className="img-fluid w-100 border border-3 border-secondary" alt="" />
            <Link to={`/Projects/${id}`} className="my-3 p-3">
                <h3>{proTitle}</h3>
                <PText>{proText}</PText>
            </Link>
        </ProjectItemsStyled>
    )
}
