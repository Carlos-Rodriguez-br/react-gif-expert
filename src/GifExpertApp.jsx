import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newValue) => {
        const value = newValue.trim();
        if (value.length > 1 && !categories.includes(value)) {
            setCategories([value, ...categories]);
        }
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory setCategories={onAddCategory} />

            {categories.map(category =>
            (
                <GifGrid key={category} category={category} />
            ))
            }
        </>
    )
}
