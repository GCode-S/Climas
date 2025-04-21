import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import Constants from "expo-constants";
import API from "../../service/api";
import styles from "./styles";

import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  const [clima, setClima] = useState(null);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [color, setColor] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [loading, setLoading] = useState(false);

  const api_key = Constants.expoConfig.extra.API_KEY;

  const fadeAnim = useRef(new Animated.Value(0)).current; // aqui ira fazer animação de entrada para visualização do clima

  const estados = {
    Clear: { icon: "sun", color: "#FDB813" }, // Amarelo ensolarado
    Clouds: { icon: "cloud", color: "#B0BEC5" }, // Cinza claro
    Rain: { icon: "cloud-rain", color: "#4A90E2" }, // Azul chuva
    Drizzle: { icon: "cloud-drizzle", color: "#76B1E0" }, // Azul claro
    Thunderstorm: { icon: "cloud-lightning", color: "#616161" }, // Cinza escuro
    Snow: { icon: "cloud-snow", color: "#90CAF9" }, // Azul neve
    Mist: { icon: "wind", color: "#CFD8DC" }, // Cinza neblina
    Smoke: { icon: "wind", color: "#757575" }, // Cinza fumaça
    Haze: { icon: "wind", color: "#B0BEC5" }, // Cinza suave
    Dust: { icon: "wind", color: "#D7CCC8" }, // Bege claro
    Fog: { icon: "wind", color: "#B0BEC5" }, // Cinza fosco
    Sand: { icon: "wind", color: "#E0C097" }, // Areia dourada
    Ash: { icon: "wind", color: "#A1887F" }, // Cinza vulcânico
    Squall: { icon: "wind", color: "#78909C" }, // Azul acinzentado
    Tornado: { icon: "wind", color: "#5D4037" }, // Marrom escuro
  };

  const searching = async () => {
    try {
      if (city) {
        setLoading(true);
        const now = new Date();
        const options = {
          weekday: "long",
          day: "2-digit",
          month: "long",
        };
        const date = now.toLocaleDateString("pt-BR", options);
        const time = now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });

        setDateTime(`${date} - ${time}`);

        const response = await API.get(
          `/weather?q=${city},BR&appid=${api_key}&units=metric&lang=pt_br`
        );

        setClima(response.data);
        setIcon(estados[response.data.weather[0].main].icon || "sun");
        setColor(estados[response.data.weather[0].main].color || "sun");
        setLoading(false);
        setMostrar(true);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      } else {
        setMostrar(false);
        setClima([]);
      }
    } catch (error) {
      Alert.alert("Erro ao Buscar dados");
      setLoading(false);
      setMostrar(false);
    }
  };

  return (
    <LinearGradient colors={["#155F8B", "#53ABC8"]} style={styles.container}>
      <LinearGradient colors={["#115D84", "#308BAE"]} style={styles.box}>
        <Text style={styles.title}>
          App ClimaFlash <Feather name="cloud" size={25} color="#6babff" />
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            onSubmitEditing={searching}
            placeholder="Escreva o nome da cidade aqui."
          />
          <TouchableOpacity onPress={() => searching()}>
            <Feather
              style={styles.iconInput}
              name="search"
              size={25}
              color="#16bdff"
            />
          </TouchableOpacity>
        </View>
        {loading && (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        )}
        {mostrar && (
          <Animated.View style={[styles.boxInternal, { opacity: fadeAnim }]}>
            <Feather name={icon} size={70} color={color} />
            <Text style={styles.city}>{clima ? clima.name : "Cidade"}</Text>
            <Text style={styles.datePreview}>{dateTime ? dateTime : ""}</Text>
            <Text style={styles.temp}>
              {clima ? clima.main.temp + " °C" : "°C"}
            </Text>
            <Text style={styles.description}>
              {clima ? clima.weather[0].description : "description"}
            </Text>
            <Text style={styles.info}>
              Umidade: {clima ? clima.main.humidity + "%  " : ""}Sensação:
              {clima ? clima.main.feels_like + " C°  " : ""}
            </Text>
          </Animated.View>
        )}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Feito por GCode-S</Text>
          <Text style={styles.footerText}>GitHub</Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}
