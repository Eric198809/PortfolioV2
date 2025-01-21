import "../style/projetCard.scss";

const ProjetCard = ({projet}) => {
  return (
    <>
      <div key={projet.id} className="projet_card" style={{backgroundImage:`url(${projet.image})`}}>
    <div className="content_projet">
    <h3>{projet.titre}</h3>
    {/* <p>{projet.content}</p> */}
    <div className="stack_projets">
      {projet.imageStack.map((stack , index)=>(
        
        <img key={index} src={stack} alt="image stack projet" style={{width:"30px"}} />
      ))}
    </div>
   <div className="projet_card_bouton">
    {projet.website && <a className="bouton" href={projet.website}>Voir le site
    <img style={{width: "15px"}} src="/icons/logoworld.svg" alt="logo world" /></a>}
    <a  className="bouton"href={projet.githubLink}>Voir le Github
      <img style={{width: "20px"}} src="/icons/github2.svg" alt="logo github" />
    </a>
</div>
</div>
</div>
      
    </>
  );
};

export default ProjetCard;