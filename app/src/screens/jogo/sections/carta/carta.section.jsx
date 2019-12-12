import React from 'react'
import "./carta.style.css"
import { useDrag } from 'react-dnd'

export const Carta = props => {

        const [collectedProps, drag] = useDrag({
            item: { id: props.id, type: 'CARTA' },
            begin(){
                props.dropCss("container-carta-jogada container-carta-jogada-dragging")
            },
            end(){
                props.dropCss("container-carta-jogada")
            },
            canDrag: monitor => {
                //TODO Verificar se é vez do jogador para poder arrastar
                return !props.desabilitaDrag
            }
        })

        return (
                <div className={`container-carta ${props.classeCarta}`} ref={drag}>
                    <img src={require(`../../../../assets/img/baralho/${props.carta}`)} alt="Carta Truco"/>
                </div>
        )
}
