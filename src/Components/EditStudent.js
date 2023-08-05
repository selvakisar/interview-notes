import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import CrumBar from "./CrumBar";
import { AppState } from "../Context/AppProvider";
import { API } from "../API/api";

export default function EditStudent() {
    const {studentData, setData} = AppState()
    const navigate = useNavigate()

    const { id } = useParams();


    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");

    useEffect(() => {
        console.log("id : ", id)
        const selectedStudent = studentData.find((stud, index) => stud.id === id);
        console.log(selectedStudent)
        setName(selectedStudent.name)
        setBatch(selectedStudent.batch)
        setQualification(selectedStudent.qualification)
        setPhone(selectedStudent.phone)
        setEmail(selectedStudent.email)
    }, [id,studentData])

   async function editStudent() {
        const editedStudentObject = {
            name,
            batch,
            email,
            phone,
            qualification
        }

        // api handlers 
        const response = await fetch(`${API}/${id}`, {
            method:"PUT",
            body: JSON.stringify(editedStudentObject),
            headers:{
                "Content-Type":"application/json"
            },
        })
      const data = await response.json();
      console.log("data----", data)
      console.log("editObj", editedStudentObject)
        // we need to find the index
        const editIndex = studentData.findIndex((stud, index) => stud.id === id);
        console.log(editIndex)
        studentData[editIndex] = data
        setData([...studentData]);
        navigate("/student/all")
    }

    return (
        <Base>
    <CrumBar/>
            <div className="p-5">Please Fill the form to add Edit Student</div>
            <div className="form-control">
                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        className="input input-bordered input-md w-96"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Batch</span>
                    <input type="text"
                        placeholder="Enter Student Batch"
                        className="input input-bordered input-md w-96"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="Enter Student Email"
                        className="input input-bordered input-md w-96"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md m-2">
                    <span>Phone</span>
                    <input
                        type="text"
                        placeholder="Enter Student Phone"
                        className="input input-bordered input-md w-96"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Education</span>
                    <input
                        type="text"
                        placeholder="Enter Student Education"
                        className="input input-bordered input-md w-96"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                    />
                </label>

                <button className="rounded-full bg-base-200 p-2 m-5"
                    onClick={editStudent}
                >
                    Edit Student
                </button>
            </div>
        </Base>
    )
}