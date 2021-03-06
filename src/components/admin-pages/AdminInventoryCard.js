import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { default as firebase } from '../../firebase';
// import AdminEditCard from './AdminEditCard';

// sorting
const SORT_OPTIONS = {
  TYPE_ASC: { column: 'breed', direction: 'asc' },
};

const useInventory = (sortBy = 'TYPE_ASC') => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('Inventory')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        // debugger;
        const getInventory = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInventory(getInventory);
      });
  }, [sortBy]);

  return inventory;
};

const AdminInventoryCard = () => {
  const [sortBy] = useState('TYPE_ASC');
  const inventory = useInventory(sortBy);

  const Auth = useContext(AuthContext);

  // check if user is logged in
  const loggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) Auth.setLoggedIn(true);
    });
  };

  // delete
  const deleteItem = (id) => {
    firebase.firestore().collection('Inventory').doc(id).delete();
  };

  return (
    <>
      <div className='cards'>
        {inventory.map((inventory) => (
          <Card className='card' variant='outlined' key={inventory.id}>
            <CardContent>
              <CardMedia
                component='img'
                alt='inventory item'
                height='200'
                src={
                  inventory.image ||
                  require('../../images/placeholder-images-image_large.webp')
                }
                title='inventory item'
              />
              <Typography gutterBottom variant='h5' component='h2'>
                {inventory.breed}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {inventory.description}
              </Typography>{' '}
              <br />
              <Typography gutterBottom variant='h6' component='p'>
                {inventory.inventoryNum}
              </Typography>
            </CardContent>
            <CardActions>
              {/* {loggedIn && <AdminEditCard />} */}
              {loggedIn && (
                <Button
                  size='small'
                  color='secondary'
                  onClick={() => deleteItem(inventory.id)}
                >
                  Delete
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AdminInventoryCard;
