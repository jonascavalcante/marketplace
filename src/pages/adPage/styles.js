import styled from 'styled-components';

export const Fake = styled.div`
    height: ${props => props.height || 20}px;
    background-color: #ddd;
`;

export const PageArea = styled.div`
    margin-top: 20px;
    display: flex;

    .box {
        margin-bottom: 20px;
        border-radius: 5px;

        background-color: #fff;
        box-shadow: 0 0 4px #999;
    }

    .box--padding {
        padding: 10px;
    }

    .leftSide {
        flex: 1;
        margin-right: 20px;

        .adImage {

        }

        .adInfor {
            padding: 10px;
            
            .adName {
                margin-bottom: 20px;
            }
            .adDescription {

            }
        }
    }

    .rightSide {
        width: 250px;
    }
`;