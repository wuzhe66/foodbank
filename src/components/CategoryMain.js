import React from 'react';
import { category } from './Category';
import "../styles/CategoryMain.css";

const CategoryMain = () => {
    return (
        <div className="c-container">
            <div className="c-row">
                {category.map((item) =>(
                    <div className="c-col" key={item._id}>
                        <img src={item.image} alt={item.title} />
                        <div className="category-content">
                            <p>{item.title}</p>
                            <button className='c-btn'>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default CategoryMain;