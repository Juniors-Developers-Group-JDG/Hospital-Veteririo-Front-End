import { MagnifyingGlass } from '@/components/PhosphorIcons'

import Styles from './SearchInput.module.sass'

export function SearchInput({ rightIcon, leftIcon, placeholder }) {
  return (
    <div className={Styles.SearchInputWrapper}>
      {
        leftIcon &&
        <MagnifyingGlass weight='bold' className={Styles.SearchInputIcon} />
      }
        <input placeholder={placeholder} />
      {
        rightIcon &&
        <MagnifyingGlass weight='bold' className={Styles.SearchInputIcon} />
      }
    </div>
  )
}