import React, { useState } from 'react'


const Category = ({filterItem,catItems}) => {
    return (
        <>
                <div className="portList flex">
                {
                    catItems.map((curElem,index)=>{
                        return <button className="menu_btn" key={index} onClickCapture={active} onClick={()=>filterItem(curElem)}>{curElem}</button>
                    })
                }
                </div>
            
        </>
    )
}


function active(e){
    // console.log(e);
    let btns = document.querySelectorAll(".menu_btn");
    btns.forEach((elem)=>{
      elem.classList.remove('menu_active');
    })
    if(e.target.className==='menu_active')
    {
    }
    else
    {
      e.target.classList.add('menu_active');
    }
  }


export default Category