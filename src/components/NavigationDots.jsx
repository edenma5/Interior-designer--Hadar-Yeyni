import React from "react";

const navbarNames = [
  "ראשי",
  "אודות",
  "פרוייקטים",
  "כישורים",
  "המלצות",
  "צור קשר",
];
export default function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {navbarNames.map((item, index) => {
        return (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#622626" } : {}}
          />
        );
      })}
    </div>
  );
}
