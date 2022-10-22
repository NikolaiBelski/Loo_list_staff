import './app-filter.css'


const AppFilter = (props)=> {
    const buttonsDate = [
            {name:'all',label:'Все сотрудники'},
            {name:'rise',label:'на повышение'},
            {name:'bo-bo',label:'З/п больше 3000$'},
    ]
   
const buttons = buttonsDate.map(({name,label,stl})=>{
    const active = props.filter===name;
    const clazz = active ? "btn-light":"btn-outline-light"
   
        return (
                <button type='button' 
                
                        className={`btn ${clazz}`}
                        key = {name}
                        onClick = {()=>props.onFilterSelect(name)}
                       >
                            {label}
                            
                </button>
                )})

        return(
            <div className="btn-group">
              {buttons}
            </div>
        )
 
}

export default AppFilter;