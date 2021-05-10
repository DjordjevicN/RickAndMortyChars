import styles from '../../../styles/Char.module.css'
import Link from 'next/link'
const defaultEndPoint = "https://rickandmortyapi.com/api/character/";
export async function getServerSideProps({ query }) {
    const { id } = query
    const res = await fetch(`${defaultEndPoint}${id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const character = ({ data }) => {
    console.log(data);


    return (
        <>
            <Link href='/'>
                <a className={styles.link}>go back</a>
            </Link>
            <div className={styles.charWrapper}>
                <img className={styles.portal} src="/portal.png" alt="" />
                <div className={styles.content}>
                    <div className={styles.card}>
                        <img className={styles.cardImage} src={data.image} />
                        <h1>{data.name}</h1>
                        <p><span>Gender:</span> {data.gender}</p>
                        <p><span>Species:</span> {data.species}</p>
                        <p><span>Status:</span> {data.status}</p>
                        <p><span>Origin:</span> {data.origin.name}</p>
                        <p><span>Last known location:</span> {data.location.name}</p>
                        <p><span>Apear in :</span> {data.episode.length} episodes</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default character;