import "./employers-list.css"
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data,onDelete,onToggleprop})=>{
    const elements = data.map((elem)=>{
    const {id,...itemProps} = elem;

                    return <EmployersListItem 
                    key = {id}
                    {...itemProps} 
                    onDelete = {()=>onDelete(id)}
                    onToggleprop = {(e)=>onToggleprop(id,e.currentTarget.getAttribute('data-toggle'))}
                    />
})

    return (
        <ul className="app-list list-group">
        
        {elements}
            
        </ul>

    )
}

export default EmployersList;