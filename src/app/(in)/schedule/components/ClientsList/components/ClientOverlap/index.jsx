import Styles from './ClientOverlap.module.sass'


import { Avatar } from '../../../../../../../components/Avatar'
import { TrashSimple, X } from '../../../../../../../components/PhosphorIcons'
import { SelectInput } from './components/SelectInput'
import { TextInput } from './components/TextInput'

export function ClientOverlap({ isOpen, onClose, userId }) {
  const userDataRetrievedByUserId = {
    avatarUrl: undefined,
    name: "John Doe",
  }

  function handleClose() {
    onClose()
  }

  if(isOpen) {
    return (
      <form className={Styles.ClientOverlapContainer}>
        <header>
          <div className={Styles.AvatarWrapper}>
            <Avatar avatarUrl={userDataRetrievedByUserId.avatarUrl} userName={userDataRetrievedByUserId.name} outlined={true} size='lg' />

            <TrashSimple weight='fill' role='button' className={Styles.DeleteClientButton} />
          </div>

          <X role='button' onClick={handleClose} weight='bold' className={Styles.CloseOverlapButton} />
        </header>

        <main>
          <TextInput placeholder="Nome" label="Nome:" id='name' />
          
          <TextInput placeholder="Email" label="Email:" id='email' />

          <SelectInput label="Gênero:" id='gender'>
            <option value='Male'>Masculino</option>
            <option value='Female'>Feminino</option>
            <option value='' selected>Selecione seu gênero</option>
          </SelectInput>
        </main>

        <footer>
          <button onClick={handleClose} data-color="danger" className={Styles.Button}>
            <X weight='bold' />
            Cancelar
          </button>

          <button className={Styles.Button}>
            Salvar
          </button>
        </footer>
      </form>
    )
}

  return <></>
}