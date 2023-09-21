'use client'

import { Users } from '@/components/PhosphorIcons';
import { SearchInput } from '@/components/form_components/SearchInput';
import { useUser } from '@/hooks/useUser';
import { useState } from 'react';
import Styles from './ClientsList.module.sass';
import { ClientOverlap } from './components/ClientOverlap';
import { ClientsListItem } from './components/ClientsListItem';

export function ClientsList() {
  const [isClientOverlapOpen, setIsClientOverlapOpen] = useState(false);

  const { selectedUser, selectUserByName, users } = useUser()

  function onClientOverlapClose() {
    setIsClientOverlapOpen(false)
  }

  function onClientListItemClick(userName) {
    selectUserByName(userName)

    setIsClientOverlapOpen(true)
  }

  return (
    <section className={Styles.ClientListContainer}>
      <header>
        <Users weight='fill' />

        <SearchInput placeholder='Buscar...' rightIcon />
      </header>

      <main>
          { 
            users || users.length > 0 ?
              users.map(user => (
                <ClientsListItem onClick={() => onClientListItemClick(user.name)} userName={user.name} key={user["_id"]} />
              ))
            :
              <p>Nenhum usuário encontrado</p>
          }
      </main>
      
      <ClientOverlap isOpen={isClientOverlapOpen} onClose={onClientOverlapClose} />
    </section>
  )
}