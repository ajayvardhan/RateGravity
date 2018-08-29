import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RateGravity | Rate Quotes</h1>
        </header>
        <div className="container">
          <form>
            <div className="row p-10">
              <div class="form-group col-md-6">
                <label for="loanSize">Loan Size</label>
                <input type="text" class="form-control" id="loanSize" placeholder="Loan Size"/>
              </div>
              <div class="form-group col-md-6">
                <label for="propertyType">Property Type</label>
                <select class="form-control">
                  <option>SingleFamily</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                  <option>MultiFamily</option>
                </select>
              </div>
            </div>
            <div className="row p-10">
              <div class="form-group col-md-6">
                <label class="" for="creditScore">Credit Score</label>
                <input type="text" class="form-control" id="creditScore" placeholder="Credit Score"/>
              </div>
              <div class="form-group col-md-6">
                <label class="" for="occupancy">Occupancy</label>
                <select class="form-control">
                  <option>Primary</option>
                  <option>Secondary</option>
                  <option>Investment</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <button type="button" class="btn btn-lg btn-block">Quote Rates</button>
              </div>
            </div>
          </form>
          <br/><br/>
          <table class="table table-striped table-bordered">
            <thead>
              <tr> 
                <th>Lender</th>
                <th>Product</th>
                <th>Rate</th>
                <th>Closing Costs</th>
                <th>Monthly Payment</th>
                <th>APR</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
