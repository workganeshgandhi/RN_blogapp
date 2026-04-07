import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogItem = ({ post, onPress }) => (
    <TouchableOpacity testID="item" onPress={() => onPress && onPress(post)} style={styles.container}>
        <Image testID="image" source={{ uri: post.image }} style={styles.image} />
        <Text testID="title" style={styles.title}>{post.title}</Text>
        <Text testID="author" style={styles.author}>{post.author}</Text>
        <Text testID="date">{post.created_at}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
    image: { width: '100%', height: 200 },
    title: { fontSize: 18, fontWeight: 'bold' },
    author: { color: 'gray' },
});

export default BlogItem;
