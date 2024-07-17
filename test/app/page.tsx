"use client";
import { useEffect, useState } from "react";
import { IUser } from "@/interface/user.interface";
import { IRequestStatus } from "@/interface/responseStatus.interfase";
import { usersAxios } from "@/api/usersAxios";
import UserCard from "@/components/userCard";

export default function Home() {
  const [requestStatus, setRequestStatus] = useState<IRequestStatus>({
    isLoading: true,
    isError: false,
  });
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await usersAxios.getUsers(1);

        setUsers(response.data.results);
        setRequestStatus({
          isError: false,
          isLoading: false,
        });
      } catch (error) {
        setRequestStatus({
          isError: true,
          isLoading: false,
          message: `Fetch Users Error: ${error}`,
        });
      }
    };
    void fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Users</h1>
      {requestStatus.isLoading ? (
        <div>loading...</div>
      ) : requestStatus.isError ? (
        <div>ERROR: {requestStatus.message}</div>
      ) : (
        <ul className="mt-6 flex flex-wrap gap-4 justify-center">
          {users.map((user) => (
            <li key={user.id.value}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
