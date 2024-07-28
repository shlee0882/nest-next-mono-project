'use client'

import { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [items, setItems] = useState([])
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
  console.log('>>>>>>>>>>>>>>>>> apiUrl >>>>>>>>>>>>>>>>>', apiUrl)
  const router = useRouter()

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${apiUrl}/api/items`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchItems()
  }, [apiUrl])

  const navigateTo = (url: string) => {
    router.push(url)
  }

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigateTo(`${apiUrl}/swagger`)}
        >
          Swagger Page
        </button>
        <button
          style={styles.button}
          onClick={() => navigateTo(`${apiUrl}/api/items`)}
        >
          NestJs GET Items API
        </button>
      </div>
      <div style={styles.divStyle1}>여기는 NextJs 화면입니다.</div>
      {items ? (
        <div>
          <h2>NestJs 호출한 API:</h2>
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row' as 'row', // 가로로 버튼 배치
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'left' // 버튼들을 가운데 정렬
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center' as 'center' // Cast to a specific value
  },
  divStyle1: {
    fontSize: '16px',
    color: 'green',
    fontWeight: 'bold'
  }
}
