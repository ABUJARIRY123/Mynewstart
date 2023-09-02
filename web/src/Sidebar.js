import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    const categories = [
        {
            name: "Tawheed",
            contents: ["Kitaabu Tawheed ", "Fathul Majeed", "Qawaidul Arba'a", "Nawaqidh Al Islaam" ]
        },
        {
            name: "Kitaab",
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
        {
            name: "Seera",
            contents: ["Rakheeq Makhtuum ", "Bidaya wa Nnihaya", "Qawaidul Arba'a", "Nawaqidh Al Islaam"]
        },
        {
            name: "Lugha",
            contents: ["Kitabu cha Kwanza ", "Kitabu cha Pili", "Qawaidul Arba'a", "Nawaqidh Al Islaam"]
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
                                    <li key={idx}>
                                        <Link to={`/category/${content.replace(/\s+/g, '-').toLowerCase()}`}>
                                            {content}
                                        </Link>
                                    </li>
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
