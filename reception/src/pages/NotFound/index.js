
import ShouldUpdateComp from "../../utils/ShouldUpdateComp";

class NotFound extends ShouldUpdateComp{
    render() {
        return null;
    }

    componentDidMount() {
        this.props.history.replace('/home');
    }
}

export default NotFound;