import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";
import SahihBukhaary from "./SahihBukhaary";

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
            },
            {
              name: "Usulu Thalatha",
            },
            {
              name: "Qawaeed Arba",
            },
            // Add other books
          ],
        },
        {
          name: "Hadeeth",
          Books: [
            {
              name: "Bukhaar",
            },
            {
              name: "Muslim",
            },
            {
              name: "Ibn Majah",
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
            },
            {
              name: "Usulu Thalatha",
            },
            {
              name: "Qawaeed Arba",
            },
            // Add other books
          ],
        },
        {
          name: "Hadeeth",
          Books: [
            {
              name: "Sahih Bukhaar",
            },
            {
              name: "Muslim",
            },
            {
              name: "Ibn Majah",
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
    setActiveBook(null);
  };

  const handleBookClick = (bookIndex) => {
    setActiveBook(activeBook === bookIndex ? null : bookIndex);
  };

  return (
    <aside className="sidebar">
      <ul className="teacher-list">
        <li>
          <h3>Shuyuukh</h3>
        </li>
        {Teachers.map((teacher, teacherIndex) => (
          <li key={teacher.name} className="teacher-item">
            <FontAwesomeIcon
              icon={
                activeCategory === teacherIndex
                  ? faChevronCircleDown
                  : faChevronCircleRight
              }
              onClick={() => handleCategoryClick(teacherIndex)}
              className={activeCategory === teacherIndex ? "active" : ""}
            />
            {teacher.name}
            {activeCategory === teacherIndex && (
              <ul className="category-list">
                {teacher.categories.map((category, categoryIndex) => (
                  <li key={category.name} className="category-item">
                    <FontAwesomeIcon
                      icon={
                        activeBook === categoryIndex
                          ? faChevronCircleDown
                          : faChevronCircleRight
                      }
                      onClick={() => handleBookClick(categoryIndex)}
                      className={activeBook === categoryIndex ? "active" : ""}
                    />
                    {category.name}
                    {activeBook === categoryIndex && (
                      <ul className="book-list">
                        {category.Books.map((book) => (
                          <li key={book.name} className="book-item">
                            <Link to={`/category/sahih-bukhaary`}>
                              {book.name}
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
    </aside>
  );
}

export default Sidebar;
