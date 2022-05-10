import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    topContainer:{
        flex:1,
    },
    sectionContainer: {
      marginTop: 50,
      marginHorizontal:10,
      marginBottom:10,
      backgroundColor:'#ffffff'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '700',
      textAlign:'center',
      color:'#d84c5a'
    },
    sectionDescription: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: '400',
      color:'#000000',
      marginHorizontal:10,
      textAlign:'center',
    },
    highlight: {
      fontWeight: '700',
    },
    container:{
        alignContent:'center',
        marginHorizontal:35,
        marginVertical: 20,
        elevation:5,
        flex:1
    },
    scroll:{
    alignSelf: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 180
      }
  });
  
 