import { HandHeart, HeartStraight, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/devsophya.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sophya Damiazo</strong>
                            <time title="26 de Abril às 20:15h" datetime="2025-04-26 20:15:32">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <HandHeart />
                        Amei<span>30</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}