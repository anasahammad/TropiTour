import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";

const MyList = () => {
    const {user}= useAuth() || {}
    const [list, setList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    }, [user])
    console.log(list);
    return (
        <div>
            
            
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				
			</colgroup>
			<thead className="bg-[#FA7436] text-white ">
				<tr className="dark:bg-gray-300">
					<th className="p-3">Spot Name</th>
					<th className="p-3">Country</th>
					<th className="p-3">Location</th>
					<th className="p-3">Total Visitors Per Year</th>
					<th className="p-3">Update</th>
					<th className="p-3">Delete</th>
					
				</tr>
			</thead>
            {
                list.map((item, idx)=><tbody key={idx} className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 lg:text-xl dark:text-gray-600">{item.spotName}</td>
					<td className="px-3 py-2">
						<p>{item.country}</p>
					</td>
					<td className="px-3 py-2">
						<p className="dark:text-gray-600">{item.location}</p>
					</td>
					<td className="px-3 py-2">
						<p>{item.totalVisitors}</p>
					</td>
					<td className="px-3 py-2">
						<p className="cursor-pointer text-xl"><GrEdit/></p>
					</td>
					<td className="px-3 py-2">
						<p className="dark:text-gray-600 text-xl text-red-500 cursor-pointer"><RiDeleteBinFill/></p>
					</td>
					
				</tr>
				
			</tbody>)
            }
			
			
			
		</table>
	</div>
</div>
        </div>
    );
};

export default MyList;