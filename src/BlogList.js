import React, { useState } from 'react';
import { FlatList } from 'react-native';
import BlogItem from './BlogItem';
import BlogDetailsModal from './BlogDetailsModal';

const BlogList = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = (post) => {
        setSelectedPost(post);
        setModalVisible(true);
    };

    return (
        <>
            <FlatList
                data={posts}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <BlogItem post={item} onPress={handlePress} />
                )}
            />
            <BlogDetailsModal
                visible={modalVisible}
                post={selectedPost}
                onClose={() => setModalVisible(false)}
            />
        </>
    );
};

export default BlogList;
