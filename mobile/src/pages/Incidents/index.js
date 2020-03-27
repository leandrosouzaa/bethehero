import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindx!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <View styles={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>ADAPV</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}> Cadelinha atropelada.</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity
            style={detailsButton}
            onPress={() => { }}

          >
            <Text style={detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="E02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}