import React from "react";
import { IUser } from "@/interface/user.interface";
import { usersAxios } from "@/api/usersAxios";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getUsers(): Promise<IUser | null> {
  try {
    const response = await usersAxios.getUser();
    return response.data.results[0];
  } catch (error) {
    return null;
  }
}

const UserPage = async () => {
  const user = await getUsers();

  if (!user) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">
        Users: {user.name.first + " " + user.name.last}
      </h1>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <div className="flex flex-col items-center">
          <Image
            src={user.picture.large}
            alt={user.name.first}
            width={150}
            height={150}
            className="rounded-full"
          />
          <p className="text-gray-600 text-center text-sm mt-2">
            <Link
              href={`mailto:${user.email}`}
              className="text-blue-500 underline"
            >
              {user.email}
            </Link>
          </p>
          <Link href={"/"} className="mt-4">
            back
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
