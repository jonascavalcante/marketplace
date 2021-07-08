import styled from 'styled-components';

const SearchArea = styled.div`
    padding: 20px 0;

    background-color: #ddd;
    border-bottom: 1px solid #ccc;

    .searchBox {
        padding: 20px 15px;

        background-color: #9bb83c;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
        
        display: flex;

        form {
            flex: 1;
            display: flex;

            input,
            select {
                height: 40px;
                margin-right: 20px;

                font-size: 15px;

                border: none;
                border-radius: 5px;

                outline: transparent;
                color: #000;
            }
        
            input {
                flex: 1;
                padding: 0 10px;
            }

            select {
                width: 100px;
            }

            button {
                height: 40px;
                padding: 0 20px;
                font-size: 15px;

                border: none;
                border-radius: 5px;

                color: #fff;
                background-color: #49aeef;

                cursor: pointer;
            }
        }
    }
`;

const PageArea = styled.div`

`;

export { SearchArea, PageArea };