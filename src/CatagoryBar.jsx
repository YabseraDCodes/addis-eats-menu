export function CatagoryBar({selectedCatagory, selectCatagory}){
    const catagory = ["ALL", "MAIN", "DRINK", "BREAKFAST", "DESSERT"];

    return (
    <div className="category-filter">
        {catagory.map((item)=>(
            <button key={item} className={selectedCatagory === item ? 'active' : ''} onClick={()=> selectCatagory({category: item})}>{item}</button>
        ))}
    </div>
    )
}