from enum import Enum, auto


class AutoName(Enum):
    def _generate_next_value_(self, start, count, last_values):
        return self


class ResultadoBatalha(AutoName):
    PERDEU = auto()
    EMPARDOU = auto()
    GANHOU = auto()
