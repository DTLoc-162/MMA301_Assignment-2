import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SectionList from "react-native/Libraries/Lists/SectionList";

const URL ="https://mma301-d4410-default-rtdb.firebaseio.com/menuItemsToDisplay.json";

const MenuItems = () => {
  const [menuItemsToDisplay, setMenuItemsToDisplay] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          setMenuItemsToDisplay(data);
        } else {
          throw new Error("No data found in response");
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError(error.message);
      }
    };

    fetchMenuItems();
  }, []);

  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.sectionHeader}>
      <Text style={menuStyles.sectionHeaderText}>{title}</Text>
    </View>
  );

  if (error) {
    return (
      <View style={menuStyles.container}>
        <Text style={menuStyles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </View>
  );
};

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#9933FF",
    fontSize: 20,
  },
  sectionHeader: {
    backgroundColor: "#CC66FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeaderText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MenuItems;
