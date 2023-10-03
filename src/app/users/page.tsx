import Link from "next/link";

export default async function Users() {
  const usersData: IUser[] = await getAllUsers();

  return (
    <div className="relative overflow-x-auto mx-5">
      <h1 className="text-center text-2xl font-bold mt-1">All Users List</h1>
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-left border dark:border-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">User Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">City</th>
          </tr>
        </thead>
        {usersData.map((user) => (
          <tbody>
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </th>

              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.city}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}
