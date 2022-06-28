import React from 'react'
import styles from "./styles.module.css";
import { Link} from "react-router-dom";
import { Button, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useBasket } from "../../contexts/BasketContext"

function Navbar() {
  const { items } = useBasket();

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
          <Link to="/">Hekto</Link>  
          </div>  
          <ul className={styles.menu}>
             <li>
                 <Link to="/">Products</Link>
             </li>
             <li>
                 <Link to="/">Pages</Link>
             </li>
             <li>
                 <Link to="/">Blog</Link>
             </li>
             <li>
                 <Link to="/">Shop</Link>
             </li>
             <li>
                 <Link to="/">Contact</Link>
             </li>
          </ul>
        </div>   
         
        <div className={styles.right}>
        
        <Input placeholder='Basic usage' size='md' htmlSize={15} width='auto' />
        <IconButton colorScheme='pink'aria-label='Search database'icon={<SearchIcon />}/>
     
        {items?.length > 0 && (
          <>
							<Link to="/basket">
								<Button colorScheme="pink" variant="outline">
									Basket ({items?.length})
								</Button>
							</Link>
            </>
					)}

        </div>
            
    </nav>
  )
}

export default Navbar