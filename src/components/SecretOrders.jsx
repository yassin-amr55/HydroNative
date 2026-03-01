import { useAllOrders } from '../context/AllOrdersContext';
import { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import './Orders.css';

const SecretOrders = () => {
  const { allOrders, error, refreshOrders } = useAllOrders();
  const [updatingOrderId, setUpdatingOrderId] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'confirmed': return 'var(--green)';
      case 'shipped': return '#8b5cf6';
      case 'delivered': return '#10b981';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending Confirmation';
      case 'confirmed': return 'Confirmed';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const statusOptions = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

  const updateOrderStatus = async (orderId, newStatus) => {
    setUpdatingOrderId(orderId);
    setUpdateError(null);
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status: newStatus });
      // Refresh the orders list to reflect the updated status
      await refreshOrders();
    } catch (error) {
      setUpdateError(`Failed to update order status: ${error.message}`);
    } finally {
      setUpdatingOrderId(null);
    }
  };

  return (
    <div className="container secret-orders">
      <section className="section">
        <h1 className="section-title">All Orders</h1>

        {error && (
          <div className="orders-error">
            <h3>Error Loading Orders</h3>
            <p>{error}</p>
          </div>
        )}

        {updateError && (
          <div className="orders-error">
            <h3>Error Updating Order</h3>
            <p>{updateError}</p>
          </div>
        )}

        {!error && allOrders.length === 0 && (
          <div className="orders-empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l-1 7H6l-1-7z" />
            </svg>
            <h3>No Orders Yet</h3>
            <p>No orders have been placed yet.</p>
          </div>
        )}

        {!error && allOrders.length > 0 && (
          <div className="orders-list">
            {allOrders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order.id}</h3>
                    <p className="order-date">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p>User ID: {order.userId}</p>
                  </div>
                  <div className="order-status">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      disabled={updatingOrderId === order.id}
                      className="status-select"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {getStatusText(status)}
                        </option>
                      ))}
                    </select>
                    {updatingOrderId === order.id && <span className="updating-text">Updating...</span>}
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map(item => (
                    <div key={item.id} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-details">
                  <div className="delivery-info">
                    <h4>Delivery Address:</h4>
                    <p>{order.shippingAddress.street}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.governorate}</p>
                    {order.shippingAddress.postalCode && (
                      <p>Postal Code: {order.shippingAddress.postalCode}</p>
                    )}
                  </div>

                  <div className="order-summary">
                    <div className="summary-row">
                      <span>Payment Method:</span>
                      <span>Cash on Delivery</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total:</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                    {order.status === 'pending' && (
                      <div className="summary-row">
                        <span>Estimated Delivery:</span>
                        <span>{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                {order.notes && (
                  <div className="order-notes">
                    <h4>Delivery Notes:</h4>
                    <p>{order.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SecretOrders;
