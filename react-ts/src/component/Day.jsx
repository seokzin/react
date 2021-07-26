import { useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <>
              <Word word={word} key={word.id} />
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
