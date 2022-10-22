import './employers-add-form.css'
import {Component} from 'react';



class EmployersAddForm extends Component {
        constructor(props) {
    super(props);
    this.state = {
        name:'',
        salary:''
    }
  }
      onName = (e) =>{
        this.setState({
    [e.target.name]:e.target.value
        })
      }

      onSubmit = (e) => {
        e.preventDefault();
         if(!this.state.name||!this.state.salary)return
            this.props.addItem(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        
      
    }
            
 render() {
    let {name,salary} = this.state

        return (
            <div className="app-add-form">
                    <h3>Добавьте нового холопа</h3>
                    <form
                        className="add-form d-flex"
                        onSubmit = {this.onSubmit}>
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="Как его по-батюшке?" 
                            onChange={this.onName}
                            name = "name"
                            value={name}/>
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в мешках с зерном?"
                            onChange={this.onName}
                            name = 'salary'
                            value={salary} />
        
                        <button type="submit"
                                className="btn btn-outline-light">Заарканить</button>
                </form>
            </div>
        
                )

    }

    }
export default EmployersAddForm;