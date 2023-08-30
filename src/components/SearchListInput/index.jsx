'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import Style from './SearchListInput.module.sass';

export function SearchListInput({ list }) {
  const wrapper = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const searchedList = useMemo(() => list.filter(item => item.includes(inputValue)) , [list, inputValue])

  function handleItemSelect(userName) {
    setInputValue(userName)
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
          }
        }
    }

    if(currentWrapper) {
      currentWrapper.addEventListener('focusout', blurFunction);

      return () => {
        currentWrapper.removeEventListener("focusout", blurFunction)
      }
    }
  }, [wrapper, list, inputValue])

  return (
    <div ref={wrapper} className={Style.SearchListInputWrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {isActive && (
        <ul className={Style.List}>
          {searchedList.map((item) => (
            <li
              tabindex="0" 
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