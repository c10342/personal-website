

import Http from "../utils/Http";


class Abouts {
    static async getAboutData(){
        const data = await Http.get('/api/about/getAboutData');
        if(data.statusCode === 200){
            return data.data
        }
        return null;
    }
}

export default Abouts;