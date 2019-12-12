from models.jogador import Jogador
from models.baralho import Baralho


class Partida:

    def __init__(self):
        self.jogador = Jogador()
        self.adversario = Jogador()
        self.baralho = Baralho()
        self.cartas_jogadas = []
        self.cartas_jogadas_adversario = []
        self.rodada = 1
        self.vez_de_jogar = 1
        self.pontos = 0
        self.pontosAdversario = 0

    def inicia_partida(self):
        self.baralho.resetar_baralho()
        self.jogador.mao = self.baralho.dar_3_cartas_aleatorias()
        self.adversario.mao = self.baralho.dar_3_cartas_aleatorias()

    def joga_carta(self, index_carta):
        self.cartas_jogadas.append(self.jogador.joga_carta(index_carta))

    def get_cartas_jogadas(self, jogador):
        if jogador == 1:
            return self.cartas_jogadas
        elif jogador == 2:
            return self.cartas_jogadas_adversario
        return []
