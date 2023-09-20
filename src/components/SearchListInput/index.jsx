'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import Style from './SearchListInput.module.sass';

export function SearchListInput({ list, onSelect, name,...props }) {
  const wrapper = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const searchedList = useMemo(() => list.filter(item => item.includes(inputValue)) , [list, inputValue])

  function handleItemSelect(value) {
    setInputValue(value)

    onSelect && onSelect(value)
  }

  function handleChange(event) {
    event.preventDefault();

    const value = event.target.value

    setInputValue(value);
  }

  function handleFocus() {
    setIsActive(true);
  }
  
  useEffect(() => {
    const currentWrapper = wrapper.current

    function blurFunction(e) {
      const leavingWrapper = !currentWrapper.contains(e.relatedTarget);
  
        if (leavingWrapper) {
          setIsActive(false)

          console.log(list.filter(item => item === inputValue).length)

          if(list.filter(item => item === inputValue).length === 0) {
            setInputValue('');

            return
          }

          onSelect && onSelect(inputValue)
        }
    }

    if(currentWrapper) {
      currentWrapper.addEventListener('focusout', blurFunction);

      return () => {
        currentWrapper.removeEventListener("focusout", blurFunction)
      }
    }
  }, [wrapper, list, inputValue, onSelect])

  return (
    <div ref={wrapper} className={Style.SearchListInputWrapper}>
      <input
        {...props}
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        autoComplete="true"
      />
      {isActive && (
        <ul className={Style.List}>
          {searchedList.map((item) => (
            <li
              tabIndex="0" 
              role="button"
              className={Style.Item}
              key={item}
              onClick={() => {
                handleItemSelect(item)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}