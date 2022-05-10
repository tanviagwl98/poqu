import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { styles } from "./Poetry.styles";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.topContainer}>
        <LinearGradient
          //colors={['#622774', '#ff7676']}
          colors={["#622774", "#c53364"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.box}
        >
          <View style={styles.sectionContainer}>
            <View>
              <Text style={styles.sectionTitle}>Do you love Poetry?</Text>
              <Text style={styles.sectionDescription}>
                If yes, you are in the right section!
              </Text>
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
              >
                  <Card style={styles.container}>
                    <LinearGradient
                      //colors={['#622774', '#ff7676']}
                      colors={["#622774", "#c53364"]}
                      start={{
                        x: 0,
                        y: 0,
                      }}
                      end={{
                        x: 1,
                        y: 1,
                      }}
                      style={styles.box}
                    >
                      <Card.Content>
                        <Title style={styles.poetryTitle}>Poetry Title</Title>
                      </Card.Content>
                      <Card.Cover
                        source={require("../../images/poetry.png")}
                      />
                      <Card.Content>
                        <Paragraph style={styles.poetryTitle}>
                          Stars are the best part of the silent night!
                        </Paragraph>
                      </Card.Content>
                      {/* <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions> */}
                    </LinearGradient>
                  </Card>

                  <Card style={styles.container}>
                  <LinearGradient
                  //colors={['#622774', '#ff7676']}
                  colors={["#622774", "#c53364"]}
                  start={{
                    x: 0,
                    y: 0,
                  }}
                  end={{
                    x: 1,
                    y: 1,
                  }}
                  style={styles.box}
                >
                    <Card.Content>
                      <Title style={styles.poetryTitle}>Poetry Title</Title>
                    </Card.Content>
                    <Card.Cover source={require("../../images/poetry.png")} />
                    <Card.Content>
                      <Paragraph style={styles.poetryTitle}>
                        Stars are the best part of the silent night!
                      </Paragraph>
                    </Card.Content>
                    {/* <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions> */}
        </LinearGradient>
                  </Card>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default Home;
