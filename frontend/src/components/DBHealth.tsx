import { useEffect, useState } from "react";

function DBHealth() {
  const [health, setHealth] = useState<any | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/health/")
      .then((res) => res.json())
      .then((data) => {
        setHealth(data);
        console.log("db health:", data);
      })
      .catch((error) => {
        console.error("Error checking database health:", error);
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>React + Django Store</h1>
      <p>
        API Test Response:{" "} <strong>{health ?? "Checking Backend Health..."}</strong>
      </p>
    </div>
  );
}

export default DBHealth;
