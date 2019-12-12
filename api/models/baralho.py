from models.carta import *
import random


def get_todas_as_cartas():
    baralho = []
    for numero_carta in (1, 2, 3, 4, 5, 6, 7, 10, 11, 12):
        baralho.append(Carta('Basto {}'.format(numero_carta), 'truco-basto-{}.jpg'.format(numero_carta), numero_carta))
        baralho.append(Carta('Copa {}'.format(numero_carta), 'truco-copa-{}.jpg'.format(numero_carta), numero_carta))
        baralho.append(Carta('Espada {}'.format(numero_carta), 'truco-espada-{}.jpg'.format(numero_carta), numero_carta))
        baralho.append(Carta('Ouro {}'.format(numero_carta), 'truco-ouro-{}.jpg'.format(numero_carta), numero_carta))

    for carta in baralho:
        if 'Espada 1' == carta.nome:
            carta.poder = 20
        elif 'Basto 1' == carta.nome:
            carta.poder = 19
        elif 'Espada 7' == carta.nome:
            carta.poder = 18
        elif 'Ouro 7' == carta.nome:
            carta.poder = 17
        elif ' 3' in carta.nome:
            carta.poder = 16
        elif ' 2' in carta.nome:
            carta.poder = 15
        elif ' 1' in carta.nome:
            carta.poder = 14

    return baralho


class Baralho:

    def __init__(self):
        self.baralho = get_todas_as_cartas()

    def dar_3_cartas_aleatorias(self):
        cartas = []
        for cont in range(0,3):
            cartas.append(self.baralho.pop(random.randrange(0, len(self.baralho)-cont)))
        return cartas

    def resetar_baralho(self):
        self.baralho = get_todas_as_cartas()
