import React from 'react'
import styles from "./services.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <h1>Services</h1>
      <div className={styles.serviceList}>
            <p style={{color:'var(--orange)'}}>Mobile App Development</p>
            <p style={{color:'var(--green)'}}>Website Development</p>
            <p style={{color:'var(--lightBlue)'}}>Software Architecture </p>
            <p style={{color:'var(--orange)'}}>UI/UX Design</p>
            <p style={{color:'var(--green)'}}> Project Management</p>
            <p style={{color:'var(--lightBlue)'}}>Testing</p>
            <p style={{color:'var(--orange)'}}>Mobile App Development</p>
            <p style={{color:'var(--green)'}}>Website Development</p>
            <p style={{color:'var(--lightBlue)'}}>Software Architecture </p>
            <p style={{color:'var(--orange)'}}>UI/UX Design</p>
            <p style={{color:'var(--green)'}}> Project Management</p>
            <p style={{color:'var(--lightBlue)'}}>Testing</p>
      </div>
      
    </section>
  )
}
