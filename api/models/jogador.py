from models.baralho import Baralho


class Jogador:

    def __init__(self):
        self.mao = []

    def joga_carta(self, index_carta):
        return self.mao.pop(index_carta)
