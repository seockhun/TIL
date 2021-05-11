import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const IntroBlock = styled.div`
    margin-bottom: 135px;
    @media(max-width: 768px){
        padding: 25px;
    }

    h1{
        margin: 0;
        font-weight: 300;
        font-size: 45px;
        @media(max-width: 768px){
            font-size: 30px;
        }
    }
    h3{
        font-weight: 200;
        font-size: 15px;
    }
`;

const Reveal = () => {
    return (
        <div>
            <Fade Bottom>
                <IntroBlock>
                    <h1>
                        123123123
                        <br />
                        123123123
                        <br />
                        asd <strong>asd</strong> asd
                    </h1>
                    <h3>
                        123qweasdzxc123qweasdzxc123q
                        <br />
                        weasdzxc123qweasdzcx123qweasd
                        <br />
                        zxc123qweasdzxc123qweasdzxc123qweasdzxc123qweasdzxc</h3>
                </IntroBlock>
            </Fade>
        </div>
    )
}

export default Reveal