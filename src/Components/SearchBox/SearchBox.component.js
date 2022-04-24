import { Component } from "react";

class SearchBox extends Component {

    
    render(){
        const { onSearchEventHandler } = this.props;
        return(
            <div>
                <input type="Search" className="form-control border-dark" onChange={onSearchEventHandler} placeholder="Type name or other information" />
            </div>
        )
    }
}
export default SearchBox;