import React,{useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import MenuItems from './MenuItems';

const allCatValues=[...new Set(Menu.map((currElem)=>{
    return currElem.category;
})),'all'];

const Project = () => {
    const [items, setItems] = useState(Menu);
    const [catItems,setCatItems]=useState(allCatValues);

    const filterItem = (category) => {
        if(category==='all'){
            setItems(Menu);
            return;
        }

        const updatedItems = Menu.filter((currElem) => {
            return currElem.category === category;
        })

        setItems(updatedItems);
    }


    return (
        <>
            {/* Our Menu List will come here */}
            <Category filterItem={filterItem} catItems={catItems}/>

            {/* Our Main items list section will come here */}
            <MenuItems items={items}/>
        </>
    )
}

export default Project;