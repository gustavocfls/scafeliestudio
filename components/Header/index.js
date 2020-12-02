import "./Header.scss"

import Image from 'next/image'
import Link from 'next/link'

function Header() {
       
    return <>
    
    <header>
        <div className="main--container flex wrap align-items-center">

        <div className="item">

        <Link href="/">
                <a>
            

        <Image
            src="/svg/logo-scafeli.svg"
            alt="FCKNG CRTVE STDIO"
            width="55"
            height="80"
        />
        </a>
        </Link>

        </div>



<div className="item">
        <ul className="menu--header">

            <li>

            <Link href="/">
                <a>Sobre</a>
            </Link>

            </li>


            <li>

            <Link href="/">
                <a>Serviços</a>
            </Link>

            </li>

            

            <li>

            <Link href="/">
                <a>Trabalhos</a>
            </Link>

            </li>


            <li>

            <Link href="/">
                <a>Produtos</a>
            </Link>

            </li>

            

            <li>

            <Link href="/">
                <a>Contato</a>
            </Link>

            </li>
            

        </ul>


        </div>


        </div>
    </header>
    
    </>
}

export default Header