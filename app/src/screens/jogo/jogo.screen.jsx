import React, {useState, useEffect, useRef} from 'react'
import "./jogo.style.css"
import {BaralhoService} from "../../services/baralho/baralho.service";
import {Carta, ModalDesistencia} from "./sections";
import {useDrop} from 'react-dnd'
import baralhoImg from "../../assets/img/jogo/baralho.png"

export const Jogo = props => {
    const [mao, setMao] = useState(['carta-nao-carregada.jpg', 'carta-nao-carregada.jpg', 'carta-nao-carregada.jpg'])
    const [cartaJogada, setCartaJogada] = useState([])
    const [cartaAdversario, setCartaAdversario] = useState([])
    const [containerJogadaCss, setContainerJogadaCss] = useState(["container-carta-jogada"])
    const [adversarioComeca, setAdversarioComeca] = useState(false)

    useEffect(() => {
        getMao()
    }, [])

    async function getMao() {
        const baralhoService = new BaralhoService()
        const maoPathImg = await baralhoService.getMaoPathImg()
        setMao(maoPathImg)
    }

    function getCartas(mao) {
        return mao.map((value, key) => {
            switch (key) {
                case 0:
                    return <Carta key={key} id={key} carta={value} classeCarta="carta-torta-para-esquerda"
                                  dropCss={setContainerJogadaCss}/>
                case 1:
                    return <Carta key={key} id={key} carta={value} dropCss={setContainerJogadaCss}/>
                case 2:
                    return <Carta key={key} id={key} carta={value} classeCarta="carta-torta-para-direita"
                                  dropCss={setContainerJogadaCss}/>
                default:
                    alert("O usuário não possui exatamente 3 cartas!")
                    //TODO return Redirect para tela inicial
                    return null
            }
        })
    }

    const [collectedProps, drop] = useDrop({
        accept: 'CARTA',
        drop(item, monitor) {
            console.log(item)
            console.log(monitor)
            
        }
    })

    //TODO Arrasta para imagem qnd for desisitir daquela partida
    const [collectedPropsGiveUp, dropGiveUp] = useDrop({
        accept: 'CARTA',
        drop(item, monitor) {

        }
    })

    function getCartasJogadas(cartas) {
        return cartas.map((value, key) => {
            return <Carta key={key} id={key} carta={value} desabilitaDrag/>
        })
    }

    function triggerBaralho(acao) {
        return <img src={baralhoImg} alt="baralho" className="baralho" onDoubleClick={acao}  ref={dropGiveUp}/>
    }

    function desistir() {
        //TODO
        alert("Jogador Desistiu! Voltar Para o Menu? Tela Perdedor? Mandar para o Outro q Ganhou?")
    }

    return (
        <>
            <div className="body">
                <div className="container-mao adversario-inversao">
                    {getCartas(['carta-nao-carregada.jpg', 'carta-nao-carregada.jpg', 'carta-nao-carregada.jpg'])}
                </div>

                <div className="container-meio">
                    <div className="container-baralho">
                        {!adversarioComeca && <ModalDesistencia trigger={triggerBaralho} desistiu={desistir}/>}
                    </div>

                    <div className="container-cartas-jogadas">
                        <div className="container-carta-jogada adversario-inversao">

                        </div>

                        <div className={containerJogadaCss} ref={drop}>

                        </div>
                    </div>

                    <div className="container-baralho">
                        {adversarioComeca && <ModalDesistencia trigger={triggerBaralho} desistiu={desistir}/>}
                    </div>

                </div>

                <div className="container-mao">
                    {getCartas(mao)}
                </div>
            </div>
        </>
    )
}

