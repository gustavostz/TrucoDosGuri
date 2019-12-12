import {BaseService} from "..";


export class JogoService extends BaseService {
    constructor() {
        //TODO integrar com um docker a url
        super(`http://127.0.0.1:5000/`)
    }

    jogaCarta = async (idCarta) => {
        const result = await super.post(`/joga-carta/${idCarta}`, {}, {
            authorized: false
        }).catch(error => {
            console.log(error)
            alert(error)
        })

    }
}
