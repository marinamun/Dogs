import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UpdateDog = () => {
  const { dogId } = useParams();
  const [temp, setTemp] = useState("");
  const navigate = useNavigate();
  let apiKey =
    "live_NJ8H321rZu9cJ6QmzAqtYZSnbs6iQAyI8Dud3fCU88cj0x55tomNRFJjxN3im4Ja";
  let apiUrl = `https://api.thedogapi.com/v1/breeds/${dogId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/breeds/${dogId}`,
          {
            headers: {
              "x-api-key":
                "live_NJ8H321rZu9cJ6QmzAqtYZSnbs6iQAyI8Dud3fCU88cj0x55tomNRFJjxN3im4Ja",
            },
          }
        );
        setTemp(response.data.temperament);
      } catch (error) {
        console.log("Couldn't retrieve the dog's information from the API");
      }
    };

    fetchData();
  }, [apiKey, apiUrl, dogId]);

  const updateTemp = async (event) => {
    event.preventDefault();

    let formData = temp;
    try {
      await axios.put(
        apiUrl,
        formData,

        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/dogs/${dogId}`);
    } catch (error) {
      console.log("Temp of dog couldn't be updated");
    }
  };

  return (
    <>
      <form>
        <label>
          Enter the new temp:{" "}
          <input
            type="text"
            value={temp}
            onChange={(event) => setTemp(event.currentTarget.value)}
          />
        </label>
        <button type="submit" onClick={updateTemp}>
          Update
        </button>
      </form>
    </>
  );
};
export default UpdateDog;
