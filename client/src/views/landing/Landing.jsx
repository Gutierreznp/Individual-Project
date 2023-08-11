import style from './Landing.module.css';

export default function Landing () {
    return (
        <div className={style.container}>
      <div className={style.title}>
        <h1>Welcome To Your Travel Page!</h1>
        <p>Start your journey with us.</p>
        <a href="/home" className={style.link}>Get Started</a>
      </div>
    </div>
    )
}