

import Http from "../utils/Http";


class Homes {
    static async getHomeData(){
        const data = await Http.get('/api/home/getHomeData');
        if(data.statusCode === 200){
            return data.data
        }
        return null;
    }
}

export default Homes;