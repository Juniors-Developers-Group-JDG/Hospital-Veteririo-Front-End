import Styles from './Schedule.module.sass';

import { Clock, SunHorizon, UserMinus } from '@/components/PhosphorIcons';

import { ClientsList } from './components/ClientsList';

export default function SchedulePage() {
  return (
    <div className={Styles.ScheduleContainer}>
      <section className={Styles.LeftSection}>
        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <Clock weight='bold' />
            <p>5</p>
          </div>
          <span>Agendamentos nesse mês</span>
        </section>

        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <SunHorizon weight='bold' />
            <p>2</p>
          </div>
          <span>Agendamentos hoje</span>
        </section>

        <section className={Styles.LeftSectionCardsContainer}>
          <div>
            <UserMinus weight='bold' />
            <p>1</p>
          </div>
          <span>Cancelamentos nesse mês</span>
        </section>
      </section>

      <ClientsList />
    </div>
  )
}