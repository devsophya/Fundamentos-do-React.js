import { HandHeart, HeartStraight, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/devsophya.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sophya Damiazo</strong>
                            <time title="26 de Abril às 20:15h" dateTime="2025-04-26 20:15:32">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <HandHeart size={20} />
                        Amei<span>30</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}