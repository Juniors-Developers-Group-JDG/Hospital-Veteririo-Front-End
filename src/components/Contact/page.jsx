import styles from './about.module.scss';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import SimpleMap from '@/components/GoogleMap/page';

export default function Contact(){
  return(
    <main className={styles.main} id='contact'>
      <section className={styles.section_right}>
        <SimpleMap />
      </section>
      <section className={styles.section_left}>
        <div className={styles.section_left_text}>
        <h1>Entre em contato conosco:</h1>
        <p><a href="tel:11999999999"><BsFillTelephoneFill/> (11) 99999-9999</a></p>
        <p><a href="https://api.whatsapp.com/send?phone=5511999999999"><BsWhatsapp/> (11) 99999-9999</a></p>
        <p><a href="https://goo.gl/maps/9Z1J1Y7Y1Z2Z9Z1J6"><FiMap/> Rua dos Bobos, 0 - São Paulo - SP</a></p>
        <button>
          <a href="https://encurtador.com.br/dsGJ6"><LuMapPin/> Como chegar</a>
        </button>
        </div>
      </section>
    </main>
  )
}