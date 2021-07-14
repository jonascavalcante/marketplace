import styled from 'styled-components';

const Fake = styled.div`
    height: ${props => props.height || 20}px;
    background-color: #ddd;
`;

const PageArea = styled.div`
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

        .price {
            span {
                display: block;
                font-weight: bold;
                font-size: 27px;
                color: #0000ff;
            }            
        }

        .contactSellerLink {
            height: 30px;
            margin-bottom: 20px;
            border-radius: 5px;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;

            color: #fff;
            background-color: #0000ff;
            box-shadow: 0 0 4px #999;
        }
        
        .createdBy {
            strong {
                display: block;
            }

            small {
                margin-top: 10px;
                display: block;
                color: #999;
            }
        }
    }

    @media (max-width: 600px) {
        
        flex-direction: column;

        .leftSide {
            margin: 0;

            .box {
                width: 320px;
                margin: auto;
                flex-direction: column;
            }

            .adInfor {
                padding: 10px;
            }
        }

        .rightSide {
            width: auto;
            margin-top: 20px;

            .box {
                width: 320px;
                margin: auto;
            }

            .contactSellerLink {
                width: 320px;
                margin: 20px auto;
            }
        }
    }
`;

const OthersArea = styled.div`
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

    @media (max-width: 600px) {
        margin: 10px;

        .list {
            .aditem {
                width: 50%;
            }
        }
    }
`;

const BreadCrumb = styled.div`
    margin-top: 20px;
    font-size: 13px;

    a {
        margin: 0 5px;
        display: inline-block;
        
        text-decoration: underline;
        color: #000;
    }

    @media (max-width: 600px) {
        margin: 20px;
    }
`;

export { Fake, PageArea, OthersArea, BreadCrumb };