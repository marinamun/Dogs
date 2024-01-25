import { useEffect, useState } from "react";
import axios from "axios";

const Dogs = () => {
  let apiKey =
    "live_NJ8H321rZu9cJ6QmzAqtYZSnbs6iQAyI8Dud3fCU88cj0x55tomNRFJjxN3im4Ja";
  let apiUrl = "https://api.thedogapi.com/v1/breeds";

  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setAllDogs(response.data);
      } catch (error) {
        console.log("Axios response didn't work out");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>All dogssss</h1>
      <ul>
        {allDogs.map((eachDog) => (
          <li key={eachDog.id}>
            <h4>{eachDog.name}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Dogs;
