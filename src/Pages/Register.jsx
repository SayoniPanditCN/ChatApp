import React, { useState } from "react";
import "../style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.value);
  };

  const navigate = useNavigate();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="FormContainer">
      <div className="FormWrap">
        <div className="logo">Chat box</div>
        <div className="title">Register</div>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Display name"
          />
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
          <input
            value={file}
            onChange={handleFile}
            className="FileInput"
            type="file"
            id="file"
          />
          <label htmlFor="file" className="ImgInput">
            Choose an image
          </label>
          <button>Sign up</button>
        </form>
        <div className="title">
          Do you have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
