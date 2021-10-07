import styled from 'styled-components';

export const Label = styled.label`
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    transition: all ${props => props.duration / 1000}s;
    width: 100%;
`;

export const Button = styled.button`

`;

export const LabelWrapper = styled.div`
    height: 20px;
    position: relative;
    overflow: hidden;
    width: 20px;
`;

export const Root = styled.div`
    display: flex;
    align-items: center;
`;