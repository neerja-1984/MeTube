import React from "react";
import { Stack } from "@mui/material";

import { categories } from "./utilities/Constants"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      // every button has 2 things  .. icon + text
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        {/* icon --> if selected button ..change its style*/}
        <span 
          style={{ 
            color: category.name === selectedCategory ? "white" : "red", 
            marginRight: "15px" 
          }}>
          {category.icon}
        </span>

        {/* text --> if selected button ..change its style */}
        <span 
          style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}>
          {category.name}
        </span>

      </button>
    ))}
  </Stack>
);

export default Sidebar;