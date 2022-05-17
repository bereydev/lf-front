import type {NextPage} from 'next'
import style from "../styles/scss/login/login.module.scss"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Login: NextPage = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Header></Header>
            </div>
            <div className={style.content}>
                <div className={style.leftContent}>
                    <div className={style.formContainer}>
                        <div className={style.formHeader}>
                            <span className={'text-black-900' + style.blackHeader}>Welcome back <br/> to </span>
                            <span className={style.gradientHeader}>Logifleet</span>
                        </div>
                        <div className={style.formContent}>
                            <div className={style.labelContainer}>
                                <label className={'text-black-900 text-xl font-medium'}>Log in to your Logifleet 360° account</label>
                            </div>
                            <div className={style.inputContainer}>
                                <input className='form-control mr-2 rounded-l-lg pl-5 pr-5 pt-1 pb-1 text-xl'
                                       type='text' placeholder='Enter your username or email address'/>
                                <button className="bg-sky-600 hover:bg-sky-700 rounded-r-lg ...">
                                    <span className={'text-xl text-white'}>Login</span>
                                </button>
                            </div>
                        </div>
                        <div className={style.formFooter}>
                            <span className={'font-bold text-xl'}>Don’t have an account yet? </span>
                            <a href="" className={'font-bold underline text-cyan-600 text-xl'}>Contact us!</a>
                        </div>
                    </div>
                </div>
                <div className={style.rightContent}>
                    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-lg items-center">
                        <div className={style.rightContentImageContainer}>
                            <img src="/images/login/login-no-content.png"/>
                        </div>
                        <div className={style.rightContentTextContainer}>
                            <div className={style.rightTitleContainer}>
                                <span className={'font-bold text-2xl'}>Section title</span>
                            </div>
                            <div className={style.rightPContainer}>
                                <p className={'text-xl'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                        </div>
                        <div className={style.rightActionContainer}>
                            <button className={'w-40 pr-3 pl-3 pt-1 border-2 border-sky-600 rounded-lg text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 ...'}>
                                <div className={style.rightButtonContainer}>
                                    <span className={'font-bold'}>Call to action</span>
                                </div>
                                <div className={style.leftButtonContainer}>
                                    <svg className="h-8 w-8 border-sky-600 font-bold" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12 5 19 12 12 19"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Login
