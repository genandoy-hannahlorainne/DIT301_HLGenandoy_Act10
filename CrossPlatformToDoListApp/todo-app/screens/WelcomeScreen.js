import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ac9ace" />
      
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.headerContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✓</Text>
          </View>
          
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.appName}>TaskMaster</Text>
          <Text style={styles.subtitle}>
            Your personal productivity companion
          </Text>
        </Animated.View>

        <Animated.View 
          style={[
            styles.featuresContainer,
            { opacity: fadeAnim },
          ]}
        >
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📝</Text>
            <Text style={styles.featureText}>Create & manage tasks easily</Text>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureText}>Stay organized and focused</Text>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureText}>Boost your productivity</Text>
          </View>
        </Animated.View>

        <Animated.View 
          style={[
            styles.buttonContainer,
            { opacity: fadeAnim },
          ]}
        >
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('TodoList')}
            activeOpacity={0.8}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
          
          <Text style={styles.footerText}>
            Let's make today productive!
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ac9ace',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.04,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : height * 0.05,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  iconContainer: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  icon: {
    fontSize: width * 0.12,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: width * 0.06,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: height * 0.01,
  },
  appName: {
    fontSize: width * 0.105,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: height * 0.015,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.04,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    paddingHorizontal: width * 0.05,
    lineHeight: width * 0.055,
  },
  featuresContainer: {
    marginVertical: height * 0.02,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: width * 0.04,
    borderRadius: 12,
    marginBottom: height * 0.015,
  },
  featureIcon: {
    fontSize: width * 0.07,
    marginRight: width * 0.04,
  },
  featureText: {
    fontSize: width * 0.04,
    color: '#fff',
    flex: 1,
    lineHeight: width * 0.055,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  getStartedButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    width: '100%',
    minHeight: 50,
  },
  getStartedText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#ac9ace',
    marginRight: width * 0.02,
  },
  arrow: {
    fontSize: width * 0.05,
    color: '#ac9ace',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: height * 0.02,
    fontSize: width * 0.035,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});
