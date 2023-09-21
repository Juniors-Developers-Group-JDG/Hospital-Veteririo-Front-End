import Styles from './TextInput.module.sass'

export function TextInput({ label, id, placeholder, ...props }) {
  return (
    <div className={Styles.TextInputContainer}>
      {
        label &&
          <label className={Styles.TextInputLabel} htmlFor={id}>
            {label}
          </label>
      }

      <input {...props} className={Styles.TextInput} id={id} placeholder={placeholder} />
    </div>
  )
}