import {BaseService} from "..";


export class BaralhoService extends BaseService {
    constructor() {
        //TODO integrar com um docker a url
        super(`http://127.0.0.1:5000/`)
    }

    getMaoPathImg = async () => {
        const result = await super.get(`/inicia-partida`, {
            authorized: false
        }).catch(error => {
            console.log(error)
            alert(error)
        })

        return result.mao.map(value => {
            return value.path_img
        })

    }
}
