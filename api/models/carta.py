from models.resultado_batalha import ResultadoBatalha


class Carta:
    def __init__(self, nome, path_img, poder):
        self.nome = nome
        self.path_img = path_img
        self.poder = poder

    def vence_adversario(self, poder_adversario):
        if self.poder > poder_adversario:
            return ResultadoBatalha.GANHOU
        elif self.poder < poder_adversario:
            return ResultadoBatalha.PERDEU
        else:
            return ResultadoBatalha.EMPARDOU

    @property
    def serialize(self):
        return {
            'nome': self.nome,
            'path_img': self.path_img,
            'poder': self.poder
        }