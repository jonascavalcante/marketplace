import styled from 'styled-components';

export const PageArea = styled.div`
    
    form {
        padding: 10px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 0 3px #999;
        
        .area {
            max-width: 500px;
            padding: 10px;

            display: flex;
            align-items: center;
        
            .area--title {
                width: 200px;
                padding-right: 20px;
                
                font-size: 14px;
                font-weight: 600;
                text-align: right;
            }
            .area--input {
                flex: 1;

                input:not([type='checkbox']) {
                    width: 100%;
                    padding: 5px;

                    font-size: 14px;
                    border-radius: 3px;

                    outline: transparent;
                    border: 1px solid #ddd;

                    transition: all ease 0.4s;
                
                    &:focus {
                        color: #333; 
                        border-color: #333;
                    }
                } 

                button {
                    padding: 5px 10px;
                    border: 0;
                    outline: transparent;

                    font-size: 15px;
                    color: #fff;
                    background-color: #0089ff;

                    cursor: pointer;
                    
                    &:hover {
                        background-color: #006fce;
                    }
                }
            }
        }
    }
    
    @media (max-width: 600px) {
        
        form {
            .area {
                flex-direction: column;

                .area--title {
                    width: 100%;
                    margin-bottom: 10px;
                    text-align: left;
                }

                .area--input {
                    width: 100%;

                    button {
                        width: 100%;
                        padding: 10px;
                    }
                }
            }
        }
    }
`;