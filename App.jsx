import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "./assets/icon2.png"; 

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to B7arna</Text>
      <Button
        title="I'm a Fisher"
        onPress={() => navigation.navigate("FisherScreen")}
      />
      <View style={{ height: 10 }} />
      <Button
        title="I'm a Buyer"
        onPress={() => navigation.navigate("BuyerScreen")}
      />
    </View>
  );
}

function FisherScreen({ navigation }) {
  const [fishName, setFishName] = useState("");
  const [price, setPrice] = useState("");
  const [catchList, setCatchList] = useState([]);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      const selectedImageUri = result.assets?.[0]?.uri || result.uri;
      setImage(selectedImageUri);
    }
  };

  const addCatch = () => {
    if (fishName && price) {
      setCatchList([
        ...catchList,
        {
          id: Date.now().toString(),
          fishName,
          price,
          date: new Date().toLocaleString(),
          image,
        },
      ]);
      setFishName("");
      setPrice("");
      setImage(null);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Add Today's Catch</Text>

        <TextInput
          placeholder="Fish Name"
          value={fishName}
          onChangeText={setFishName}
          style={styles.input}
        />
        <TextInput
          placeholder="Price (TND/1Kg)"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button title="Choose Photo" onPress={pickImage} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 150,
              height: 150,
              marginTop: 10,
              borderRadius: 8,
              resizeMode: "cover",
            }}
          />
        )}

        <Button
          title="Add Catch"
          onPress={addCatch}
          style={{ marginTop: 10 }}
        />

        <Text style={styles.subtitle}>Today's Catch List</Text>
        {catchList.map((item) => (
          <TouchableOpacity key={item.id} style={styles.catchItem}>
            {item.image && (
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
            )}
            <Text style={styles.catchName}>{item.fishName}</Text>
            <Text>Price: {item.price} TND/1Kg</Text>
            <Text>Date: {item.date}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.subtitle}>AI Assistant for Fishers</Text>
        <Text style={{ marginBottom: 10 }}>
          Get help with fishing tips, market prices, and more.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title="AI Assistant for Fisher"
            onPress={() => navigation.navigate("FisherAIHelperScreen")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function BuyerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buyer Panel</Text>
      <Text style={styles.subtitle}>
        This functionality is not implemented yet.
      </Text>
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
  
}

function FisherAIHelperScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>AI Assistant for Fishers</Text>
        <Text style={styles.subtitle}>
          Recommended To fish: Bouri 🐟.{"\n"}
          Price: 15 TND/1Kg.{"\n"}
          Best time to catch: Early morning or late afternoon.
        </Text>
        <Text style={styles.notice}>Buyers are looking for it!</Text>
      </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="FisherScreen"
          component={FisherScreen}
          options={{ title: "Fisher Panel" }}
        />
        <Stack.Screen
          name="BuyerScreen"
          component={BuyerScreen}
          options={{ title: "Buyer Panel" }}
        />
        <Stack.Screen
          name="FisherAIHelperScreen"
          component={FisherAIHelperScreen}
          options={{ title: "AI Assistant for Fishers" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0077be", // sea blue
    padding: 20,
  },

  card: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#008ecc", // optional inner background
    width: "100%",
    maxWidth: 350,
  },

  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },

  notice: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 10,
  },

  buttonContainer: {
    width: "80%",
    marginVertical: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 20,
  },
  catchItem: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#e0f7fa",
  },
  catchName: {
    fontSize: 18,
  },
});
