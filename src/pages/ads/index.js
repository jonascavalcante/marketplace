import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/adItem';
import { PageArea } from './styles';

import useAPI from '../../helpers/marketAPI';

const Signin = () => {

    const api = useAPI();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <PageContainer>
                <PageArea>

                    <div className="leftSide">
                        <form method="GET">
                            <input type="text" name="q" placeholder="Digite aqui sua pesquisa" />

                            <div className="filterName">Estado:</div>

                            <select name="state">
                                <option></option>
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>

                            <div className="filterName">Categoria:</div>

                            <ul>
                                {categories.map((i, k) =>
                                    <li key={k} className="categoryItem">
                                        <img src={i.img} alt="" />
                                        <span>{i.name}</span>
                                    </li>
                                )}
                            </ul>

                        </form>
                    </div>

                    <div className="rightSide">
                        ...
                    </div>

                </PageArea>
            </PageContainer>
        </>
    );
}

export default Signin;