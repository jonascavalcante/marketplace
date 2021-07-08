import styled from 'styled-components';

const Item = styled.div`
    a {
        margin: 10px;
        padding: 10px;

        display: block;
        text-decoration: none;
        
        border-radius: 5px;
        border: 1px solid #fff;
    
        color: #000;
        background-color: #fff;
        transition: all ease 0.2s;

        &:hover {
            border-color: #ccc;
            background-color: #eee;
        }

        .itemImage {
            img {
                width: 100%;
                border-radius: 5px;
            }
        }
        
        .itemName {
            font-weight: bold;
        }
    }
`;

export { Item };