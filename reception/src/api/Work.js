

import Http from "../utils/Http";


class Work {
    static async getWorkData(){
        const data = await Http.get('/api/work/getWorkData');
        if(data.statusCode === 200){
            return data.data
        }
        return null;
    }
}

export default Work;