'use client';

import { Clock, SunHorizon, UserMinus } from '@/components/PhosphorIcons';
import { useSchedule } from '@/hooks/useSchedule';
import Styles from './Schedule.module.sass';
import { ClientsList } from './components/ClientsList';

export default function SchedulePage() {
  const { monthTotalSchedules, monthTotalCanceledSchedules, todayTotalSchedules } = useSchedule();

  return (
    <div className={Styles.ScheduleContainer}>
      <section className={Styles.LeftSection}>
        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <Clock weight='bold' />
            <p>{monthTotalSchedules}</p>
          </div>
          <span>Agendamentos nesse mês</span>
        </section>

        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <SunHorizon weight='bold' />
            <p>{todayTotalSchedules}</p>
          </div>
          <span>Agendamentos hoje</span>
        </section>

        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <UserMinus weight='bold' />
            <p>{monthTotalCanceledSchedules}</p>
          </div>
          <span>Cancelamentos nesse mês</span>
        </section>
      </section>

      <ClientsList />
    </div>
  )
}