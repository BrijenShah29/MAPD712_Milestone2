import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const PatientListScreen = () => {
  const { height } = useWindowDimensions();
  const [patient1, setPatient1] = useState('');
  const [patientId, setPatient1Id] = useState('');
  const [patientDOB, setPatient1DOB] = useState('');
  const [patient2, setPatient2] = useState('');
  const [patient3, setPatient3] = useState('');
  const [patient4, setPatient4] = useState('');
  const [patient5, setPatient5] = useState('');
  const [patient6, setPatient6] = useState('');
  const [patient7, setPatient7] = useState('');
  const [patient8, setPatient8] = useState('');
  const [patient9, setPatient9] = useState('');
  const [patient10, setPatient10] = useState('');

  
  const navigation = useNavigation();

  const onAddPatientPressed = () => {
    console.warn('Add Patient Pressed');
    navigation.navigate('AddPatient');

  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
     navigation.navigate('UserProfile');
  };

  const onPatientProfilePressed = () => {
    console.warn('Patient Profile Pressed');
    navigation.navigate('ViewPatientRecord');
    
  };
  const onlogoutPressed = () => {
    console.warn('logout Pressed');

    navigation.navigate('SignIn');
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Patient List </Text> 
        <Text>{''}</Text>

{/* HEADER FOR LIST OF PATIENTS  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.textRecord,{width: '20%',paddingHorizontal: 0}]}>Patient:</Text>
          <Text style={[styles.textRecord,{width: '25%'}]}>ID No</Text>

          <Text style={[styles.textRecord,{width: '30%'}]}>DOB</Text>
          <Text style={[styles.textRecord,{width: '25%'}]}>Profile</Text>
        </View>

{/* Patient 1 Details   */}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Krishna:'}
            editable={false}/>

          <TextInput style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            value={'PT10'}
           editable={false}/>

          <TextInput
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            value={'10-12-1977'}
             editable={false}/>

          <CustomButton text="Profile" fgColor="#4765A9"
          onPress={onPatientProfilePressed} type="FORTH"/>

        </View>

{/* Patient 2 Details   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Loren:'}
            editable={false}/>

          <TextInput
            value={'PT11'}
            style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            editable={false}/>
            
          <TextInput
            value={'08-19-1945'}
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            editable={false}/>
          <CustomButton
            text="Profile"
            fgColor="#4765A9"
            onPress={onPatientProfilePressed}
            type="FORTH"
          />
        </View>


        {/* Patient 3 Details   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Gary:'}
            editable={false}/>

          <TextInput
            value={'PT12'}
            style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            editable={false}/>
            
          <TextInput
            value={'12-29-1955'}
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            editable={false}/>
          <CustomButton
            text="Profile"
            fgColor="#4765A9"
            onPress={onPatientProfilePressed}
            type="FORTH"
          />
        </View>

        {/* Patient 4 Details   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Steve:'}
            editable={false}/>

          <TextInput
            value={'PT13'}
            style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            editable={false}/>
            
          <TextInput
            value={'01-19-1970'}
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            editable={false}/>
          <CustomButton
            text="Profile"
            fgColor="#4765A9"
            onPress={onPatientProfilePressed}
            type="FORTH"
          />
        </View>


        {/* Patient 6 Details   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Andrew:'}
            editable={false}/>

          <TextInput
            value={'PT14'}
            style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            editable={false}/>
            
          <TextInput
            value={'04-12-1945'}
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            editable={false}/>
          <CustomButton
            text="Profile"
            fgColor="#4765A9"
            onPress={onPatientProfilePressed}
            type="FORTH"
          />
        </View>

 {/* Patient 7 Details   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'Ravi:'}
            editable={false}/>

          <TextInput
            value={'PT15'}
            style={[styles.text,{width:'25%'}]}
            onChangeText={setPatient1Id}
            editable={false}/>
            
          <TextInput
            value={'07-22-1965'}
            style={[styles.text,{width:'30%'}]}
            onChangeText={setPatient1DOB}
            editable={false}/>
          <CustomButton
            text="Profile"
            fgColor="#4765A9"
            onPress={onPatientProfilePressed}
            type="FORTH"
          />
        </View>



        <Text>{''}</Text>

        <CustomButton text="Add Patient" 
        onPress={onAddPatientPressed}/>

        <CustomButton
          text="Edit Profile"
          onPress={userprofilePressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton text="Logout" onPress={onlogoutPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#FFFFFF',
  },
  logo: {
    width: '20%',
    maxWidth: 50,
    maxheight: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    alignContent: 'right',
    marginVertical: 10,
    fontSize: 12,
    alignItems: 'left',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    width: '25%',
  },
  textRecord: {
    alignItems: 'left',
    color: '#051c60',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 14,
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  link: {
    color: '#fd8375',
  },
});
export default PatientListScreen;
