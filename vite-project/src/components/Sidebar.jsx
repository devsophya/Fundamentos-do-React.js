import { PencilLine } from '@phosphor-icons/react' 

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img  
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/devsophya.png" />

                <strong>Sophya Damiazo</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a> 
            </footer>
        </aside>
    );
}