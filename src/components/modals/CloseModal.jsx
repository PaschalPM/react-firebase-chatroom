import { GrFormClose } from "react-icons/gr";
import { useAppContext } from "../../context/AppState";

function CloseModal() {
  const { setOpenLogin, setOpenSignup, setOpenModalBox } = useAppContext();

  const closeAction = function () {
    setOpenLogin(false);
    setOpenSignup(false);
    setOpenModalBox(false);
  };
  return (
    <button
      type="button"
      onClick={closeAction}
      className="absolute top-3 right-3 hover:scale-90 hover:opacity-70"
    >
      <GrFormClose size={35} />
    </button>
  );
}
export default CloseModal;
