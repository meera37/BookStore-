import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { updateUserProfile } from "../../services/allApi";
import { serverUrl } from "../../services/serverUrl";
import { userProfileUpdateStatusContext } from "../../context/Contextshare";
//import { userProfileUpdateStatusContext } from "../../context/ContextShare";

function EditProfile() {
  const [offcanvasStatus, setoffcanvasStatus] = useState(false);

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cPassword: "",
    bio: "",
    profile: "",
  });
  // pic preview
  const [preview, setPreview] = useState("");
  // token store
  const [token, setToken] = useState("");

  // state to store if there is already profile img to show in profile page
  const [existingProfileImage, setexistingProfileImage] = useState("");

  // for update status of edit profile section
  const [updateStatus, setupdateStatus] = useState({});

  // update view in profile side img and name without refresh by contex
  const {setUserProfileUpdateStatus} = useContext(userProfileUpdateStatusContext)


  // pic upload
  const handleAdd = (e) => {
    console.log(e.target.files[0]);
    setUserDetails({ ...userDetails, profile: e.target.files[0] });
    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  // reset
  const handleReset = () => {
    if (sessionStorage.getItem("token")) {
            const user = JSON.parse(sessionStorage.getItem("existingUser"));
            setAdminDetails({
              username: user.username,
              password: user.password,
              cPassword: user.password,
            });
            setexistingProfileImage(user.profile);
    }
          setPreview("");
  };

  // submit
  const handleSubmit = async () => {
    const { username, password, cPassword, bio, profile } = userDetails;
    console.log(username, password, cPassword, bio, profile);

    if (!username || !password || !cPassword || !bio) {
      toast.warning("please fill all fields");
    }

    // all field fill
    else {
      // to check pswd
      if (password !== cPassword) {
        toast.warning("password must match");
      }

      // psswd match
      else {
        // if there is preview(upload image)
        if (preview) {
          // header
          const reqHeader = {
            Authorization: `Bearer ${token}`,
          };

          // body
          const reqBody = new FormData();
          for (let key in userDetails) {
            reqBody.append(key, userDetails[key]);
          }

          const result = await updateUserProfile(reqBody, reqHeader);
          //console.log(result);
          if (result.status == 200) {
            toast.success("update successfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setupdateStatus(result.data);
            setUserProfileUpdateStatus(result.data)
          } else {
            toast.error("something went wrong");
            setupdateStatus(result);
          }
        }

        // there is no preview
        else {
          const reqHeader = {
            Authorization: `Bearer ${token}`,
          };

          const result = await updateUserProfile(
            { username, password, bio, profile: existingProfileImage },
            reqHeader
          );
          //console.log(result);
          if (result.status == 200) {
            toast.success("update successfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setupdateStatus(result.data);
            setUserProfileUpdateStatus(result.data)
          } else {
            toast.error("something went wrong");
            setupdateStatus(result);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserDetails({
        username: user.username,
        password: user.password,
        cPassword: user.password,
        bio: user.bio,
      });
      setexistingProfileImage(user.profile);
    }
  }, [updateStatus]);

  return (
    <>
      <div>
        <button
          onClick={() => setoffcanvasStatus(true)}
          className="text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white"
        >
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit
        </button>
      </div>

      {offcanvasStatus && (
        <div>
          {/* to make background light */}
          <div
            onClick={() => setoffcanvasStatus(false)}
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
          ></div>
          {/* offcavas content */}
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0  overflow-y-auto">
            {/* title od offcanvas */}
            <div className="bg-gray-900 text-white text-2xl px-3 py-4 flex justify-between">
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon
                onClick={() => setoffcanvasStatus(false)}
                icon={faXmark}
              />
            </div>
            <div className="relative flex justify-center items-center  flex-col">
              <label htmlFor="profilefile" className="mt-10">
                <input
                  onChange={(e) => handleAdd(e)}
                  type="file"
                  id="profilefile"
                  style={{ display: "none" }}
                  className=""
                />
                {existingProfileImage == "" ? (
                  <img
                    src={
                      preview
                        ? preview
                        : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"
                    }
                    alt="no image"
                    style={{ height: "200px", width: "200px",borderRadius:'50%' }}
                  />
                ) : (
                  <img
                    src={
                      preview
                        ? preview
                        : `${serverUrl}/upload/${existingProfileImage}`
                    }
                    alt="no image"
                    style={{ height: "200px", width: "200px",borderRadius:'50%' }}
                  />
                )}
                <div
                  className="bg-yellow-300 z-53  text-white py-3 px-4 rounded absolute "
                  style={{ marginLeft: "135px", marginTop: "-50px" }}
                >
                  <FontAwesomeIcon icon={faPen} />
                </div>
              </label>

              <div className="mb-3 w-full mt-5  px-5">
                <input
                  value={userDetails.username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"
                />
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                <input
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  type="text"
                  placeholder="Password"
                  className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"
                />
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                <input
                  value={userDetails.cPassword}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      cPassword: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Conform Password"
                  className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"
                />
              </div>

              <div className="mb-3 w-full mt-5 px-5">
                <textarea
                  value={userDetails.bio}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, bio: e.target.value })
                  }
                  type="text"
                  placeholder="Bio"
                  className="w-full border border-gray-300 placeholder:text-gray-400 p-2 rounded"
                ></textarea>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white"
                >
                  Update
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
}

export default EditProfile;

// import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useState } from 'react'

// function EditProfile() {

//   const [offcanvasStatus, setOffCanvasStatus] = useState(false)
//   const [userDetails,setUserDetails] = useState({
//     username:"",
//     password: "",
//     cPassword: "",
//     bio:"",
//     profile: ""
//   })
//   console.log(userDetails);
//   const [preview,setPreview] = useState("")
  
//   return (
//     <>
//       <div>
//         <button onClick={() => setOffCanvasStatus(true)} className='text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white'>
//           <FontAwesomeIcon icon={faPenToSquare} className='me-1' />Edit</button>
//       </div>

//       {offcanvasStatus && <div>
//         <div className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full" onClick={() => setOffCanvasStatus(false)}></div>

//         <div className='bg-white w-90 h-full z-50 fixed top-0 left-0'>
//           {/* title */}
//           <div className='bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl'>
//             <h1>Edit User Profile</h1>
//             <FontAwesomeIcon icon={faXmark} onClick={() => setOffCanvasStatus(false)} />
//           </div>
//           {/* body */}
//           <div className='flex justify-center items-center flex-col my-5'>
//             <label htmlFor="profilefile">
//               <input id='profilefile' type="file" style={{ display: 'none' }} />
//               <img className='z-52' src={preview? preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"} alt="no image" style={{ width: '90px', height: '90px'}} />
//             <div className='bg-yellow-300 text-white z-53 fixed rounded py-1 px-2' style={{marginLeft:'80px', marginTop:'-30px'}}><FontAwesomeIcon icon={faPen} className=''/></div>
//             </label>

//             <div className="mb-3 mt-5 w-full px-5">
//               <input type="text" value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} placeholder='Username' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
//             </div>
//             <div className="mb-3 w-full px-5">
//             <input type="text" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}  placeholder='Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
 
//             </div>
//             <div className="mb-3 w-full px-5">
//             <input type="text" value={userDetails.cPassword} onChange={(e)=>setUserDetails({...userDetails,cPassword:e.target.value})}  placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />

//             </div>
//             <div className="mb-3 w-full px-5">
//             <textarea value={userDetails.bio} onChange={(e)=>setUserDetails({...userDetails,bio:e.target.value})}  placeholder='Bio' rows={4} className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'></textarea>

//             </div>

//             <div className='flex justify-end w-full px-5 mt-5'>
//               <button className='bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white'>Reset</button>
//               <button className='bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white ms-4'>Update</button>
//             </div>
//           </div>
//         </div>

//       </div>}
//     </>
//   )
// }

// export default EditProfile