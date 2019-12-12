from app import app
from models.partida import Partida
import json
from flask import jsonify

partida = Partida()


# TODO Fazer um Utils para json
def transforma_carta_em_json(carta):
    return carta.serialize


@app.route('/inicia-partida')
def inicia_partida():
    partida.inicia_partida()
    mao = list(map(transforma_carta_em_json, partida.jogador.mao))
    return jsonify({'mao': mao})


@app.route('/joga-carta/<int:index_carta>', methods=['POST'])
def joga_carta(index_carta):
    partida.joga_carta(index_carta)


@app.route('/cartas-jogadas/<int:jogador>')
def cartas_jogadas(jogador):
    cartas_jogadas_json = list(map(transforma_carta_em_json, partida.get_cartas_jogadas(jogador)))
    return jsonify({'cartas_jogadas': cartas_jogadas_json})

