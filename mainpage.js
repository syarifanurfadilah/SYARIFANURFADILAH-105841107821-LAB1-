import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Impor gambar latar belakang
import backgroundImage from './assets/sendalbanyak.jpg';

// Impor gambar lainnya
import image1 from './assets/sendalbanyak.jpg';
import image2 from './assets/sendalcoklat.jpg';
import image3 from './assets/sendalhitam.jpg';
import image4 from './assets/sendalputih.jpg';
import image5 from './assets/sepatuabu2.jpg';
import image6 from './assets/sepatubiru.jpg';
import image7 from './assets/sepatucoklat.jpeg';
import image8 from './assets/sepatuhitam.jpg';
import image9 from './assets/sepatupink.jpg';
import image10 from './assets/sepatuputih.jpg';

// Anda bisa menghapus komentar untuk impor Navbar ketika sudah diimplementasikan
// import Navbar from './components/Navbar';

const { height } = Dimensions.get('window');

const imageData = [
    { id: '1', uri: image1 },
    { id: '2', uri: image2 },
    { id: '3', uri: image3 },
    { id: '4', uri: image4 },
    { id: '5', uri: image5 },
    { id: '6', uri: image6 },
    { id: '7', uri: image7 },
    { id: '8', uri: image8 },
    { id: '9', uri: image9 },
    { id: '10', uri: image10 },
];

function MainPage({ navigation }) {
    const [loaded] = useFonts({
        'Metropolis-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return <View><Text>Loading...</Text></View>; // Menampilkan loading sementara
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={backgroundImage} style={[styles.image, { height: height * 0.5 }]}>
                <View style={styles.overlay}>
                    <View style={styles.bottomLeft}>
                        <Text style={styles.Fashion}>Fashion Hits</Text>
                        <Text style={styles.Sale}>Sale</Text>
                        <Button 
                            title="Check" 
                            onPress={() => navigation.navigate('NextPage')} 
                            color="#FF0000" 
                        />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.newSection}>
                <View style={styles.headerRow}>
                    <Text style={styles.newTitle}>New</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                        <Text style={styles.viewAll}>View all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.newSubtitle}>You've never seen it before!</Text>
                <FlatList
                    data={imageData}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                            <View style={styles.imageContainer}>
                                <Image source={item.uri} style={styles.sliderImage} resizeMode="cover" />
                                <View style={styles.overlayText}>
                                    <Text style={styles.itemTitle}>New</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.navbarContainer}>
                {/* <Navbar style={styles.navbar} /> */}
                <Text style={styles.navbar}>Navbar Placeholder</Text> {/* Placeholder untuk Navbar */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        width: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    Fashion: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
    },
    Sale: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -10,
        fontFamily: 'Metropolis-SemiBold',
        marginBottom: 10,
    },
    newSection: {
        paddingVertical: 20,
        backgroundColor: 'white',
        width: '100%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    newTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Metropolis-SemiBold',
    },
    viewAll: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
    },
    newSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    imageContainer: {
        width: 150,
        height: 200,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        borderRadius: 5,
    },
    itemTitle: {
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 14,
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        padding: 10,
        alignItems: 'center',
    },
    navbar: {
        fontSize: 18,
        fontFamily: 'Metropolis-SemiBold',
    },
});

export default MainPage;