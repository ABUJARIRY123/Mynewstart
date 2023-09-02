import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    const Teachers = [
        {
            name: "Teacher 1",
            categories: [
                {
                    name: "Tawheed",
                    Books: [
                        {
                            name: "Kitaabu Tawheed",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Usulu Thalatha",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Qawaeed Arba",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        // Add other books
                    ],
                },
                {
                    name: "Hadeeth",
                    Books: [
                        {
                            name: "Bukhaar",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Muslim",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Ibn Majah",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },
        {
            name: "Teacher 2",
            categories: [
                {
                    name: "Tawheed",
                    Books: [
                        {
                            name: "Kitaabu Tawheed",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Usulu Thalatha",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Qawaeed Arba",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        // Add other books
                    ],
                },
                {
                    name: "Hadeeth",
                    Books: [
                        {
                            name: "Bukhaar",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Muslim",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        {
                            name: "Ibn Majah",
                            Topics: ["Topic 1", "Topic 2"],
                        },
                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },

        // Add other teachers
    ];

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeBook, setActiveBook] = useState(null);

    const handleCategoryClick = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
        setActiveBook(null); // Close active book when switching categories
    };

    const handleBookClick = (bookIndex) => {
        setActiveBook(activeBook === bookIndex ? null : bookIndex);
    };

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <h2>Shuyuukh</h2>
                </li>
                {Teachers.map((teacher, teacherIndex) => (
                    <li key={teacher.name}>
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            onClick={() => handleCategoryClick(teacherIndex)}
                            className={activeCategory === teacherIndex ? 'active' : ''}
                        />
                        {teacher.name}
                        {activeCategory === teacherIndex && (
                            <ul className="teacher-list">
                                {teacher.categories.map((category, categoryIndex) => (
                                    <li key={category.name}>
                                        <FontAwesomeIcon
                                            icon={activeBook === categoryIndex ? faChevronCircleDown : faChevronCircleRight}
                                            onClick={() => handleBookClick(categoryIndex)}
                                            className={activeBook === categoryIndex ? 'active' : ''}
                                        />
                                        {category.name}
                                        {activeBook === categoryIndex && (
                                            <ul className="book-list">
                                                {category.Books.map((book, bookIndex) => (
                                                    <li key={book.name}>
                                                        <Link to={`/category/${category.name.replace(/\s+/g, '-').toLowerCase()}/${book.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                                            <FontAwesomeIcon icon={faChevronCircleRight} className="book-icon" />
                                                            {book.name}
                                                        </Link>
                                                        {activeBook === bookIndex && (
                                                            <ul className="topic-list">
                                                                {book.Topics.map((topic) => (
                                                                    <li key={topic}>
                                                                        <Link to={`/topic/${topic.replace(/\s+/g, '-').toLowerCase()}`}>
                                                                            {topic}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
