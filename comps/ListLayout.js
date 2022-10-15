import Link from "next/link";
import { numbersId } from "../data/numbersId";
import styles from "../styles/number.module.css";

const ListLayout = ({ children }) => {
    
  return (
    <div className={styles.mainbox}>
      <div className={styles.boxOne}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search1}
          />
        </div>
        {numbersId.map((number) => (
          <Link href={`/list/${number.id}`}  key={number.id} >
              <a className={styles.list}>
                <span className={styles.list1}>{number.title}</span>
              </a>
          </Link>
        ))}
      </div>
      <div className={styles.boxTwo}>
        <h2 className={styles.item}>{children}</h2>
          
      </div>
    </div>
  );
};

export default ListLayout;