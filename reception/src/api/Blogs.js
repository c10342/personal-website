

import Http from "../utils/Http";


class Blogs {
    static async getBlogData(){
        const data = await Http.get('/api/blog/getBlogData');
        if(data.statusCode === 200){
            return data.data
        }
        return null;
    }
}

export default Blogs;