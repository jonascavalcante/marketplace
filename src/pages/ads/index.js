import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/adItem';
import { PageArea } from './styles';

import useAPI from '../../helpers/marketAPI';

const Signin = () => {

    const api = useAPI();
    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    };

    const query = useQueryString();

    const [q, setQ] = useState(query.get('q') != null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        
        let queryString = [];
        
        if (q) {
            queryString.push(`q=${q}`);
        }

        if (cat) {
            queryString.push(`cat=${cat}`);
        }

        if (state) {
            queryString.push(`state=${state}`);
        }

        history.replace({
            search: `?${queryString.join('&')}`
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q, cat, state])

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
                            <input 
                                type="text" 
                                name="q" 
                                placeholder="Digite aqui sua pesquisa" 
                                value={q}
                                onChange={e => setQ(e.target.value)}
                            />

                            <div className="filterName">Estado:</div>
                            <select 
                                name="state"
                                value={state}
                                onChange={e => setState(e.target.value)}
                            >
                                <option></option>
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>

                            <div className="filterName">Categoria:</div>
                            <ul>
                                {categories.map((i, k) =>
                                    <li 
                                        key={k} 
                                        className={cat === i.slug ? 'categoryItem active' : 'categoryItem'}
                                        onClick={() => setCat(i.slug)}
                                    >
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