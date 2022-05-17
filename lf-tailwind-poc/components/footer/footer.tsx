import type {NextPage} from 'next'
import style from "../../styles/scss/footer/footer.module.scss"

const Footer: NextPage = () => {
    return (
        <div className={style.container}>
            <img src="/images/login/login-footer.png" alt="Logifleet Footer"/>
        </div>
    )
}

export default Footer
