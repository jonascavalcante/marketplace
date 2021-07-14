import styled from 'styled-components';

export const HeaderArea = styled.header`
    height: 60px;

    border-bottom: 1px solid #ccc;
    background-color: #fff;

    .container {
        max-width: 1000px;
        margin: auto;

        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        height: 60px;

        flex: 1;
        display: flex;
        align-items: center;

        .logo-1,
        .logo-2,
        .logo-3 {
            font-size: 27px;
            font-weight: 400;
        }

        .logo-1 {
            color: #ff0000;
        }
        .logo-2 {
            color: #00ff00;
        }
        .logo-3 {
            color: #0000ff;
        }
    }

    nav {
        padding: 10px 0;

        ul {
            height: 40px;
            display: flex;
            align-items: center;
            
            li{
                margin: 0 20px;
                padding: 0;
                list-style: none;
            
                a, button {
                    font-size: 14px;
                    font-weight: 400;
                    color: #000;

                    outline: transparent;

                    &:hover {
                        color: #999;
                    }

                    &.button {
                        padding: 5px 10px;
                        border-radius: 4px;
                        
                        color: #fff;
                        background-color: #ff8100;
                        
                        &:hover {
                            background-color: #e57706;
                        } 
                    }
                }

                button {
                    border: none;
                    background: none;
                    cursor: pointer;
                }
            }
        }


    }

    @media (max-width: 600px) {

        height: auto;

        .container {
            flex-direction: column;
        }

        .logo {
            margin: 20px 0;
            justify-content: center;
        }

        nav {
            ul {
                height: auto;
                flex-direction: column;
            
                li {
                    margin: 10px 20px;
                }
            }
        }
    }
`;