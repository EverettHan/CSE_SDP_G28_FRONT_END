import React, {Component} from 'react';
import {Button, Upload, message, Input} from "antd";
import bg from '../assets/bg.jpg';
import styles from './index.module.css';
import ClassificationForm from "../forms/classificationForm";
import GetResultsForm from "../forms/getResultsForm";

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt = file.size > 100 * 1024;
  if (!isLt) {
    message.error('image does not have enough information to be classified!');
  }
  return isJpgOrPng && isLt;
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true, img: '', id: ''}
  }


  render() {
    return (
      <div>
        <div className={styles.wrap}>
          <img src={bg} style={{width: '100%'}}/>

          <h2>Team 28 covid-19 self test system</h2>
          <ClassificationForm/><br></br>
          <GetResultsForm/>
          {this.state.img&&<img style={{marginTop:16}} src={this.state.img}/>}
        </div>

      </div>
    )
  }
}
