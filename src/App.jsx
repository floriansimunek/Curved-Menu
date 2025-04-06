import { useState } from 'react';
import Button from './Button';
import Menu from './Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu />
    </>
  );
}

export default App;
