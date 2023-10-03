import React from 'react'
import { IUser, getAllUsers } from '../page';

const UserId = async ({params}: Params) => {
  const usersData: IUser[] = await getAllUsers();


  return (
    <div>
        <h1>User Details Page
        </h1>

        <ul>

<li>

        {usersData[params.id-1].id}
</li>
<li>

        {usersData[params.id-1].name}
</li>
<li>

        {usersData[params.id-1].username}
</li>
<li>

        {usersData[params.id-1].email}
</li>
        </ul>
        
    </div>
  )
}

interface Params {
    params: { id: number, };
  }
export default UserId