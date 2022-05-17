import type {NextPage} from 'next'
import style from "../../styles/scss/header/header.module.scss"

const Header: NextPage = () => {
    return (
        <div className={style.container}>
            <img src="/images/login/logifleet-logo.png" alt="Logifleet logo"/>
        </div>
    )
}

export default Header
