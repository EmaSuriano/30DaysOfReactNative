import React from 'react';
import { H2, Text, List, ListItem } from 'native-base';

const About = () => (
  <List>
    <ListItem>
      <Text>
        This is an test application that allowed a Developer to code multiple
        applications within sub-applications
      </Text>
    </ListItem>
    <ListItem>
      <H2>Motivation</H2>
    </ListItem>
    <ListItem>
      <Text>
        The idea is simple, inside the HomeScreen you will be able to navigate
        around all the test applications via a Card System.
      </Text>
    </ListItem>
    <ListItem>
      <Text>
        All the examples are located inside the Days Folder, all of them are
        independable!
      </Text>
    </ListItem>
  </List>
);

About.navigationOptions = {
  title: 'About',
};

export default About;
