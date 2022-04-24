import { Component } from "react";

class Card extends Component {
    render(){
        const {firstName, lastName, picture, location, email, phone} = this.props;
        
        return(
           
            <div className=" card m-3 col-lg-3 bg-gray-300" >
                <div className="row g-0">
                    <div className="col-md-4 mt-4">
                        <img src={picture} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-8"> 
                        <div className="card-body">
                            <h5 className="card-title">{firstName+' '+lastName}</h5>
                            <span className="card-text ">
                                
                                    { location.street.name +' '+location.street.number+' '+location.state+' '+location.country+' '+location.postcode}
                                
                                <br/>
                                <small>
                                    { email }
                                </small>
                                <br/>
                                <small>
                                    { phone }
                                </small>
                                
                            </span>
                           
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}  

  
export default Card; 