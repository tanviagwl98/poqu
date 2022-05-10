import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { styles } from "./Quotes.styles";
import { Card, Title, Paragraph, Button } from "react-native-paper";

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.sectionContainer}>
          <View>
            <Text style={styles.sectionTitle}>Thoughts with few words, right?</Text>
            <Text style={styles.sectionDescription}>
              If yes, you are in the right section!
            </Text>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.contentContainer}
            >
              <Card style={styles.container}>
                <Card.Content>
                  <Title>Poetry Title</Title>
                </Card.Content>
                <Card.Cover source={require("../../images/poetry.png")} />
                <Card.Content>
                  <Paragraph>
                    Stars are the best part of the silent night!
                  </Paragraph>
                </Card.Content>
                {/* <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions> */}
              </Card>

              <Card style={styles.container}>
                <Card.Content>
                  <Title>Poetry Title</Title>
                </Card.Content>
                <Card.Cover source={require("../../images/poetry.png")} />
                <Card.Content>
                  <Paragraph>
                    Stars are the best part of the silent night!
                  </Paragraph>
                </Card.Content>
                {/* <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions> */}
              </Card>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
