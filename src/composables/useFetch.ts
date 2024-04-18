const useFetch = async <T = any>(url: string): Promise<T | undefined> => {
  try {
    console.log(url)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    console.error('Error fetching data:', error)
    return undefined
  }
}

export default useFetch
