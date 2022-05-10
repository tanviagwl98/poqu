import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    topContainer:{
        flex:1,
    },
    sectionContainer: {
      marginHorizontal:10,
      marginBottom:50,

    },
    sectionTitle: {
      fontSize: 34,
      fontWeight: '700',
      textAlign:'center',
      color:'#ffffff',
      marginTop:20
    },
    sectionDescription: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: '400',
      color:'#ffffff',
      marginHorizontal:10,
      textAlign:'center'
    },
    highlight: {
      fontWeight: '700',
    },
    container:{
        alignContent:'center',
        //marginHorizontal:10,
        marginVertical: 20,
        elevation:3,
        flex:1
    },
    scroll:{
    alignSelf: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
      },
      box:{
        width:'100%',
        height:'100%'
      },
      poetryTitle:{
        color:'white',
        marginVertical:5
      }
  });
  
 