import Image from 'next/image';
import doutores from '../../assets/about/doutores.png';
import styles from './about.module.scss';

export default function About(){
  return(
    <main className={styles.main} >
      <section className={styles.section_right}>
      <Image alt='Casal de veterinários' src={doutores} width={348} height={338}/>
      </section>
      <div className={styles.divider}/>
      <section className={styles.section_left}>
        <div className={styles.section_left_text}>
        <h1>Lorem ipsum dolor . Integer eleifend</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget congue lacus. Mauris quis urna ultrices, convallis eros eget, eleifend massa. Integer at leo erat. Etiam volutpat id tortor varius suscipit. Phasellus et lacus nunc. Sed ac ultrices orci. Suspendisse ac massa at arcu 
        Praesent eget velit viverra, pulvinar urna id, finibus lacus. Aliquam congue sit amet libero in rutrum. Nulla bibendum rutrum bibendum. Integer eleifend dolor in finibus finibus. </p>
        </div>
      </section>
    </main>
  )
}