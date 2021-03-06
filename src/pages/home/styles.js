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

    .categoryList {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .categoryItem {
            width: 25%;
            height: 50px;

            margin-bottom: 10px;

            display: flex;
            align-items: center;

            text-decoration: none;
            color: #000;

            &:hover {
                color: #999;
            }

            img {
                width: 45px;
                height: 45px;

                margin-right: 10px;
            }
        }
    }

    @media (max-width: 600px) {

        .searchBox {
            form {
                flex-direction: column;

                input {
                    margin: 0 0 10px 0;
                    padding: 10px;
                }

                select {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }
        }

        .categoryList {
            .categoryItem {
                width: 50%;
                padding: 10px;
            }
        }
    }
`;

const PageArea = styled.div`
    h2 {
        font-size: 20px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    
        .aditem {
            width: 25%;
        }
    }

    .seeAllLink {
        margin-top: 10px;

        font-weight: bold;
        text-decoration: none;
        display: inline-block;

        color: #000;
    }

    @media (max-width: 600px) {
        
        margin: 10px;
        
        .list {
            .aditem {
                width: 50%;
            }
        }
    }
`;

export { SearchArea, PageArea };