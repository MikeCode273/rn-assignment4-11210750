import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const featuredJobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "Google",
    salary: "$160,000",
    location: "California, US",
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
  },
];

const popularJobs = [
  {
    id: "1",
    title: "Jr Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, US",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
  },
];

const renderFeaturedJob = ({ item }) => (
  <LinearGradient
    colors={["#6E8DFF", "#C3D9FF"]}
    style={styles.featuredJobCard}
  >
    <Text style={styles.featuredJobTitle}>{item.title}</Text>
    <Text style={styles.featuredJobCompany}>{item.company}</Text>
    <Text style={styles.featuredJobSalary}>{item.salary}</Text>
    <Text style={styles.featuredJobLocation}>{item.location}</Text>
  </LinearGradient>
);

const renderPopularJob = ({ item }) => (
  <View style={styles.popularJobCard}>
    <Text style={styles.popularJobTitle}>{item.title}</Text>
    <Text style={styles.popularJobCompany}>{item.company}</Text>
    <Text style={styles.popularJobSalary}>{item.salary}</Text>
    <Text style={styles.popularJobLocation}>{item.location}</Text>
  </View>
);

const HomeScreen = ({ route }) => {
  const { email, name } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Welcome,{name}</Text>
          <Text style={styles.userEmail}>Email: {email}</Text>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="ios-search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.sectionSeeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={renderFeaturedJob}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.sectionSeeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularJobs}
        renderItem={renderPopularJob}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  searchIcon: {
    marginLeft: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionSeeAll: {
    fontSize: 14,
    color: "#007bff",
  },
  horizontalList: {
    marginBottom: 20,
  },
  featuredJobCard: {
    width: 250,
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  featuredJobCompany: {
    fontSize: 14,
    color: "#fff",
  },
  featuredJobSalary: {
    fontSize: 14,
    color: "#fff",
  },
  featuredJobLocation: {
    fontSize: 14,
    color: "#fff",
  },
  popularJobCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  popularJobCompany: {
    fontSize: 14,
    color: "#666",
  },
  popularJobSalary: {
    fontSize: 14,
    color: "#333",
  },
  popularJobLocation: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
