import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/adItem';
import { SearchArea, PageArea } from './styles';

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
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
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
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>

                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="Digite aqui o que você procura" />
                            <select name="state">
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>

                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>

                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className="list">
                        {adList.map((i, k) =>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver tudo</Link>
                    <hr />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat orci, mollis eu viverra id, euismod nec magna. Sed magna quam, fermentum eget blandit vitae, fermentum non libero. Praesent est ex, tempor quis convallis eu, porttitor at mi. Vivamus a mauris sit amet mi luctus imperdiet.
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Signin;