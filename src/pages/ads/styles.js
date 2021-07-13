import styled from 'styled-components';

const PageArea = styled.div`
    margin-top: 20px;
    display: flex;

    .leftSide {
        width: 250px;
        margin-right: 10px;

        .filterName {
            margin: 10px 0;
            font-size: 15px;
        }

        input, select {
            width: 100%;
            height: 40px;
            padding: 10px;

            border: 2px solid #9bb83c;
            border-radius: 5px;
            
            font-size: 15px;
            
            outline: transparent;
            color: #000;
        }

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;

            border-radius: 5px;

            color: #000;
            cursor: pointer;

            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }

            span {
                font-size: 14px;
            }
        }

        .categoryItem:hover,
        .categoryItem.active {
            color: #fff;
            background-color: #9bb83c;
        }
    }

    .rightSide {
        flex: 1;

        h2 {
            margin-top: 0;
            font-size: 18px;
        }

        .listWarning {
            padding: 30px;
            text-align: center;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
        
            .aditem {
                width: 33%;
            }
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;

            .pagItem {
                width: 30px;
                height: 30px;

                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 14px;
                border: 1px solid #000;
                border-radius: 5px;
                cursor: pointer;
            
                &:hover {
                    border-color: #999;
                }

                &.active {
                    background-color: #ccc;
                }
            }
        }
    }
`;

export { PageArea };