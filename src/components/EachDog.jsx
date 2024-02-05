import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EachDog = () => {
  const [dog, setDog] = useState({});
  const { dogId } = useParams();
  let apiKey =
    "live_NJ8H321rZu9cJ6QmzAqtYZSnbs6iQAyI8Dud3fCU88cj0x55tomNRFJjxN3im4Ja";
  let apiUrl = `https://api.thedogapi.com/v1/breeds/${dogId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setDog(response.data);
      } catch (error) {
        console.log("Couldn't retrieve the dog's information from the api");
      }
    };
    fetchData();
  }, [apiUrl, apiKey, dogId]);

  return (
    <>
      <h3>Temperament of your dog:</h3>
      <p>{dog.temperament}</p>
      <Link to={`/updateDog/${dog.id}`}>Edit</Link>
    </>
  );
};
export default EachDog;
