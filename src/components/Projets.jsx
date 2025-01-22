import projets from "../json/projets.json";
import "../style/projets.scss";
import ProjetCard from "./ProjetCard";
import { useState } from "react";

const Projets = () => {
  const projetsMenu = [
    "React",
    "React Native",
    "Javascript",
    "TypeScript",
    "PHP (wordpress)",
  ];
  const [selectedMenu, setSelectedMenu] = useState("React");
  const[AllprojetsIsOpen, setAllprojetsIsOpen] = useState(false)

  return (
    <>
      <section className="projets_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Réalisations</h2>
          <span className="title_section_line_droite"></span>
        </div>
      {!AllprojetsIsOpen && <div className="projets_container">
          <h4>Derniers projets</h4>
          <div className="projets">
            {projets
              .sort((a, b) => b.id - a.id)
              .slice(0, 3)
              .map((projet) => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
          </div>
        </div>}
        <div className="all_projets_section">
         {AllprojetsIsOpen? <button className="bouton" onClick={()=>setAllprojetsIsOpen(!AllprojetsIsOpen)}>Masquer les projets</button> : <button className="bouton" onClick={()=>setAllprojetsIsOpen(!AllprojetsIsOpen)}>Voir tous les projets</button>}
       {AllprojetsIsOpen&& <div className="container_projets_menu">
        <ul>
          {projetsMenu.map((menu, index) => (
            <li
              value={menu}
              key={index}
              style={
                selectedMenu === menu
                  ? { background: "var(--secondary)" }
                  : null
              }
              onClick={() => setSelectedMenu(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
        
        <div className="all_projets">
        {selectedMenu
          ? projets
              .filter((projet) => projet.categorie.includes(selectedMenu))
              .map((projet) => <ProjetCard key={projet.id} projet={projet} />)
          : projets.map((projet) => (
              <ProjetCard key={projet.id} projet={projet} />
            ))}
          </div>
      </div>}
          
        </div>
      </section>
    </>
  );
};

export default Projets;
