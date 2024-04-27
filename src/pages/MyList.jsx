import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const {user}= useAuth() || {}
    const [list, setList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myList/${user?.email}`,)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    }, [user])
    // console.log(list);


    const handleDelete = id=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myList/${id}`, {
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    
                    if(data.deletedCount > 0){
                       const remaining = list.filter(item=> item._id !== id)
                       setList(remaining)
                       swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                    else{
                        setList(list)
                    }
                   
                })
              
            
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                html: "Your file will not be delete! 😊",
                icon: "error"
              });
              
            }
          });
    }
    return (
        <div>
            
            
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-center">My Tourist Spot  summary</h2>
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
					<th className="p-3">Avarage Cost/Year</th>
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
						<p>${item.avgCost}</p>
					</td>
					<td className="px-3 py-2">
						<Link to={`/spots-update/${item._id}`} className="cursor-pointer text-xl"><GrEdit/></Link>
					</td>
					<td className="px-3 py-2">
						<button onClick={()=>handleDelete(item._id)} className="dark:text-gray-600 text-xl text-red-500 cursor-pointer"><RiDeleteBinFill/></button>
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