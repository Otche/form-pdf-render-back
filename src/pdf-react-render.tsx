import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const MyDocument = ({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Nom : {firstname}</Text>
      </View>
      <View style={styles.section}>
        <Text>prenom : {lastname} </Text>
      </View>
    </Page>
  </Document>
);

/**{
  fistname,
  lastname,
}: {
  fistname: string;
  lastname: string;
} */
