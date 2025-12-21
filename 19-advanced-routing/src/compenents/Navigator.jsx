import { useNavigate } from 'react-router-dom';

const Navigator = () => {

    let navigate = useNavigate()


  return (
    <div className="py-3 px-5 bg-cyan-400">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="font-medium bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="font-medium bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="font-medium bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
}

export default Navigator
