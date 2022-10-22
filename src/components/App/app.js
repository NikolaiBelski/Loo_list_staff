import { Component } from 'react';

import AppInfo from '../App-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../App-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm  from '../employers-add-form/employers-add-form';

import './app.css';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {name:'Nikki B', salary:3000,increase:false,id:1,rise:false},
                {name:'Ewgenia B', salary:66000,increase:false,id:2,rise:false},
                {name:'Ivan T', salary:3455,increase:false,id:3,rise:false},
                {name:'Joe Cocker', salary:1000,increase:false,id:4,rise:false},
                {name:'Pahomov M', salary:14555,increase:false,id:5,rise:false},
            ],
            tern:'',
            filter:'all'
        };

        this.maxId = 6;
    }

onDelete=(id)=>{
    this.setState(({data})=>{
        return {
            data:data.filter(elem=>elem.id !==id)
        }
    })
}


addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise:false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

onToggleprop = (id,prop)=>{

    this.setState(({data})=>({
        data: data.map(item => {

    if(item.id===id) {
        return {...item,[prop] : !item[prop] }
    } return item
})

    }))
}

searchEmp = (items,tern)=>{
if(tern.length===0) {
    return items
}
return items.filter(elem=>elem.name.indexOf(tern) > -1)
}

onUpdateSearch=(tern)=>{
    this.setState({tern:tern})

}

filterPost = (item,filter) =>{
switch (filter) {
    case'rise':
         return item.filter(elem=>elem.rise);
    case 'bo-bo':
        return item.filter(elem=>elem.salary>3000);
    default :return item
}}


onFilterSelect = (filter)=>{
this.setState({filter})
}

 render(){
    const{data,tern,filter} = this.state;
    const sum = this.state.data.length;
    let prim =this.state.data.filter(elem=>elem.increase).length;
    const visibleDate = this.filterPost(this.searchEmp(data,tern),filter);
     
    
             return (
                        <div className = 'app'> 
                            <AppInfo
                             sum = {sum}
                             prim = {prim}/>
            
                            <div className="search-panel">
                                <SearchPanel
                                onUpdateSearch={this.onUpdateSearch}/>
                                <AppFilter 
                                filter = {filter}
                                onFilterSelect = {this.onFilterSelect}
                                />
                            </div>
            
                            <EmployersList
                            data = {visibleDate}
                            onDelete = {this.onDelete}
                            onToggleprop = {this.onToggleprop}
                            />

                            <EmployersAddForm  addItem = {this.addItem}/>
                        </div>
                    )
       }


} 
    

    
  

export default App;




