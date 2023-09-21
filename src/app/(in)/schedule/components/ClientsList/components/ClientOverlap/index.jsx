'use client'

import Styles from './ClientOverlap.module.sass'

import { useUser } from '@/hooks/useUser'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Avatar } from '../../../../../../../components/Avatar'
import { TrashSimple, X } from '../../../../../../../components/PhosphorIcons'
import { TextInput } from './components/TextInput'

const defaultFormData = {
  name: "",
  email: "",
}

export function ClientOverlap({ isOpen, onClose }) {
  const { selectedUser, refetchUsers } = useUser()

  console.log({selectedUser})

  const [formData, setFormData] = useState(defaultFormData)

  console.log({formData})

  function handleInputChange(val, name) {
    setFormData(state => ({...state, [name]: val}))
  }

  function register(name) {
    return { value: formData[name], onChange: e =>  handleInputChange(e.target.value, name)}
  }

  function handleClose() {
    setFormData(defaultFormData);
    onClose();
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      await axios.patch(`https://jdg-site-vet.onrender.com/user/${selectedUser["_id"]}`, formData)

      refetchUsers()

      handleClose()
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if(selectedUser) {
      setFormData({
        email: selectedUser.email || "",
        name: selectedUser.name || "",
      })
    }
  }, [selectedUser])

  return isOpen ? (
    <form onSubmit={handleFormSubmit} className={Styles.ClientOverlapContainer}>
      <header>
        <div className={Styles.AvatarWrapper}>
          <Avatar avatarUrl={selectedUser?.avatarUrl} userName={selectedUser?.name} outlined={true} size='lg' />

          <TrashSimple weight='fill' role='button' className={Styles.DeleteClientButton} />
        </div>

        <X role='button' onClick={handleClose} weight='bold' className={Styles.CloseOverlapButton} />
      </header>

      <main>
        <TextInput {...register("name")} placeholder="Nome" label="Nome:" id='name' />
        
        <TextInput {...register("email")} placeholder="Email" label="Email:" id='email' type="email" />
      </main>

      <footer>
        <button type='button' onClick={handleClose} data-color="danger" className={Styles.Button}>
          <X weight='bold' />
          Cancelar
        </button>

        <button className={Styles.Button}>
          Salvar
        </button>
      </footer>
    </form>
  ) : <></>
}