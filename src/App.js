import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet
} from 'react-native';
import BlogList from "./BlogList";
import posts from './posts.json'
import BlogDetailsModal from "./BlogDetailsModal";


const App = () => {

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.flexContainer}>
                <BlogList posts={posts}/>
            </SafeAreaView>
            <BlogDetailsModal
            />
        </>
    )
}

export default App;

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: '#2c2626'
    }
})

