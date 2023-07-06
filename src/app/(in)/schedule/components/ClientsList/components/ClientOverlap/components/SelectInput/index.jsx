import Styles from './SelectInput.module.sass'

import { CaretDown } from '../../../../../../../../../components/PhosphorIcons'

export function SelectInput({ label, id, children, ...props }) {
  return (
    <div className={Styles.SelectInputContainer}>
      {
        label &&
          <label className={Styles.SelectInputLabel} htmlFor={id}>
            {label}
          </label>
      }

      <div className={Styles.SelectInputWrapper}>
        <select {...props} className={Styles.SelectInput} id={id}>
          {children}
        </select>

        <CaretDown weight='bold' className={Styles.CaretDownIcon} />
      </div>
    </div>
  )
}