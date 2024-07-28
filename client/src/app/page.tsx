"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  console.log(">>>>>>>>>>>>>>>>> apiUrl >>>>>>>>>>>>>>>>>", apiUrl)

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${apiUrl}/api/items`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchItems();
  }, [apiUrl]);

  return (
    <div>
      <h1>Items from API</h1>
      {items ? (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
