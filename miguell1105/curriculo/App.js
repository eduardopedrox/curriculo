import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Currículo: Eduardo Nogueira</Text>
        
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Objetivo</Text>
          <Text style={styles.text}>
            Sou estudante do 3º ano do Ensino Médio na ETEC, no curso de Desenvolvimento de Sistemas, e estou em busca de oportunidades para aplicar meus conhecimentos em programação e desenvolvimento de software em uma empresa.
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <Text style={styles.text}>
            ETEC - Curso Técnico em Desenvolvimento de Sistemas
            {'\n'}Previsão de Conclusão: Dezembro / 2025
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Projetos Acadêmicos</Text>
          <Text style={styles.text}>
            MedCare Senes: Projeto de Conclusão de Curso desenvolvido em grupo.
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text style={styles.text}>
            - Linguagens de Programação: Python, JavaScript{'\n'}
            - Desenvolvimento Web: HTML, CSS, JavaScript{'\n'}
            - Banco de Dados: MySQL{'\n'}
            - Ferramentas: Git, Visual Studio Code
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Cursos e Certificações</Text>
          <Text style={styles.text}>
            - Desenvolvimento de Sistemas - ETEC{'\n'}
            - Programação Web I e II - ETEC{'\n'}
            - Banco de Dados - ETEC{'\n'}
            - Design Digital - ETEC{'\n'}
            - Programação Mobile I e II - ETEC{'\n'}
            - Análise e Programação de Sistemas - ETEC
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Referências</Text>
          <Text style={styles.text}>
            Referências disponíveis a pedido.
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  scrollView: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    textTransform: 'uppercase',
  },
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    letterSpacing: 0.5,
  },
});
