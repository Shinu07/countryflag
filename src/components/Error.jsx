
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
  return (
    <div><b>Error! Something is wrong:{error.status}</b>
    </div>
  )
}
