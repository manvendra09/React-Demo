import React, { Component } from 'react';
import Modal from './Modal';  
import { Table,Button } from 'react-bootstrap'; 


class Repository extends Component {

    constructor(props) {  
        super(props);  
      
        this.state = {  
          isOpen: false,  
          error: null,
          repos: [],  
          repoData: {},  
          response: {}  
        };  

        this.toggleModal = this.toggleModal.bind(this);
      }  

      componentDidMount(){  
        
                 this.setState({  
                     repos:this.props.repoList.filter(repo => repo.Organisation_name === this.props.orgName)  
                 });  
             
     }  
      

      toggleModal(repoId) {   
            
             
           
           
              this.setState({  
                  repoData: this.state.repos.find(obj => obj.Id === repoId)
                 });  
           
          
             this.setState({  
              isOpen: !this.state.isOpen  
            });  

            console.log(this.state.repoData);
           
          }  

    render() {
        const{repos}=this.state; 
        console.log(repos);
        return (  
          <div className="App">  
            <h2>Repositories Available for {this.props.orgName}</h2>
            <div >  
                      <div className="row">  
                      <div className="col-md-3"></div>  
                      <div className="col-md-6">  
                      <Table className="table">  
                        <thead className="btn-primary">  
                          <tr>  
                            <th>Name</th>                       
                            <th>Organisation</th>  
                            <th>Type</th>  
                            <th>Action</th>  
                          </tr>  
                        </thead>  
                        <tbody>  
                          {repos.map(repo => (  
                            <tr key={repo.Id}>  
                              <td>{repo.Repository_name}</td>  
                           
                              <td>{repo.Organisation_name}</td>  
                              <td>{repo.Type}</td>  
                              
                              <td><Button variant="info" onClick={()=>this.toggleModal(repo.Id)} >Details</Button>       
                              </td>  
                            </tr>  
                          ))}  
                        </tbody>  
                      </Table>  
    </div>  
    <div className="col-md-3"></div>  
    </div>  
          
                      </div>  
            <Modal show={this.state.isOpen}  
              onClose={()=>this.toggleModal(this.state.repoData.Id)}>  
              <Table className="table">  
                <thead>  
                  <tr className="btn-primary"><th colSpan="2">Repository Details</th></tr>  
                </thead>  
                <tbody>  
      
                  <tr>  
                    <th>Repository Id </th><td>{ this.state.repoData.Id}</td>  
                  </tr> 
                  <tr>  
                    <th>Repository Name </th><td>{ this.state.repoData.Repository_name}</td>  
                  </tr> 
                  <tr>  
                    <th>Organisation Name </th><td>{ this.state.repoData.Organisation_name}</td>  
                  </tr> 
                  <tr>  
                    <th>Url</th><td>{ this.state.repoData.Url}</td>  
                  </tr> 
                  <tr>  
                    <th>Clone Count </th><td>{ this.state.repoData.Clone_count}</td>  
                  </tr> 
                  <tr>  
                    <th>Type </th><td>{ this.state.repoData.Type}</td>  
                  </tr> 
                  <tr>  
                    <th>Contribution Count </th><td>{ this.state.repoData.Contribution_count}</td>  
                  </tr> 
                  <tr>  
                    <th>Commit Count </th><td>{ this.state.repoData.Commit_count}</td>  
                  </tr> 
                  <tr>  
                    <th>Size </th><td>{ this.state.repoData.Size}</td>  
                  </tr> 
                  <tr>  
                    <th>Last Activity </th><td>{ this.state.repoData.Last_activity}</td>  
                  </tr> 
                  <tr>  
                    <th>Risk Score </th><td>{ this.state.repoData.Risk_score}</td>  
                  </tr> 
                  
                </tbody>  
              </Table>  
                     
            </Modal>  
          </div>  
        );  
    }
}

export default Repository
