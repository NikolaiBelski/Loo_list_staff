import './search-panel.css'
import { Component } from 'react'

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tern:''
      }
   }

   onUpdate=(e)=>{
      const tern = e.target.value;
      this.setState({tern})
      this.props.onUpdateSearch(tern)

   }
   render() {
      return (
         <input
              type="text"
              placeholder = 'Найти этого счастливчика'
              className = "form-control search-input" 
              value = {this.state.tern}
              onChange={this.onUpdate}
              
              />
      )      
   }
  
   
}

export default SearchPanel