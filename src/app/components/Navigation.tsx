import Link from "next/link"
import styles from './Navigation.module.css'
import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import logo from '../../../public/logo2.svg'

export function Navigation () {
    const links = [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'About',
          route: '/about'
        },
        {
          label: 'Proyects',
          route: '/proyects'
        },
        {
          label: 'Contact',
          route: '/contact'
        }
      ]
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#">
                        <img src="https://i.ibb.co/hWvVcG4/logo2.png" alt="logo" />
                        <p>JHONATAN BOLIVAR</p>
                    </a>
                </div>
                <div>
                    <nav>
                        <ul className={styles.nav}>
                            {links.map(({ label, route }) => {
                                return(
                                <li className={styles.li} key={route}>
                                    <Link href={route}>
                                        {label}
                                    </Link>
                                </li>
                                )
                            })}
                            <a className={styles.download} href="./jhonatan.pdf" download="CV_Jhonatan_Bolivar">Descargar cv</a>
                        </ul>
                    </nav>

                </div>
                <div className={styles.socialNetworks}>
                    <a href="#">
                        <IconBrandFacebook/>
                    </a>
                    <a href="#">
                        <IconBrandTwitter/>
                    </a>
                    <a href="#">
                        <IconBrandInstagram/>
                    </a>
                    <a href="https://github.com/JhonatanBo2124">
                        <IconBrandGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/jhonatan-bol%C3%ADvar-b49869230/">
                        <IconBrandLinkedin/>
                    </a>
                </div>
            </div>
        </header>
    )
}