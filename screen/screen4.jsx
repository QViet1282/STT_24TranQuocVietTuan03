import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.style1}>

                <Text style={{fontSize:60,fontWeight:'bold'}}>CODE</Text>
            </View>
            <View style={styles.style2}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>VERIFICATION</Text>
            </View>
            <View style={styles.style3}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Enter ontime password sent on </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>++849092605798</Text>
            </View>
            <View style={styles.style4}>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                <TextInput maxLength={1} style={{width:45,height:45,borderColor:'black',borderWidth:1,backgroundColor:'white'}}></TextInput>
                {/* <TextInput style={styles.input} placeholder='  Email'></TextInput> */}
            </View>

            <View style={styles.style5}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'black', fontSize: 15,fontWeight:'bold' }}>VERIFY CODE</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // background: 'transparent',
        backgroundImage: 'linear-gradient(to bottom, #66FFFF, #00CCFF)',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
    },
    style1: {
        height: 200,
        background: 'transparent',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    style2: {

        height: 100,
        background: 'transparent',
        alignItems: 'center',
    },
    style3: {
        height: 60,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style4: {
        height: 60,
        background: 'transparent',
        // backgroundImage: 'linear-gradient(to bottom, #66FFFF, #00CCFF)',
        // backgroundColor: '#BEBEBE',
        alignItems: 'center',
        justifyContent: 'center',
        // alignContent: 'center',
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
    },
    style5: {
        height: 100,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: '#BEBEBE',

    },
    button: {
        backgroundColor: '#FFCC00', // Màu nền của nút
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
