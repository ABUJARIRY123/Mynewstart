import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function Sidebar() {
    const categories = [
        {
            name: "Science",
            contents: ["Year ", "Year", "Qawaidul Arba'a", "Nawaqidh Al Islaam" ]
        },
        {
            name: "Qura'an",
            contents: ["Tafseer", "Audio"]
        },
        {
            name: "Hadeeth",
            contents: ["Sahih Bukhaary", "Sahih Muslim", "Sunan Ibn Majah", "Sunan Abu Daud", "Sunan at Tirmidhy",
        "Sunan an Nasai", "Arbauna ANnawawi"]
        },
        {
            name: "Aqeedah",
            contents: ["Usulu Sunnah Imam Ahmad", "Sharhu Sunnah Imam Barbahary", "Usulu Sunah Imam Abdullah Ibn Zubeir"]
        },
        {
            name: "Fiqh",
            contents: ["Bulughul Maraam", "Umdatul Ahqaam", "Al Muharar fil Hadeeth"]
        },
        // Add other categories with their contents
    ];

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
    };

    return (
        <aside className="sidebar">
            <ul>
                {categories.map((category, index) => (
                    <li key={category.name}>
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            onClick={() => handleCategoryClick(index)}
                            className={activeCategory === index ? 'active' : ''}
                        />
                        {category.name}
                        {activeCategory === index && (
                            <ul>
                                {category.contents.map((content, idx) => (
                                    <li key={idx}>{content}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
