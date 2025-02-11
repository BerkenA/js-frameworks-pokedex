import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product() {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://v2.api.noroff.dev/auction/listings/" + params.id
      );
      const data = await res.json();
      console.log(data);
      setData(data.data);
    }
    getData();
  }, []);

  return (
    <div id="card" className="m-auto max-w-2xl">
      {data.id ? (
        <div>
          <h2>{data.title}</h2>
          {data.media.length && <img src={data.media[0].url} alt="alt text" />}
          <p>{data.description}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>created: {data.created}</p>
          <p>updated: {data.updated}</p>
          <p>ENDS_AT: {data.endsAt}</p>
          <br />
          <br />
          <br />
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
}
