import { useGetUsers } from '../../gen/clients/hooks/usersController'

const ScreenHome = () => {
  const data = useGetUsers()
  return (
    <div>
      <div>{data.isLoading && 'Loading...'}</div>
      <div>{!data.data ? null : JSON.stringify(data.data.data)}</div>
    </div>
  )
}

export default ScreenHome
