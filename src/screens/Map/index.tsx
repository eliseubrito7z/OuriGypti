import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const map = [{ url: 'https://raw.githubusercontent.com/eliseubrito7z/OuriGypti/master/src/assets/map.png' }];
const { width, height } = Dimensions.get('window');

export default function Map() {
    return (
        <View style={styles.container}>
            <ImageViewer
                style={styles.imageViewer}
                backgroundColor="white"
                imageUrls={map}
                enablePreload={true}
                maxOverflow={1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    imageViewer: {
        flex: 1,
        width,
        height,
    },
});