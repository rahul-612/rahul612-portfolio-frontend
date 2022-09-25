import React from 'react'

const MenuItems = ({ items }) => {
    return (
        <>
            <div className="project_container flex">
                {
                    items.map((elem,index) => {
                        const { id, name, image,url } = elem;    //oject destructuring

                        return (
                                    <a href={url} target="_blank" className="hover_effect" key={index}>

                                    {/* for Images */}
                                        <img src={image} alt={name} className='p_img' />
                                        <h1 className="p_title">{name}</h1>
                                        <i className="fas fa-4x fa-search p_icon"></i>
                                    </a>
                        )
                    })
                }

            </div>
        </>
    )
}


export default MenuItems
