import style from './password.module.scss';

export default function Password({ ...props }) {
  return (
      <div className={style.box}>
        <input
          {...props}
          type="password"
        />
      </div>
    
  );
}
