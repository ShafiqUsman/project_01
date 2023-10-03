import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3 p-2 bg-slate-200 h-48 text-slate-900 ">
      <li>
        <Link href={"/prediction"} className="hover:text-blue-700">
          Prediction for a Name's, Gender, Age & Country
        </Link>
      </li>
      <li>
        <Link href={"/users"} className="hover:text-blue-700">
          Users List from Postman
        </Link>
      </li>
    </div>
  );
}
