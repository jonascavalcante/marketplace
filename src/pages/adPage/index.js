import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { PageContainer } from '../../components/MainComponents';
import { PageArea, Fake } from './styles';

import useAPI from '../../helpers/marketAPI';

const Signin = () => {

    const api = useAPI();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, [])

    const formatDate = (date) => {
        let cDate = new Date(date);

        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            <PageArea>

                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) =>
                                        <div key={k} className="each-slide">
                                            <img src={img} alt="" />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfor">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                                {adInfo.description}
                                <hr />
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                        {adInfo.priceNegotiable &&
                            "Preço negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">
                                Preço: <span>R$ {adInfo.price}</span>
                            </div>
                        }
                    </div>

                    {loading && <Fake height={50} />}
                    {adInfo.userInfo &&
                        <>
                            <a
                                href={`mailto:${adInfo.userInfo.email}`}
                                target="_blank"
                                rel="noreferrer"
                                className="contactSellerLink"
                            >
                                Fale com o vendedor
                            </a>

                            <div className="createdBy box box--padding">
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </div>
                        </>
                    }


                </div>

            </PageArea>
        </PageContainer>
    );
}

export default Signin;