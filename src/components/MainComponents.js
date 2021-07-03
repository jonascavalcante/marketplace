import styled from 'styled-components';

const Template = styled.div`

`;

const PageContainer = styled.div`
    max-width: 1000px;
    margin: auto;
`;

const PageTitle = styled.h1`
    font-size: 27px;
`;

const ErrorMessage = styled.div`
    margin: 10px 0;
    padding: 10px;

    color: #000;
    background-color: #ffcaca;

    border: 2px solid #ff0000;
`;

export { Template, PageContainer, PageTitle, ErrorMessage };