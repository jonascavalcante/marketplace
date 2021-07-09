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

        .box {
            display: flex;
        }

        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide {
                img {
                    height: 320px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background-size: cover;
                }
            }
        }

        .adInfor {
            flex: 1;

            .adName {
                margin-bottom: 20px;
                
                h2 {
                    margin: 0;
                    margin-top: 20px;
                }

                small {
                    color: #999;
                }
            }
            .adDescription {
                small {
                    color: #999;
                }
            }
        }
    }

    .rightSide {
        width: 250px;
    }
`;