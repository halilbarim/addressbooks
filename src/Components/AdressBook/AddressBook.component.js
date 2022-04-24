import { Component } from "react";
import Card from "../Card/Card.component";
import SearchBox from "../SearchBox/SearchBox.component";

class AddressBook extends Component {
    
    
    constructor(){
        super();
        this.state={
            users:[],
            filterUser:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=9&nat=us')
        .then(response => response.json())
        .then(json =>{
                
                this.setState({users:json.results,filterUser:json.results,});} 
            );
    }
    

    render(){
        const onSearchEventHandler =(event)=>{
            console.log(event.target.value);
           const filterUser = this.state.users.filter(user =>{
                event.target.value=event.target.value.toLowerCase();
                user.name.first=user.name.first.toLowerCase();
                user.name.last=user.name.last.toLowerCase();
                user.email=user.email.toLowerCase();
                let locTxt='';
                locTxt+=user.location.city.toLowerCase();
                locTxt+=' '+user.location.state.toLowerCase();
                locTxt+=' '+user.location.street.name.toLowerCase();
                locTxt+=' '+user.location.street.number;
                locTxt+=' '+user.location.postcode;
                
                if(user.name.first.includes(event.target.value) || user.name.last.includes(event.target.value) ||  (user.name.first+' '+user.name.last).includes(event.target.value) || user.email.includes(event.target.value) || locTxt.includes(event.target.value)){
                    return true;
                }
            })
            this.setState({filterUser:filterUser});
            
        }
        return(
            <div className="AddressBook">
                <h3 className="font-weight-bolder   mt-4">Address Books</h3>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                         <SearchBox onSearchEventHandler={onSearchEventHandler} />
                    </div>
                </div>
                <div className="row justify-content-center">
                {
                    this.state.filterUser.map(user =>{
                        return(
                            <Card 
                                key={user.login.uuid} 
                                firstName={user.name.first} 
                                lastName={user.name.last} 
                                picture={user.picture.large}
                                location={user.location}
                                email={user.email}
                                phone={user.phone}
                            /> 
                        )
                    })
                }

                </div>
                
                
            </div>
        )
    }
}

export default AddressBook;