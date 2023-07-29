
import style from "./username.module.scss";


export default function Username({...props}) {
 
  return (
    <div className={style.box}>
      
      <input
        {...props}
        type="text"
        placeholder="username"
      />
    </div>
  
  );
}
