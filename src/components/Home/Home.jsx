import s from './Home.module.css'
export default function Home() {
    return (
        <div className={s.container}>
            <q className={s.cite}>Regression testing. What is it?
                If the system compiles, that's good, if it boots, that's great! </q>
            <div className={s.line}></div>
            <p className={s.author}>Linus Torvalds</p>
            <p className={s.description}>Linux kernel creator, hacker, 1969</p>
            <button className={s.button}>QA technical training</button>
            <button className={s.button}>Testing theory</button>
        </div>
    )
}