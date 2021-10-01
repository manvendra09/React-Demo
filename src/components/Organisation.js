import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
import Repository from './Repository';
import Modal from './Modal';  




class Organisation extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false, 
            error: null,
            orgList:[],
            repoCount: '',
            currOrg: ''
        }

        this.countRepository = this.countRepository.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      



    }
    componentDidMount(){  
        const key = 'Organisation_name'
        this.setState({  
            orgList: [...new Map(this.props.repoList.map(item =>
                [item[key], item])).values()]
        });  

        console.log(this.state.orgList);
    
    }  

    countRepository(type) {
           
        const countTypes = this.props.repoList.filter(repo => repo.Organisation_name === type);
        return countTypes.length;
    }

    toggleModal(orgName) {   
     
      this.setState({
        currOrg: orgName
      });

     this.setState({  
      isOpen: !this.state.isOpen  
    });  

    
   
  }  


    render() {
        return (
            <div>
                <h1>Organisation List</h1>
                {
                      <Table className="table">  
                      <thead className="btn-primary">  
                        <tr>  
                          <th> Organisation Name</th>                       
                          <th>Repository Count</th>  
                          <th>Action</th>  
                        </tr>  
                      </thead>  
                      <tbody>  
                        {this.state.orgList.map(repo => (  
                          <tr key={repo.Id}>  
                            <td>{repo.Organisation_name}</td>  
                         
                            <td>{this.countRepository(repo.Organisation_name)}</td>   
                            
                            <td>
                            <Button variant="info" onClick={()=>this.toggleModal(repo.Organisation_name)} >Details</Button>
                            
                            </td>  
                          </tr>  
                        ))}  
                      </tbody>  
                    </Table>  
                }

             <Modal show={this.state.isOpen}  
              onClose={()=>this.toggleModal(this.state.currOrg)}> 
              <div> 
              <Repository repoList={this.props.repoList} orgName={this.state.currOrg} />
              </div>  
              </Modal>
            </div>


        )
    }
}

export default Organisation
