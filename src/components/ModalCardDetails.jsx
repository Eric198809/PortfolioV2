import "../style/modalCartdDetails.scss";

const ModalCardDetails = ({
  setModalDetailsIsOpen,
  modalDetailIsOpen,
  projet,
}) => {
  console.log(projet);

  return (
    <div className="modal_details_card_container">
      <button
        type="bouton"
        className="button_close_modal_card_details"
        onClick={() => setModalDetailsIsOpen(false)}
      >
        {" "}
        <img src="/icons/croix.svg" alt="icone fermer" />
      </button>
      <div className="main_image_details_card_container">
        <img src={projet.image} style={{ width: "100%" }} alt="" />
      </div>
      <div className="describe_projet">
        <h3>{projet.titre}</h3>
        <p>{projet.content}</p>
      </div>

      <div className="stack_projet">
        {projet.stackDetails.map((stack, index) => (
          <div key={index} className="stack">
            <img src={stack.image} alt="" />
            <p>{stack.techno}</p>
          </div>
        ))}
      </div>
      <div className="details_projet">
        {projet.details &&
          projet.details.map((details, index) => <p key={index}>{details}</p>)}
      </div>
    </div>
  );
};

export default ModalCardDetails;
