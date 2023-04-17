import React from "react";


const UserList = ({ users }) => {

    console.log(users)

    return (
        <><div className="mt-6">

            <table className=" mx-auto w-full lg:w-3/4 ">
                <thead className="uppercase bg-inherit shadow">
                    <tr className="px-2 md:px-3 ">
                        <th className="px-3 text-left">ID</th>
                        <th className="px-3 text-left">Name</th>
                        <th className="px-3 text-left">Username</th>
                        <th className="px-3 text-left">Email</th>
                        <th className="px-3 text-left">Phone</th>
                        <th className="px-3 text-left">Website</th>
                    </tr>
                </thead>
                <tbody className="">
                    {users?.map((user) => {
                        return (

                            <tr key={user.id} className="px-3">
                                <td className="px-3 py-2">{user.id}</td>
                                <td className="px-3 py-2">{user.name}</td>
                                <td className="px-3 py-2">{user.username}</td>
                                <td className="px-3 py-2">{user.email}</td>
                                <td className="px-3 py-2">{user.phone}</td>
                                <td className="px-3 py-2">{user.website}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default UserList;
