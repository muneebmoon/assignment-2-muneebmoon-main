import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Text style={styles.profileTitle}>My Profile</Text>
        <Image 
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/settings.png' }} 
          style={styles.settingsIcon}
        />
      </View>
      
      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Muneeb Ahmed</Text>
        <View style={styles.userStats}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>14.850</Text>
            <Text style={styles.statLabel}>Product Sells</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>R.S 1800</Text>
            <Text style={styles.statLabel}>Earning</Text>
          </View>
        </View>
      </View>

      {/* Recent Orders */}
      <Text style={styles.recentOrdersTitle}>Recent Orders</Text>
      <View style={styles.orderList}>
        {orderData.map((order, index) => (
          <View key={index} style={styles.orderCard}>
            <Image source={{ uri: order.image }} style={styles.orderImage} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderTitle}>{order.title}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>
            <Text style={styles.orderPrice}>{order.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Sample data for orders
const orderData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV1RVOmJGwrWjio1p4M40W-ijLmZiVS0Swg&s',
    title: 'French Fries',
    date: '21, Thu 10:00',
    price: 'R.S 500',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkrQJD5kWtJmYQjURG_zlDC_GqWLMSAzsSA&s',
    title: 'Icecream',
    date: '15, Fri 18:00',
    price: 'R.S 700',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59siP2RQ0_tArSBYwc9qZeOP9ctZg67Hg1w&s',
    title: 'Beef Burger',
    date: '11, Mon 10:00',
    price: 'R.S 300',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  userInfo: {
    backgroundColor: '#FFE4C4',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStats: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  statBox: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  recentOrdersTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderList: {
    marginTop: 10,
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  orderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 12,
    color: '#777',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

