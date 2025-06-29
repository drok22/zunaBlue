import { useEffect, useState } from "react";

function Ping() {
  const [ping, setPing] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/ping/")
      .then((res) => res.json())
      .then((data) => {
        setPing(data.message);
        console.log("Backend says:", data);
      })
      .catch((error) => {
        console.error("Error pinging database:", error);
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>React + Django Store</h1>
      <p>
        API Test Response: <strong>{ping ?? "Pinging Backend..."}</strong>
      </p>
    </div>
  );
}

export default Ping;