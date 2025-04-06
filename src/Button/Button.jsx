import { useRef, useState } from 'react';
import styles from './Button.module.css';

function Button({ isMenuOpen, setIsMenuOpen }) {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen);

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <button ref={buttonRef} className={styles.button} onClick={handleClick} data-is-menu-open={isMenuOpen}>
      <div className={styles.line}></div>
      <div className={styles.line_invisible}></div>
      <div className={styles.line}></div>
      {ripples.map((ripple) => (
        <span key={ripple.id} className={styles.ripple} style={{ left: ripple.x + 'px', top: ripple.y + 'px' }} />
      ))}
    </button>
  );
}

export default Button;
