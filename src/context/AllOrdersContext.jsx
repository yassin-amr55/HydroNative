import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const AllOrdersContext = createContext();

export const AllOrdersProvider = (props) => {
  const { children } = props;
  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchAllOrders = async () => {
      if (!isAuthenticated || !user) {
        setError('User not authenticated');
        setAllOrders([]);
        return;
      }

      try {
        setError(null);
        const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const orders = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAllOrders(orders);
      } catch (err) {
        console.error('Error fetching orders:', err);
        if (err.code === 'permission-denied') {
          setError('Insufficient permissions to access orders');
        } else {
          setError('Failed to load orders');
        }
        setAllOrders([]);
      }
    };

    fetchAllOrders();
  }, [isAuthenticated, user]);

  const refreshOrders = async () => {
    if (!isAuthenticated || !user) {
      setError('User not authenticated');
      setAllOrders([]);
      return;
    }

    try {
      setError(null);
      const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const orders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAllOrders(orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      if (err.code === 'permission-denied') {
        setError('Insufficient permissions to access orders');
      } else {
        setError('Failed to load orders');
      }
      setAllOrders([]);
    }
  };

  return (
    <AllOrdersContext.Provider value={{ allOrders, error, refreshOrders }}>
      {children}
    </AllOrdersContext.Provider>
  );
};

AllOrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAllOrders = () => {
  const context = useContext(AllOrdersContext);
  if (!context) {
    throw new Error('useAllOrders must be used within an AllOrdersProvider');
  }
  return context;
};
