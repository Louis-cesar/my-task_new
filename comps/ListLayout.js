import Link from "next/link";
import { numbersId } from "../data/numbersId";
import styles from "../styles/number.module.css";
import {useState} from 'react'

const ListLayout = ({ children }) => {
    const [filtered, setFiltered] = useState(numbersId);

    const filter = search => {
      setFiltered(numbersId.filter(s => s.title.toLowerCase().includes(search.toLowerCase())))
    }


  return (
    <div className={styles.mainbox}>
      <div className={styles.boxOne}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search1} 
            onKeyUp={e => filter(e.target.value)}
          />
        </div>
        <div className="scroll : grid-nav">
        {filtered.map((number) => (
          <Link href={`/list/${number.id}`}  key={number.id} >
              <a className={styles.list}>
                <span className={styles.list1}>{number.title}</span>
              </a>
          </Link>
        ))}
        </div>
      </div>
      <div className={styles.boxTwo}>
        <h2 className={styles.item}>{children}</h2>
          
      </div>
    </div>
  );
};

export default ListLayout;