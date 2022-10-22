import './app-info.css'

const AppInfo =(props)=>{
    return (
        <div className="app-info">
          <h1>Учет сотрудников АкваЛоо</h1>
          <h2>Общее число рабов этой фирмы: {props.sum} </h2>
          <h2>Премию получит только:{props.prim} </h2>
        </div>
    )

} 
export default AppInfo;