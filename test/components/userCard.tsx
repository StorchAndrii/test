import React from "react";
import Link from "next/link";
import { IUser } from "@/interface/user.interface";
import Image from "next/image";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  return (
    <Link
      href={`/user/${user.id.value}`}
      className="w-[280px] flex flex-col items-center border p-4 rounded-lg  hover:bg-gray-900 transition duration-300 ease-in-out"
    >
      <Image
        src={user.picture.medium}
        alt={`${user.name.first} ${user.name.last}`}
        width={100}
        height={100}
        className="rounded-full"
      />

      <h2 className="mt-4 text-xl font-semibold text-center">{`${user.name.first} ${user.name.last}`}</h2>
      <p className="text-gray-600 text-center text-sm">{user.email}</p>
    </Link>
  );
};

export default UserCard;
