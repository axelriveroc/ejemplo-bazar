import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { resetPassword } from "../../../firebaseConfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await resetPassword(email);
      console.log({res})
    } catch (error) {
      console.log({error});
    }
  };
  return (
    <div>
      <h1>Olvido la contraseña</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Restablecer</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
