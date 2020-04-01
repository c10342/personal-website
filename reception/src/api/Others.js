

import Http from "../utils/Http";


class Others {
    static async getAboutData(){
        const data = await Http.get('/api/other/getOtherData');
        if(data.statusCode === 200){
            return data.data
        }
        return null;
    }
}

export default Others;