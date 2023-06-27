import style from "./changePassword.module.scss";

export default function AlteredPassword({newPassword, setNewPassword, confirmNewPassword, setConfirmNewPassword}) {
  
  return (
    <div className={style.box}>
      
      <input
        value={newPassword}
        type="password"
        placeholder="Digite sua nova senha"
        onChange={(event) => setNewPassword(event.target.value)}
      />
      
      <input
        value={confirmNewPassword}
        type="password"
        placeholder="Confirme sua nova senha"
        onChange={(event) => setConfirmNewPassword(event.target.value)}
      />
    </div>
  
  );
}
