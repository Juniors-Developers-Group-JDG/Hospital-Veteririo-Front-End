'use client'

import { Users } from '@/components/PhosphorIcons';
import { SearchInput } from '@/components/form_components/SearchInput';
import { useState } from 'react';
import Styles from './ClientsList.module.sass';
import { ClientOverlap } from './components/ClientOverlap';
import { ClientsListItem } from './components/ClientsListItem';

export function ClientsList() {
  const [isClientOverlapOpen, setIsClientOverlapOpen] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState('');

  function onClientOverlapClose() {
    setIsClientOverlapOpen(false)
  }

  function onClientListItemClick(userId) {
    setSelectedUserId(userId)

    setIsClientOverlapOpen(true)
  }

  return (
    <section className={Styles.ClientListContainer}>
      <header>
        <Users weight='fill' />

        <SearchInput placeholder='Buscar...' rightIcon />
      </header>

      <main>
        <ClientsListItem userName="John" onClick={() => onClientListItemClick("89f4742a-11e1-11ee-be56-0242ac120002")} />

        <ClientsListItem userName="John" onClick={() => onClientListItemClick("86987006-11e1-11ee-be56-0242ac120002")} />
      </main>
      
      <ClientOverlap isOpen={isClientOverlapOpen} onClose={onClientOverlapClose} userId={selectedUserId} />
    </section>
  )
}