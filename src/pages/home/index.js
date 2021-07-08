import React, { useState } from 'react';

import { PageContainer } from '../../components/MainComponents';
import { SearchArea, PageArea } from './styles';

import useAPI from '../../helpers/marketAPI';

const Signin = () => {

    const api = useAPI();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="What do you need?" />
                            <select name="state">
                                <option></option>
                            </select>
                            <button>Search</button>
                        </form>
                    </div>
                    
                    <div className="categoryList">

                    </div>

                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>

                    ...
                    
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Signin;