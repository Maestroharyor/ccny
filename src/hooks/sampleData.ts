import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useSampleUsers = () => {
  const { data, error } = useSWR('/data-sources/users.json', fetcher)

  return {
    users: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSampleTransactions = () => {
  const { data, error } = useSWR('/data-sources/history.json', fetcher)

  return {
    transactions: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}
