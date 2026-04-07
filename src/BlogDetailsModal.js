import React from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import BlogItem from './BlogItem';

const BlogDetailsModal = ({ visible, post, onClose }) => (
    <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
            {post && <BlogItem post={post} />}
            <Button testID="close" title="Close" onPress={onClose} />
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, marginTop: 50 },
});

export default BlogDetailsModal;
