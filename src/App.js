import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Button, TextField } from "./Utils"; 
import BootstrapTable from 'react-bootstrap-table-next';
import  Details  from "./Details";

class App extends Component  {
 
  constructor() {
    super();
    this.state = {
      allData:'',
      row:-1,
      showDetails:false,
      data: '',
    columns: [
      {
        isKey: true,
        dataField: 'id',
        text: 'id'
      },
    // {
    //   dataField: 'artistName',
    //   text: 'Artist Name'
    // },
     {
      dataField: 'collectionName',
      text: 'Album name',
      sort: true
    }
    // {
    //   dataField: 'releaseDate',
    //   text: 'Release Date',
    //   sort: true
    // }
  ],
      artistName: 'Artist Name',
    };

    this.updateInput = this.updateInput.bind(this);
  }
getTry=() =>{
  console.log("work");
  console.log(this.state.artistName);
  var returnData = [];
  axios.get('https://itunes.apple.com/search?term='+this.state.artistName)
  .then(response => {
      console.log(response.data.results);
      var count =0;
      
      response.data.results.forEach(value =>{
        var temp = {};
        temp["id"] = count;
        temp["collectionName"] = value.collectionName;
        returnData.push(temp);
        count++;
      })
       
      this.setState(state => {
        return ({ data: returnData, allData: response.data.results})
      }) 
  })
  .catch(error => {
    console.log(error);
    this.setState(state => {
      return ({ data: error.message, columns: ''})
    }) 
});
}

updateInput = (event) => this.setState(({ artistName: event.target.value}));

rowEvent =  {
  onClick: (e, row, rowIndex) => {
    console.log("click");

    this.setState(({ showDetails: true, row: rowIndex}));
  }
};


  render (){
    const { data, columns, artistName } = this.state;
    return (
    <div className="App">
      <div style={{margin: 'auto', textAlign: 'center'}}>
        <div style={{display: 'flex', margin: '5px',border: '2px solid #ececec'}}>
        <p>Itunes Album Search</p>
        <TextField value={this.state.artistName} onChange={this.updateInput}/>
        <Button value={'SEARCH'} onClick={this.getTry}/>
        </div>
        <div class="test">
      {this.state.data !== ''?
     
      <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.data } 
        columns={ this.state.columns } 
        rowEvents={ this.rowEvent } /> 
        : <p>{data}</p> }
        { this.state.showDetails ? 
        <Details value1={this.state.allData} value2={this.state.row} /> : null }
        </div>
        </div>
    </div>
  
    );
}

}

export default App;
